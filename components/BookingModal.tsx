import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";


interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: 'uz' | 'ru' | 'en';
}

export function BookingModal(props: BookingModalProps) {
  const { open, onOpenChange, language } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successAnim, setSuccessAnim] = useState(false);

  // Modal ochilganda inputlarni va submitted state'ni tozalash
  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setSubmitted(false);
      setSuccessAnim(false);
      setLoading(false);
    }
  }, [open]);

    const texts: Record<'uz' | 'ru' | 'en', { title: string; desc: string; name: string; phone: string; send: string; success: string }> = {
      uz: {
        title: "So‘rov yuborish",
        desc: "Telefon raqamingizni qoldiring — sizga tez orada qo‘ng‘iroq qilamiz.",
        name: "Ismingiz",
        phone: "Telefon raqami",
        send: "Yuborish",
        success: "So‘rovingiz qabul qilindi! Tez orada siz bilan bog‘lanamiz."
      },
      ru: {
        title: "Отправить заявку",
        desc: "Оставьте свой номер — мы перезвоним вам в ближайшее время.",
        name: "Ваше имя",
        phone: "Телефон",
        send: "Отправить",
        success: "Ваша заявка принята! Мы скоро свяжемся с вами."
      },
      en: {
        title: "Send request",
        desc: "Leave your phone number — we will call you back soon.",
        name: "Your name",
        phone: "Phone number",
        send: "Send",
        success: "Your request has been received! We will contact you soon."
      }
    };
    const t = texts[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Google Sheets API endpoint (Apps Script yoki boshqa backend orqali)
    const date = new Date().toLocaleString();
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          date
        })
      });
    } catch (e) {
      // Xatolik bo'lsa ham success ko'rsatamiz (yoki xatolikni alohida ko'rsatish mumkin)
    }
    setLoading(false);
    setSubmitted(true);
    setSuccessAnim(true);
    setTimeout(() => {
      setSuccessAnim(false);
      setTimeout(() => {
        onOpenChange(false);
        setSubmitted(false);
      }, 350); // animatsiya tugagach modal yopiladi va state tozalanadi
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full border border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-1 text-gray-900">{t.title}</DialogTitle>
          <DialogDescription className="mb-4 text-gray-600">
            {t.desc}
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div
            className={`py-8 text-center text-green-600 font-semibold text-lg transition-all duration-300 ${successAnim ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          >
            {t.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder={t.name}
              value={name}
              onChange={e => setName(e.target.value)}
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-gray-50"
            />
            <Input
              placeholder={t.phone}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              type="tel"
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-gray-50"
            />
            <DialogFooter>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all text-base flex items-center justify-center gap-2 disabled:opacity-60" disabled={loading}>
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    {t.send}
                  </span>
                ) : t.send}
              </Button>
            </DialogFooter>
          </form>
        )}
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}

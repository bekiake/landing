import { Phone, MessageCircle, Send } from 'lucide-react';

interface MobileBottomBarProps {
  language: 'uz' | 'ru' | 'en';
}

const translations = {
  uz: {
    call: 'Qo\'ng\'iroq',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram'
  },
  ru: {
    call: 'Звонок',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram'
  },
  en: {
    call: 'Call',
    whatsapp: 'WhatsApp',
    telegram: 'Telegram'
  }
};

export function MobileBottomBar({ language }: MobileBottomBarProps) {
  const t = translations[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="grid grid-cols-3 gap-2 p-2">
        <a
          href="tel:+998901234567"
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <Phone className="w-5 h-5 text-blue-700" />
          <span className="text-xs text-gray-700">{t.call}</span>
        </a>
        <a
          href="https://t.me/airticket_uz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <Send className="w-5 h-5 text-blue-500" />
          <span className="text-xs text-gray-700">{t.telegram}</span>
        </a>
      </div>
    </div>
  );
}

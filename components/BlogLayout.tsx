import Link from 'next/link';
import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-white to-emerald-50">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-900 hover:text-blue-700">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-800 text-white text-lg">
              ✈
            </span>
            <span className="text-lg font-semibold">airtickett.uz</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="/blog" className="text-gray-600 hover:text-blue-700">Barcha maqolalar</Link>
            <Link href="/" className="text-gray-600 hover:text-blue-700">Bosh sahifa</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {children}
      </main>

      <footer className="border-t border-gray-100 bg-white/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} airtickett.uz. Barcha huquqlar himoyalangan.</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-blue-700">Bosh sahifa</Link>
            <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

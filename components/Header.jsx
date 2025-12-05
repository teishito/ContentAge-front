import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-BG)] border-b border-[var(--color-BDB)] shadow-sm">
      {/* 上部グラデーションライン */}
      <div className="h-1 w-full bg-[var(--color-BGKEY)]">
        <div className="h-full w-full bg-[var(--color-GradLG)]" />
      </div>

      <div className="relative max-w-6xl mx-auto flex items-center justify-center px-4 md:px-6 py-6">
        {/* ロゴ（中央・大きめ） */}
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/ContentAge.png"
            alt="ContentAge"
            width={720}      // 元画像の解像度に近めでOK
            height={144}
            className="w-[260px] md:w-[360px] lg:w-[420px] h-auto"
            priority
          />
        </Link>

        {/* ハンバーガーメニュー（右上） */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="メニュー"
          className="absolute right-4 md:right-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-BDB)]/40 bg-[var(--color-W)] hover:bg-[var(--color-BGKEY)]/40 transition"
        >
          <span className="sr-only">メニュー</span>
          <div className="space-y-[5px]">
            <span className="block h-[2px] w-4 bg-[var(--color-B)]" />
            <span className="block h-[2px] w-4 bg-[var(--color-B)]" />
            <span className="block h-[2px] w-4 bg-[var(--color-B)]" />
          </div>
        </button>

        {/* ドロップダウンメニュー */}
        {open && (
          <nav className="absolute right-4 md:right-6 top-full mt-2 w-52 rounded-lg border border-[var(--color-BDB)]/20 bg-[var(--color-W)] shadow-lg text-sm overflow-hidden">
            <Link
              href="/instagram-post"
              className="block px-4 py-3 hover:bg-[var(--color-BGKEY)]/40 text-[var(--color-B)]"
              onClick={() => setOpen(false)}
            >
              Instagram投稿取得
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

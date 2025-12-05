import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#222222]">
      {/* 上部グラデーションライン（本サイト風） */}
      <div className="h-1 w-full bg-[var(--color-BGKEY)]">
        <div className="h-full w-full bg-[var(--color-GradLG)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 pb-3">
        {/* グレーの角丸バー */}
        <div className="flex items-center justify-between rounded-2xl bg-[#666666] px-4 md:px-6 py-3 shadow-sm">
          {/* ロゴ（左） */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ContentAge.png"
              alt="ContentAge"
              width={720}
              height={144}
              className="w-[200px] md:w-[260px] lg:w-[300px] h-auto"
              priority
            />
          </Link>

          {/* ハンバーガーメニュー（右端の白いボックス） */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="メニュー"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm hover:bg-gray-100 transition"
          >
            <span className="sr-only">メニュー</span>
            <div className="space-y-[4px]">
              <span className="block h-[2px] w-4 bg-black" />
              <span className="block h-[2px] w-4 bg-black" />
            </div>
          </button>
        </div>

        {/* ドロップダウンメニュー */}
        {open && (
          <nav className="mt-2 w-52 ml-auto rounded-lg border border-[var(--color-BDB)]/20 bg-[var(--color-W)] shadow-lg text-sm overflow-hidden">
            <Link
              href="/instagram-post"
              className="block px-4 py-3 hover:bg-[var(--color-BGKEY)]/40 text-[var(--color-B)]"
              onClick={() => setOpen(false)}
            >
              Instagram投稿データ取得
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

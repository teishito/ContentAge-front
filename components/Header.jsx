import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-BG)] border-b border-[var(--color-BDB)] shadow-sm">
      {/* 上部グラデーションライン */}
      <div className="h-1 w-full bg-[var(--color-BGKEY)]">
        <div className="h-full w-full bg-[var(--color-GradLG)]" />
      </div>

      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ContentAge.png" // ロゴパスを環境に合わせて変更
            alt="ContentAge"
            width={170}
            height={32}
            priority
          />
        </Link>

        {/* 右側メニュー（必要に応じて増やせる） */}
        <nav className="hidden md:flex items-center gap-6 text-sm tracking-wide">
          <Link
            href="/instagram-post"
            className="text-[var(--color-B)] hover:text-[var(--color-RED)] transition-colors"
          >
            Instagram投稿取得
          </Link>
        </nav>
      </div>
    </header>
  );
}

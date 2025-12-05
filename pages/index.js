// pages/index.js
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-BG)] flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* ヘッダーの高さぶん余白を空ける */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 pt-28 pb-16">
          {/* 見出しエリア（Companyページのイメージ） */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-B)]">
              Zero Project
            </h1>
            <p className="mt-2 text-sm md:text-base text-[var(--color-G)]">
              ゼロプロジェクト ツール一覧 / Zero Project Tools
            </p>

            {/* 下線代わりの薄いボーダー（好みで） */}
            <div className="mt-6 border-b border-[var(--color-BDB)]/10" />
          </div>

          {/* ツール一覧（アコーディオン風のカード） */}
          <div className="space-y-3">
            <Link href="/instagram-post" className="block">
              <div className="flex items-center justify-between rounded-xl bg-[#f5f5f5] px-4 md:px-6 py-4 hover:bg-[#ebebeb] transition">
                <div>
                  <p className="text-sm md:text-base font-semibold text-[var(--color-B)]">
                    Instagramキャンペーン投稿取得ツール
                  </p>
                  <p className="text-xs md:text-sm text-[var(--color-G)]">
                    Instagram Campaign Post Fetcher
                  </p>
                </div>
                <span className="text-xs md:text-sm text-[var(--color-G)]">
                  OPEN
                </span>
              </div>
            </Link>

            {/* 将来ツールが増えたらここに追加 */}
            {/* 
            <Link href="/xxx" className="block">
              <div className="flex items-center justify-between rounded-xl bg-[#f5f5f5] px-4 md:px-6 py-4 hover:bg-[#ebebeb] transition">
                <div>
                  <p className="text-sm md:text-base font-semibold text-[var(--color-B)]">
                    （別ツール名）日本語
                  </p>
                  <p className="text-xs md:text-sm text-[var(--color-G)]">
                    English Name of Tool
                  </p>
                </div>
                <span className="text-xs md:text-sm text-[var(--color-G)]">
                  OPEN
                </span>
              </div>
            </Link>
            */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

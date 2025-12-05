import { useState } from "react";

export default function InstagramPost() {
  const [postUrl, setPostUrl] = useState("");
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const API_URL =
    "https://contentage-back.azurewebsites.net/api/fetch-instagram-post";

  const fetchPostData = async () => {
    setLoading(true);
    setErrorMsg("");
    setPostData(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: postUrl }),
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      setPostData(data);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        err instanceof Error ? err.message : "投稿取得に失敗しました"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(postData.media_url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "instagram_post.jpg";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("画像のダウンロードに失敗しました。");
      console.error(err);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-32 mb-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-B)] mb-2">
          Instagram投稿データ取得
        </h2>
        <p className="text-sm text-[var(--color-G)]">
          取得したいInstagram投稿のURLを入力すると、投稿内容・いいね数・コメント数を確認し、画像をダウンロードできます。
        </p>
      </div>

      <div className="bg-[var(--color-W)] border border-[var(--color-BDB)]/20 rounded-xl shadow-sm p-6 md:p-8 space-y-6">
        {/* 入力フォーム */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <input
            type="text"
            value={postUrl}
            onChange={(e) => setPostUrl(e.target.value)}
            placeholder="Instagramの投稿URLを入力"
            className="flex-1 border border-[var(--color-BDB)]/40 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-RED)] focus:border-[var(--color-RED)] transition"
          />
          <button
            onClick={fetchPostData}
            disabled={loading || !postUrl}
            className="whitespace-nowrap bg-[var(--color-B)] text-[var(--color-W)] text-sm font-semibold px-5 py-2 rounded-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-DG)] transition"
          >
            {loading ? "取得中..." : "投稿情報を取得"}
          </button>
        </div>

        {errorMsg && (
          <p className="text-sm text-[var(--color-ERR)] bg-red-50 border border-red-200 px-4 py-2 rounded-md">
            {errorMsg}
          </p>
        )}

        {postData && (
          <div className="space-y-6 border-t border-[var(--color-BDB)]/10 pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img
                  src={postData.media_url}
                  alt="投稿画像"
                  className="w-full rounded-lg shadow-sm border border-[var(--color-BDB)]/10"
                />
                <div className="mt-3 flex justify-center">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 text-xs md:text-sm bg-[var(--color-B)] text-[var(--color-W)] px-4 py-2 rounded-md hover:bg-[var(--color-DG)] transition"
                  >
                    <span>📥</span>
                    <span>画像をダウンロード</span>
                  </button>
                </div>
              </div>

              <div className="md:w-1/2 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-BDB)] mb-1">
                    投稿内容
                  </h3>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-B)]">
                    {postData.caption}
                  </p>
                </div>

                <div className="flex gap-6 text-xs text-[var(--color-G)]">
                  <p>❤️ いいね数: {postData.likes}</p>
                  <p>💬 コメント数: {postData.comments}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

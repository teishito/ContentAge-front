import { useState } from "react";

export default function CampaignDetail() {
  const [postUrl, setPostUrl] = useState("");
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // バックエンドAPI
  const API_URL = "https://contentage-back.azurewebsites.net/api/fetch-instagram-post";

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
      setErrorMsg(err.message || "投稿取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  // 画像ダウンロード関数
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
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-24 mb-24">
      <h2 className="text-3xl font-bold text-[#5B7F6F] mb-6 text-center">
        キャンペーン投稿の詳細
      </h2>

      {/* 入力フォーム */}
      <div className="flex flex-col gap-3 mb-8">
        <input
          type="text"
          value={postUrl}
          onChange={(e) => setPostUrl(e.target.value)}
          placeholder="Instagramの投稿URLを入力"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5B7F6F] outline-none"
        />
        <button
          onClick={fetchPostData}
          disabled={loading}
          className="bg-[#5B7F6F] hover:bg-[#4a6a5d] text-white font-semibold py-2 px-5 rounded-lg transition"
        >
          {loading ? "取得中..." : "投稿情報を取得"}
        </button>
      </div>

      {errorMsg && (
        <p className="text-red-600 bg-red-50 border border-red-200 p-3 rounded mb-4">
          {errorMsg}
        </p>
      )}

      {postData && (
        <div className="space-y-6">
          <img
            src={postData.media_url}
            alt="投稿画像"
            className="w-full rounded-lg shadow-md"
          />

          {/* 📥 ダウンロードボタン */}
          <div className="text-center">
            <button
              onClick={handleDownload}
              className="mt-3 bg-[#5B7F6F] text-white px-5 py-2 rounded-md shadow hover:bg-[#4a6a5d] transition"
            >
              📥 画像をダウンロード
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#333] mb-1">投稿内容</h3>
            <p className="whitespace-pre-wrap text-gray-700">{postData.caption}</p>
          </div>

          <div className="text-sm text-gray-600 flex gap-6">
            <p>❤️ いいね数: {postData.likes}</p>
            <p>💬 コメント数: {postData.comments}</p>
          </div>
        </div>
      )}
    </div>
  );
}

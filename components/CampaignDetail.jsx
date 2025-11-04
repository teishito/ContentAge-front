import { useState } from "react";

export default function CampaignDetail() {
  const [postUrl, setPostUrl] = useState("");
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchPostData = async () => {
    setLoading(true);
    setErrorMsg("");
    setPostData(null);

    try {
      const res = await fetch("https://contentage-back.azurewebsites.net/api/fetch-instagram-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: postUrl }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`取得失敗: ${errorText}`);
      }

      const data = await res.json();
      setPostData(data);
    } catch (error) {
      console.error("エラー:", error);
      setErrorMsg(error.message || "投稿取得に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-12 mb-24 rounded shadow">
      <h2 className="text-2xl font-bold text-[#5B7F6F] mb-4">キャンペーン投稿の詳細</h2>
      
      <div className="flex flex-col gap-3 mb-4">
        <input
          type="text"
          value={postUrl}
          onChange={(e) => setPostUrl(e.target.value)}
          placeholder="Instagramの投稿URLを入力"
          className="border rounded px-3 py-2 w-full"
        />
        <button
          onClick={fetchPostData}
          className="bg-[#5B7F6F] text-white px-4 py-2 rounded hover:bg-indigo-700"
          disabled={loading}
        >
          {loading ? "取得中..." : "投稿情報を取得"}
        </button>
      </div>

      {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}

      {postData && (
        <div className="space-y-4">
          <img src={postData.image_url} alt="投稿画像" className="w-full rounded shadow" />
          <div>
            <h3 className="text-lg font-semibold">投稿内容</h3>
            <p className="whitespace-pre-wrap text-gray-800">{postData.caption}</p>
          </div>
          <div className="text-sm text-gray-600">
            <p>❤️ いいね数: {postData.likes}</p>
            <p>💬 コメント数: {postData.comments}</p>
          </div>
        </div>
      )}
    </div>
  );
}

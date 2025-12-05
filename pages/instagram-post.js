import Header from "../components/Header";
import Footer from "../components/Footer";
import InstagramPost from "../components/InstagramPost";

export default function InstagramPostPage() {
  return (
    <div className="min-h-screen bg-[var(--color-BG)] flex flex-col">
      <Header />
      <main className="flex-grow">
        <InstagramPost />
      </main>
      <Footer />
    </div>
  );
}

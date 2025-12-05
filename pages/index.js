// pages/index.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import IndexContent from "../components/Index";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-BG)] flex flex-col">
      <Header />
      <main className="flex-grow">
        <IndexContent />
      </main>
      <Footer />
    </div>
  );
}

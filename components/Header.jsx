import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/">
          <h1 className="text-[#5B7F6F] font-extrabold text-2xl tracking-tight hover:opacity-80 transition-opacity">
            ContentAge
          </h1>
        </Link>
      </div>
    </header>
  );
}

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Cookie削除などがあればここに追加
    setMenuOpen(false);
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#5B7F6F] text-white py-4 z-50 shadow-md">
      <div className="flex justify-between items-center px-6">
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer" aria-label="Home">
            ContentAge
          </h1>
        </Link>
    
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>
    </header>
  );
}

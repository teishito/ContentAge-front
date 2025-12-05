const Footer = () => {
  return (
    <footer className="w-full bg-[#222222] text-[var(--color-G)]">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 text-xs md:text-sm">
        <nav className="space-y-2 mb-4">
          <a
            href="https://contentage.co.jp/ad-quality/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[var(--color-W)] transition-colors"
          >
            Initiatives for Advertising quality
          </a>
          <a
            href="https://contentage.co.jp/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[var(--color-W)] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://contentage.co.jp/security/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[var(--color-W)] transition-colors"
          >
            Information Securitypolicy
          </a>
        </nav>

        <p className="text-[10px] md:text-xs text-[var(--color-G)]">
          ©ContentAge Inc. all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "The House", href: "/the-house" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 border-b"
      style={{
        backgroundColor: "rgba(251, 249, 245, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor: "rgba(196, 199, 199, 0.35)",
      }}
    >
      <div className="h-full max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Left — nav (desktop) / menu toggle (mobile) */}
        <nav className="hidden md:flex items-center gap-8 justify-self-start">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-label-sm transition-colors duration-300 whitespace-nowrap"
                style={{
                  color: active ? "#000" : "#444748",
                  borderBottom: active ? "1px solid #000" : "1px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden justify-self-start p-2 -ml-2"
          style={{ background: "transparent", border: 0, cursor: "pointer" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#000" }}>
            {open ? "close" : "menu"}
          </span>
        </button>

        {/* Center — brand wordmark */}
        <Link
          href="/"
          className="text-center"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <span
            className="font-garamond block"
            style={{
              fontSize: "clamp(16px, 2.2vw, 20px)",
              fontWeight: 400,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Franco Masoma
          </span>
          <span
            className="hidden sm:block"
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: "9px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              opacity: 0.55,
              marginTop: 2,
            }}
          >
            Sumisura
          </span>
        </Link>

        {/* Right — CTA */}
        <div className="justify-self-end">
          <Link
            href="#reserve"
            className="fm-btn hidden md:inline-flex"
            style={{ padding: "10px 22px", fontSize: 11 }}
          >
            Reserve
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "rgba(251, 249, 245, 0.98)",
            borderColor: "rgba(196, 199, 199, 0.35)",
          }}
        >
          <nav className="flex flex-col py-4 px-6 gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-label-sm py-3"
                  style={{ color: active ? "#000" : "#444748" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="#reserve"
              onClick={() => setOpen(false)}
              className="fm-btn mt-2"
            >
              Reserve Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-beige/60 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl tracking-wide text-charcoal transition-colors group-hover:text-sage-dark md:text-2xl">
            {siteConfig.name}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.15em] text-text-muted sm:block">
            {siteConfig.title}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm tracking-wide transition-colors hover:text-sage-dark",
                pathname === item.href
                  ? "text-sage-dark font-medium"
                  : "text-text-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Book Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-beige text-charcoal lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-beige bg-ivory px-6 py-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "py-2 text-base tracking-wide transition-colors",
                  pathname === item.href
                    ? "text-sage-dark font-medium"
                    : "text-text-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full">
              Book Consultation
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-sage-dark focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}

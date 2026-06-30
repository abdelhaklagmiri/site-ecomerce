import { BrandLogo } from "@/components/layout/brand-logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 valon-grid opacity-40" />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full valon-gradient blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full valon-gradient blur-3xl" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="mb-8">
          <BrandLogo showTagline />
        </div>
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}

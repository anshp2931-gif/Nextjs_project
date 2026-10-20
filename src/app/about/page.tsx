import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full max-w-2xl mx-auto py-8 animate-in">
      <Link href="/" className="link-glow inline-flex items-center gap-1.5 text-sm mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to students</span>
      </Link>
      <div className="glass-surface p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold gradient-text flex items-center gap-2">
          <Info className="w-5 h-5 text-accent-400" />
          About Campus Directory
        </h1>
        <p className="mt-4 text-sm text-dark-300 leading-relaxed">
          Campus Directory is an academic exploration portal for viewing enrolled students, faculty departments, and specialized tracks.
          Built with Next.js and designed with a premium glassmorphic dark interface.
        </p>
      </div>
    </div>
  );
}

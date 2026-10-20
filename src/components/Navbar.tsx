import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/20 group-hover:shadow-purple-600/30 transition-shadow">
              <GraduationCap className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="gradient-text font-bold text-lg tracking-tight">Campus Directory</span>
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className="nav-active px-3 py-5 text-sm font-medium"
            >
              Students
            </Link>
            <Link
              href="/departments"
              className="px-3 py-5 text-sm font-medium text-dark-200 hover:text-dark-100 transition-colors"
            >
              Departments
            </Link>
            <Link
              href="/about"
              className="px-3 py-5 text-sm font-medium text-dark-300 hover:text-dark-200 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold badge-accent px-3 py-1.5">
            <Sparkles className="w-3 h-3" />
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}

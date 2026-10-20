import Link from "next/link";
import { ArrowRight, Building2, Code2, PenTool, Users, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 animate-in">
      <nav className="flex items-center gap-2 text-sm text-dark-400 mb-12">
        <Link href="/students" className="link-glow">
          Directory
        </Link>
        <span className="text-dark-600">/</span>
        <span className="text-dark-100 font-medium">Not Found</span>
      </nav>

      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600 flex items-center justify-center mx-auto mb-4">
          <Ghost className="w-7 h-7 text-dark-400" />
        </div>

        <span className="badge-mono inline-flex items-center gap-1.5 px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>404 · ROUTE NOT FOUND</span>
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold gradient-text-warm mt-5">
          Student or department not found
        </h1>

        <p className="text-sm text-dark-400 mt-3 max-w-lg mx-auto leading-relaxed">
          The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
          <Link
            href="/students"
            className="glow-btn w-full sm:w-auto px-6 py-2.5 text-sm text-center"
          >
            Return to Students Directory
          </Link>
          <Link
            href="/departments"
            className="ghost-btn w-full sm:w-auto px-6 py-2.5 text-sm text-center"
          >
            Browse All Departments
          </Link>
        </div>
      </div>

      <div className="glass-surface overflow-hidden">
        <div className="px-5 py-3 border-b border-dark-700/30 flex items-center justify-between text-xs font-semibold">
          <span className="text-dark-300 tracking-wider uppercase">
            Suggested Starting Points
          </span>
          <span className="text-dark-500 font-normal">Internal Routes</span>
        </div>

        <div className="divide-y divide-dark-700/20 text-sm">
          <Link
            href="/departments"
            className="px-5 py-4 flex items-center justify-between hover:bg-dark-700/15 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-4 h-4 text-dark-500 group-hover:text-accent-400 transition-colors" />
              <span className="font-medium text-dark-200 group-hover:text-accent-300 transition-colors">
                Computer Science Department
              </span>
            </div>
            <span className="font-mono text-xs text-dark-500 group-hover:text-dark-300 flex items-center gap-1 transition-colors">
              /departments/computer-science
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/departments/computer-science/web-development"
            className="px-5 py-4 flex items-center justify-between hover:bg-dark-700/15 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-4 h-4 text-dark-500 group-hover:text-accent-400 transition-colors" />
              <span className="font-medium text-dark-200 group-hover:text-accent-300 transition-colors">
                Web Development Specialization
              </span>
            </div>
            <span className="font-mono text-xs text-dark-500 group-hover:text-dark-300 flex items-center gap-1 transition-colors">
              /departments/computer-science/web-development
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/departments"
            className="px-5 py-4 flex items-center justify-between hover:bg-dark-700/15 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <PenTool className="w-4 h-4 text-dark-500 group-hover:text-accent-400 transition-colors" />
              <span className="font-medium text-dark-200 group-hover:text-accent-300 transition-colors">
                Design Department
              </span>
            </div>
            <span className="font-mono text-xs text-dark-500 group-hover:text-dark-300 flex items-center gap-1 transition-colors">
              /departments/design
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/students"
            className="px-5 py-4 flex items-center justify-between hover:bg-dark-700/15 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-dark-500 group-hover:text-accent-400 transition-colors" />
              <span className="font-medium text-dark-200 group-hover:text-accent-300 transition-colors">
                All Students Directory
              </span>
            </div>
            <span className="font-mono text-xs text-dark-500 group-hover:text-dark-300 flex items-center gap-1 transition-colors">
              /students
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

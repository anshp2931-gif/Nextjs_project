import Link from "next/link";
import { ArrowRight, Building2, Code2, PenTool, Users } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-12">
        <Link href="/students" className="hover:text-slate-800">
          Directory
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">Not Found</span>
      </nav>

      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-md px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          <span>404 · ROUTE NOT FOUND</span>
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
          Student or department not found
        </h1>

        <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
          The requested directory entry or path could not be located. It may have moved or the identifier might be invalid.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <Link
            href="/students"
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md text-center"
          >
            Return to Students Directory
          </Link>
          <Link
            href="/departments"
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-md text-center"
          >
            Browse All Departments
          </Link>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold">
          <span className="text-slate-600 tracking-wider uppercase">
            Suggested Starting Points
          </span>
          <span className="text-slate-400 font-normal">Internal Routes</span>
        </div>

        <div className="divide-y divide-slate-100 text-sm">
          <Link
            href="/departments"
            className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 group"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              <span className="font-medium text-slate-800 group-hover:text-blue-600">
                Computer Science Department
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400 group-hover:text-slate-600 flex items-center gap-1">
              /departments/computer-science
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/departments/computer-science/web-development"
            className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 group"
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              <span className="font-medium text-slate-800 group-hover:text-blue-600">
                Web Development Specialization
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400 group-hover:text-slate-600 flex items-center gap-1">
              /departments/computer-science/web-development
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/departments"
            className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 group"
          >
            <div className="flex items-center gap-3">
              <PenTool className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              <span className="font-medium text-slate-800 group-hover:text-blue-600">
                Design Department
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400 group-hover:text-slate-600 flex items-center gap-1">
              /departments/design
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/students"
            className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 group"
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              <span className="font-medium text-slate-800 group-hover:text-blue-600">
                All Students Directory
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400 group-hover:text-slate-600 flex items-center gap-1">
              /students
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

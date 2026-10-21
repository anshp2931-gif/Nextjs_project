import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to students</span>
      </Link>
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-slate-900">About Campus Directory</h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Campus Directory is an academic exploration portal for viewing enrolled students, faculty departments, and specialized tracks.
        </p>
      </div>
    </div>
  );
}

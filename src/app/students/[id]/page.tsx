import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getStudentById } from "@/data/students";

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
        <Link href="/students" className="hover:text-slate-800">
          Students
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{student.name}</span>
      </nav>

      <div className="mb-6">
        <Link
          href="/students"
          className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to students</span>
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg ${student.avatarColor}`}
          >
            {student.initials}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {student.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                {student.studentCode}
              </span>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-slate-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Department
            </span>
            <span className="block font-semibold text-slate-900 mt-1">
              {student.department}
            </span>
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Study Year
            </span>
            <span className="block font-semibold text-slate-900 mt-1">
              {student.studyYearFull}
            </span>
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Email
            </span>
            <a
              href={`mailto:${student.email}`}
              className="block font-medium text-blue-600 hover:underline mt-1"
            >
              {student.email}
            </a>
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Enrolled
            </span>
            <span className="block font-semibold text-slate-900 mt-1">
              {student.enrolled}
            </span>
          </div>
        </div>

        <hr className="my-6 border-slate-200" />

        <div>
          <h2 className="text-base font-bold text-slate-900">About</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {student.about}
          </p>
        </div>

        <hr className="my-6 border-slate-200" />

        <div>
          <h2 className="text-base font-bold text-slate-900">Academic Details</h2>
          
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Department</span>
              <span className="font-semibold text-slate-900">{student.department}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Current Academic Standing</span>
              <span className="font-semibold text-slate-900">{student.currentStanding}</span>
            </div>
          </div>

          <div className="mt-6">
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Enrolled Subjects
            </span>
            <div className="border border-slate-200 rounded-md overflow-hidden divide-y divide-slate-100">
              {student.subjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 flex items-center justify-between text-xs sm:text-sm bg-white"
                >
                  <span className="font-medium text-slate-800">
                    {subject.code}: {subject.title}
                  </span>
                  <span className="text-slate-500 font-mono">
                    {subject.credits.toFixed(1)} Credits
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <span>System Record ID: {student.systemRecordId}</span>
        <span>Last validated: {student.lastValidated}</span>
      </div>
    </div>
  );
}

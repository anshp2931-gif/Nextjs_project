import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { webDevSpecialization } from "@/data/departments";
import { getStudentsBySpecialization } from "@/data/students";

export default async function NestedSpecializationPage({
  params,
}: {
  params: Promise<{ dept: string; specialization: string }>;
}) {
  const { dept, specialization } = await params;

  if (dept !== "computer-science" || specialization !== "web-development") {
    notFound();
  }

  const spec = webDevSpecialization;
  const specStudents = getStudentsBySpecialization("Web Development");

  return (
    <div className="w-full">
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-2">
        <Link href="/departments" className="hover:text-slate-800">
          Departments
        </Link>
        <span>/</span>
        <Link href="/departments" className="hover:text-slate-800">
          Computer Science
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">Web Development</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <Link
          href="/departments"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Computer Science Department</span>
        </Link>
        <Link
          href="/students"
          className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900"
        >
          <span>View all students</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {spec.name}
              </h1>
              <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded px-2.5 py-0.5">
                Specialization under Computer Science
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600 max-w-3xl leading-relaxed">
              {spec.description}
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Department Track
            </span>
            <span className="inline-block text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-300 rounded px-3 py-1">
              {spec.trackCode}
            </span>
          </div>
        </div>

        <hr className="my-6 border-slate-200" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Academic Lead
            </span>
            <span className="block font-semibold text-slate-900 mt-1">
              {spec.academicLead}
            </span>
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Primary Core Lab
            </span>
            <span className="block font-semibold text-slate-900 mt-1">
              {spec.primaryCoreLab}
            </span>
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Total Enrollment
            </span>
            <span className="block font-semibold text-slate-900 mt-1">
              {spec.totalEnrollment}
            </span>
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Curriculum Cycle
            </span>
            <span className="block font-semibold text-slate-900 mt-1">
              {spec.curriculumCycle}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2 mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900">
              Students in this Specialization
            </h2>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 rounded-md px-2 py-0.5">
              {specStudents.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Filtered by Track:</span>
            <span className="font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded px-2.5 py-0.5">
              Web Development
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {specStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm ${student.avatarColor}`}
                    >
                      {student.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {student.name}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {student.studentCode}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded px-2 py-0.5">
                    {student.studyYear}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-600 text-xs font-medium">
                  {student.specializationTopic}
                </span>
                <Link
                  href={`/students/${student.id}`}
                  className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700"
                >
                  <span>View profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <span>Campus Directory © Academic Informatics Core</span>
        <div className="flex items-center gap-2 font-mono">
          <span>Path: /departments/computer-science/web-development</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
}

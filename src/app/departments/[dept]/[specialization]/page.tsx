import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Award, MapPin, Users, RefreshCcw } from "lucide-react";
import { webDevSpecialization } from "@/data/departments";
import { getStudentsBySpecialization } from "@/data/students";

export default async function NestedSpecializationPage({
  params,
}: {
  params: Promise<{ dept: string; specialization: string }>;
}) {
  const { dept, specialization } = await params;

  if (dept !== "computer-science" || specialization !== "web-development") {
    return notFound();
  }

  const spec = webDevSpecialization;
  const specStudents = getStudentsBySpecialization("Web Development");

  return (
    <div className="w-full animate-in">
      <nav className="flex items-center gap-2 text-sm text-dark-400 mb-2">
        <Link href="/departments" className="link-glow">
          Departments
        </Link>
        <span className="text-dark-600">/</span>
        <Link href="/departments" className="link-glow">
          Computer Science
        </Link>
        <span className="text-dark-600">/</span>
        <span className="text-dark-100 font-medium">Web Development</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <Link
          href="/departments"
          className="link-glow inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Computer Science Department</span>
        </Link>
        <Link
          href="/students"
          className="inline-flex items-center gap-1.5 text-sm text-dark-300 hover:text-dark-100 transition-colors"
        >
          <span>View all students</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="glass-surface p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold gradient-text">
                {spec.name}
              </h1>
              <span className="badge-accent">
                Specialization under Computer Science
              </span>
            </div>
            <p className="mt-3 text-sm text-dark-300 max-w-3xl leading-relaxed">
              {spec.description}
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <span className="block text-[11px] font-bold text-dark-400 uppercase tracking-widest mb-1">
              Department Track
            </span>
            <span className="badge-mono text-sm font-bold px-4 py-1.5">
              {spec.trackCode}
            </span>
          </div>
        </div>

        <hr className="my-6 glass-divider" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-xs sm:text-sm">
          <div>
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              <Award className="w-3 h-3" />
              Academic Lead
            </span>
            <span className="block font-semibold text-dark-100 mt-1.5">
              {spec.academicLead}
            </span>
          </div>

          <div>
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              <MapPin className="w-3 h-3" />
              Primary Core Lab
            </span>
            <span className="block font-semibold text-dark-100 mt-1.5">
              {spec.primaryCoreLab}
            </span>
          </div>

          <div>
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              <Users className="w-3 h-3" />
              Total Enrollment
            </span>
            <span className="block font-semibold text-dark-100 mt-1.5">
              {spec.totalEnrollment}
            </span>
          </div>

          <div>
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              <RefreshCcw className="w-3 h-3" />
              Curriculum Cycle
            </span>
            <span className="block font-semibold text-dark-100 mt-1.5">
              {spec.curriculumCycle}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-dark-700/30 gap-3 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-dark-100">
              Students in this Specialization
            </h2>
            <span className="badge-accent">
              {specStudents.length}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-dark-400">Filtered by Track:</span>
            <span className="badge-mono">
              Web Development
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
          {specStudents.map((student) => (
            <div
              key={student.id}
              className="glass-card p-5 flex flex-col justify-between animate-in opacity-0"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`avatar w-11 h-11 ${student.avatarColor}`}
                    >
                      {student.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-100 text-base">
                        {student.name}
                      </h3>
                      <span className="text-xs font-mono text-dark-500">
                        {student.studentCode}
                      </span>
                    </div>
                  </div>

                  <span className="badge-mono">
                    {student.studyYear}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-dark-700/30 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-dark-400 text-xs font-medium">
                  {student.specializationTopic}
                </span>
                <Link
                  href={`/students/${student.id}`}
                  className="link-glow inline-flex items-center gap-1 font-semibold"
                >
                  <span>View profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-4 border-t border-dark-700/30 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-500 gap-2">
        <span>Campus Directory © Academic Informatics Core</span>
        <div className="flex items-center gap-2 font-mono">
          <span>Path: /departments/computer-science/web-development</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

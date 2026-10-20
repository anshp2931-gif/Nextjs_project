import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Calendar, BookOpen } from "lucide-react";
import { getStudentById } from "@/data/students";

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = getStudentById(id);

  if (!student) {
    return notFound();
  }

  return (
    <div className="w-full max-w-4xl mx-auto animate-in">
      <nav className="flex items-center gap-2 text-sm text-dark-400 mb-2">
        <Link href="/students" className="link-glow">
          Students
        </Link>
        <span className="text-dark-500">/</span>
        <span className="text-dark-100 font-medium">{student.name}</span>
      </nav>

      <div className="mb-6">
        <Link
          href="/students"
          className="link-glow inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to students</span>
        </Link>
      </div>

      <div className="glass-surface p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div
            className={`avatar w-16 h-16 text-lg ${student.avatarColor}`}
          >
            {student.initials}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold gradient-text">
              {student.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="badge-mono">
                {student.studentCode}
              </span>
              <span className="badge-success">
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <hr className="my-6 glass-divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-sm">
          <div>
            <span className="block text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              Department
            </span>
            <span className="block font-semibold text-dark-100 mt-1">
              {student.department}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              Study Year
            </span>
            <span className="block font-semibold text-dark-100 mt-1">
              {student.studyYearFull}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              Email
            </span>
            <a
              href={`mailto:${student.email}`}
              className="link-glow flex items-center gap-1.5 font-medium mt-1"
            >
              <Mail className="w-3.5 h-3.5" />
              {student.email}
            </a>
          </div>

          <div>
            <span className="block text-[11px] font-bold text-dark-400 uppercase tracking-widest">
              Enrolled
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-dark-100 mt-1">
              <Calendar className="w-3.5 h-3.5 text-dark-400" />
              {student.enrolled}
            </span>
          </div>
        </div>

        <hr className="my-6 glass-divider" />

        <div>
          <h2 className="text-base font-bold text-dark-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent-400" />
            About
          </h2>
          <p className="mt-3 text-sm text-dark-300 leading-relaxed">
            {student.about}
          </p>
        </div>

        <hr className="my-6 glass-divider" />

        <div>
          <h2 className="text-base font-bold text-dark-100">Academic Details</h2>
          
          <div className="mt-4 space-y-0">
            <div className="flex justify-between py-3 border-b border-dark-700/30 text-sm">
              <span className="text-dark-300">Department</span>
              <span className="font-semibold text-dark-100">{student.department}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-dark-700/30 text-sm">
              <span className="text-dark-300">Current Academic Standing</span>
              <span className="font-semibold text-dark-100">{student.currentStanding}</span>
            </div>
          </div>

          <div className="mt-6">
            <span className="block text-[11px] font-bold text-dark-400 uppercase tracking-widest mb-3">
              Enrolled Subjects
            </span>
            <div className="glass-card overflow-hidden !rounded-xl divide-y divide-dark-700/30">
              {student.subjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3.5 flex items-center justify-between text-xs sm:text-sm hover:bg-dark-700/20 transition-colors"
                >
                  <span className="font-medium text-dark-200">
                    <span className="text-accent-400 font-mono mr-2">{subject.code}</span>
                    {subject.title}
                  </span>
                  <span className="badge-mono">
                    {subject.credits.toFixed(1)} Credits
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-500 gap-2">
        <span>System Record ID: {student.systemRecordId}</span>
        <span>Last validated: {student.lastValidated}</span>
      </div>
    </div>
  );
}

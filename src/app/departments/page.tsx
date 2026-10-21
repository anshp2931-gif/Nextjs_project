import Link from "next/link";
import { Code2, PenTool, TrendingUp, ArrowRight, Layers, Users } from "lucide-react";
import { getAllDepartments } from "@/data/departments";

export default function DepartmentsPage() {
  const departments = getAllDepartments();

  const getIcon = (type: string) => {
    if (type === "code") return <Code2 className="w-5 h-5 text-blue-600" />;
    if (type === "pen") return <PenTool className="w-5 h-5 text-blue-600" />;
    return <TrendingUp className="w-5 h-5 text-blue-600" />;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Departments</h1>
          <p className="text-slate-500 text-sm mt-1">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>3 Active Academic Faculties</span>
        </div>
      </div>

      <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-200 bg-white">
        {departments.map((dept) => (
          <div
            key={dept.slug}
            className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                {getIcon(dept.iconType)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {dept.name}
                </h2>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  {dept.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>{dept.specializationsCount} Specializations</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{dept.enrolledStudentsCount} Enrolled Students</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center">
              <Link
                href={
                  dept.slug === "computer-science"
                    ? "/departments/computer-science/web-development"
                    : "/students"
                }
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                <span>View students</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Code2, PenTool, TrendingUp, ArrowRight, Layers, Users, Zap } from "lucide-react";
import { getAllDepartments } from "@/data/departments";

export default function DepartmentsPage() {
  const departments = getAllDepartments();

  const getIcon = (type: string) => {
    if (type === "code") return <Code2 className="w-5 h-5 text-accent-400" />;
    if (type === "pen") return <PenTool className="w-5 h-5 text-accent-400" />;
    return <TrendingUp className="w-5 h-5 text-accent-400" />;
  };

  return (
    <div className="w-full animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-dark-700/30 gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text">
            Departments
          </h1>
          <p className="text-dark-300 text-sm mt-2">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <div className="flex items-center gap-2 badge-accent px-3 py-1.5 self-start sm:self-auto">
          <Zap className="w-3 h-3" />
          <span className="text-xs font-semibold">3 Active Academic Faculties</span>
        </div>
      </div>

      <div className="space-y-4">
        {departments.map((dept, i) => (
          <div
            key={dept.slug}
            className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in opacity-0"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-indigo-500/10 border border-accent-500/15 flex items-center justify-center shrink-0">
                {getIcon(dept.iconType)}
              </div>
              <div>
                <h2 className="text-lg font-bold text-dark-100">
                  {dept.name}
                </h2>
                <p className="text-sm text-dark-300 mt-1 max-w-2xl leading-relaxed">
                  {dept.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-dark-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-dark-500" />
                    <span>{dept.specializationsCount} Specializations</span>
                  </div>
                  <span className="text-dark-600">·</span>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-dark-500" />
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
                className="link-glow inline-flex items-center gap-1.5 text-sm font-semibold"
              >
                <span>View students</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-500 gap-2">
        <span>Curriculum Year 2024–2025</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Updated daily via Campus Records API
        </span>
      </div>
    </div>
  );
}

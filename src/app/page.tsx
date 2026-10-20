"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Users } from "lucide-react";
import { students } from "@/data/students";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All departments");

  const filtered = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.studentCode.toLowerCase().includes(search.toLowerCase());
    const matchesDept =
      department === "All departments" || student.department === department;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full animate-in">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text">
          Students
        </h1>
        <p className="text-dark-300 text-sm mt-2">
          Browse students and view their profiles.
        </p>
      </div>

      <div className="glass-surface p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-dark-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or code..."
            className="glass-input w-full pl-9 pr-3 py-2.5"
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="dept" className="text-sm font-medium text-dark-300 whitespace-nowrap">
            Department:
          </label>
          <select
            id="dept"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="glass-select px-3 py-2.5"
          >
            <option value="All departments">All departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
        {filtered.map((student) => (
          <div
            key={student.id}
            className="glass-card p-5 flex flex-col justify-between animate-in opacity-0"
          >
            <div>
              <div className="flex items-start justify-between">
                <div
                  className={`avatar w-11 h-11 ${student.avatarColor}`}
                >
                  {student.initials}
                </div>
                <span className="badge-mono">
                  {student.studentCode}
                </span>
              </div>

              <h2 className="text-lg font-bold text-dark-100 mt-4">
                {student.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <span className="badge-accent">
                  {student.department}
                </span>
                <span className="text-xs text-dark-400">
                  {student.studyYear}
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-dark-700/50">
              <Link
                href={`/students/${student.id}`}
                className="link-glow inline-flex items-center gap-1.5 text-sm font-semibold"
              >
                <span>View profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-5 border-t border-dark-700/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-dark-400">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5" />
          <span>Showing {filtered.length} of {students.length} students</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled
            className="ghost-btn px-3 py-1.5 text-xs font-medium opacity-40 cursor-not-allowed"
          >
            Previous
          </button>
          <button
            disabled
            className="ghost-btn px-3 py-1.5 text-xs font-medium opacity-40 cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

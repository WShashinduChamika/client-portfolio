import Link from "next/link";
import {
  FolderOpen,
  BookOpen,
  User,
  Briefcase,
  ArrowRight,
  Clock,
  Activity,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ---------------------------------------------------------------------------
// Quick-action sections
// ---------------------------------------------------------------------------

const sections = [
  {
    title: "Projects",
    description: "Manage your portfolio projects — add, edit or remove case studies.",
    href: "/dashboard/projects",
    icon: FolderOpen,
    count: "6 items",
    iconClass: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Blogs",
    description: "Write new articles or update existing blog posts for your audience.",
    href: "/dashboard/blogs",
    icon: BookOpen,
    count: "4 items",
    iconClass: "bg-violet-100 text-violet-600",
  },
  {
    title: "Profile",
    description: "Update your personal info, bio, skills, and social links.",
    href: "/dashboard/profile",
    icon: User,
    count: "1 profile",
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Work / About",
    description: "Manage your work experience, awards, and volunteer highlights.",
    href: "/dashboard/settings",
    icon: Briefcase,
    count: "3 entries",
    iconClass: "bg-amber-100 text-amber-600",
  },
];

// ---------------------------------------------------------------------------
// Recent activity (placeholder)
// ---------------------------------------------------------------------------

const recentActivity = [
  { label: "Project added: E-commerce Redesign", time: "2 hours ago", type: "project" },
  { label: "Blog post published: Design Systems 101", time: "Yesterday", type: "blog" },
  { label: "Profile info updated", time: "3 days ago", type: "profile" },
  { label: "Project updated: Mobile App UI", time: "5 days ago", type: "project" },
];

const activityBadge: Record<string, string> = {
  project: "bg-indigo-100 text-indigo-700",
  blog: "bg-violet-100 text-violet-700",
  profile: "bg-emerald-100 text-emerald-700",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome banner */}
      <div className="rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 px-7 py-6 text-white shadow-lg shadow-indigo-500/20">
        <p className="text-sm font-medium opacity-80">Welcome back 👋</p>
        <h2 className="mt-0.5 text-2xl font-bold tracking-tight">
          Portfolio Dashboard
        </h2>
        <p className="mt-1 text-sm opacity-75">
          Manage your projects, blogs, and personal profile from one place.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Projects"
          value={6}
          description="Portfolio case studies"
          icon={FolderOpen}
          iconClass="bg-indigo-100 text-indigo-600"
          trend={{ value: "2 this month", positive: true }}
        />
        <StatCard
          label="Blog Posts"
          value={4}
          description="Published articles"
          icon={BookOpen}
          iconClass="bg-violet-100 text-violet-600"
          trend={{ value: "1 this week", positive: true }}
        />
        <StatCard
          label="Work Entries"
          value={3}
          description="Experience & awards"
          icon={Briefcase}
          iconClass="bg-amber-100 text-amber-600"
        />
        <StatCard
          label="Profile Status"
          value="Active"
          description="Last updated 3 days ago"
          icon={Activity}
          iconClass="bg-emerald-100 text-emerald-600"
        />
      </div>

      {/* Section quick-actions */}
      <section>
        <h3 className="mb-4 text-sm font-semibold text-foreground">
          Portfolio Sections
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map(({ title, description, href, icon: Icon, count, iconClass }) => (
            <Card
              key={href}
              className="group border border-border shadow-none transition-shadow hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-semibold">
                      {title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-[10px]">
                      {count}
                    </Badge>
                  </div>
                  <CardDescription className="mt-0.5 text-xs">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-7 gap-1 px-2 text-xs text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  <Link href={href}>
                    Manage <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent activity */}
      <section>
        <h3 className="mb-4 text-sm font-semibold text-foreground">
          Recent Activity
        </h3>
        <Card className="border border-border shadow-none">
          <CardContent className="divide-y divide-border p-0">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold capitalize ${
                      activityBadge[item.type]
                    }`}
                  >
                    {item.type}
                  </span>
                  <p className="text-sm text-foreground">{item.label}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {item.time}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

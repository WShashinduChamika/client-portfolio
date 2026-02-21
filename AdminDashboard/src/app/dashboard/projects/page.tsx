import { Plus, Pencil, Trash2, ExternalLink, FolderOpen } from "lucide-react";
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
// Placeholder project data
// ---------------------------------------------------------------------------

const projects = [
  {
    id: "1",
    title: "E-commerce Website Redesign",
    description: "A full redesign of an e-commerce platform focusing on improved UX and conversion rates.",
    tags: ["UI/UX", "Figma", "React"],
    status: "Published",
    updatedAt: "Feb 15, 2026",
  },
  {
    id: "2",
    title: "Mobile App UI — Fitness Tracker",
    description: "End-to-end mobile interface design for a fitness tracking application.",
    tags: ["Mobile", "Figma", "Prototyping"],
    status: "Published",
    updatedAt: "Feb 10, 2026",
  },
  {
    id: "3",
    title: "Brand Identity — Café Co.",
    description: "Logo, colour system, typography and brand guidelines for a café startup.",
    tags: ["Branding", "Illustrator"],
    status: "Published",
    updatedAt: "Jan 28, 2026",
  },
  {
    id: "4",
    title: "Dashboard UI Kit",
    description: "Component library and dashboard template built with Figma Auto Layout.",
    tags: ["UI Kit", "Figma", "Components"],
    status: "Draft",
    updatedAt: "Jan 20, 2026",
  },
];

const statusColor: Record<string, string> = {
  Published: "bg-emerald-100 text-emerald-700",
  Draft: "bg-amber-100 text-amber-700",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Manage and organise your portfolio projects.
          </p>
        </div>
        <Button
          size="sm"
          className="gap-1.5 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      {/* Project grid */}
      {projects.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border border-border shadow-none transition-shadow hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-sm font-semibold leading-snug">
                    {project.title}
                  </CardTitle>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      statusColor[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <CardDescription className="text-xs">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex items-center justify-between gap-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="h-5 px-1.5 text-[10px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-indigo-600"
                    title="Preview"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-indigo-600"
                    title="Edit"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardContent>

              <div className="border-t border-border px-5 py-2 text-[11px] text-muted-foreground">
                Updated {project.updatedAt}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-white py-20">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
        <FolderOpen className="h-6 w-6" />
      </div>
      <p className="text-sm font-medium">No projects yet</p>
      <p className="text-xs text-muted-foreground">
        Click &ldquo;Add Project&rdquo; to get started.
      </p>
    </div>
  );
}

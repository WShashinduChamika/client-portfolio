import { Plus, Pencil, Trash2, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ---------------------------------------------------------------------------
// Placeholder blog data
// ---------------------------------------------------------------------------

const blogs = [
  {
    id: "1",
    title: "How to Work with a Team and Client",
    description:
      "Based on personal experience, this article shares the most inspiring examples of leadership encountered during university life.",
    category: "Design",
    status: "Published",
    date: "Feb 12, 2026",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Building a Design System from Scratch",
    description:
      "A step-by-step guide to creating a scalable and consistent design system for modern web products.",
    category: "Our Mind",
    status: "Published",
    date: "Jan 30, 2026",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "UI Trends to Watch in 2026",
    description:
      "Highlighting the most impactful UI and interaction design trends emerging this year.",
    category: "Design",
    status: "Draft",
    date: "Jan 20, 2026",
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "The Psychology of Colour in Branding",
    description:
      "How colour choices shape user perception and the emotional impact of your brand identity.",
    category: "Branding",
    status: "Published",
    date: "Jan 5, 2026",
    readTime: "6 min read",
  },
];

const statusColor: Record<string, string> = {
  Published: "bg-emerald-100 text-emerald-700",
  Draft: "bg-amber-100 text-amber-700",
};

const categoryColor: Record<string, string> = {
  Design: "bg-indigo-100 text-indigo-700",
  "Our Mind": "bg-violet-100 text-violet-700",
  Branding: "bg-pink-100 text-pink-700",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Blogs</h2>
          <p className="text-sm text-muted-foreground">
            Write and manage your blog articles.
          </p>
        </div>
        <Button
          size="sm"
          className="gap-1.5 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      {/* Blog list */}
      {blogs.length === 0 ? (
        <EmptyState />
      ) : (
        <Card className="border border-border shadow-none">
          <CardContent className="p-0">
            {blogs.map((blog, i) => (
              <div key={blog.id}>
                {i > 0 && <Separator />}
                <div className="flex items-start justify-between gap-4 px-5 py-4">
                  {/* Info */}
                  <div className="flex min-w-0 flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          categoryColor[blog.category] ??
                          "bg-muted text-muted-foreground"
                        }`}
                      >
                        {blog.category}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          statusColor[blog.status]
                        }`}
                      >
                        {blog.status}
                      </span>
                    </div>

                    <CardTitle className="text-sm font-semibold leading-snug">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-xs">
                      {blog.description}
                    </CardDescription>

                    <div className="mt-1 flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span>{blog.date}</span>
                      <span>&middot;</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-1">
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
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Summary badges */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">
          {blogs.filter((b) => b.status === "Published").length} Published
        </Badge>
        <Badge variant="secondary">
          {blogs.filter((b) => b.status === "Draft").length} Draft
        </Badge>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-white py-20">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
        <BookOpen className="h-6 w-6" />
      </div>
      <p className="text-sm font-medium">No blog posts yet</p>
      <p className="text-xs text-muted-foreground">
        Click &ldquo;New Post&rdquo; to create your first article.
      </p>
    </div>
  );
}

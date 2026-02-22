"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import {
  Plus, Pencil, Trash2, BookOpen,
  ImagePlus, X, Tag, Loader2, CheckCircle2, AlertCircle, FileText,
} from "lucide-react";
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
import "react-quill-new/dist/quill.snow.css";

// Dynamically import ReactQuill (client-side only)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

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

const CATEGORY_OPTIONS = ["design", "our-mind", "others"];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BlogsPage() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [tagsInput, setTagsInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isPublished, setIsPublished] = useState(false);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const fileRef = useRef<HTMLInputElement | null>(null);

  const applyFile = (f: File) => {
    setCoverFile(f);
    setCoverPreview(URL.createObjectURL(f));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) applyFile(f);
  };
  const removeCover = () => {
    setCoverFile(null);
    setCoverPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && tagsInput.trim()) {
      e.preventDefault();
      const newTag = tagsInput.trim().replace(/,$/, "");
      if (newTag && !tags.includes(newTag)) setTags((t) => [...t, newTag]);
      setTagsInput("");
    }
  };
  const removeTag = (tag: string) => setTags((t) => t.filter((x) => x !== tag));

  const resetForm = () => {
    setTitle(""); setContent(""); setExcerpt("");
    setTagsInput(""); setTags([]); setIsPublished(false);
    removeCover();
  };

  const handleSubmit = async (publish: boolean) => {
    setMessage(null);
    if (!title.trim() || !content.trim()) {
      setMessage({ type: "error", text: "Title and content are required." });
      return;
    }
    setLoading(true);
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("content", content);
      form.append("excerpt", excerpt);
      form.append("category", category);
      form.append("tags", tags.join(","));
      form.append("isPublished", publish ? "true" : "false");
      if (coverFile) form.append("coverImage", coverFile);

      const res = await fetch("/api/blogs", { method: "POST", body: form, credentials: "include" });
      const body = await res.json();
      if (!res.ok) throw new Error(body.message || "Failed to create blog");
      setMessage({ type: "success", text: `Blog ${publish ? "published" : "saved as draft"} successfully.` });
      resetForm();
      setTimeout(() => setShowForm(false), 1500);
    } catch (err: any) {
      setMessage({ type: "error", text: err?.message || "An error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Blogs</h2>
          <p className="text-sm text-muted-foreground">Write and manage your blog articles.</p>
        </div>
        <Button
          size="sm"
          onClick={() => setShowForm((s) => !s)}
          className="gap-1.5 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          {showForm ? "Close" : "New Post"}
        </Button>
      </div>

      {/* Create form */}
      {showForm && (
        <Card className="overflow-hidden border border-border shadow-sm">
          {/* Form header */}
          <div className="flex items-center justify-between border-b bg-linear-to-r from-indigo-50 to-violet-50 px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                <FileText className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">New Blog Post</p>
                <p className="text-xs text-muted-foreground">Fill in the details below</p>
              </div>
            </div>
            <button onClick={() => { setShowForm(false); resetForm(); }} className="cursor-pointer rounded-md p-1 text-muted-foreground hover:bg-white/60 hover:text-gray-700">
              <X className="h-4 w-4" />
            </button>
          </div>

          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3">

              {/* ── Left / main column ──────────────────────────── */}
              <div className="col-span-2 flex flex-col gap-5 border-r p-6">

                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Title <span className="text-red-500">*</span></label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter an attention-grabbing title…"
                    className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-medium placeholder:text-muted-foreground/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Excerpt */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Excerpt</label>
                  <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="A short summary shown in the blog listing…"
                    rows={2}
                    className="w-full resize-none rounded-lg border border-border bg-white px-4 py-2.5 text-sm placeholder:text-muted-foreground/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Rich text content */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Content <span className="text-red-500">*</span></label>
                  <div className="overflow-hidden rounded-lg border border-border focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
                    <ReactQuill
                      value={content}
                      onChange={setContent}
                      className="[&_.ql-container]:min-h-55 [&_.ql-container]:border-0 [&_.ql-toolbar]:border-0 [&_.ql-toolbar]:border-b [&_.ql-toolbar]:bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              {/* ── Right / meta column ─────────────────────────── */}
              <div className="flex flex-col gap-5 bg-gray-50/60 p-6">

                {/* Cover image */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Cover Image</label>
                  {coverPreview ? (
                    <div className="relative overflow-hidden rounded-xl border border-border">
                      <img src={coverPreview} alt="cover preview" className="h-40 w-full object-cover" />
                      <button
                        onClick={removeCover}
                        className="absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) applyFile(f); }}
                      className={`flex h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-colors ${
                        dragOver ? "border-indigo-400 bg-indigo-50" : "border-border bg-white hover:border-indigo-300 hover:bg-indigo-50/40"
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100">
                        <ImagePlus className="h-5 w-5 text-indigo-500" />
                      </div>
                      <p className="text-xs font-medium text-muted-foreground">Click or drag to upload</p>
                      <p className="text-[10px] text-muted-foreground/60">PNG, JPG, WEBP · max 5 MB</p>
                    </div>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </div>

                {/* Category */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Category <span className="text-red-500">*</span></label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORY_OPTIONS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCategory(c)}
                        className={`cursor-pointer rounded-full px-3 py-1 text-xs font-semibold capitalize transition-colors ${
                          category === c
                            ? "bg-indigo-600 text-white shadow-sm"
                            : "bg-white border border-border text-muted-foreground hover:border-indigo-300 hover:text-indigo-600"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tags</label>
                  <div className="flex flex-wrap gap-1.5 rounded-lg border border-border bg-white px-3 py-2 focus-within:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-100">
                    {tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-medium text-indigo-700">
                        <Tag className="h-2.5 w-2.5" />{tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ml-0.5 cursor-pointer hover:text-indigo-900"><X className="h-2.5 w-2.5" /></button>
                      </span>
                    ))}
                    <input
                      value={tagsInput}
                      onChange={(e) => setTagsInput(e.target.value)}
                      onKeyDown={handleTagKeyDown}
                      placeholder={tags.length === 0 ? "Add tag, press Enter…" : ""}
                      className="min-w-20 flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground/60">Press Enter or comma to add a tag</p>
                </div>

                {/* Publish toggle */}
                <div className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">Publish immediately</p>
                    <p className="text-xs text-muted-foreground">Make visible to readers</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPublished((p) => !p)}
                    className={`relative h-6 w-11 cursor-pointer overflow-hidden rounded-full transition-colors ${
                      isPublished ? "bg-indigo-600" : "bg-gray-200"
                    }`}
                  >
                    <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      isPublished ? "translate-x-5" : "translate-x-0"
                    }`} />
                  </button>
                </div>

                {/* Feedback */}
                {message && (
                  <div className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm ${
                    message.type === "success"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-600"
                  }`}>
                    {message.type === "success"
                      ? <CheckCircle2 className="h-4 w-4 shrink-0" />
                      : <AlertCircle className="h-4 w-4 shrink-0" />}
                    {message.text}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 border-t bg-gray-50/60 px-6 py-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => { setShowForm(false); resetForm(); }}
                disabled={loading}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleSubmit(false)}
                disabled={loading}
                className="cursor-pointer gap-1.5"
              >
                {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                Save as Draft
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={() => handleSubmit(true)}
                disabled={loading}
                className="cursor-pointer gap-1.5 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 hover:opacity-90"
              >
                {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                Publish
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Blog list (placeholder) */}
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
                          categoryColor[blog.category] ?? "bg-muted text-muted-foreground"
                        }`}
                      >
                        {blog.category}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusColor[blog.status]}`}
                      >
                        {blog.status}
                      </span>
                    </div>

                    <CardTitle className="text-sm font-semibold leading-snug">{blog.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-xs">{blog.description}</CardDescription>

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
        <Badge variant="secondary">{blogs.filter((b) => b.status === "Published").length} Published</Badge>
        <Badge variant="secondary">{blogs.filter((b) => b.status === "Draft").length} Draft</Badge>
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

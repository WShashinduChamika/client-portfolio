"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCreateForm from "@/components/dashboard/BlogCreateForm";
import BlogList from "@/components/dashboard/BlogList";

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BlogsPage() {
  const [showForm, setShowForm] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

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
        <BlogCreateForm
          onClose={() => setShowForm(false)}
          onSuccess={() => setRefreshKey((k) => k + 1)}
        />
      )}

      {/* Blog list */}
      <BlogList refreshKey={refreshKey} />
    </div>
  );
}



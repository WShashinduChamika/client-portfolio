import {
  User,
  Mail,
  MapPin,
  Globe,
  Instagram,
  Linkedin,
  Github,
  Pencil,
  Plus,
  X,
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

// ---------------------------------------------------------------------------
// Placeholder profile data
// ---------------------------------------------------------------------------

const profile = {
  name: "Your Name",
  email: "yourname@example.com",
  location: "Colombo, Sri Lanka",
  bio: "Passionate UI/UX designer with a strong focus on human-centred design and visual storytelling. I create intuitive digital experiences that blend form and function.",
  role: "UI/UX Designer & Developer",
  website: "https://yourportfolio.com",
  social: {
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    github: "https://github.com/yourhandle",
  },
};

const skills = [
  "UI Design", "UX Research", "Figma", "React", "Tailwind CSS",
  "Branding", "Prototyping", "Node.js", "MongoDB",
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Profile</h2>
          <p className="text-sm text-muted-foreground">
            Your personal information, bio, and public links.
          </p>
        </div>
        <Button
          size="sm"
          className="gap-1.5 bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 hover:opacity-90"
        >
          <Pencil className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left — avatar + contact */}
        <div className="flex flex-col gap-4">
          {/* Avatar card */}
          <Card className="border border-border shadow-none">
            <CardContent className="flex flex-col items-center gap-3 pt-6 pb-5 text-center">
              {/* Avatar placeholder */}
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-indigo-600 to-violet-600 text-3xl font-bold text-white shadow-lg shadow-indigo-500/30">
                  {profile.name.charAt(0)}
                </div>
                <button className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md border border-border text-indigo-600 hover:bg-indigo-50 transition-colors">
                  <Pencil className="h-3 w-3" />
                </button>
              </div>
              <div>
                <p className="font-semibold text-foreground">{profile.name}</p>
                <p className="text-xs text-muted-foreground">{profile.role}</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact info */}
          <Card className="border border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {[
                { icon: Mail, label: profile.email },
                { icon: MapPin, label: profile.location },
                { icon: Globe, label: profile.website, isLink: true },
              ].map(({ icon: Icon, label, isLink }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {isLink ? (
                    <a
                      href={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-xs text-indigo-600 hover:underline"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="truncate text-xs text-foreground">{label}</span>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social links */}
          <Card className="border border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Social Links</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: profile.social.instagram },
                { icon: Linkedin, label: "LinkedIn", href: profile.social.linkedin },
                { icon: Github, label: "GitHub", href: profile.social.github },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-xs font-medium">{label}</span>
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-600 hover:underline"
                  >
                    View
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right — bio + skills */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          {/* Bio */}
          <Card className="border border-border shadow-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm">About</CardTitle>
                <CardDescription className="text-xs">
                  Your public bio displayed on the portfolio.
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-muted-foreground hover:text-indigo-600"
              >
                <Pencil className="h-3.5 w-3.5" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {profile.bio}
              </p>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="border border-border shadow-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm">Skills</CardTitle>
                <CardDescription className="text-xs">
                  Technologies and disciplines you work with.
                </CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1 px-2 text-xs text-indigo-600 hover:bg-indigo-50"
              >
                <Plus className="h-3 w-3" />
                Add
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {skill}
                    <button className="hidden h-3 w-3 items-center justify-center text-muted-foreground group-hover:flex hover:text-red-500">
                      <X className="h-2.5 w-2.5" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <Card className="border border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">At a Glance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Projects", value: "6" },
                  { label: "Blog Posts", value: "4" },
                  { label: "Skills", value: String(skills.length) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <p className="text-2xl font-bold text-indigo-600">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Profile visible on public portfolio
                </span>
                <Badge variant="secondary" className="ml-auto text-[10px]">
                  Live
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

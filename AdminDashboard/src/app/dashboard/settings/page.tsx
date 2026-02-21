import { Settings } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const settingGroups = [
  {
    title: "Account",
    description: "Manage your admin account credentials.",
    items: ["Change Email", "Change Password", "Two-Factor Authentication"],
  },
  {
    title: "Portfolio",
    description: "Control what is visible on the public portfolio.",
    items: ["Toggle Projects Visibility", "Toggle Blog Visibility", "Maintenance Mode"],
  },
  {
    title: "Danger Zone",
    description: "Irreversible actions for your account.",
    items: ["Deactivate Account"],
    danger: true,
  },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div>
        <h2 className="text-lg font-bold tracking-tight">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Configure your account and portfolio preferences.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-2xl">
        {settingGroups.map(({ title, description, items, danger }) => (
          <Card key={title} className={`border shadow-none ${danger ? "border-red-200" : "border-border"}`}>
            <CardHeader className="pb-2">
              <CardTitle className={`text-sm ${danger ? "text-red-600" : ""}`}>
                {title}
              </CardTitle>
              <CardDescription className="text-xs">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-0 p-0">
              {items.map((item, i) => (
                <div key={item}>
                  {i > 0 && <Separator />}
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm text-foreground">{item}</span>
                    <Button
                      variant={danger ? "destructive" : "outline"}
                      size="sm"
                      className="h-7 px-3 text-xs"
                    >
                      <Settings className="mr-1.5 h-3 w-3" />
                      Configure
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

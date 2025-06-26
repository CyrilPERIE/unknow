"use client";

import { useSession } from "@/app/hooks/user/use-session";
import routes from "@/lib/routes/routes";
import { redirect } from "next/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useSession();
  if (isAuthenticated) {
    redirect(routes.dashboard);
  }
  return <div className="h-full">{children}</div>;
}

"use client";

import { useUser } from "@/app/hooks/user/use-user";
import routes from "@/lib/routes/routes";
import { redirect } from "next/navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useUser();
  if (isAuthenticated) {
    redirect(routes.dashboard);
  }
  return <div className="h-full">{children}</div>;
}

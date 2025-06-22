"use client";

import { useEffect } from "react";
import { useUser } from "@/app/hooks/user/use-user";
import { useRouter } from "next/navigation";
import routes from "@/lib/routes/routes";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isPending, error, isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (error || (!isPending && !isAuthenticated)) {
      router.push(routes.login);
    }
  }, [error, isPending, isAuthenticated, router]);

  if (isPending || (!isPending && !isAuthenticated)) {
    return null;
  }

  return <div className="h-full">{children}</div>;
}

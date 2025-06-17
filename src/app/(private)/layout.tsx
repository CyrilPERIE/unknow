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
  const { session, isPending, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (error || (!isPending && !session?.user)) {
      router.push(routes.login);
    }
  }, [error, isPending, session, router]);

  if (isPending || (!isPending && !session?.user)) {
    return null;
  }

  return <div>{children}</div>;
}

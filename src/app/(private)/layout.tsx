"use client";

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

  if (error) {
    return router.push(routes.login);
  }

  if (isPending) {
    return null;
  }

  if (!isPending && !session?.user) {
    return router.push(routes.login);
  }

  if (!session?.user) {
    return null;
  }

  if (session.user) {
    return <div>{children}</div>;
  }
}

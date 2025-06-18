"use client";

import { useUser } from "@/app/hooks/user/use-user";

export default function UserCard() {
  const user = useUser();
  return <div>Bonjour {user.session?.user?.name}</div>;
}

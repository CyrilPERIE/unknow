"use client";

import { authClient } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import staticText from "@/lib/locales/fr/static-text";
import routes from "@/lib/routes/routes";

export default function LogoutActionButton() {
  const router = useRouter();

  const onLogout = () => {
    authClient.signOut().then(() => {
      router.push(routes.login);
    });
  };

  return <Button onClick={onLogout}>{staticText.logout.title}</Button>;
}

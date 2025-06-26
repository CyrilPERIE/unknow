"use client";

import LoginNavButton from "@/components/login/login-nav-button";
import RegisterNavButton from "@/components/register/register-nav-button";
import HomeNavButton from "@/components/home/home-nav-button";
import Header from "@/components/header/header";
import { useSession } from "@/app/hooks/user/use-session";
import LogoutActionButton from "@/components/logout/logout-action-button";
import UserCard from "@/components/user/user-card/user-card";
import DashboardNavButton from "@/components/dashboard/dashboard-nav-button";

export default function HeaderAuth() {
  const { isPending, error, isAuthenticated } = useSession();

  const isLoggedIn = !isPending && !error && isAuthenticated;
  const isNotLoggedIn = !isPending && !error && !isAuthenticated;
  return (
    <Header>
      <div>
        <HomeNavButton />
        {isLoggedIn && <DashboardNavButton />}
      </div>
      <div className="flex items-center gap-4">
        {isNotLoggedIn && <LoginNavButton />}
        {isNotLoggedIn && <RegisterNavButton />}
        {isLoggedIn && <UserCard />}
        {isLoggedIn && <LogoutActionButton />}
      </div>
    </Header>
  );
}

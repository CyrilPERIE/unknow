"use client";

import LoginNavButton from "@/components/login/login-nav-button";
import RegisterNavButton from "@/components/register/register-nav-button";
import HomeNavButton from "@/components/home/home-nav-button";
import Header from "@/components/header/header";
import { useUser } from "@/app/hooks/user/use-user";
import LogoutActionButton from "@/components/logout/logout-action-button";

export default function HeaderAuth() {
    const { session, isPending, error } = useUser();

    const isLoggedIn = !isPending && !error && session?.user;
    const isNotLoggedIn = !isPending && !error && !session?.user;
    return (
        <Header>
            <HomeNavButton />
            {isNotLoggedIn && <LoginNavButton />}
            {isNotLoggedIn && <RegisterNavButton />}
            {isLoggedIn && <LogoutActionButton />}
        </Header>
    )
}
import LoginNavButton from "@/components/login/login-nav-button";
import RegisterNavButton from "@/components/register/register-nav-button";
import HomeNavButton from "@/components/home/home-nav-button";
import Header from "@/components/header/header";

export default function HeaderAuth() {
    return (
        <Header>
            <HomeNavButton />
            <LoginNavButton />
            <RegisterNavButton />
        </Header>
    )
}
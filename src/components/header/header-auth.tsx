import LoginNavButton from "@/components/login/login-nav-button";
import RegisterNavButton from "@/components/register/register-nav-button";
import HomeNavButton from "@/components/home/home-nav-button";

export default function HeaderAuth() {
    return (
        <div className="flex justify-end gap-4 items-center p-4">
            <HomeNavButton />
            <LoginNavButton />
            <RegisterNavButton />
        </div>
    )
}
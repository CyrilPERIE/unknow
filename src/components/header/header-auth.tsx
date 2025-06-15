import LoginButton from "@/components/login/login-button";
import RegisterButton from "@/components/register/register-button";
import HomeButton from "@/components/home/home-button";

export default function HeaderAuth() {
    return (
        <div className="flex justify-end gap-4 items-center p-4">
            <HomeButton />
            <LoginButton />
            <RegisterButton />
        </div>
    )
}
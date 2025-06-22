import staticText from "@/lib/locales/fr/static-text";
import RegisterCredentialsForm from "@/components/register/register-credentials-form";
import { cn } from "@/lib/utils";

export default function RegisterPage({ className }: { className?: string }) {
    return (
        <div className={cn(`flex flex-col items-center justify-center max-w-96 mx-auto`, className)}>
            <h1 className="text-2xl font-bold mb-4">{staticText.register.title}</h1>
            <RegisterCredentialsForm className="w-full" />
        </div>
    )
}
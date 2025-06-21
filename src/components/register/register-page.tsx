import staticText from "@/lib/locales/fr/static-text";
import RegisterCredentialsForm from "@/components/register/register-credentials-form";

export default function RegisterPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen max-w-96 mx-auto">
            <h1 className="text-2xl font-bold mb-4">{staticText.register.title}</h1>
            <RegisterCredentialsForm className="w-full" />
        </div>
    )
}
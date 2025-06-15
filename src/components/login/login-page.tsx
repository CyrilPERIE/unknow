import staticText from "@/lib/locales/fr/static-text";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">{staticText.login.title}</h1>
        </div>
    )
}
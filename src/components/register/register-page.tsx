import staticText from "@/lib/locales/fr/static-text";

export default function RegisterPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">{staticText.register.title}</h1>
        </div>
    )
}
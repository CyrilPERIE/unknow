import PasswordUpdateForm from "@/components/password/password-update-form";
import staticText from "@/lib/locales/fr/static-text";

export default function PasswordUpdatePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-96 mx-auto">
      <h1 className="text-2xl font-bold mb-4">{staticText.passwordForgotten.title}</h1>
      <PasswordUpdateForm />
    </div>
  );
}
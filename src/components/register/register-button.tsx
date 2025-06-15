import routes from "@/lib/routes/routes";
import staticText from "@/lib/locales/fr/static-text";
import NavButton from "@/components/generic/nav-button";

export default function RegisterButton() {
    const url = routes.register;
    const text = staticText.register.title;
    const variant = "outline";
    return (
        <NavButton url={url} text={text} variant={variant} />
    )
}
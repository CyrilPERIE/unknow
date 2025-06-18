import routes from "@/lib/routes/routes";
import staticText from "@/lib/locales/fr/static-text";
import NavButton from "@/components/ui/nav-button";

export default function RegisterNavButton() {
  const url = routes.register;
  return <NavButton url={url}>{staticText.register.title}</NavButton>;
}

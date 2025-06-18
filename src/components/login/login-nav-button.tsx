import routes from "@/lib/routes/routes";
import staticText from "@/lib/locales/fr/static-text";
import NavButton from "@/components/ui/nav-button";

export default function LoginNavButton() {
  const url = routes.login;
  return <NavButton url={url}>{staticText.login.title}</NavButton>;
}

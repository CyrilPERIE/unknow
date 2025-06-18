import routes from "@/lib/routes/routes";
import staticText from "@/lib/locales/fr/static-text";
import NavButton from "@/components/ui/nav-button";

export default function HomeNavButton() {
  const url = routes.home;
  const text = staticText.home.title;
  const variant = "outline";
  return (
    <NavButton
      url={url}
      text={text}
      variant={variant}
      className="font-semibold underline"
    />
  );
}

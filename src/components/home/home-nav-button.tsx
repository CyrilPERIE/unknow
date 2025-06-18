import routes from "@/lib/routes/routes";
import staticText from "@/lib/locales/fr/static-text";
import NavButton from "@/components/ui/nav-button";

export default function HomeNavButton() {
  const url = routes.home;
  const variant = "outline";
  return (
    <NavButton url={url} variant={variant} className="font-semibold underline">
      {staticText.home.title}
    </NavButton>
  );
}

import NavButton from "@/components/ui/nav-button";
import staticText from "@/lib/locales/fr/static-text";
import routes from "@/lib/routes/routes";

export default function DashboardNavButton() {
  const url = routes.dashboard;
  const text = staticText.dashboard.title;
  const variant = "outline";
  return <NavButton url={url} text={text} variant={variant} />;
}

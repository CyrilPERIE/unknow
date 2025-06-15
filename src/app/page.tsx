import staticText from "@/lib/locales/fr/static-text";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{staticText.metadata.title}</h1>
      <p className="text-lg">{staticText.metadata.description}</p>
    </div>
  );
}

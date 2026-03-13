import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "Description", content: "Resumind is a platform for managing and analyzing resumes." },
  ];
}

export default function Home() {
  return <main>

  </main>;
}

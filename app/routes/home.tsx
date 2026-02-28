import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "READTalk" },
    { name: "description", content: "Welcome to READTalk Messenger" },
  ];
}

export default function Home() {
  return <Welcome />;
}

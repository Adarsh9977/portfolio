import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Divider } from "@/components/divider";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Intro/>
      <Divider/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

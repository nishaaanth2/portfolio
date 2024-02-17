import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6377298249648763"
     crossorigin="anonymous"></script>
<!-- horizontal -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6377298249648763"
     data-ad-slot="6731279861"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </main>
  );
}

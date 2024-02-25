import AboutMe from "@/components/AboutMe";
import About_Me from "./about_me/page";
import Services from "./services/page";
import Projects from "./projects/page";
import ContactUs from "./contact_us/page";

export default function Home() {
  return (
    <><AboutMe /><About_Me />
    <Services/>
    <Projects/>
    <ContactUs/>
    </>
  );
}

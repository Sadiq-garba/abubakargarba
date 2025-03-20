import About from "../components/About";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import { NavLink } from "../models";
import Experience from "../components/experience";
import { IMAGES } from "../assets/index";
import { Iratein } from "../utils/texts";

const Home = () => {
  const weblink: NavLink[] = [
    { name: "Home", path: "/" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <div className="">
      <Navbar logo={"Abubakar Garba"} links={weblink} />
      <Intro
        bio={"Software Developer"}
        text={"I'm Abubakar Garba"}
        image={"hhhhhhhh"}
        button={"See My Resume"}
      />
      <About text={Iratein.text} image={IMAGES.AboutImage} />
      <Tech />
      <Experience
        text={
          "As a software developer at Iratein, I played a key role in building and enhancing the company's inventory application. I developed the log module, ensuring efficient tracking and record-keeping within the system. I contributed to the design and implementation of the adjustment UI, enhancing the user experience and functionality of inventory adjustments. Additionally, I built the settings AI, optimizing system configurations and user preferences. Collaborating closely with the design team, I helped shape the overall development of the inventory app, implementing new features that improved usability and efficiency.."
        }
        image={IMAGES.Hello}
        secimage={IMAGES.Programmer}
        texttwo={
          "At LightedPHP, I played a key role in developing and integrating CRM modules, enhancing system functionality and streamlining business operations. I optimized application performance through extensive code refactoring, reducing load times and improving scalability. By implementing new workflows, I improved system efficiency, user experience, and overall productivity. My contributions ensured a more responsive and high-performing application, aligning with business needs and user expectations."
        }
      />
    </div>
  );
};

export default Home;

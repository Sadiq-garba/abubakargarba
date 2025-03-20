import Navbar from "../components/Navbar";
import { NavLink } from "../models";
const Projects = () => {
  const weblink: NavLink[] = [
    { name: "Home", path: "/" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ];
  return <Navbar logo={"Abubakar Garba"} links={weblink} />;
};

export default Projects;

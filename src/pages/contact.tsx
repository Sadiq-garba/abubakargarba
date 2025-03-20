import Navbar from "../components/Navbar";
import { NavLink } from "../models";
import { IMAGES } from "../assets/index";

const Contact = () => {
  const weblink: NavLink[] = [
    { name: "Home", path: "/" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact Me", path: "/contact" },
  ];

  const handleNavigate = () => {
    window.location.href = "mailto:sadiq.garba305@gmail.com";
  };

  return (
    <>
      <Navbar logo={"Abubakar Garba"} links={weblink} />

      <div className="row justify-content-center align-items-center text-center w-100 gap-5 p-5">
        <div className="col-md-12"></div>
        <div
          className="col-md-5 "
          // data-aos={"animate__animated animate__slideInRight"}
          data-aos="slide-right"
        >
          <img
            src={IMAGES.Envelope}
            style={{ width: "400px", height: "400px" }}
          />
        </div>
        <div
          className="col-md-5 "
          // data-aos={"animate__animated animate__slideInLeft"}
          data-aos="slide-left"
        >
          <div
            className=""
            style={{
              color: "rgb(105, 148, 234)",
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            <h1 style={{ fontWeight: "700", marginBottom: "20px" }}>
              Let’s Build Something Great
            </h1>
            <h3>ADDRESS</h3>
            <p>
              Block 1, Plot 5 sylvester Iruh street, Mount Patti road Lokoja
            </p>
            <h3>PHONE NUMBER</h3>
            <p>+2347013950375</p>
            <h3>EMAIL</h3>
            <a
              className="btn btn-lg btn-primary"
              onClick={() => handleNavigate()}
              style={{ color: "white" }}
            >
              Send an email
            </a>
          </div>
        </div>
        <div className="col-md-12">
          <p
            className="text-center"
            style={{ color: "rgb(105, 148, 234)", marginTop: "50px" }}
            data-aos="slide-up"
          >
            @Abubakar Garba {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;

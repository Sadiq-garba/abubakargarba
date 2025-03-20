import { Info } from "../models/index";
import { IMAGES } from "../assets/index";
import sound from "../sounds/modern.wav";

const Intro = ({ bio, button, text }: Info) => {
  const goToExternal = (web: string) => {
    if (web === "github") {
      window.location.href = "https://github.com/Sadiq-garba"; // This will navigate to the URL
    } else if (web === "linkedin") {
      window.location.href = "https://linkedin.com";
    } else if (web === "whatsapp") {
      window.location.href = "https://alvo.chat/5MRd";
    } else if (web === "resume") {
      window.location.href = "https://alvo.chat/5MRd";
      new Audio(sound).play();
    }
  };

  return (
    <>
      <div
        className="header d-flex align-items-center justify-content-center"
        style={{ paddingTop: "170px" }}
      >
        <div className="row justify-content-center align-items-center text-center w-100 gap-5">
          <div
            className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center text-center"
            data-aos={"slide-right"}
          >
            <h2 className="text-intro">{text}</h2>
            <p className="sub-text">{bio}</p>
            <div className="icon-container">
              <i
                className="fa-brands fa-linkedin icon-circle"
                onClick={() => goToExternal("linkedin")}
              ></i>
              <i
                className="fa-brands fa-whatsapp icon-circle"
                onClick={() => goToExternal("whatsapp")}
              ></i>
              <i
                className="fa-brands fa-github icon-circle"
                onClick={() => goToExternal("github")}
              ></i>
            </div>
            <div
              className="btn btn-light btn-lg"
              onClick={() => goToExternal("resume")}
              style={{ border: "none" }}
            >
              {button}
            </div>
          </div>
          <div
            className="col-md-5 col-12 d-flex justify-content-center "
            data-aos={"slide-left"}
          >
            <div
              style={{
                width: "400px",
                height: "400px",

                padding: "20px",
              }}
            >
              <img
                src={IMAGES.Developer}
                className="img-fluid"
                alt="Description"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

import { Abt } from "../models/index";

const About = ({ text, image }: Abt) => {
  return (
    <>
      <div>
        <div className="row justify-content-center align-items-center text-center w-100 gap-5 p-3">
          <div className="col-md-12">
            <h1
              className="text-center m-3"
              style={{ color: "rgb(105, 148, 234)" }}
            >
              What I Do
            </h1>
          </div>
          <div className="col-md-6 col-12 " data-aos="slide-right">
            <div
              className=""
              style={{
                color: "rgb(105, 148, 234)",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              {text}
            </div>
          </div>
          <div
            className="col-md-5 "
            // data-aos={"animate__animated animate__slideInRight"}
            data-aos="slide-left"
          >
            <img src={image} style={{ width: "300px", height: "300px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

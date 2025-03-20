import { Abt } from "../models/index";

const Experience = ({ text, image, texttwo, secimage }: Abt) => {
  return (
    <>
      <div>
        <div className="row justify-content-center align-items-center text-center w-100 gap-5 p-5">
          <div className="col-md-12"></div>
          <div
            className="col-md-5 "
            // data-aos={"animate__animated animate__slideInLeft"}
            data-aos="slide-right"
          >
            <div
              className=""
              style={{
                color: "rgb(105, 148, 234)",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              <h1 style={{ fontWeight: "700" }}>EXPERIENCE AT IRATEIN</h1>
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
          <div
            className="col-md-5 "
            // data-aos={"animate__animated animate__slideInRight"}
            data-aos="slide-right"
          >
            <img src={secimage} style={{ width: "300px", height: "300px" }} />
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
              <h1 style={{ fontWeight: "700" }}>EXPERIENCE AT LIGHTEDPHP</h1>
              {texttwo}
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
      </div>
    </>
  );
};

export default Experience;

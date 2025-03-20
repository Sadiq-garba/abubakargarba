import { CODE } from "../assets/index";

const Tech = () => {
  return (
    <>
      <div>
        <div className="row justify-content-center align-items-center text-center w-100 gap-5 p-5">
          <div className="col-md-12">
            <h1
              className="text-center m-3"
              style={{ color: "rgb(105, 148, 234)" }}
            >
              Tech stacks
            </h1>
          </div>

          {CODE.image.map((item) => (
            <div
              className="col-md-2 col-3 "
              // data-aos={"animate__animated animate__slideInLeft"}
              data-aos="slide-right"
              key={item.id}
            >
              <img
                src={item.img}
                style={{ width: "100px", height: "100px" }}
                className="transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;

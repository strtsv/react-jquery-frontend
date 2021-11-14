import React from "react";

import i1 from "../../assets/images/counter-img-1-86x78.png"
import i2 from "../../assets/images/counter-img-2-73x81.png"

class About extends React.Component {
  render() {
    return (
      <section className="section-xl section bg-white section-collapse">
        <div className="container">
          <h2 className="text-center">About me</h2>
          <div className="row row-40">
            <div className="col-md-6 col-lg-4">
              <div className="row row-30 row-lg-65">
                <div className="col-sm-6 col-md-12">
                  <div className="media align-items-lg-center">
                    <img
                      src={i1}
                      alt
                      width={86}
                      height={78}
                    />
                    <div className="media-body pl-3 pl-xl-5">
                      {}
                      <div className="box-counter">
                        <div className="box-counter-main">
                          <div className="counter">208</div>
                        </div>
                        <p className="box-counter-title">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className="media align-items-lg-center">
                    <img
                      src={i2}
                      alt
                      width={73}
                      height={81}
                    />
                    <div className="media-body pl-3 pl-xl-5">
                      {}
                      <div className="box-counter">
                        <div className="box-counter-main">
                          <div className="counter">750</div>
                        </div>
                        <p className="box-counter-title">Appreciations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-8">
              <p>
                Vehicula lacus, et ultrices metus fermentum a. Nullam lacus quis
                libero tempor faucibus. Aenean pulvinar tortor eget fermentum
                volutpat ua. Nunc at luctus.{" "}
                <a className="button button-link" href="#">
                  <span>Nam malesuada risus eget</span>
                </a>{" "}
                tortor condim malesua. Maecenas vitae lectus ac velit feugiat
                malesuada.
              </p>
              <p className="mt-4 mt-lg-5">
                Duis varius urna dui, ullamcorper feugiat augue luctus vel.
                Integer ac elit est. Sed ac dolor at sapien mollis.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

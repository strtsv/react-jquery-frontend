import React from "react";

import i1 from "../../assets/images/bg-decorate-1.png";
import i2 from "../../assets/images/bg-decorate-2.png";

class RalphHawkins extends React.Component {
  render() {
    return (
      <section className="section bg-white section-collapse section-single">
        <div className="section-single-decore">
          <div
            className="section-single-decore-item"
            style={{
              backgroundImage: "url(" + i1 + ")",
            }}
            data-parallax="{rate:-50}"
          />
          <div
            className="section-single-decore-item"
            style={{
              backgroundImage: "url(" + i2 + ")",
            }}
            data-parallax="{rate:-50}"
          />
        </div>
        <div className="section-single-inner">
          <div className="section-xl">
            <div className="container text-center">
              <div className="row justify-content-center">
                <div
                  className="col-md-10 col-lg-9 col-xl-8 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h1>Ralph Hawkins</h1>
                  <p>
                    Front-end web developer, designer and overall good human. I
                    enjoy working with people who care on projects that make me
                    think.
                  </p>
                  <a className="button button-link" href="#">
                    <span>Let`s talk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RalphHawkins;

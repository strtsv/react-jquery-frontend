import React from "react";

import i1 from "../../assets/images/decorate-1-166x166.png"
import i2 from "../../assets/images/decorate-2-593x593.png"
import i3 from "../../assets/images/history-1-631x705.png"

class History extends React.Component {
  render() {
    return (
      <section className="section section-xl section-collapse bg-white">
        <div className="container">
          <div className="row row-50 align-items-center">
            <div className="col-md-6 wow fadeInLeft">
              <h2>
                Employment
                <br />
                history
              </h2>
              <div className="history-item">
                <h4>Freelance web developer</h4>
                <div className="history-date">2018 - present</div>
                <p>
                  planning, development, testing, and maintainance of various
                  web applications.
                </p>
              </div>
              <div className="history-item">
                <h4>Senior Wev Developer, Allen Hamilton</h4>
                <div className="history-date">2015 - 2018</div>
                <p>
                  Worked as a productive and positive team member to design,
                  code, test, report and debug operations.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box-animate block-md">
                <div className="image-block">
                  <img
                    className="wow fadeInLeft image-decore-1"
                    src={i1}
                    alt
                    width={166}
                    height={166}
                  />
                  <img
                    className="wow fadeInRight image-decore-2"
                    src={i2}
                    alt
                    width={593}
                    height={593}
                    data-wow-delay="0.15"
                  />
                  <img
                    className="wow fadeIn image-main"
                    src={i3}
                    alt
                    width={631}
                    height={705}
                    data-wow-delay="0.25"
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row row-10">
                <div className="col-sm-6 col-md-4">
                  <ul className="list-marked list-marked-md">
                    <li>Web Design</li>
                    <li>Front-end development</li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4">
                  <ul className="list-marked list-marked-md">
                    <li>CMS integration</li>
                    <li>Perfomance optimozation</li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4">
                  <ul className="list-marked list-marked-md">
                    <li>Technical SEO</li>
                    <li>E-commerce websites</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default History;

import React from "react";

class Awards extends React.Component {
  render() {
    return (
      <section className="section section-xl section-collapse bg-white">
        <div className="container">
          <div className="row row-30 justify-content-between align-items-center">
            <div className="col-md-6 col-xl-5">
              <img
                className="wow fadeInLeft"
                src="images/img-awards-1-472x610.png"
                alt
                width={472}
                height={610}
                data-parallax="{rate:-50}"
              />
            </div>
            <div className="col-md-6">
              <div className="box-animate">
                <h2 className="wow fadeInRight">My awards</h2>
                <p className="wow fadeInRight" data-wow-delay=".2s">
                  As an experienced web developer, I’ve received some notable
                  awards over the years. The prizes listed below helped me to
                  get more recognition of my projects:
                </p>
                <ul
                  className="list-marked wow fadeInRight"
                  data-wow-delay=".4s"
                >
                  <li>Awwwards Honorable mention </li>
                  <li>Awwwards Mobile Excellence</li>
                  <li>CSSDA Website of the day </li>
                  <li>CSSDA Special Kudos </li>
                  <li>Awwwards Site Of The Day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Awards;

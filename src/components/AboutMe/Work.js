import React from "react";

class Work extends React.Component {
  render() {
    return (
      <section className="section-xl section bg-white section-collapse">
        <div className="container">
          <div className="row row-50 text-center">
            <div className="col-12">
              <h2>I’ve worked on projects for</h2>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-3.svg" alt />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-4.svg" alt />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-7.svg" alt />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-1.svg" alt />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-2.svg" alt />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-5.svg" alt />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-6.svg" alt />
              </a>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <a className="work-item" href="#">
                <img src="images/work-logo-8.svg" alt />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;

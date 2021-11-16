import React from "react";

import i1 from "../../assets/images/feature-1-189x257.png"
import i2 from "../../assets/images/feature-2-141x257.png"
import i3 from "../../assets/images/feature-3-219x199.png"

class Features extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-gray-100">
        <div className="container">
          <div className="box-animate text-center">
            <h2 className="wow fadeInDown">How I Work</h2>
            <p className="wow fadeInUp block-lg">
              Take a look at my working process in detail. It describes how i
              work with both individual and corporate clients to achieve the
              best possible result.
            </p>
            <div className="row row-40 gutters-xl-50">
              <div className="col-sm-6 col-lg-4">
                <div className="features-item wow fadeInUp">
                  <div className="features-item-figure">
                    <div className="features-item-figure-inner">
                      <img
                        src={i1}
                        alt
                        width={189}
                        height={257}
                        data-parallax="{rate:-50}"
                      />
                    </div>
                    <div className="features-item-figure-title figure-primary">
                      1
                    </div>
                  </div>
                  <div className="features-item-caption">
                    <h4>
                      <a href="#">Initial consultation</a>
                    </h4>
                    <p>
                      First, I get to know my client better and discover what
                      he/she needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="features-item wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="features-item-figure">
                    <div className="features-item-figure-inner">
                      <img
                        src={i2}
                        alt
                        width={141}
                        height={257}
                        data-parallax="{rate:-50}"
                      />
                    </div>
                    <div className="features-item-figure-title figure-secondary">
                      2
                    </div>
                  </div>
                  <div className="features-item-caption">
                    <h4>
                      <a href="#">Concept design</a>
                    </h4>
                    <p>
                      The creation of a concept helps in the further website
                      development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="features-item wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="features-item-figure">
                    <div className="features-item-figure-inner">
                      <img
                        src={i3}
                        alt
                        width={219}
                        height={199}
                        data-parallax="{rate:-50}"
                      />
                    </div>
                    <div className="features-item-figure-title figure-secondary-2">
                      3
                    </div>
                  </div>
                  <div className="features-item-caption">
                    <h4>
                      <a href="#">Project development</a>
                    </h4>
                    <p>
                      At this stage, I develop your website and test it to
                      present the final result.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center">
                <a className="button button-link" href="#">
                  <span>Featured works</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;

import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-white section-collapse">
        <div className="container">
          <h2 className="text-center">About me</h2>
          <div className="row row-30">
            <div className="col-md-6">
              <p>
                I’m Ralph. As a passionate front-end developer, I prefer to run
                my own business rather than routine office work. Such lifestyle
                helps me enjoy my favourite hobbie –{" "}
                <a className="button button-link" href="#">
                  <span>traveling & listening to music</span>
                </a>{" "}
                . Being able to do your job in every corner of our planet is
                amazing!
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Graphic design is also my passion! Mostly because it helps me to
                overcome my emotions and show people part of my world. I’m
                looking forward to work with designers and creative experts who
                are as inspired and enthusiastic as I am.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

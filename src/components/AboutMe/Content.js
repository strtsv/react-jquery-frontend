import React from "react";

class Content extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-white section-collapse">
        <div className="container">
          <h2 className="text-center">Employment history</h2>
          <div className="timeline" data-auto-timeline>
            <div className="timeline-item">
              <div className="history-item">
                <h4>Junior Wev Developer, Morrison company</h4>
                <div className="history-date">2014 - 2015 </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore...
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="history-item">
                <h4>Senior Wev Developer, Allen Hamilton</h4>
                <div className="history-date">2015 - 2018</div>
                <p>
                  Vel fringilla est ullamcorper eget. Ullamcorper velit sed
                  ullamcorper morbi tincidunt. Eget aliquet nibh praesent...
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="history-item">
                <h4>Freelance web developer</h4>
                <div className="history-date">2018 - present</div>
                <p>
                  Commodo odio aenean sed adipiscing diam donec adipiscing.
                  Ultricies leo integer malesuada nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;

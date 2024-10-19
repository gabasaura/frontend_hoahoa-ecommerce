import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter bg-black">
      <div className="container-fluid">
        <div className="newsletter jarallax">
          <img src="images/bg-newsletter.jpg" alt="newsletter" className="jarallax-img" />
          <div className="row py-5 justify-content-center">
            <div className="col-md-6">
              <div className="row g-5 my-4 align-items-baseline">
                <div className="col-md-7">
                  <h3 className="display-4 m-0 text-md-end">Join Our Newsletter</h3>
                </div>
                <div className="col-md-5">
                  <p className="fs-6 text-gray">Sign Up for our newsletter and never miss any offers</p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12">
                  <form id="form" className="d-flex flex-row gap-0">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email Address"
                      className="form-control rounded-0 rounded-start"
                    />
                    <button className="btn btn-primary text-uppercase rounded-0 rounded-end px-5">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

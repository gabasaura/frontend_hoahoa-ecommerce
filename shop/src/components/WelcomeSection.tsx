import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-5 my-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10">
            <span className="text-primary text-uppercase">Welcome</span>
            <h2 className="fs-2 text-center">
              We're constantly testing new products, researching recent trends in the tech space, and updating our list
              of cool gadgets accordingly.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

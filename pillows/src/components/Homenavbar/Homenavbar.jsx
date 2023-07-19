import React from "react";

function Homenavbar() {
  return (
    <nav className="navbar navbar-main navbar-expand-xl py-0 shadow">
      <div className="container-fluid">
        <a
          href="/"
          name="Pillow.com"
          title="Pillows.com"
          aria-label="Pillows.com"
          className="navbar-brand mr-5 d-none d-xl-block"
        >
          <img src="" alt="Pillows.com" className="img-fluid" />
        </a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav align-items-center mx-auto"></ul>
            <ul className="navbar-nav navbar-icon-links align-items-center ml-auto"></ul>
          </div>
        </div>
    </nav>
  );
}

export default Homenavbar;

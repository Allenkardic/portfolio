/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function Notfound() {
  return (
    <div className="error-page">
      <div>404</div>
      <div>SORRY, PAGE NOT FOUND</div>
      <Link to="/">
        <div className="btn-error">Home</div>
      </Link>
    </div>
  );
}
export default Notfound;

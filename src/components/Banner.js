import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Banner.css";
import { Icon } from "semantic-ui-react";
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

const Banner = () => {
  function sayHello() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      // alert('Hello!');
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div id="banner" class="banner">
      <a href="javascript:void(0);" class="ico" onClick={sayHello}>
        &#9776;
      </a>
      <div className="topnav" id="topnav">
        <div id="n-buttons">
          <button
            className="button"
            class="ui button"
            onClick={() => (window.location.href = "/")}
          >
            home page
          </button>
          <button
            onClick={() => (window.location.href = "/projects")}
            className="button"
            class="ui button"
          >
            my projects
          </button>
          <button
            className="button"
            class="ui button"
            onClick={() => (window.location.href = "/aboutme")}
          >
            get to know me
          </button>
          <button
            className="button"
            class="ui button"
            onClick={() => (window.location.href = "/contactme")}
          >
            contact me
          </button>
        </div>
        <div id="si">
          <Icon
            size="large"
            link
            name="linkedin"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jenna-jubeir-1a3b69185/")
            }
          ></Icon>
          <Icon
            size="large"
            onClick={() => window.open("https://github.com/jennajubeir")}
            link
            name="github"
          ></Icon>
          <Icon
            size="large"
            onClick={() =>
              window.open("mailto:jennajubeir2021@u.northwestern.edu")
            }
            link
            name="mail"
          ></Icon>
        </div>
      </div>
    </div>
  );
};
export default Banner;

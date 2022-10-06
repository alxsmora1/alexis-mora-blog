import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode,faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faHackerrank, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import avatar from '../../images/avataaars.png';

const Masthead = () => {
  return (
      <header class="masthead bg-primary text-center" id="masthead">
          <div class="container d-flex align-items-center flex-column">
              <img class="masthead-avatar mb-3" src={avatar} alt="Avatar" />
              <h1 class="masthead-heading text-uppercase text-color mb-0">Alexis Mora</h1>
              <div class="divider-custom divider-color">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><FontAwesomeIcon icon={faCode} /> </div>
                  <div class="divider-custom-line"></div>
              </div>
              <p class="masthead-subheading font-weight-light text-color mb-0">Full Stack Web Developer</p>
              <br/>
              <div class="col-lg-5 mb-5 mb-lg-0 justify-items-center">
                  <a class="btn btn-outline-color btn-social mx-1" href="https://twitter.com/alxsmora1" target="__BLANK"><FontAwesomeIcon className="text-color" icon={faTwitter} /></a>
                  <a class="btn btn-outline-color btn-social mx-1" href="https://www.linkedin.com/in/alexis-mora-a15528171/" target="__BLANK"><FontAwesomeIcon className="text-color" icon={faLinkedinIn} /></a>
                  <a class="btn btn-outline-color btn-social mx-1" href="https://www.hackerrank.com/alxsmora1" target="__BLANK"><FontAwesomeIcon className="text-color" icon={faHackerrank} /></a>
                  <a class="btn btn-outline-color btn-social mx-1" href="https://github.com/alxsmora1" target="__BLANK"><FontAwesomeIcon className="text-color" icon={faGithub} /></a>
                  <a class="btn btn-outline-color btn-social mx-1" href="https://www.dropbox.com/s/kq2nyahx7kl0kev/resume_english.pdf?dl=0" target="__BLANK"><FontAwesomeIcon className="text-color" icon={faFileArrowDown} /></a>
              </div>
              <br/>
          </div>
      </header>
  );
}

export default Masthead;

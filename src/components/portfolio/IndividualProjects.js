import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "@fortawesome/fontawesome-free/css/all.min.css";

const IndividualProjects = (props) => {
  const showModal = (title, body, image, skills, link, linkCode) => {
    const listItems = skills.map((skill) => " " + skill);

    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: `<h1 class="text-center">${title}</h1>`,
      html:`
        <img class="img-fluid text-center shadow rounded mb-2" src="${image}" alt="" />
        <br><br>
        <h5 class="text-center"><strong>Description</strong></h5>
        <p class="text-center lead"> ${body} </p>
        <h5 class="text-center"><strong>Build with: </strong></h5>
        ${listItems}
        <br><br>
        <div class="row">
          <div class="col-md-6">
            <a class="btn btn-primary form-control" href="${link}" target="_BLANK"> <i class="fas fa-globe"></i> Live Project</a>
          </div>
          <div class="col-md-6">
            <a class="btn btn-primary form-control" href="${linkCode}" target="_BLANK"> <i class="fa-brands fa-github"></i> Github Code</a>
          </div>
        </div>
        `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return(
    <div class="col-md-6 col-lg-4 mb-5">
      <div class="h-100">
      <h6 class="text-center text-uppercase">{props.title}</h6>
      <div class="portfolio-item mx-auto shadow" data-aos="flip-left">
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div class="portfolio-item-caption-content text-center text-white">
            <button
              className="btn btn-info"
              onClick={() =>
                showModal(
                  props.title,
                  props.body,
                  props.image,
                  props.skills,
                  props.link,
                  props.linkCode
                )
              }
            >
              <FontAwesomeIcon icon={faCircleInfo} /> Project Details
            </button>
          </div>
        </div>
        <img class="img-fluid" src={props.image} alt="" />
        </div>
        </div>
    </div>
  );
}

export default IndividualProjects;

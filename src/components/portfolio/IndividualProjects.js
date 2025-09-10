import React from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const IndividualProjects = (props) => {
  const showModal = (title, body, image, skills, link, linkCode) => {
    const listItems = skills.map((skill) => {
      return "" + skill + "<br>";
    }).join('');

    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: `<h1 class="text-center">${title}</h1>`,
      html:`
        <img class="img-fluid text-center shadow rounded" src="${image}" alt="" />
        <p class="text-center mt-2"><strong>Description</strong></p>
        <p class="text-center lead"> ${body} </p>
        <p class="text-center"><strong>Build with: </strong></P>
        ${listItems}
        <br>
        <div class="row">
          <div class="col-md-6">
            <a class="btn btn-primary form-control" href="${link}" target="_BLANK"> Live Project</a>
          </div>
          <div class="col-md-6">
            <a class="btn btn-primary form-control" href="${linkCode}" target="_BLANK"> Github Code</a>
          </div>
        </div>
        `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return(
    <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
      <div class="portfolio-item mx-auto shadow h-100" data-aos="flip-left">
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div class="portfolio-item-caption-content text-center text-white">
            <p>{props.title}</p>
            <button
              className="btn btn-warning"
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
              Show More
            </button>
          </div>
        </div>
        <img class="rounded float-start" src={props.image} alt="" />
      </div>
    </div>
  );
}

export default IndividualProjects;

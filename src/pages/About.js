import React from "react";
import './About.css';

function About() {
  return (
    <>
      <div class="service py-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-10 col-11 mx-auto">
              <div class="mt-2 mb-5 text-center">
                <h1 class="service_heading">OUR SERVICES</h1>
              </div>
              <div class="row ">
                <div class="col-md-6 mt-md-2 m-0">
                  <span class="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                    What We Do
                  </span>
                  <h4>Awesome with Extra Ordinary Flexibility Features</h4>
                  <h6 class="font-weight-light subtitle">
                    You can relay on our amazing features list and also our
                    customer services will be great experience for you without
                    doubt and in no-time
                  </h6>
                  <div class="row mt-md-5">
                    <div class="col-md-6 mt-3">
                      <h6 class="font-weight-medium">Web Development</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod.
                      </p>
                    </div>
                    <div class="col-md-6 mt-3">
                      <h6 class="font-weight-medium">E-Commerce Website</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod.
                      </p>
                    </div>
                    <div class="col-md-6 mt-3">
                      <h6 class="font-weight-medium">Digital Marketing</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod.
                      </p>
                    </div>
                    <div class="col-md-6 mt-3">
                      <h6 class="font-weight-medium">App Development</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod.
                      </p>
                    </div>
                    <div class="col-lg-12 my-4">
                      <a class="btn btn-sm btn-info" href="#">
                        {" "}
                        check More{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mt-md-5 m-0">
                  <div class="row wrap-service">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            class="rounded img-shadow img-fluid"
                            src="images/ux.webp"
                          />
                        </div>
                        <div class="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            class="rounded img-shadow img-fluid"
                            src="/images/ui.webp"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 uneven-box">
                      <div class="row">
                        <div class="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            class="rounded img-shadow img-fluid"
                            src="public/images/pic1.png"
                          />
                        </div>
                        <div class="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            class="rounded img-shadow img-fluid"
                            src="images/img1.webp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        crossorigin="anonymous"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      ></script>
      <script
        crossorigin="anonymous"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
      ></script>
    </>
  );
}

export default About;

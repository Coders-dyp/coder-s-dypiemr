import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Events.css';
import { Card } from '@mui/material';

import img_1 from '../../../assets/images/Induction Program/img_1.jpg';
import API_1 from '../../../assets/images/API Event/API_1.jpeg';
import UP_eve from '../../../assets/images/contact-1.jpeg';

function Events() {
  return (

    <div className="container">
      <h1 className="text-center">Our Successful Events</h1>
      <br />
      <div className="text-center">
        <div class="row g-3">

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card card-outline-primary shadow">
              <img src={img_1} alt="img" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Induction Program</h5>
                <p class="card-text">Nov 2022 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus? Officia modi enim provident consequatur? Voluptatem, et nemo? Inventore, repellat!</p>
                <button id="register" class="btn btn-outline-primary shadow" name="btn-send" >
                  <a href="#" target="_blank">Explore</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card card-outline-primary shadow">
              <img src={API_1} alt="img" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">API Event</h5>
                <p class="card-text">Dec 2022 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus? Officia modi enim provident consequatur? Voluptatem, et nemo? Inventore, repellat!</p>
                <button id="register" class="btn btn-outline-primary shadow" name="btn-send">
                  <a href="#" target="_blank">Explore</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-outline-primary shadow">
              <img src={UP_eve} alt="img" class="card-img-top" /> 
                <div class="card-body">
                  <h5 class="card-title">Upcoming Event</h5>
                  <p class="card-text">Feb 2023 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus? Officia modi enim provident consequatur? Voluptatem, et nemo? Inventore, repellat!</p>
                  <button id="register" class="btn btn-outline-primary shadow" name="btn-send">
                                     <a href="#" target="_blank">Explore</a>
                  </button>
                </div>
              </div>
            </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div class="card card-outline-primary shadow">
              <img src={UP_eve} alt="img" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Upcoming Event</h5>
                <p class="card-text">Feb 2023 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus? Officia modi enim provident consequatur? Voluptatem, et nemo? Inventore, repellat!</p>
                <button id="register" class="btn btn-outline-primary shadow" name="btn-send">
                  <a href="#" target="_blank">Explore</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div class="card card-outline-primary shadow">
              <img src={UP_eve} alt="img" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Upcoming Event</h5>
                <p class="card-text">Feb 2023 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus? Officia modi enim provident consequatur? Voluptatem, et nemo? Inventore, repellat!</p>
                <button id="register" class="btn btn-outline-primary shadow" name="btn-send">
                  <a href="#" target="_blank">Explore</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div class="card card-outline-primary shadow">
              <img src={UP_eve} alt="img" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Upcoming Event</h5>
                <p class="card-text">Feb 2023 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus? Officia modi enim provident consequatur? Voluptatem, et nemo? Inventore, repellat!</p>
                <button id="register" class="btn btn-outline-primary shadow" name="btn-send">
                  <a href="#" target="_blank">Explore</a>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Events


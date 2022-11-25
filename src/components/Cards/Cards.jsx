import React from 'react';
import './Cards.css';

import svg from "../../assets/images/Group Chat-amico.svg"

function Cards() {
  return (
    <div className='cards'>
     
      <div className="container-outside">
        <h1>Welcome to Coder's Club</h1>
      </div>

      <div className='container-inside'>

        <div className="container-left">
          <img className='img_1' src={svg} alt="" />
        </div>

        <div className="container-right">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eligendi eos amet eveniet quae deserunt illum excepturi quidem officiis, quo aperiam voluptatem nemo sapiente saepe vero, placeat corporis at maiores tempore. Pariatur, excepturi totam?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eligendi eos amet eveniet quae deserunt illum excepturi quidem officiis, quo aperiam voluptatem nemo sapiente saepe vero, placeat corporis at maiores tempore. Pariatur, excepturi totam?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eligendi eos amet eveniet quae deserunt illum excepturi quidem officiis, quo aperiam voluptatem nemo sapiente saepe vero, placeat corporis at maiores tempore. Pariatur, excepturi totam?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eligendi eos amet eveniet quae deserunt illum excepturi quidem officiis, quo aperiam voluptatem nemo sapiente saepe vero, placeat corporis at maiores tempore. Pariatur, excepturi totam?</p>
        </div>
      </div>
    </div>

  );
}

export default Cards;
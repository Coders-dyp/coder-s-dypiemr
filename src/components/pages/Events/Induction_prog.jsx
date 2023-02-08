import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Events.css';
import { Card } from '@mui/material';

// import img_1 from '/src/assets/images/main.jpeg';
// import img_1 from '../assets/images/main.jpeg';

// function img(){
//   return(
//     <div className="wrapper">
//       <Card img="https://unsplash.com/photos/x9eGyNSCl8E" />
//     </div>
//   )
// }
// function App(){
//   return(
//     <div className="wrapper">
//       <Card
//         img=
//         "https://unsplash.com/photos/x9eGyNSCl8E"
//         title="Induction Program"
//         description="Some quick example text to build on the card title and make up the bulk of the card's content."
//         />
      
//     </div>
//   )
// }
function Events() {
  return (

    <div className="container">
      <h1 className="text-center">Our Successful Events</h1>
      <br />
    

      
          <div className="text-center">
        <div class= "row g-3">
 
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-outline-primary shadow">
               <img src={"main.jpeg"} alt="img" class="card-img-top" /> 
                {/* <img src={props.image} alt="img" class="card-img-top" /> */}
                {/* <div className="e-card-image"></div> */}
                <div class="card-body">
                  <h5 class="card-title">Induction Program</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, necessitatibus? Officia modi enim provident consequatur? Voluptatem, et nemo? Inventore, repellat!</p>
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


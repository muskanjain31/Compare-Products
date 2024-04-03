// import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../../assets/images/2.jpg';
// import img2 from '../../assets/images/4.jpg';
// import img3 from '../../assets/images/5.jpg';



// function CarouselPage() {
//   return (
//     <div>
//     <Carousel>
//       <Carousel.Item>
//         <img className='d-block w-100'
//         src={img1}
//         alt='First slide'
//          />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img className='d-block w-100'
//         src={img2}
//         alt='First slide'
//          />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img className='d-block w-100'
//         src={img3}
//         alt='First slide'
//          />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     </div>
//   );
// }

// export default CarouselPage;


import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/2.jpg';
import img2 from '../../assets/images/4.jpg';
import img3 from '../../assets/images/5.jpg';
import './carousel.css'; // Import CSS file for styling

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption>
            <h3 className="carousel-text">First Slide</h3>
            <p className="carousel-text">Some description for the first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />
          <Carousel.Caption>
            <h3 className="carousel-text">Second Slide</h3>
            <p className="carousel-text">Some description for the second slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Third slide' />
          <Carousel.Caption>
            <h3 className="carousel-text">Third Slide</h3>
            <p className="carousel-text">Some description for the third slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;







import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';


function Home(props: any) {
 
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex:any, e:any) => {
      setIndex(selectedIndex);
    };
  
  return (
  
     <div> <Carousel activeIndex={index} onSelect={handleSelect} style={{ marginBottom: "20px" }}>
     <Carousel.Item style={{'height':"400px"}}>
       <img
         className="d-block w-100"
         src="https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2014/08/english-books.jpeg"
         alt="First slide"
         style={{'height':"400px"}}
       />
       <Carousel.Caption>
        
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item style={{'height':"400px"}}>
       <img
         className="d-block w-100"
         src="https://www.keepinspiring.me/wp-content/uploads/2020/02/a-room-without-books-body-without-soul-cicero-quote-min.jpg"
         alt="Second slide"
         style={{'height':"400px"}}
       />

       <Carousel.Caption>
         
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item style={{'height':"400px"}}>
       <img
         className="d-block w-100"
         src="https://www.writersdigest.com/.image/t_share/MTc4ODM0NDAwOTc5NDYxNjM5/72_of_the_best_quotes_about_writing.png"
         alt="Third slide"
         style={{'height':"400px"}}
       />

       <Carousel.Caption>
         
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel></div>
  
  );
}


export default Home;

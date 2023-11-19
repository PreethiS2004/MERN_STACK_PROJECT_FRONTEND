import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../styles/common-section.css';
import '../styles/hero-section.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook ,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  
  return (
    <div class="home-bg">
      <section className="home-page"> {/* Use the correct class name for the background */}
        <Container>
          <Row>
            <Col lg="6" md="6">
            
              <div className="hero__content">
               
                <h5 className="mb-3">Cooking Inspiration Awaits:</h5>
                <h1 className="mb-4 hero__title">
                  <span>Explore</span> a Treasure Trove of Tasty Recipes!
                </h1>
          <div className="contact-info">
       
          <div className="icon">
          
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon color="white" className="facebook" icon={faFacebook} size={"2x"} />
          </a>
         </div>
         <div className="icon">
          
          <a href="mailto:preethisettu2004@gmail.com"><FontAwesomeIcon icon={faEnvelope} color="white" size={"2x"}/></a>
        </div>
        <div className="icon">
          
        <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} color="white" size={"2x"}/>
         </a>
        </div>
        </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;

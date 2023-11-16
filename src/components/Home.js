import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../styles/common-section.css';
import '../styles/hero-section.css';
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

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;

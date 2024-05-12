import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!
              </h1>
              <p className="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis excepturi accusamus fuga officia suscipit facere.
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default Homepage;

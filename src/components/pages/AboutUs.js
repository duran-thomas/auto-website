import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./../Footer";

class AboutUs extends Component {
  render() {
    return (
      <div id='page-container' >
        <Container id='content-wrap' className='footer__dynamic'>
          <Row>
          <Col lg={12} style={{marginBottom: '5%'}}>
              <div className="col-sm text-center">
                <br></br>
                <h2 className="div-heading display-4 header__text">ABOUT JAHVON PRINCE </h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <p>
                My service career started at Eddie Bauer in the Tanger Outlets
                of Deer Park. I loved my coworkers and the customers I was able
                to help throughout my tenure. However, after working here for
                two years, I realized it was time for a change. I needed a
                challenge. It was time to step outside of the clothing business.
                Thus my time at Huntington Mazda began.
              </p>
            </Col>
            <Col sm={12}>
              <p>
                The best part of my job is, without a doubt, my clients. I am
                passionate about building strong bonds with every individual
                that I come into contact with. Unlike my of my counterparts I
                see my clients for who they are, people. People who should be
                treated with the utmost respect and care. It is because of this
                why my time at Mazda nothing short of extraordinary.
              </p>
            </Col>
            <Col sm={12}>
              <p>
                Though my time at Huntington Mazda has only been a year, it has
                been a notably year. Because of my love for what I do and high
                level of respect for my clients, I have been the Top Salesman in
                my dealership for the past six (6) months. Many ask how I
                managed to accomplish this much such a short amount of time and
                the answer is simple. I value my client’s experience just as
                much if not more. I take pride in being able to help my clients
                achieve their goals of getting new cars.
              </p>
            </Col>
          </Row>
        </Container>
        <br></br>
          <Footer/>
      </div>
    );
  }
}

export default AboutUs;

import { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Footer from "./../Footer";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <br></br>
              <h1 className="div-heading display-4 header__text">CONTACT US</h1>
            </div>
          </div>
          <Container>
            <Card>
              <Card.Header className="text-center">
                Sales Person: <strong>Jahvon Prince</strong>
              </Card.Header>
            </Card>
          </Container>
          <br></br>
          <Container>
            <Row>
              <Col>
                <Card style={{ marginBottom: "10px" }}>
                  <Card.Header className='header__text'>
                    <strong>Phone Number</strong>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <p>Main: 631-860-8133</p>
                      <p>Receptionist: 631-479-3821</p>
                      <p>
                        Email:{" "}
                        <a href="mailto:mr.jahvon.prince@gmail.com">
                          mr.jahvon.prince@gmail.com
                        </a>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ marginBottom: "10px" }} className='header__text'>
                  <Card.Header>
                    <strong>Hours</strong>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <p>Mon - Fri: 10am - 7pm</p>
                      <p>Sat: 10am - 6pm</p>
                      <p>Sun: 11am - 5pm</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <br></br>
          <Container>
            <Card>
              <Card.Header className="text-center header__text">
                <strong>Leave Us A Message</strong>
              </Card.Header>
            </Card>
          </Container>
          <br></br>
          <Container>
            <Row>
              <Col lg={6} sm={12}>
                <Card style={{marginBottom: "10px"}}>
                  <Card.Body>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="first-name"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="last-name"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="Phone Number"
                        />
                        <small>Format: 555-555-5555</small>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          aria-label="With textarea"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          backgroundColor: "#561B1F",
                          border: "none",
                        }}
                      >
                        Submit
                      </button>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} sm={12}>
                <Card style={{marginBottom: "10px"}} >
                  <Card.Header className='header__text'>
                    <strong>Address</strong>
                  </Card.Header>
                  <Card.Body>660 Jericho Tpke, Huntington NY 11744</Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;

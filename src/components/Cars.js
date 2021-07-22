import React, { Component } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Cars extends Component {
  render() {
    const { cars, loading } = this.props;

    if (loading) {
      return (
        <Row lg={{ span: 4, offset: 1 }}>
          <h2>Loading...</h2>
        </Row>
      );
    }

    return (
      <Row lg={{ span: 4, offset: 1 }}>
        {cars.map((cars) => (
          <Col>
            <Card style={{ width: "20rem", marginBottom: "15px" }}>
              <Card.Img
                variant="top"
                src={String(cars.image)}
                style={{ padding: "10px" }}
              />
              <Card.Body>
                <Card.Title>{cars.name}</Card.Title>
                <Card.Text>Price: {cars.price}</Card.Text>
                <Link to="/book-appointment">
                  <Button
                    style={{ backgroundColor: "#561B1F", border: "none" }}
                    className="form-group"
                  >
                    Test Drive
                  </Button>
                </Link>
                <br></br>
                <Link to="/contact-us">
                  <Button
                    style={{ backgroundColor: "#561B1F", border: "none" }}
                    className="form-group"
                  >
                    Check Availability
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Cars;

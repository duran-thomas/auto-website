import React, { Component } from "react";
import db from "./../../firebase.config";
import { Container } from "react-bootstrap";
import Cars from "./../Cars";
import Pagination from "./../Paginate";

var newState = [];
class NewVehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      currentPage: 1,
      carsPerPage: 20,
      loading: false,
    };
  }

  componentDidMount() {
    const accountref = db.ref("new");
    accountref.on("value", (snapshot) => {
      let vehicles = snapshot.val();
      for (let item in vehicles) {
        newState.push({
          name: vehicles[item].vehicleName,
          price: vehicles[item].vehiclePrice,
          image: vehicles[item].vehicleImage,
        });
      }
      this.setState({
        cars: newState,
      });
    });
  }

  render() {
    const { currentPage, carsPerPage, cars, loading } = this.state;

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({currentPage: currentPage + 1 })
    const prevPage = () => this.setState({currentPage: currentPage - 1 })

    return (
      <div className="row" style={{ marginTop: "50px" }}>
        <Container className="container_width">
          <br></br>
          <Cars cars={currentCars} loading={loading} />
          <br></br>
          <Pagination
            carsPerPage={carsPerPage}
            totalCars={cars.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </Container>
      </div>
    );
  }
}

export default NewVehicles;

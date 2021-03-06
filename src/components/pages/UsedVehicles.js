import React, { Component } from "react";
import db from "./../../firebase.config";
import { Container } from "react-bootstrap";
import Cars from "./../Cars";
import Pagination from "./../Paginate";
import Footer from './../Footer'

var newState = [];
class UsedVehicles extends Component {
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
    const accountref = db.ref("used");
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

    return (
      <div>
      <div className="row" style={{ marginTop: "50px" }}>
        <Container className="container_width" style={{paddingLeft: '30px'}}>
        <h2 className='div-heading display-4 header__text text-center'>Our Selection Of Pre-Owned Vehicles</h2>
          <br></br>
          <Cars cars={currentCars} loading={loading} />
          <br></br>
          <Pagination
            carsPerPage={carsPerPage}
            totalCars={cars.length}
            paginate={paginate}
          />
        </Container>
        </div>
        <br></br>
        <Footer className="footer__container"/>
      </div>
    );
  }
}

export default UsedVehicles;

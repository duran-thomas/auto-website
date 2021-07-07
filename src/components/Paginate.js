import React, { Component } from "react";

export class Paginate extends Component {
  render() {
    const { carsPerPage, totalCars, paginate, nextPage, prevPage } = this.props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a onClick={() => prevPage()} className="page-link" href="#">
              Previous
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li className="page-item" key={num}>
              <a onClick={() => paginate(num)} href="#" className="page-link">
                {num}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a onClick={() => nextPage()}
            className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Paginate;

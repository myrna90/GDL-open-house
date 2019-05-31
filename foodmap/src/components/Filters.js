import React from "react";

class Filters extends React.Component {
  constructor() {
    super();
  }

  handleSelectChange = e => {};

  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> */}
        <div className="row">
          <div className="col-3">
            <label for="priceFilter">Precio:</label>{" "}
            <select
              className="custom-select"
              name="priceFilter"
              value={this.props.filters.priceFilter}
              onChange={this.props.setFilter}
            >
              <option value={-1}>Mostrar todo</option>
              <option value={0}>Gratis</option>
              <option value={1}>Barato</option>
              <option value={2}>Moderado</option>
              <option value={3}>Costoso</option>
              <option value={4}>Muy Costoso</option>
            </select>
          </div>
          <div className="col-3">
            <label for="ratingFilter">Calificacion:</label>{" "}
            <select
              className="custom-select"
              name="ratingFilter"
              value={this.props.filters.ratingFilter}
              onChange={this.props.setFilter}
            >
              <option value={-1}>Mostrar todo</option>
              <option value={1}>1 o más</option>
              <option value={2}>2 o más</option>
              <option value={3}>3 o más</option>
              <option value={4}>4 o más</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;

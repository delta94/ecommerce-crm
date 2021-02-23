import React, { Component } from "react";

import PageTitle from "../page-title";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Shipping extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = fields => {
    console.log(fields);
  };
  render() {
    return (
      <div className="shipping">
        <PageTitle className="shipping__page-title" title="Shipping Address" />
        {/*<ShippingForm onSubmit={this.onSubmit} className="sign-in__form" /> */}
      </div>
    );
  }
}
Shipping = connect(null, actions)(Shipping);

export default Shipping;


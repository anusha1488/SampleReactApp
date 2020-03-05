import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../actions';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../StyleSheets/ShipmentList.css';
var selectedShipment;
let _shipmentName, _shipmentMode;


class ShipmentDetailComponent extends Component {
    componentWillMount() {
        selectedShipment = this.props.shipments.filter(e => e.id === this.props.location.shipmentId);
    }

    submit = (e) => {
        if (_shipmentName.value === "" || _shipmentMode.value === "") {
            return;
        }
        else {
        }

        this.props.updateSelectedShipment(selectedShipment[0].id, _shipmentName.value, _shipmentMode.value);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h2 className="detailHeader">Shipment Detail</h2>
                <form className="shipmentDetailForm" onSubmit={this.submit}>
                    <Row>
                        <Col sm={6}>
                            <div className="form-group">
                                <div> <label htmlFor="txtName">Shipment Id:</label></div>
                                <div>{selectedShipment[0].id}</div>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="form-group">
                                <label htmlFor="txtName">Shipment Name:</label>
                                <input type="text"
                                    className="form-control"
                                    id="shipmentName"
                                    defaultValue={selectedShipment[0].name}
                                    ref={input => _shipmentName = input} required>
                                </input>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="form-group">
                                <label htmlFor="txtName">Shipment Mode:</label>
                                <input type="text"
                                    className="form-control" defaultValue={selectedShipment[0].mode}
                                    id="shipmentMode" ref={input => _shipmentMode = input}
                                    required>
                                </input>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="form-group">
                                <div>
                                    <label htmlFor="txtName">Shipment Type:</label>
                                </div>
                                <div>{selectedShipment[0].type}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="form-group">
                                <div> <label htmlFor="txtName">Shipment Destination:</label> </div>
                                <div>{selectedShipment[0].destination}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="form-group">
                                <div> <label htmlFor="txtName">Shipment Origin:</label></div>
                                <div>{selectedShipment[0].origin}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div>
                                <Link className="shipmentDetailBtn" to={'/'}>Cancel</Link>
                                <Link className="shipmentDetailBtn alignRight" to={'/'} onClick={this.submit}>Save</Link>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}

export const ShipmentDetail = connect(
    state => state.reducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ShipmentDetailComponent);

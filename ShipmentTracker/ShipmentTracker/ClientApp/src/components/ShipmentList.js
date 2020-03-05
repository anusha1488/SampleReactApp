import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../actions';
import { Link } from 'react-router-dom';
import { Grid, GridColumn, GridCell } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import { orderBy, filterBy } from '@progress/kendo-data-query';
import '../StyleSheets/ShipmentList.css';
import shipmentIcon from '../Images/shipmentTracker.png';


class ShipmentListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skip: 0, take: 20,
            shipments: this.props.getShipments(),
            selectedShipment: [],
            sort: [
                { field: 'name', dir: 'asc' }
            ]
        };
    }

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }

    filterChange = (event) => {
        this.setState({
            shipments: this.getfilteredData(event.filter),
            filter: event.filter
        });
    }

    getfilteredData = (filter) => {
        const data = this.props.shipments.slice();
        return filterBy(data, filter);
    }

    render() {
        var data = this.state.shipments !== undefined ? this.state.shipments : this.props.shipments;
        return (
            <div>
                <div className="shipmentHeaderDiv">
                    <img className="shipmentIcon" src={shipmentIcon} />
                    <h2 className="shipmentHeader">Shipments</h2>
                </div>
                <div>
                    <Grid data={orderBy(data.slice(this.state.skip, this.state.take + this.state.skip), this.state.sort)}
                        skip={this.state.skip}
                        take={this.state.take}
                        total={data.length}
                        pageable={true}
                        onPageChange={this.pageChange}
                        sortable
                        sort={this.state.sort}
                        onSortChange={(e) => {
                            this.setState({
                                sort: e.sort
                            });
                        }}
                        filterable={true}
                        filter={this.state.filter}
                        onFilterChange={this.filterChange}

                    >
                        <GridColumn title="Name" field="name" cell={cellWithEditing()} width="300px" />
                        <GridColumn title="Shipment ID" field="id" filterable={false} width="100px" />
                        <GridColumn field="mode" filterable={false} title="Mode" width="100px" />
                        <GridColumn field="type" filterable={false} title="Type" width="80px" />
                        <GridColumn field="destination" filterable={false} title="Destination" width="200px" />
                        <GridColumn field="origin" filterable={false} title="Origin" width="200px" />
                        <GridColumn field="total" filterable={false} title="Total" width="150px" />
                        <GridColumn field="status" filterable={false} title="Status" width="200px" />
                        <GridColumn field="userId" filterable={false} title="UserId" width="200px" />
                    </Grid>
                </div>
            </div>

        );
    }
}

function cellWithEditing() {
    return class extends GridCell {
        render() {
            return (
                <td>
                    <Link className="shipmentNameLink" to={{
                        pathname: "/ShipmentDetail",
                        shipmentId: this.props.dataItem.id
                    }}>{this.props.dataItem.name}</Link>
                </td>
            );
        }
    };
}

export const ShipmentList = connect(
    state => state.reducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ShipmentListComponent);
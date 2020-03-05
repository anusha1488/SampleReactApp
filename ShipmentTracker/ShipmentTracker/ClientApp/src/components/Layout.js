import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class Layout extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={12}>
                        <div id="contentDiv">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Row, Col } from 'antd';

export default class NewComponent extends Component {

    render() {
        return (
            <div className="list">
                <Row>
                    <Col xs={24} md={6}>
                        <img alt="service" src={this.props.image} className="thumbnail" />
                    </Col>
                    <Col xs={24} md={18}>
                        <div  className="list-content">
                            <p>{this.props.content}</p>
                            <Link className="list-btn">Read More</Link> 
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
import React, { Component } from 'react';
import Heading from '../../components/heading/index';
import { Col, Row } from 'antd';

export default class NewComponent extends Component {
    render() {
        return (
        <div className="page">
            <Heading>About</Heading>
            <Row>
                <Col xs={24} md={24}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat. Nullam vulputate mollis mi, ut sodales tellus volutpat vitae. Aenean varius libero sed consequat elementum. Pellentesque dapibus metus condimentum mi dictum elementum. Vestibulum sagittis consequat mauris nec aliquam. Vivamus scelerisque, quam et posuere pharetra, velit sapien tincidunt tellus, sed sodales metus justo eget sapien. Etiam pulvinar, sem quis semper commodo, lorem magna congue turpis, eget ullamcorper nisl quam non nisi. Morbi vestibulum volutpat bibendum. Nullam facilisis enim at ornare ornare. Nulla facilisi. Proin nec molestie urna. Phasellus neque libero, sollicitudin consequat placerat id, hendrerit nec diam. Sed dapibus malesuada tellus et sollicitudin.</p>
                </Col>
            </Row>
        </div>
        );
    }
}
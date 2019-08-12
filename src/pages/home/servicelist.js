import React, { Component } from 'react';
import Heading from '../../components/heading/index';
import CardItem from '../../components/card-item'
import One from '../../images/c1.jpg'
import Two from '../../images/c2.jpg'
import  Three from '../../images/c3.jpg'
import { Col, Row } from 'antd';

export default class NewComponent extends Component {
    render() {
        return (
        <div className="service-home">
            <Heading>Services</Heading>
            <Row>
                <Col xs={24} md={8}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CardItem 
                        title="Service For You"
                        image={Two} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CardItem 
                        title="Service For You"
                        image={Three} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                {/* <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col> */}
            </Row>
        </div>
        );
    }
}
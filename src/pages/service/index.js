import React from 'react';
import CardItem from '../../components/card-item'
import Heading from '../../components/heading/index';
import One from '../../images/1.jpg'
import { Col, Row } from 'antd';

class Service extends React.Component {
    render() {
        return (
        <div className="page">
            <Heading>Services</Heading>
            <Row>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
                <Col xs={24} md={6}>
                    <CardItem 
                        title="Service For You"
                        image={One} 
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat."
                    />
                </Col>
            </Row>
        </div>
        );
    }
}

export default Service
import React from 'react';
import Heading from '../../components/heading/index';
import { Input, Button } from 'antd';
import { Col, Row } from 'antd';
const { TextArea } = Input;

class Contact extends React.Component {
    render() {
        return (
        <div className="page">
            <Heading>Contact Page</Heading>
            <Row>
                <Col xs={22} md={10} offset={1} className="contact-form">
                    Name : <Input />
                </Col>
                <Col xs={22} md={10} offset={1} className="contact-form">
                    Email : <Input />
                </Col>
                <Col xs={22} md={10} offset={1} className="contact-form">
                    Phone : <Input />
                </Col>
                <Col xs={22} md={10} offset={1} className="contact-form">
                    Address : <TextArea rows={5} />
                </Col>
                <Col xs={22} md={10} offset={1} className="contact-form">
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Col>
            </Row>
        </div>
        );
    }
}

export default Contact
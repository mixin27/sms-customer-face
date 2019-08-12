import React from "react";
import Heading from "../../components/heading/index";
import { Input, Button, Form, AutoComplete } from "antd";
import { Col, Row } from "antd";
import api from "../../apis";
import { noti } from "../../utils";
import moment from "moment";
import {
  numberPattern,
  wordPattern,
  phoneNoPattern,
  amountPattern
} from "../../utils/validate-pattern";

import iconComplainInformation from "../../images/portfolio.svg";
import iconCustomerInformation from "../../images/couple.svg";

// const shortUUID = require("short-uuid");

const { TextArea } = Input;
const FormItem = Form.Item;

class FeedBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: []
    };
  }

  componentDidMount() {
    this.getModelNo();
  }

  getModelNo() {
    api
      .get(`models`)
      .then(response => {
        this.setState({
          models: response.data.data
        });
      })
      .catch(e => console.log(e));
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const feedBack = {
          complain_no: `CP-${Date.now()}`,
          model_no: values.model_no,
          fup_no: values.fup_no,
          warranty_year: values.warranty_year,
          working_hr: values.working_hour,
          warranty_description: values.warranty_description,
          customer_name: values.customer_name,
          // customer_phone_no: `${values.prefix}${values.customer_phone_no}`,
          customer_phone_no: values.customer_phone_no,
          date: moment().format("YYYY/MM/DD"),
          distance: values.distance,
          location: values.location,
          amount: 0,
          job_title: "",
          complain_job_title: values.complain_job_title,
          description: "",
          complain_status: -1,
          created_by: "customer",
          updated_by: "customer"
        };

        try {
          api.post(`complains`, feedBack).then(response => {
            if (response.data.status === "success") {
              const dirRes = api.get(`models`);
              if (dirRes.data.status === "success") {
                noti(
                  "success",
                  "Successfully!",
                  "Your feedback has been send Successfully."
                );
              }
            } else {
              noti(
                "error",
                "Unsuccessfully",
                "Something went wrong. Please try again."
              );
            }
          });
        } catch (err) {
          noti(
            "error",
            "Unsuccessfully",
            "Something went wrong. Please try again."
          );
        }

        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    let modelNo = [];
    let modelData = [...this.state.models];
    modelData.map(d => {
      modelNo.push(d.model_no);
    });

    return (
      <div className="page">
        <Heading>Send Your Feedback</Heading>

        <div>
          {/* <div style={{ marginLeft: "80%" }}>
            <a onClick={this.handleBack}>
              <Icon type="arrow-left" style={{ marginRight: "10px" }} />
              Back
            </a>
          </div> */}

          <Row>
            <Col xs={22} md={50} offset={1}>
              <Form onSubmit={this.handleSubmit}>
                {/* Head */}
                {/* <Row gutter={24}>
                <FormItem label="Complain No">
                  {getFieldDecorator("complain_no", {
                    rules: [
                      {
                        required: true,
                        message: "Enter Complain Number"
                      }
                    ]
                  })(
                    <Input
                      style={{ width: "50%" }}
                      placeholder="Enter Complain Number"
                    />
                  )}
                </FormItem>
              </Row> */}

                <Row gutter={24}>
                  <FormItem label="Model No">
                    {getFieldDecorator("model_no", {
                      rules: [
                        {
                          required: true,
                          message: "Enter Model Number "
                        }
                      ]
                    })(
                      <AutoComplete
                        dataSource={modelNo}
                        filterOption={(inputValue, option) =>
                          option.props.children
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                        }
                        style={{ width: "50%" }}
                        placeholder="Enter Model Number "
                      />
                    )}
                  </FormItem>
                </Row>

                <Row gutter={24}>
                  <FormItem label="FUP No">
                    {getFieldDecorator("fup_no", {
                      rules: [
                        {
                          required: true,
                          message: "Enter FUP Number "
                        }
                      ]
                    })(
                      <Input
                        style={{ width: "50%" }}
                        placeholder="Enter FUP Number "
                      />
                    )}
                  </FormItem>
                </Row>

                {/* Waranty Information */}
                {/* <Divider orientation="left">Warranty Information</Divider> */}
                <h3>
                  <img
                    style={{ margin: "5px", height: 20, width: 20 }}
                    src={iconComplainInformation}
                  />{" "}
                  Warranty Information
                </h3>
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={6} lg={6}>
                    <FormItem label="Warranty :">
                      {getFieldDecorator("warranty_year", {
                        rules: [
                          {
                            required: false,
                            pattern: numberPattern,
                            message: "Enter warranty "
                          }
                        ]
                      })(<Input placeholder="Enter Warranty" />)}
                    </FormItem>
                  </Col>
                  <Col xs={24} sm={24} md={6} lg={6}>
                    <FormItem label="Working Hour :">
                      {getFieldDecorator("working_hour", {
                        rules: [
                          {
                            required: true,
                            pattern: numberPattern,
                            message: "Enter Number of Working hour "
                          }
                        ]
                      })(<Input placeholder="Enter Number of Working hour " />)}
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <FormItem label="Warranty Description :">
                    {getFieldDecorator("warranty_description", {
                      rules: [
                        {
                          require: false,
                          message: "Warranty Description"
                        }
                      ]
                    })(<TextArea rows={4} style={{ width: "49%" }} />)}
                  </FormItem>
                </Row>

                {/* Customer Information */}
                {/* <Divider orientation="left">Customer Information</Divider> */}
                <h3>
                  <img
                    style={{ margin: "5px", height: 20, width: 20 }}
                    src={iconCustomerInformation}
                  />{" "}
                  Customer Information
                </h3>
                <Row gutter={24}>
                  <Col xs={24} sm={24} md={6} lg={6}>
                    <FormItem label="Customer Name">
                      {getFieldDecorator("customer_name", {
                        rules: [
                          {
                            required: true,
                            pattern: wordPattern,
                            message: "Enter Customer Name "
                          }
                        ]
                      })(<Input placeholder="Enter Customer Name " />)}
                    </FormItem>
                  </Col>
                  <Col xs={24} sm={24} md={6} lg={6}>
                    <FormItem label=" Customer Phone Number">
                      {getFieldDecorator("customer_phone_no", {
                        rules: [
                          {
                            required: true,
                            pattern: phoneNoPattern,
                            message: "Wrong phone no format"
                          }
                        ]
                      })(
                        <Input
                          // addonBefore={prefixSelector}
                          style={{ width: "100%" }}
                        />
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={24}>
                  {/* <Col xs={24} sm={24} md={6} lg={6}>
                  <FormItem label="Date">
                    {getFieldDecorator("date", {
                      required: true,
                      message: "Date required"
                    })(<DatePicker />)}
                  </FormItem>
                </Col> */}
                  <Col xs={24} sm={24} md={6} lg={6}>
                    <FormItem label="Distance">
                      {getFieldDecorator("distance", {
                        rules: [
                          {
                            required: true,
                            pattern: numberPattern,
                            message: "Enter Distance "
                          }
                        ]
                      })(<Input placeholder="Enter Distance " />)}
                    </FormItem>
                  </Col>

                  <Col xs={24} sm={24} md={6} lg={6}>
                    <FormItem label="Location">
                      {getFieldDecorator("location", {
                        rules: [
                          {
                            required: true,
                            message: "Enter location "
                          }
                        ]
                      })(<Input placeholder="Enter location " />)}
                    </FormItem>
                  </Col>
                </Row>

                <Row gutter={24}>
                  <FormItem label="What's going on? ">
                    {getFieldDecorator("complain_job_title", {
                      rules: [
                        {
                          require: false,
                          message: ""
                        }
                      ]
                    })(<TextArea rows={4} style={{ width: "49%" }} />)}
                  </FormItem>
                </Row>

                {/* Button */}
                <span style={{ marginLeft: "15%" }}>
                  <Button
                    style={{ borderRadius: "20px", width: "150px" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </span>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Form.create()(FeedBack);

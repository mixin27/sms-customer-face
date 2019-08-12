import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class NewComponent extends Component {

    render() {
        return (
            <div className="card-item">                    
                <img alt="service" src={this.props.image} className="thumbnail" />
                <h3 className="card-title">{this.props.title}</h3>
                <p>{this.props.content}</p>
                <Link className="list-btn">Read More</Link>              
            </div>
        );
    }
}
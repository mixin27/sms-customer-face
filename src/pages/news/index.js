import React from 'react';
import ListItem from '../../components/list-item'
import Heading from '../../components/heading/index';
import One from '../../images/c1.jpg'
import Two from '../../images/c2.jpg'
import Three from '../../images/c3.jpg'

class News extends React.Component {
    render() {
        return (
        <div className="page">
            <Heading>News</Heading>
            <ListItem image={One} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat. Nullam vulputate mollis mi, ut sodales tellus volutpat vitae. Aenean varius libero sed consequat elementum. Pellentesque dapibus metus condimentum mi dictum elementum. Vestibulum sagittis consequat mauris nec aliquam. Vivamus scelerisque, quam et posuere pharetra, velit sapien tincidunt tellus, sed sodales metus justo eget sapien. Etiam pulvinar, sem quis semper commodo, lorem magna congue turpis, eget ullamcorper nisl quam non nisi"/>

            <ListItem image={Two} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat. Nullam vulputate mollis mi, ut sodales tellus volutpat vitae. Aenean varius libero sed consequat elementum. Pellentesque dapibus metus condimentum mi dictum elementum. Vestibulum sagittis consequat mauris nec aliquam. Vivamus scelerisque, quam et posuere pharetra, velit sapien tincidunt tellus, sed sodales metus justo eget sapien. Etiam pulvinar, sem quis semper commodo, lorem magna congue turpis, eget ullamcorper nisl quam non nisi"/>

            <ListItem image={Three} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat. Nullam vulputate mollis mi, ut sodales tellus volutpat vitae. Aenean varius libero sed consequat elementum. Pellentesque dapibus metus condimentum mi dictum elementum. Vestibulum sagittis consequat mauris nec aliquam. Vivamus scelerisque, quam et posuere pharetra, velit sapien tincidunt tellus, sed sodales metus justo eget sapien. Etiam pulvinar, sem quis semper commodo, lorem magna congue turpis, eget ullamcorper nisl quam non nisi"/>
        </div>
        );
    }
}

export default News
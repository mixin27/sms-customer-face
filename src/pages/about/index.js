import React from 'react';
import Heading from '../../components/heading'
import AboutImage from '../../images/wp1.jpg'

const img = {
    width: '100%',
    height: '80vh',
}
class About extends React.Component {
    render() {
        return (
        <div className="page">
            <Heading>About Us</Heading>
            <img alt="example" src={AboutImage} style={img}/>
            <br /> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis augue ac consequat. Nullam vulputate mollis mi, ut sodales tellus volutpat vitae. Aenean varius libero sed consequat elementum. Pellentesque dapibus metus condimentum mi dictum elementum. Vestibulum sagittis consequat mauris nec aliquam. Vivamus scelerisque, quam et posuere pharetra, velit sapien tincidunt tellus, sed sodales metus justo eget sapien. Etiam pulvinar, sem quis semper commodo, lorem magna congue turpis, eget ullamcorper nisl quam non nisi. Morbi vestibulum volutpat bibendum. Nullam facilisis enim at ornare ornare. Nulla facilisi. Proin nec molestie urna. Phasellus neque libero, sollicitudin consequat placerat id, hendrerit nec diam. Sed dapibus malesuada tellus et sollicitudin.</p>

            <p>
            Aenean commodo porta sagittis. Aenean iaculis, ante nec tempus placerat, nunc erat posuere dolor, sit amet rhoncus diam nibh sed ipsum. Praesent a tristique purus, eu varius justo. Aenean et lectus sed ipsum consequat pretium. Maecenas sodales tincidunt augue, sed eleifend metus facilisis eget. Duis cursus ante sodales magna ultricies condimentum. Nulla dapibus tellus in congue suscipit. Maecenas scelerisque neque eu magna dapibus laoreet. Curabitur in nunc maximus, interdum risus nec, tempus magna.
            </p>

            <p>
            Aliquam nec dignissim felis. In vehicula ipsum non quam pellentesque, sed molestie ante tincidunt. Proin porta feugiat diam, in placerat est bibendum eget. Curabitur eget tristique lorem. Etiam nec porttitor mauris, eu aliquam nisi. Cras eget felis vel purus sagittis sodales. Mauris non iaculis ex. Praesent sed risus sit amet tortor hendrerit faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris congue ornare iaculis.
            </p>
        </div>
        );
    }
}

export default About
import React from 'react';
import Slider from '../../components/slider'
import ServiceList from './servicelist'
import About from './about'

class Home extends React.Component {
    render() {
        return (
        <div>
            <Slider />
            <About />
            <ServiceList />
        </div>
        );
    }
}

export default Home
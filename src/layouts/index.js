import React from 'react';
import { Layout } from 'antd';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { renderRoutes } from 'react-router-config'
import PageLoading from '../components/PageLoading';

const { Content } = Layout;
class Root extends React.Component {
    render() {
        const { route:{routes} } = this.props
        return (
            <Layout>
                <Navbar />
                <Content className="content">
                {
                  routes ? renderRoutes(routes)
                  :
                  <PageLoading />
                }
                
              </Content>
                <Footer />
            </Layout>            
        );
    }
}

export default Root
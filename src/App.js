import React from 'react';
import './css/style.css';
import 'antd/dist/antd.css'

import{ BrowserRouter as Router} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from './router/routes'

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="App">{renderRoutes(routes)}</div>
            </Router>
        )
    }
}

export default App;

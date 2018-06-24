import React from 'react';

import {Switch, Route } from 'react-router-dom';
import Home from "./home";
import Technologies from "./technologies";
import Services from "./services";

class Content extends React.Component{

    render(){
        return(
            <content>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/technologies' component={Technologies} />
                    <Route path='/services' component={Services} />

                </Switch>

            </content>
        );
    }
}

export default Content;
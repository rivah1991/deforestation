import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
// import Users from './Users';
// import Posts from './Posts';
import Accueil from '../pages/Accueil';   
import Doleonce from '../pages/Doleonce';  
import Bianco from '../pages/Bianco'; 
import Stat from '../pages/Stat'; 
class Home extends Component {
    
    render() {
        return (
           <div>            
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                            <div className="container px-4 px-lg-5">
                                 <Link className={"navbar-brand"} to={"/"}> Deforestation Mada </Link>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            {/* <a class="nav-link" href={{ path('home') }}>Accueil</a> */}
                                            <Link className={"nav-link"} to={"/accueil"}> Accueil </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className={"nav-link"}  to={"/doleonce"}>Doleonce </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className={"nav-link"} to={"/bianco"}> Bianco </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className={"nav-link"} to={"/stat"}> Stat </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className={"nav-link"} > Aide </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className={"nav-link"} > Carto </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                      
                        <Switch>
                            <Redirect exact from="/" to="/accueil" />
                            <Route path="/accueil" component={Accueil} />                           
                            <Route path="/doleonce" component={Doleonce} />
                            <Route path="/bianco" component={Bianco} />
                            <Route path="/stat" component={Stat} />
                            
                        </Switch>                  
                                    
                                   
                                    
                        
                    </div>
        )
    }
}
    
export default Home;
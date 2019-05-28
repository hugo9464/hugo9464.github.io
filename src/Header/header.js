import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './header.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import muiTheme from "../muiTheme";
import Contact from "../Contact/Contact"
import Button from '@material-ui/core/Button';
import {Switch, Redirect, Route, Link, BrowserRouter as Router} from "react-router-dom";
import App from "../App";
import Accueil from "../Accueil/Accueil";
import Histoire from "../Histoire/Histoire";
import Produits from "../Produits/Produits";
import Actualites from "../Actualites/Actualites";

const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar(props) {
    const { classes } = props;

    return (
        <Router>
            <div className={classes.root}>
                <MuiThemeProvider theme={muiTheme}>
                    <div>
                        <AppBar className="App-bar" position="sticky" color="primary">

                            <div style={{textAlign: 'center'}}>
                                  <img
                                      src={require('../images/logo.png')}
                                      style={{
                                          height: '150px',
                                          width: '150px',
                                          display: 'inline-block',
                                          marginTop: '5px',
                                          marginRight: '7px',
                                          textAlign: 'center'
                                      }}
                                      alt="cetautomatix"
                                  />
                            </div>

                            <div>
                                <nav>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <Button style={{color: 'white'}}>Accueil</Button>
                                    </Link>
                                    <Link to="/histoire" style={{ textDecoration: 'none' }}>
                                        <Button style={{color: 'white'}}>Notre histoire</Button>
                                    </Link>
                                    <Link to="/produits" style={{ textDecoration: 'none' }}>
                                        <Button style={{color: 'white'}}>Nos produits</Button>
                                    </Link>
                                    <Link to="/actualites" style={{ textDecoration: 'none' }}>
                                        <Button style={{color: 'white'}}>Actualités</Button>
                                    </Link>
                                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                                        <Button style={{color: 'white'}}>Contact</Button>
                                    </Link>
                                </nav>
                            </div>
                        </AppBar>
                        <div>
                            <Route path="/" exact component={Accueil} />
                            <Route path="/histoire" component={Histoire} />
                            <Route path="/produits" component={Produits} />
                            <Route path="/actualites" component={Actualites} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        </Router>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);

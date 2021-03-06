import React, { Component } from "react";
import Impressum from "./Impressum";
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import Error404 from "./Error404";
import PopularSeries from "./PopularSeries";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MovieDetail from './MovieDetail';
import SeriesDetail from './SeriesDetail';

class MovieDBView extends Component {

    state = {
        searchInput: "",
        selectedNav: Number(localStorage.getItem('selectedNav'))
    }

    setSearchInput = (searchInput) => {
        this.setState({ searchInput: searchInput });
    }

    setLanguage = (lang) => {
        localStorage.setItem("preferredLanguage", lang.value)
        window.location.reload()
    }

    setNav = (selectedNav) => {
        // console.log(selectedNav)
        localStorage.setItem('selectedNav', selectedNav)
        this.setState({ selectedNav: selectedNav });
    }

    render() {
        return (
            <Router>
                <Header setSearch={(input) => this.setSearchInput(input)} setLang={(lang) => this.setLanguage(lang)}></Header>
                <Switch>
                    <Route path="/" exact>
                        <Main searchInput={this.state.searchInput}></Main>
                    </Route>
                    <Route path="/impressum" exact>
                        <Impressum></Impressum>
                    </Route>
                    <Route path="/series" exact>
                        <PopularSeries searchInput={this.state.searchInput}></PopularSeries>
                    </Route>
                    <Route path="/movie/detail/:id" component={MovieDetail} exact>
                    </Route>
                    <Route path="/series/detail/:id" component={SeriesDetail} exact>
                    </Route>
                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        );
    }
}

export default MovieDBView;
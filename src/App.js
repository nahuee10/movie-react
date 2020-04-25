import React from 'react';
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from './components/MenuTop';

// Importamos paginas
import Home from './pages/home';
import NewMovies from './pages/new-movies';
import Popular from './pages/popular';
import Search from './pages/search';
import Movie from './pages/movie';
import Error404 from './pages/error404';



export default function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/new-movies">
              <NewMovies />
            </Route>
            <Route exact path="/popular">
              <Popular />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            
            <Route exact path="/movie/:id">
              <Movie />
            </Route>
            
            <Route exact path="*">
              <Error404 />
            </Route>
          
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}



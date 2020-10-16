import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { NotFoundPage } from './components/NotFoundPage';
import { ErrorBoundry } from './components/ErrorBoundry';
import { PopupProvider } from './state/popupsContext';
import { MoviesProvider } from './state/moviesContext';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import './shared/buttons.scss';


function App() {
  return (
    <ErrorBoundry>
      <PopupProvider>
        <main className="App">
          <Router>
            <MoviesProvider>
              <Header />
              <Switch>
                <Route path="/" exact render={() => <Redirect to="/search" />} />
                <Route
                  path={["/search", "/search?=:searchTerm", "/film/:id"]}
                  component={Main}
                />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </MoviesProvider>
          </Router>
          <Footer />
        </main>
      </PopupProvider>
    </ErrorBoundry>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import { StaticRouter } from 'react-router';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { addMovie } from "./store/actions/actionCreators";

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { NotFoundPage } from './components/NotFoundPage';
import { ErrorBoundry } from './components/ErrorBoundry';
import { PopupProvider } from './state/popupsContext';
import { MoviesProvider } from './state/moviesContext';

import './shared/buttons.scss';


// const App = () => (
//   <ErrorBoundry>
//     <PopupProvider>
//       <main className="App">
//         <Router>
//           <MoviesProvider>
//             <Header />
//             <Switch>
//               <Route path="/" exact render={() => <Redirect to="/search" />} />
//               <Route
//                 path={["/search", "/search?=:searchTerm", "/film/:id"]}
//                 component={Main}
//               />
//               <Route path="*" component={NotFoundPage} />
//             </Switch>
//           </MoviesProvider>
//         </Router>
//         <Footer />
//       </main>
//     </PopupProvider>
//   </ErrorBoundry>
// );

const AppRoutes = ({ store }) => (
  <Switch>
    {/* <Route path="/" component={Home} exact /> */}
    <Route path="/" exact render={() => <Redirect to="/search" />} />
    <Route path={["/search", "/search?=:searchTerm", "/film/:id"]} render={() => {
      if (store) {
        store.dispatch(addMovie('This should come renderer from server (on /Page direct hit)'));
      }

      return <Main />;
    }} exact />
    <Route path="*" render={NotFoundPage} />
  </Switch>
)

function App(props) {
  return (
    <ErrorBoundry>
      <PopupProvider>
        <main className="App">
          <Provider store={props.store}>
            {
              props.location
                ? (
                  <StaticRouter location={props.location} context={{}}>
                    <MoviesProvider>
                      <Header />
                      <AppRoutes store={props.store} />
                    </MoviesProvider>
                  </StaticRouter>
                ) : (
                  <Router>
                    <MoviesProvider>
                      <Header />
                      <AppRoutes />
                    </MoviesProvider>
                  </Router>
                )
            }
          </Provider>
          <Footer />
        </main>
      </PopupProvider>
    </ErrorBoundry>
  );
}

export default App;

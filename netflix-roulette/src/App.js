import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { ErrorBoundry } from './components/ErrorBoundry';
import { PopupProvider } from './state/popupsContext';
import { MoviesProvider } from './state/moviesContext';
import './shared/buttons.scss';


function App() {
  return (
    <ErrorBoundry>
      <PopupProvider>
        <main className="App">
          <MoviesProvider>
            <Header />
            <Main />
          </MoviesProvider>
          <Footer />
        </main>
      </PopupProvider>
    </ErrorBoundry>
  );
}

export default App;

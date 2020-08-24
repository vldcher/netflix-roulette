import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { ErrorBoundry } from './components/ErrorBoundry';
import { PopupProvider } from './state/context';
import './shared/buttons.scss';


function App() {
  return (
    <ErrorBoundry>
      <PopupProvider>
      <main className="App">
        <Header />
        <Main />
        <Footer />
      </main>
      </PopupProvider>
    </ErrorBoundry>
  );
}

export default App;

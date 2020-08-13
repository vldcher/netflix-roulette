import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { ErrorBoundry } from './components/ErrorBoundry';

function App() {
  return (
    <ErrorBoundry>
      <main className="App">
        <Header />
        <Main />
        <Footer />
      </main>
    </ErrorBoundry>
  );
}

export default App;

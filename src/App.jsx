import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import DOFA from './components/DOFA';
import OrganizationalIdentity from './components/OrganizationalIdentity';
import Objectives from './components/Objectives';
import Footer from './components/Footer';
import './App.css';
const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <DOFA />
      <OrganizationalIdentity />
      <Objectives />
      <Footer />
    </div>
  );
};

export default App;

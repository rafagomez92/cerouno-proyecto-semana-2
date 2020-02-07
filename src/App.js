import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MainCard from './components/MainCard'
import Category from './components/Category'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Categorias from './components/Category';

function App() {
  return (
    <div>    
      <Navbar />
      <MainCard         
        imgUrl="https://images.unsplash.com/photo-1530288782965-fbad40327074?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        category="Canciones"
        title="Las 100 mejores canciones de rock"
        subtitle="Una lista con la recopilación de las mejores canciones de rock de todos los tiempos."
        date="07/02/2020"
        author="Rafael Gómez"
      />
      {/* En el js de category se incluyen las secciones y los props del blog*/}
      <Category />                              
      <Footer />
    </div>
  );
}

export default App;

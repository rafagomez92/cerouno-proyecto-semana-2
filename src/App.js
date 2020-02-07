import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MainCard from './components/MainCard'
import Categorias from './components/Categorias'
import Footer from './components/Footer'

function App() {
  return (
    <div>    
      <Navbar />
      <MainCard 
        imgUrl="https://images.unsplash.com/photo-1530288782965-fbad40327074?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        title="Las 100 mejores canciones de rock de todos los tiempos"
        subtitle="Una lista con la recopilación de las mejores canciones de rock de todos los tiempos, incluyen las mejores bandas como The Beatles, The Rolling Stones, The Who, Led Zeppelin."
      />
      <Categorias />
      <Categorias />
      <Categorias />
      <Footer />
    </div>
  );
}

export default App;

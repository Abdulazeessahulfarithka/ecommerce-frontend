import React from 'react';
import Layout from '../../Components/Layout/Layout';
import Dashboard from '../Dashboard';
import FeaturedProduct from '../FeaturedProduct'; 
import About from '../About';
function Home() {
  return (
    <>
      
        <Layout>
          <Dashboard />
          <FeaturedProduct /> 
          <About/>
        </Layout>
      
    </>
  );
}

export default Home;

import React from 'react';
import {  useQuery} from "@apollo/client"
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TopPost from './components/TopPost';
import Services from './components/Services';
import Projects from './components/Projects';
import { getAll } from './Graphql/Query';


function App() {
  const { loading, data, error } = useQuery(getAll)
  

  return (
    <>
      <Header />
      <TopPost />
      <Services />
      <Projects />
      {loading
        ? 'Loading'
        : error
        ? 'Error'
        : data &&
          data.getAll &&
          data.getAll.map((curData: any) => (
            <p key={curData.id}>
              {curData.title}------------{curData.description}
            </p>
          ))}
      <Footer />
    </>
  );
}

export default App;

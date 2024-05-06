import React, { useEffect, useState } from 'react'
import Hero from "../components/Hero/Hero"
import Section from '../components/Section/Section';
import { fetchTopAlbumsData } from '../services/Services';

const HomePage = () => {
  const [topData, setTopData] = useState([]);

  const getTopAlbumsData = async () => {
    const data = await fetchTopAlbumsData();
    console.log("HomePage.jsx HomePage getTopAlbumsData debug data: ", data);
    setTopData(data);
  }

  useEffect(() => {
    getTopAlbumsData();
  }, [])
  
  return (
    <>
      <Hero />
      {!!topData && <Section name="Top Albums" data={topData}/>}
    </>
  );
}

export default React.memo(HomePage);
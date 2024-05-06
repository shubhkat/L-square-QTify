import React, { useEffect, useState } from 'react'
import Hero from "../components/Hero/Hero"
import Section from '../components/Section/Section';
import { fetchTopAlbumsData, fetchNewAlbumsData } from '../services/Services';

const HomePage = () => {
  const [topData, setTopData] = useState([]);
  const [newData, setNewData] = useState([]);

  const getTopAlbumsData = async () => {
    const data = await fetchTopAlbumsData();
    console.log("HomePage.jsx HomePage getTopAlbumsData debug data: ", data);
    setTopData(data);
  }

  const getNewAlbumsData = async () => {
    const data = await fetchNewAlbumsData();
    console.log("HomePage.jsx HomePage getNewAlbumsData debug data: ", data);
    setNewData(data);
  }

  useEffect(() => {
    getTopAlbumsData();
    getNewAlbumsData();
  }, [])
  
  return (
    <>
      <Hero />
      <Section name="Top Albums" data={topData}/>
      <Section name="New Albums" data={newData}/>
    </>
  );
}

export default React.memo(HomePage);
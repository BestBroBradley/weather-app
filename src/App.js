import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Container } from './styles'
import API from './utils/API'
import { DayContext } from './utils/DayContext'

function App() {
  
const [currentDay, setCurrentDay] = useState ({
  city: "",
  temp: 0,
  high: 0,
  low: 0,
  humidity: 0,
  description: "",
  icon: "",
  dt: 0
  })
  
const [fiveDay, setFiveDay] = useState ([
    {
    high: 0,
    low: 0,
    icon: "",
    date: "",
    precip: 0
  },
    {
    high: 0,
    low: 0,
    icon: "",
    date: "",
    precip: 0
  },
    {
    high: 0,
    low: 0,
    icon: "",
    date: "",
    precip: 0
  },
    {
    high: 0,
    low: 0,
    icon: "",
    date: "",
    precip: 0
  },
    {
    high: 0,
    low: 0,
    icon: "",
    date: "",
    precip: 0
  }])

useEffect(() => {
    API.search("denver")
    .then (res => {
      console.log(res.data)
      runSearch(res)
    })
  }, []);

  const runSearch = (res) => {
    setCurrentDay({
      ...currentDay,
      city: res.data.name,
      temp: parseInt(res.data.main.temp),
      high: parseInt(res.data.main.temp_max),
      low: parseInt(res.data.main.temp_min),
      humidity: res.data.main.humidity,
      description: res.data.weather[0].main,
      icon: res.data.weather[0].icon,
      dt: (res.data.dt)
    })
    API.getFiveDay(res.data.id)
    .then(fiveday => {
      console.log(fiveday)
    })
  }

  const handleSubmit = (query) => {
    API.search(query)
    .then (res => {
      console.log(res.data)
      runSearch(res)
    })
  }

  const handleFavorite = () => {

  }
  return (
    <>
    <Header />
    <Container>
    <DayContext.Provider value={{currentDay, handleSubmit}}>
    <Sidebar />
    <div>
    <Main />
    </div>
    </DayContext.Provider>
    </Container>
    </>
  );
}

export default App;

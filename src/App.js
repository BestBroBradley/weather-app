import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Container, Button } from './styles'
import API from './utils/API'
import { DayContext } from './utils/DayContext'

function App() {

let btnArray = JSON.parse(localStorage.getItem("button array")) || []

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
      addFiveDay(fiveday)
    })
  }

  const addFiveDay = (fiveday) => {
    console.log(fiveday)
    const dayArray = []
    for (let i = 7; i <= 39; i += 8) {
      dayArray.push({
        temp: fiveday.data.list[i].main.temp,
        humidity: fiveday.data.list[i].main.humidity,
        humidity: fiveday.data.list[i].main.humidity,
        icon: fiveday.data.list[i].weather[0].icon,
        description: fiveday.data.list[i].weather[0].description,
        dt: fiveday.data.list[i].dt
      })
    }
    setFiveDay(dayArray)
  }

  const renderButtons = btnArray.map(item => <Button onClick={() => handleSubmit(item)} value={item}>{item}</Button>)

  const handleSubmit = (query) => {
    document.getElementById("query").value = ""
    API.search(query)
    .then (res => {
      runSearch(res)
    })
  }

  const handleFavorite = (query) => {
    API.search(query)
    .then (res => {
      if (res && !btnArray.includes(res.data.name)) {
      console.log(res.data.name)
      btnArray.push(res.data.name)
      document.getElementById("query").value = ""
      console.log(btnArray)
      localStorage.setItem("button array", JSON.stringify(btnArray))
      }
      console.log(res.data)
      runSearch(res)
    })
  }


  return (
    <>
    <Header />
    <Container>
    <DayContext.Provider value={{btnArray, renderButtons, currentDay, fiveDay, handleSubmit, handleFavorite}}>
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

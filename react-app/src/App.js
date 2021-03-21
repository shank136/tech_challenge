import logo from './logo.jpg'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigator from './components/Navigator'
import Table from './components/Table'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    const getSongs = async () => {
      const songsFromServer = await fetchSongs()
      setSongs(songsFromServer)
    }
    getSongs()
  }, [])

  const fetchSongs = async () => {
    // endpoint can be changed if necessary
    const res = await fetch('https://v855bvltt4.execute-api.us-east-1.amazonaws.com/Prod/get-song-data/')
    const songs = await res.json()

    // remove duplicate songs
    const filteredSongs = (arr, prop) => arr.reduce((accumulator, currentValue) => {
      if (!accumulator.find(obj => obj[prop] === currentValue[prop])) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, [])

    return filteredSongs(songs.message, 'song')
  }



  return (
    <Router>
      <div className='App'>
        <Route path='/' exact render={(props) => (
          <header className='App-header'>
            <Header />
            <img src={logo} className='App-logo' alt='logo' />
            <Navigator />
          </header>
        )} />
        <Route path='/songs' exact render={(props) => (
          <>
            <Table songs={songs} />
          </>
        )} />
        <Footer />
      </div >
    </Router >
  );
}

export default App

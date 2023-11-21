import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Hero from './Components/HeroSection/Hero.js'
import Album from './Components/Album/Album.js'

const endpoint ='https://qtify-backend-labs.crio.do/'

function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  useEffect(() => {
    axios.get(`${endpoint}albums/top`)
    .then(({data}) => {
      setTopAlbums(data)
    })
    axios.get(`${endpoint}albums/new`)
    .then(({data}) => {
      setNewAlbums(data)
    })
  },[])


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Album title="Top Album" data={topAlbums}/>
      <Album title="New Album" data={newAlbums}/>
    </div>
  );
}


export default App;

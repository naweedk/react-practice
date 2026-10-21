import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
const [count, setCount] = useState(0)

  return (
    <div className="App" id="home">
      <Navbar />
      <main>
        <h1>Welcome to React Practice</h1>
        <p>My first React practical project.</p>

        <h2>Button clicked: {count} times</h2>

        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>

        <button onClick={() => setCount(0)}>
          Reset Count
        </button>
      </main>
      <Footer />
    </div>  
  )
}

export default App

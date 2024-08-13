import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header/header.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header className="header" />
    {/* <header> <h1>🔥Fireplace Palace</h1></header> */}
    <div className="wrapper">
        <main>
            <section className="hero">
                <div className= "hero-image">
                    <img src='./src/images/hero-mobile.png' alt="living-room" />
                </div>
                <div className="hero-banner">
                    <h3>Discover the<br /> Perfect Fireplace...</h3>
                    <h4>Book consultation: <span>0800 00 1066</span></h4>
                </div>
            </section>
            <section className="how-it-works">
                <header className="how-header"></header>
                <div className="give-us-a-call"></div>
                <div className="we-come-to-you"></div>
                <div className="we-recommend"></div>
            </section>
            <footer>footer</footer>
        </main>
    </div>
    </>
  )
}

export default App

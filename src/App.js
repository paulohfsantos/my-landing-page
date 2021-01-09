import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'
import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Experience" component={Experience} />
                <Route path="/Contact" component={Contact} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
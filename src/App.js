import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import BlogItemDetails from "./Components/BlogItemDetails/BlogItemDetails"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blogs/:id" component={BlogItemDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import './App.css'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Recipes from './components/recipes/Recipes'
import RecipePage from './components/recipes/recipeCard/recipePage/recipePage'
import Navbar from './components/navbar/Navbar'

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="App__container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Recipes />} />
                    <Route path="/recipe/:res" element={<RecipePage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App

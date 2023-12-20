import React from 'react'
import './App.css'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Recipes from './components/recipes/Recipes'
import RecipePage from './components/recipes/recipeCard/recipePage/recipePage'
import Navbar from './components/navbar/Navbar'
import Auth from './components/auth/Auth'
import Page404 from './components/page404/Page404'

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="App__container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/category/:id" element={<Recipes />} />
                    <Route path="/recipe/:res" element={<RecipePage />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
        </div>
    )
}

export default App

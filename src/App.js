import React, {Component, Suspense} from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

import "./scss/css/bootstrap.css"
import "./scss/css/bootstrap.css.map"
import "./scss/css/styles.css"
import "./components/Navbar"
import "./imgImports"
import Navbar from './components/Navbar'


function App(){
    return(
        Navbar()
    )
}

/* /const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Containers
//const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Error404 = React.lazy(() => import('./pages/404'))
const Template = React.lazy(() => import('./pages/template'))

class App extends Component {
    render() {
        return (
            <HashRouter>

                <Routes>
                    <Route exact path="/pages/404" name="Page 404" element={<Error404/>}/>
                    <Route exact path="/template" name="template" element={<Template/>}/>

                </Routes>

            </HashRouter>,
                Error404(),
                Template(),
                Navbar()

                
        )
    }
}*/

export default App

/*
Odkladaci prostor

const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))



  <Route exact path="/500" name="Page 500" element={<Page500/>}/>
                        <Route path="*" name="Home" element={<DefaultLayout/>}/>

 */
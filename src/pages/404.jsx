import React from 'react'
import "../scss/css/bootstrap.css"
import "../scss/css/styles.css"
import "../components/Navbar"
import {Helmet} from "react-helmet-async";


const Page404 = () => {
    return (
        <Helmet>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Error #404 | CHCHP</title>


        </Helmet>,

            <div className="container">

                <button onClick="topFunction()" className="buttonNahoru" id="buttonUp" style={{display: 'none'}}><i
                    className="fas fa-arrow-up" aria-hidden="true"/></button>


                {/* Navbar  */}
                Navbar();

                <nav className="navbar navbar-default navbar-expand-lg p-md-3">
                    <div className="container">
                        <a className="navbar-brand " href="./index.html"><img id="ico" className="logo"
                                                                              src="./img/logos/logo-white.png"
                                                                              alt="CHCHP - logo"/></a>
                        <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                                type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"/>
                            <span className="toggler-icon middle-bar"/>
                            <span className="toggler-icon bottom-bar"/>
                        </button>
                        <div className="languages">
                            <a href="https://www.chchp.cz">
                                <img src="./img/assets/cs.svg" alt="Čeština" height="25px"/>
                            </a>
                            <a href="https://www.chchp.cz/en">
                                <img src="./img/assets/de.svg" alt="Deutch" height="25px"/>
                            </a>
                            <a href="https://www.chchp.cz/de">
                                <img src="./img/assets/en.svg" alt="English" height="25px"/>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <div className="mx-auto"/>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="./prohlidky.html">PROHLÍDKY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./zazitky.html">ZÁŽITKY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./pronajem.html">PRONÁJEM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./kontakt.html">KONTAKT</a>
                                </li>
                                <li className="nav-item social-nav-item">
                                    <a className="nav-link social-nav" href="https://www.instagram.com/chramchmeleapiva"
                                       target="_blank"><i className="fab fa-icon fa-instagram fa-15x"/></a>
                                    <a className="nav-link social-nav" href="https://www.facebook.com/chchp"
                                       target="_blank"><i
                                        className="fab fa-facebook fa-15x" aria-hidden="true"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Hero Image  */}
                <div className="banner info-image w-100 vh-100 d-flex align-items-center">
                    <div className="page-title container">
                        <h3 className="text-white pt-6">Error #404</h3>
                        <a className="btn btn-primary my-3" href="./index.html" role="button">Vrátit se zpět</a>
                    </div>
                </div>


            </div>
    )
}

export default Page404

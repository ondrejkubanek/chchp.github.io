import logo from './logo.svg';
import './App.css';
import React, {Fragment} from "react";
import "./index.css"
import "../styles/css/styles.css"
import "../styles/css/bootstrap.css"
import "../img/"


import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="banner hero-image w-100 vh-100 d-flex align-items-center">
                    <img className="hero-footer" src="img/assets/Zahlavi.png" alt="Zápatí Hero sekce"/>
                    <div className="container">
                        <h2 className="hero-text text-white"/>
                        <a className="btn btn-primary my-3" href="#areal" role="button">&nbsp;&nbsp;&nbsp;Areál Chrám
                            Chmele
                            a&nbsp;Piva&nbsp;&nbsp;&nbsp;</a>
                        <br/><a className="btn btn-secondary my-3" href="./kontakt.html" role="button">Otevírací
                        doba</a>
                        <a className="btn btn-secondary my-3 btn-second" href="https://rezervace.chchp.cz"
                           role="button">Rezervace</a>
                    </div>
                </div>
                {/* Areal section */}
                <section id="areal" className="container">
                    <h3 className="long">Areál chrám chmele a&nbsp;piva</h3>
                    <div className="row my-5 pt-lg-5">
                        <div className="col-lg-4">
                            <img className="areal-text " src="./img/assets/GS.png"
                                 alt="Expozice Žatec ve filmu, historie o sladovnictvní nebo největší sbírka tužek?"/>
                            <div className="areal-logo-div">
                                <a href="./areal-sladovna.html"><img className="areal-logo areal-logo-down"
                                                                     src="./img/assets/1_Sladovna.png"
                                                                     alt="Logo Galerie Sladovny."/></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="areal-logo-div">
                                <a href="./areal-chram.html"><img className="areal-logo"
                                                                  src="./img/assets/2_CHCHP.png"/></a>
                            </div>
                            <img className="areal-text areal-text-2" src="./img/assets/CHCHP.png"
                                 alt="Expozice Žatec ve filmu, historie o sladovnictvní nebo největší sbírka tužek?"/>
                        </div>
                        <div className="col-lg-4">
                            <img className="areal-text areal-text-3" src="./img/assets/KZ.png"
                                 alt="Expozice Žatec ve filmu, historie o sladovnictvní nebo největší sbírka tužek?"/>
                            <div className="areal-logo-div">
                                <a href="./areal-zahrada.html"><img className="areal-logo areal-logo-down"
                                                                    src="./img/assets/3_Zahrada.png"/></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Restaurace section */}
                <section id="restaurace">
                    <div className="banner restaurace-image w-100 vh-100 d-flex align-items-center">
                        <div className="container restaurace">
                            <a href="#restaurace"><img id className="logo-restaurace"
                                                       src="./img/logos/logo_restaurace.png"
                                                       alt="Logo restaurace U Orloje"/></a>
                            <h2 className="restaurace-text text-white">NETRADIČNÁ STYLOVÁ RESTAURACE
                                S&nbsp;MINIPIVOVAREM V&nbsp;PŮVODNÍM
                                CHMELOVÉM SKLADU</h2>
                            <a className="btn btn-primary my-3" target="_blank" href="https://www.orlojzatec.cz"
                               role="button">RESTAURACE</a>
                        </div>
                    </div>
                </section>
                {/* Zajímavosti section */}
                <section id="zajimavosti" className="container">
                    <h3 className="short">Zajímavosti</h3>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-xl-4 mt-5">
                            <div className="interests">
                                <a href="https://www.zatec-and-the-landscape-of-saaz-hops.com" target="_blank"><img
                                    className="interest-image"
                                    src="./img/interests/UNESCO.png"
                                    alt="Fotografie chmelnice."/></a>
                                <div className="interest-body">
                                    <h5 className="interest-title">UNESCO</h5>
                                    <p className="interest-text">Žatec jako kandidát na seznam UNESCO? Ano! A to i s
                                        krajinou našeho jedinečného
                                        žateckého chmele. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-4 mt-5">
                            <div className="interests">
                                <a href="#video-section"><img className="interest-image"
                                                              src="./img/interests/zatecvefilmu.png"
                                                              alt="Filmová klapka z expozice ve Sladovně."/></a>
                                <div className="interest-body">
                                    <h5 className="interest-title">Malý Hollywood</h5>
                                    <p className="interest-text">Víte, že je Žatec oblíbeným místem filmařů?
                                        V&nbsp;Galerii Sladovna o tom máme
                                        celou expozici… Jojo Rabbit, Úkryt&nbsp;v ZOO nebo trilogie Zahradnictví.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-4 mt-5">
                            <div className="interests">
                                <a href="https://www.facebook.com/photo.php?fbid=369873475142597&set=pb.100063598418045.-2207520000.&type=3"
                                   target="_blank"><img className="interest-image" src="./img/interests/kominy.png"
                                                        alt="Komíny na pražském předměstí v Žatci."/></a>
                                <div className="interest-body">
                                    <h5 className="interest-title">Komíny</h5>
                                    <p className="interest-text">Žatec je stokomínové město! Po bývalých sušárnách
                                        chmele nebo sirným komorách
                                        nám jich tu zbyly desítky a tak jsme si je i&nbsp;pojmenovali…</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-4 mt-5">
                            <div className="interests">
                                <a href="https://www.facebook.com/Chmelobrana/" target="_blank"><img
                                    className="interest-image"
                                    src="./img/interests/hroblojza.png"
                                    alt="Kostra s pivem na náhrobní desce."/></a>
                                <div className="interest-body">
                                    <h5 className="interest-title">Hrob nejstaršího pivaře</h5>
                                    <p className="interest-text">Kolikrát jste šli přes žatecké hlavní náměstí Svobody,
                                        aniž byste si všimli
                                        hrobu Lojzy Lupulína? Nachází se kousek od morového sloupu!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-4 mt-5">
                            <div className="interests">
                                <a href="http://www.bohemiahop.cz/cz/odrudy-chmele/zatecky-polorany-cervenak"
                                   target="_blank"><img
                                    className="interest-image" src="./img/interests/zpc.png"
                                    alt="Detailní záběr na chmel."/></a>
                                <div className="interest-body">
                                    <h5 className="interest-title">Žatecký poloraný červeňák</h5>
                                    <p className="interest-text">V Žatecké chmelařské oblasti se pěstuje světově
                                        nejkvalitnější odrůda chmele.
                                        Proč se&nbsp;červeňáku daří jen v naší oblasti? To se dozvíte v naší prohlídce v
                                        Chrámu Chmele
                                        a&nbsp;Piva…</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6 col-xl-4 mt-5">
                            <div className="interests">
                                <a href="https://www.facebook.com/Chmelobrana/" target="_blank"><img
                                    className="interest-image"
                                    src="./img/interests/chmelobrana.png"
                                    alt="Chmelobrana u Chmelového majáku."/></a>
                                <div className="interest-body">
                                    <h5 className="interest-title">Chmelobrana a tajemství Homolupulů</h5>
                                    <p className="interest-text">Kdo byli Homolupulové? Odhalte historii dávných
                                        obyvatelů žatecké chmelařské
                                        oblasti a prozkoumejte jejich pivní kulturu. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Video section */}
                <section id="video-section" className="bg-green">
                    <div className="video col-lg-12">
                        {/*<video id="video" class="video" controls>
    <source src="./img/video/zatecVeFilmu.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>*/}
                        <iframe className="ripple rounded ripple-surface-light" id="video"
                                src="https://www.youtube.com/embed/letVlJWLJco"
                                title="YouTube video přehrávač" frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                </section>
                {/* Galerie section */}
                <section id="galerie" className="container">
                    <h3 className="short">Fotografie z akcí</h3>
                    <div className="row my-5">
                        <div className="col-lg-8 ">
                            <div className="container">
                                <div id="carousel-photos" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={0}
                                                className="active"
                                                aria-current="true" aria-label="Slide 1"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={1}
                                                aria-label="Slide 2"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={2}
                                                aria-label="Slide 3"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={3}
                                                aria-label="Slide 4"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={4}
                                                aria-label="Slide 5"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={5}
                                                aria-label="Slide 6"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={6}
                                                aria-label="Slide 7"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={7}
                                                aria-label="Slide 8"/>
                                        <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={8}
                                                aria-label="Slide 9"/>
                                    </div>
                                    <div className="carousel-inner rounded">
                                        <div className="carousel-item active">
                                            <a href="./img/events/akce_5.jpg" data-lightbox="galerie"
                                               data-title="Zahájení turistické sezóny 2022 v Žatci"><img
                                                src="img/events/akce_5.jpg"
                                                className="d-block w-100"
                                                alt="Zahájení turistické sezóny 2022 v Žatci"/></a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="./img/events/akce_2.jpg" data-lightbox="galerie"
                                               data-title="Kulturní akce v Klášterní zahradě"><img
                                                src="img/events/akce_2.jpg"
                                                className="d-block w-100"
                                                alt="Kulturní akce v Klášterní zahradě"/></a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="./img/events/akce_3.jpg" data-lightbox="galerie"
                                               data-title="Kulturní akce v Chrámu chmele a piva"><img
                                                src="img/events/akce_3.jpg"
                                                className="d-block w-100"
                                                alt="Kulturní akce v Chrámu chmele a piva"/></a>
                                        </div>
                                        <div className="carousel-item ">
                                            <a href="./img/events/akce_9.jpg" data-lightbox="galerie"
                                               data-title="Zahájení turistické sezóny 2022 v Žatci"><img
                                                src="img/events/akce_9.jpg"
                                                className="d-block w-100"
                                                alt="Zahájení turistické sezóny 2022 v Žatci"/></a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="./img/events/akce_4.jpg" data-lightbox="galerie"
                                               data-title="Kulturní akce v Klášterní zahradě"><img
                                                src="img/events/akce_4.jpg"
                                                className="d-block w-100"
                                                alt="Kulturní akce v Klášterní zahradě"/></a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="./img/events/akce_1.jpg" data-lightbox="galerie"
                                               data-title="Listování v galerii Sladovna"><img
                                                src="img/events/akce_1.jpg" className="d-block w-100"
                                                alt="Listování v galerii Sladovna"/></a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="./img/events/akce_6.jpg" data-lightbox="galerie"
                                               data-title="Vernisž výstavy obrazů"><img
                                                src="img/events/akce_6.jpg" className="d-block w-100"
                                                alt="Vernisž výstavy obrazů"/></a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="./img/events/akce_7.jpg" data-lightbox="galerie"
                                               data-title="Kulturní akce v Klášterní zahradě"><img
                                                src="img/events/akce_7.jpg"
                                                className="d-block w-100"
                                                alt="Kulturní akce v Klášterní zahradě"/></a>
                                        </div>
                                        <div className="carousel-item">
                                            <a href="./img/events/akce_8.jpg" data-lightbox="galerie"
                                               data-title="Kulturní akce v Klášterní zahradě"><img
                                                src="img/events/akce_8.jpg"
                                                className="d-block w-100"
                                                alt="Kulturní akce v Klášterní zahradě"/></a>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carousel-photos"
                                            data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                        <span className="visually-hidden">Předchozí</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                            data-bs-target="#carousel-photos"
                                            data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                        <span className="visually-hidden">Následující</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 events-title">
                            V areálu Chrámu Chmele a Piva se&nbsp;pravidelně pořádají nejrůznější akce. Prohlédněte
                            si&nbsp;některé
                            z&nbsp;nich na fotografiích: Dočesná, zahájení žatecké turistické sezóny, koncerty,
                            vernisáže výstav, zajímavé
                            přednášky a další zábavné kulturní zážitky.
                            <br/><a className="btn btn-primary my-3" target="_blank"
                                    href="https://www.infozatec.cz/kalendar-akci/"
                                    role="button">AKCE V ŽATCI</a>
                        </div>
                    </div>
                </section>
                {/* Footer section */}
                <img id="footer" className="footer" src="img/assets/Zapati.png" alt="Zápatí footru"/>
                <section id="footer-bottom" className=" bg-green text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <a href="#"><img id="ico" style={{height: '9.5rem'}} src="./img/logos/logo-white.png"
                                                 alt="CHCHP - logo"/></a>
                                <div className="footer-text">
                                    <br/>Chrám Chmele a Piva CZ, p.o.
                                    <br/>náměstí Prokopa Velkého 1951
                                    <br/>Žatec, 438 01, Česká republika
                                    <br/>IČ: 28733088 DIČ: CZ28733088
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="py-3"><a href="./povinne-informace.html" className="btn btn-secondary">Povinné
                                    informace</a>
                                </div>
                                <div className="py-3"><a href="./kontakt.html" className="btn btn-secondary">Kontakt</a>
                                </div>
                                <div className="social py-3 d-flex justify-content-center">
                                    <a className="mx-2 text-white social-link" target="_blank"
                                       href="https://www.instagram.com/chramchmeleapiva"><i
                                        className="icon fab fa-icon fa-instagram "
                                        aria-hidden="true"/></a>
                                    <a className="mx-2 text-white social-link" target="_blank"
                                       href="https://www.facebook.com/chchp"><i
                                        className="icon fab fa-icon fa-facebook-f " aria-hidden="true"/></a>
                                </div>
                            </div>
                            <div className="copy col-lg-4">
                                Copyright © 2021–2022
                                <br/>Created by: <a href="https://www.ondrejkubanek.cz">Ondřej Kubánek</a>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default App;

<div>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Klášterní zahrada | CHCHP</title>
    <link href="lightbox2-2.11.3/dist/css/lightbox.min.css" rel="stylesheet"/>
    <link href="css/bootstrap.css" rel="stylesheet"/>
    <link href="css/styles.css" rel="stylesheet"/>
    <button onclick="topFunction()" className="buttonNahoru" id="buttonUp" style={{display: 'none'}}><i
        className="fas fa-arrow-up" aria-hidden="true"/></button>
    {/* Navbar  */}
    <nav className="navbar navbar-default navbar-expand-lg p-md-3">
        <div className="container">
            <a className="navbar-brand " href="./index.html"><img id="ico" className="logo"
                                                                  src="./img/logos/logo-white.png"
                                                                  alt="Logo chrámu chmele a piva"/></a>
            <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="toggler-icon top-bar"/>
                <span className="toggler-icon middle-bar"/>
                <span className="toggler-icon bottom-bar"/>
            </button>
            <div className="languages">
                <a href="./">
                    <img src="./img/assets/cs.svg" alt="Čeština" height="25px"/>
                </a>
                <a href="./de/index.html">
                    <img src="./img/assets/de.svg" alt="Deutch" height="25px"/>
                </a>
                <a href="./en/">
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
                        <a className="nav-link social-nav" href="https://www.facebook.com/chchp" target="_blank"><i
                            className="fab fa-facebook fa-15x" aria-hidden="true"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {/* Hero Image  */}
    <div className="banner areal-zahrada-image w-100 vh-100 d-flex align-items-center">
        <div className="page-title container">
            <h1 className="short text-white pt-6">Klášterní zahrada</h1>
        </div>
    </div>
    {/* Zahrada section */}
    <section id="zahrada" className="container">
        <div className="row">
            <div className="col-lg-12 py-5">
                <div className="card shadow mt-5 mt-lg-0 text-card-center">
                    <div className="card-body pb-2 pt-3 bg-zahrada">
                        <h6 className="font-weight-bold mb-0">Klášterní zahrada</h6>
                    </div>
                    <div className="card-body justify bg-light">
                        <p>Klášterní zahrada je místem odpočinku a&nbsp;relaxace o celkové ploše 8 500 m². Ve vrchní
                            části zahrady najdete historickou tyčovou chmelnici, bylinkovou zahrádku, vinici, dětský
                            koutek a&nbsp;fontánu.</p>
                        <p>Spodní části dominují kašna Chmelových rytířů, busta <a
                            href="https://www.muzeumzatec.cz/jan-ze-zatce.html" target="_blank">Jana ze Žatce</a>,
                            květinové záhony a&nbsp;zeleň. Na své si&nbsp;přijdou i&nbsp;ti&nbsp;nejmenší díky několika
                            pávům, kozám a ptačí voliéře. Nad celou zahradou bdí socha statečného <a
                                href="https://www.muzeumzatec.cz/kasna-bores.html" target="_blank">Boreše – strážce
                                města</a>.</p>
                    </div>
                </div>
            </div>
            <div className="galerie my-3">
                <div className="container">
                    <div id="carousel-photos" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={0}
                                    className="active" aria-current="true" aria-label="Slide 1"/>
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
                            <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={9}
                                    aria-label="Slide 10"/>
                            <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to={10}
                                    aria-label="Slide 11"/>
                        </div>
                        <div className="carousel-inner rounded">
                            <div className="carousel-item active" data-bs-interval={10000}>
                                <a href="./img/areal/zahrada/ALHA7283.jpg" data-lightbox="galerie"
                                   data-title="Sníh v Klášterní zahradě"><img src="img/areal/zahrada/ALHA7283.jpg"
                                                                              className="d-block w-100"
                                                                              alt="Sníh v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/zahrada/ALHA7138.jpg" data-lightbox="galerie"
                                   data-title="Sníh v Klášterní zahradě"><img src="img/areal/zahrada/ALHA7138.jpg"
                                                                              className="d-block w-100"
                                                                              alt="Sníh v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/zahrada/ALHA9459.jpg" data-lightbox="galerie"
                                   data-title="Kašna v Klášterní zahradě"><img src="img/areal/zahrada/ALHA9459.jpg"
                                                                               className="d-block w-100"
                                                                               alt="Kašna v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH0757.jpg" data-lightbox="galerie"
                                   data-title="Pávátko v Klášterní zahradě"><img src="img/areal/zahrada/KOCH0757.jpg"
                                                                                 className="d-block w-100"
                                                                                 alt="Pávátko v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH9820.jpg" data-lightbox="galerie"
                                   data-title="Socha Boreše, strážce města"><img src="img/areal/zahrada/KOCH9820.jpg"
                                                                                 className="d-block w-100"
                                                                                 alt="Socha Boreše, strážce města"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH7155.jpg" data-lightbox="galerie"
                                   data-title="Páv v Klášterní zahradě"><img src="img/areal/zahrada/KOCH7155.jpg"
                                                                             className="d-block w-100"
                                                                             alt="Páv v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH9862.jpg" data-lightbox="galerie"
                                   data-title="Koza v Klášterní zahradě"><img src="img/areal/zahrada/KOCH9862.jpg"
                                                                              className="d-block w-100"
                                                                              alt="Koza v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH7164.jpg" data-lightbox="galerie"
                                   data-title="Páv v Klášterní zahradě"><img src="img/areal/zahrada/KOCH7164.jpg"
                                                                             className="d-block w-100"
                                                                             alt="Páv v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH5228.jpg" data-lightbox="galerie"
                                   data-title="Andulka v Klášterní zahradě"><img src="img/areal/zahrada/KOCH5228.jpg"
                                                                                 className="d-block w-100"
                                                                                 alt="Andulka v Klášterní zahradě"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH6305.jpg" data-lightbox="galerie"
                                   data-title="Kašna chmelových rytířů"><img src="img/areal/zahrada/KOCH6305.jpg"
                                                                             className="d-block w-100"
                                                                             alt="Kašna chmelových rytířů"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="./img/areal/zahrada/KOCH7734.jpg" data-lightbox="galerie"
                                   data-title="Bylinková zahrada"><img src="img/areal/zahrada/KOCH7734.jpg"
                                                                       className="d-block w-100"
                                                                       alt="Bylinková zahrada"/></a>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-photos"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Předchozí</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-photos"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="visually-hidden">Následující</span>
                        </button>
                    </div>
                </div>
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
                <div className="col-lg-4 py-5">
                    <div className="py-3"><a className="btn btn-secondary">Povinné informace</a></div>
                    <div className="py-3"><a className="btn btn-secondary">Kontakt</a></div>
                    <div className="social d-flex justify-content-center">
                        <a className="mx-2 text-white social-link" target="_blank"
                           href="https://www.instagram.com/chramchmeleapiva"><i
                            className="icon fab fa-icon fa-instagram fa-15x" aria-hidden="true"/></a>
                        <a className="mx-2 text-white social-link" target="_blank"
                           href="https://www.facebook.com/chchp"><i className="icon fab fa-icon fa-facebook-f fa-15x"
                                                                    aria-hidden="true"/></a>
                    </div>
                </div>
                <div className="copy col-lg-4">
                    Copyright © 2021–2022
                    <br/>Created by: <a href="https://www.ondrejkubanek.cz">Ondřej Kubánek</a>
                </div>
            </div>
        </div>
    </section>
</div>

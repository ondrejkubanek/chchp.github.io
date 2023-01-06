<div>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Galerie Sladovna | CHCHP</title>
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
    <div className="banner areal-sladovna-image w-100 vh-100 d-flex align-items-center">
        <div className="page-title container">
            <h1 className="short text-white pt-6">Galerie Sladovna</h1>
        </div>
    </div>
    {/* Sladovna section */}
    <section id="sladovna" className="container">
        <div className="row">
            <div className="col-lg-12 py-5">
                <div className="card shadow mt-5 mt-lg-0 text-card-center">
                    <div className="card-body pb-2 pt-3 bg-sladovna">
                        <h6 className="font-weight-bold mb-0">Galerie Sladovna</h6>
                    </div>
                    <div className="card-body justify bg-light">
                        <p>V Masarykově ulici v Žatci se nachází unikátní renesanční budova, jejíž význam díky citlivé
                            rekonstrukci přesahuje hranice tohoto regionu. Budova byla dle průzkumu postavena již v
                            letech 1573–1574.</p>
                        <p>Do historie se budova zapsala jako městská sýpka, poté obecní sladovna, dále roku 1801 jako
                            obytný dům a&nbsp;v&nbsp;neposlední řadě jako výrobna barev a&nbsp;laků manželů Ferdinanda
                            a&nbsp;Marie Jacobových, což ukazují nalezené a&nbsp;restaurované původní nápisy
                            na&nbsp;fasádě. Později budova připadla státu a&nbsp;začala chátrat. Záchranou této budovy
                            bylo zařazení do projektu Chrámu Chmele a&nbsp;Piva a&nbsp;v&nbsp;roce 2010 tak došlo k
                            celkové stavební obnově.</p>
                        <p>Dnes Galerie Sladovna nabízí v přízemí informační kancelář, kde si můžete zakoupit prohlídku
                            nejen Sladovny či&nbsp;Chrámu Chmele a&nbsp;piva, ale i&nbsp;mnoho suvenýrů. V přízemí
                            si&nbsp;můžete prohlédnout stálou expozici Sladovnictví s&nbsp;archeologickými nálezy.</p>
                        <p>V prvním patře na Vás čeká interaktivní výstava „Historie NeObyčejné tužky.“ Jde
                            o&nbsp;celoživotní sbírku historických a&nbsp;raritních tužek sběratele Emanuela Petráňě.
                            Seznámíte se s vývojem písma a psacího náčiní, a navíc si zde můžete vyrobit svojí vlastní
                            tužku! Partnerem výstavy je <a href="https://www.koh-i-noor.cz"
                                                           target="_blank">KOH-I-NOOR</a>.</p>
                        <p>V patře se nachází unikátní výstavní galerie, ve&nbsp;které pravidelně pořádáme výstavy
                            od&nbsp;různých umělců. Další část patra prezentuje výstava „Žatec ve filmu“ s&nbsp;krátkými
                            ukázkami českých a&nbsp;zahraničních filmů natáčených v&nbsp;Žatci. </p>
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
                                <a href="./img/areal/sladovna/nominace UNESCO.jpg" data-lightbox="galerie"
                                   data-title="Galerie Sladovna"><img src="img/areal/sladovna/nominace UNESCO.jpg"
                                                                      className="d-block w-100" alt="Galerie Sladovna"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/ALHA0114.jpg" data-lightbox="galerie"
                                   data-title="Expozice sladovnictví"><img src="img/areal/sladovna/ALHA0114.jpg"
                                                                           className="d-block w-100"
                                                                           alt="Expozice sladovnictví"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/ALHA0125.jpg" data-lightbox="galerie"
                                   data-title="Expozice Žatec ve filmu"><img src="img/areal/sladovna/ALHA0125.jpg"
                                                                             className="d-block w-100"
                                                                             alt="Expozice Žatec ve filmu"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/ALHA1319.jpg" data-lightbox="galerie"
                                   data-title="Vnitroblok sladovny"><img src="img/areal/sladovna/ALHA1319.jpg"
                                                                         className="d-block w-100"
                                                                         alt="Vnitroblok sladovny"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/ALHA7640.jpg" data-lightbox="galerie"
                                   data-title="Expozice Historie neobyčejné tužky"><img
                                    src="img/areal/sladovna/ALHA7640.jpg" className="d-block w-100"
                                    alt="Expozice Historie neobyčejné tužky"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/ALHA7676.jpg" data-lightbox="galerie"
                                   data-title="Expozice Historie neobyčejné tužky"><img
                                    src="img/areal/sladovna/ALHA7676.jpg" className="d-block w-100"
                                    alt="Expozice Historie neobyčejné tužky"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/ALHA8250-2.jpg" data-lightbox="galerie"
                                   data-title="Expozice sladovnictví"><img src="img/areal/sladovna/ALHA8250-2.jpg"
                                                                           className="d-block w-100"
                                                                           alt="Expozice sladovnictví"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/ALHA8280.jpg" data-lightbox="galerie"
                                   data-title="Výstavní prostory"><img src="img/areal/sladovna/ALHA8280.jpg"
                                                                       className="d-block w-100"
                                                                       alt="Výstavní prostory"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/KOCH5190.jpg" data-lightbox="galerie"
                                   data-title="Expozice sladovnictví"><img src="img/areal/sladovna/KOCH5190.jpg"
                                                                           className="d-block w-100"
                                                                           alt="Expozice sladovnictví"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/KOCH6170.jpg" data-lightbox="galerie"
                                   data-title="Expozice Žatec ve filmu"><img src="img/areal/sladovna/KOCH6170.jpg"
                                                                             className="d-block w-100"
                                                                             alt="Expozice Žatec ve filmu"/></a>
                            </div>
                            <div className="carousel-item" data-bs-interval={10000}>
                                <a href="./img/areal/sladovna/KOCH9562.jpg" data-lightbox="galerie"
                                   data-title="Expozice Historie neobyčejné tužky"><img
                                    src="img/areal/sladovna/KOCH9562.jpg" className="d-block w-100"
                                    alt="Expozice Historie neobyčejné tužky"/></a>
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
                    <div className="social py-3 d-flex justify-content-center">
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

<div>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Zážitky | CHCHP</title>
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
                        <a className="nav-link " href="./prohlidky.html">PROHLÍDKY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="./zazitky.html">ZÁŽITKY</a>
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
    {/* Title Image  */}
    <div className="banner zazitky-image w-100 vh-100 d-flex align-items-center">
        <div className="page-title container">
            <h1 className="long text-white pt-6">ZÁŽITKY V ŽATCI A OKOLÍ </h1>
            <p className="py-3 text-white text-title">Zažijte chmelové i nechmelové dobrodružství v&nbsp;Žatci
                a&nbsp;blízkém okolí.</p>
            <a className="btn btn-primary my-3" href="#zazitky" role="button">ZJISTI VÍCE</a>
        </div>
    </div>
    {/* Zazitky section */}
    <section id="zazitky" className="zazitky">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/0.horizontálně.jpg" className="w-100 rounded mb-4"
                             alt="Chmelový orloj"/>
                        <a href="#" target="_blank">
                            <div className="mask mask-horizontal">Unikátní Chmelový orloj</div>
                        </a>
                    </div>
                    {/* vertikalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/5.vertikalne.jpg" className="w-100 rounded mb-4"
                             alt="Nápis pivotýl v muzeu Homolupulů"/>
                        <a href="https://www.facebook.com/muzeum.chmelobrana.zatec/" target="_blank">
                            <div className="mask mask-vertikal">Do světa bájných Homolupulů</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/6.horizontálně.jpg" className="w-100 rounded mb-4"
                             alt="Chmelařské muzeum a Chmelový maják"/>
                        <a href="http://www.chmelarskemuzeum.cz/" target="_blank">
                            <div className="mask mask-horizontal">Největší chmelařské muzeum na světě</div>
                        </a>
                    </div>
                    {/* vertikalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/14.vertikalne.jpg" className="w-100 rounded mb-4"
                             alt="Hororové sklepy v Jedové chýši"/>
                        <a href="https://www.retrocomputer.cz/" target="_blank">
                            <div className="mask mask-vertikal">Hororový zážitek v&nbsp;Jedové chýši</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/11.horizontálně.jpg" className="w-100 rounded mb-4"
                             alt="Interiér Mederova domu"/>
                        <a href="https://www.mederhaus.cz/" target="_blank">
                            <div className="mask mask-horizontal">Mederův dům</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/10.horizontalne.jpg" className="w-100 rounded mb-4"
                             alt="Radniční věž s chmelničkou"/>
                        <a href="https://www.infozatec.cz/turistika/" target="_blank">
                            <div className="mask mask-horizontal">Expozice v radniční věži</div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    {/* vertikalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/4.vertikalne.jpg" className="w-100 rounded mb-4"
                             alt="Tužky ve sladovně"/>
                        <a href="#" target="_blank">
                            <div className="mask mask-vertikal">Historie NeObyčejné tužky</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/3.horizontalne.jpg" className="w-100 rounded mb-4"
                             alt="Filmová klapka s nápisem Žatec ve filmu"/>
                        <a href="#" target="_blank">
                            <div className="mask mask-horizontal">Žatec ve filmu</div>
                        </a>
                    </div>
                    {/* vertikalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/16.vertikalne.jpg" className="w-100 rounded mb-4"
                             alt="Chmel na nejmenší chmelničce na světě v pozadí synagoga"/>
                        <a href="https://synagoga-zatec.cz/" target="_blank">
                            <div className="mask mask-vertikal">Druhá největší synagoga v&nbsp;ČR</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/13.horizontalne.jpg" className="w-100 rounded mb-4"
                             alt="Štít žatecké radnice"/>
                        <a href="https://www.infozatec.cz/turistika/" target="_blank">
                            <div className="mask mask-horizontal">Prohlídky královským Žatcem</div>
                        </a>
                    </div>
                    {/* vertikalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/18.vertikálně.jpg" className="w-100 rounded mb-4"
                             alt="Interiér válečného muzea v Libočanech"/>
                        <a href="https://www.muzeum-libocany.cz/" target="_blank">
                            <div className="mask mask-vertikal">Válečné muzeum Libočany</div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/1.horizontálně.jpg" className="w-100 rounded mb-4"
                             alt="Interiér chmelového labyrintu"/>
                        <a href="#" target="_blank">
                            <div className="mask mask-horizontal">Chmelový labyrint</div>
                        </a>
                    </div>
                    {/* vertikalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/7.vertikalne.jpg" className="w-100 rounded mb-4"
                             alt="Budova muzea pivovarnictvní"/>
                        <a href="http://www.zateckypivovar.cz/muzeum-a-rozhledna" target="_blank">
                            <div className="mask mask-vertikal">Muzeum pivovarnictví</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/2.horizontalne.jpg" className="w-100 rounded mb-4"
                             alt="Zrna sladu v ruce"/>
                        <a href="#" target="_blank">
                            <div className="mask mask-horizontal">Za tajemstvím výroby sladu</div>
                        </a>
                    </div>
                    {/* vertikalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/12.vertikalne.jpg" className="w-100 rounded mb-4"
                             alt="Budova stré papírny"/>
                        <a href="https://www.muzeumzatec.cz/encyklopedie.html" target="_blank">
                            <div className="mask mask-vertikal">Historie Žatecka (K.A.Polánek)</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/9.horizontalne.jpg" className="w-100 rounded mb-4"
                             alt="Cesta vedle chmelnice"/>
                        <a href="https://cestouchmele.chizatec.cz/" target="_blank">
                            <div className="mask mask-horizontal">Chmelová stezka</div>
                        </a>
                    </div>
                    {/* horizontalne image*/}
                    <div className="bg-image hover-overlay ripple rounded ripple-surface-light"
                         data-ripple-color="light">
                        <img src="img/experiences/19.horizontálně.jpg" className="w-100 rounded mb-4"
                             alt="Varna v pivovaru Krušovice"/>
                        <a href="https://krusovice.cz/exkurze" target="_blank">
                            <div className="mask mask-horizontal">Exkurze v pivovaru Krušovice</div>
                        </a>
                    </div>
                    <a href="https://www.kudyznudy.cz/?utm_source=kzn&utm_medium=partneri_kzn&utm_campaign=banner"
                       title="Kudyznudy.cz - tipy na výlet" target="_blank"> <img
                        src="https://www.kudyznudy.cz/getmedia/849ee326-f95a-43ce-812c-be9c5817c81e/KzN_banner_234x60.jpg.aspx"
                        width={234} height={60} alt="Kudyznudy.cz - tipy na výlet"/> </a>
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
                <div className="col-lg-4 ">
                    <div className="py-3"><a href="./povinne-informace.html" className="btn btn-secondary">Povinné
                        informace</a></div>
                    <div className="py-3"><a href="./kontakt.html" className="btn btn-secondary">Kontakt</a></div>
                    <div className="social py-3 d-flex justify-content-center">
                        <a className="mx-2 text-white social-link" target="_blank"
                           href="https://www.instagram.com/chramchmeleapiva"><i
                            className="icon fab fa-icon fa-instagram " aria-hidden="true"/></a>
                        <a className="mx-2 text-white social-link" target="_blank"
                           href="https://www.facebook.com/chchp"><i className="icon fab fa-icon fa-facebook-f "
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

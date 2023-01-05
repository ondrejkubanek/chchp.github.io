<div>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Prohlídky | CHCHP</title>
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
                        <a className="nav-link active" href="./prohlidky.html">PROHLÍDKY</a>
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
    {/* Title Image  */}
    <div className="banner prohlidky-image w-100 vh-100 d-flex align-items-center">
        <div className="page-title container">
            <h1 className="long text-white pt-6 ">ZÁBAVA PRO VŠECHNY VĚKOVÉ SKUPINY</h1>
            <p className="py-3 text-white text-title">Chmelový maják, chmelový labyrint, pracovna alchymisty, erbovní
                síň, Galerie Sladovna či největší chmelařské muzeum na světě na jednom místě v Žatci.</p>
            <a className="btn btn-primary my-3" href="#prohlidky" role="button">ZJISTI VÍCE</a>
            <a className="btn btn-light my-3" href="https://rezervace.chchp.cz" target="_blank"
               role="button">REZERVACE</a>
        </div>
    </div>
    {/* Prohlidky section */}
    <section id="prohlidky" className="prohlidky">
        <div className="container">
            <h3 className="short">Prohlídkové okruhy</h3>
            <div className="row">
                {/* Tour */}
                <div className="col-lg-5 tour-padding tour-photo">
                    <a href="./img/tours/Okruh-A.jpg" data-lightbox="image-1"
                       data-title="Budova Chrámu Chmele a Piva"><img src="img/tours/Okruh-A.jpg"
                                                                     className="img-fluid ripple rounded ripple-surface-light"
                                                                     alt="Budova Chrámu Chmele a Piva"/></a>
                </div>
                <div className="col-lg-7 tour-padding ">
                    <h4>Okruh A</h4>
                    <div className="text">
                        <b>Prohlídka s průvodcem zahrnující vnitřní expozici Chrámu Chmele a&nbsp;Piva a&nbsp;Galerii
                            Sladovna.</b>
                        <div className="paragraf">
                            Plné vstupné: 140 Kč
                            <br/>Zlevněné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Děti, senioři (65 a více let), ZTP a ZTP/P"/> : 100 Kč
                            <br/>Rodinné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                    data-placement="top" title="2 dospělí + až 3 děti"/> : 340 Kč
                        </div>
                        <div className="paragraf">
                            Doba prohlídky: 90 min
                            <br/>Prohlídky začínají v každou celou hodinu od 10:00 do 15:00.<br/>Doporučujeme si <a
                            href="https://rezervace.chchp.cz" target="_blank">vytvořit rezervaci</a>.
                        </div>
                        Uvidíte expozici v bývalém skladu chmele, kterou tvoří labyrint z&nbsp;chmelových žoků, erbovní
                        síň, tajuplná pracovna alchymisty a&nbsp;chmelový poklad. Dále Vás čeká zastávka
                        u&nbsp;Chmelového Orloje, kde se dozvíte zda se dostanete do pivního pekla nebo ráje
                        a&nbsp;mnoho dalšího, co jediný chmelový orloj na světě ukazuje. Na závěr navštívíte Galerii
                        Sladovnu s expozicí Sladovnictví, Žatec ve filmu, Historie NeObyčejné Tužky a aktuální výstavou
                        umění.
                        <div className="paragraf">
                            <b>V prodeji po celý rok.</b>
                        </div>
                    </div>
                </div>
                {/* Tour */}
                <div className="col-lg-5 tour-padding tour-photo">
                    <a href="./img/tours/Okruh-B.jpg" data-lightbox="image-2"
                       data-title="Budova Chmelařského muzea a Chmelový maják"><img src="img/tours/Okruh-B.jpg"
                                                                                    className="img-fluid ripple rounded ripple-surface-light"
                                                                                    alt="Budova Chmelařského muzea a Chmelový maják"/></a>
                </div>
                <div className="col-lg-7 tour-padding">
                    <h4>Okruh B</h4>
                    <div className="text">
                        <b>Společná vstupenka zahrnující vnitřní expozici Chrámu Chmele a&nbsp;Piva, Galerii Sladovna a
                            Chmelařské muzeum.</b>
                        <div className="paragraf">
                            Plné vstupné: 190 Kč
                            <br/>Zlevněné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Děti, senioři (65 a více let), ZTP a ZTP/P"/> : 140 Kč
                            <br/>Rodinné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                    data-placement="top" title="2 dospělí + až 3 děti"/> : 430 Kč
                        </div>
                        <div className="paragraf">
                            Doba prohlídky: 165 min
                            <br/>Prohlídky začínají v&nbsp;každou celou hodinu od 10:00 do 15:00 v&nbsp;Chrámu Chmele
                            a&nbsp;Piva.<br/>Doporučujeme si <a href="https://rezervace.chchp.cz" target="_blank">vytvořit
                            rezervaci</a>.
                        </div>
                        Společná vstupenka neplatí pro zájezdy a organizované skupiny. Platnost společné vstupenky je
                        dva dny.
                        <div className="paragraf">
                            <b>V prodeji pouze od dubna do října.</b>
                        </div>
                    </div>
                </div>
                {/* Tour */}
                <div className="col-lg-5 tour-padding tour-photo">
                    <a href="./img/tours/Okruh-C.jpg" data-lightbox="image-3"
                       data-title="Expozice sladovnictvní v renesanční Sladovně"><img src="img/tours/Okruh-C.jpg"
                                                                                      className="img-fluid ripple rounded ripple-surface-light"
                                                                                      alt="Expozice sladovnictvní v renesanční Sladovně"/></a>
                </div>
                <div className="col-lg-7 tour-padding">
                    <h4>Okruh C</h4>
                    <div className="text">
                        <b>Prohlídka zahrnující expozice v Galerie Sladovna (Sladovnictví, Žatec ve filmu, Historie
                            Neobyčejné tužky a aktuální výstavu umění v hlavní galerii).</b>
                        <div className="paragraf">
                            Plné vstupné: 70 Kč
                            <br/>Zlevněné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Děti, senioři (65 a více let), ZTP a ZTP/P"/> : 60 Kč
                            <br/>Rodinné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                    data-placement="top" title="2 dospělí + až 3 děti"/> : 180 Kč
                        </div>
                        <div className="paragraf">
                            Doba prohlídky: 45 min
                            <br/>Na tento okruh není rezervace nutná.
                        </div>
                        Uvidíte expozice v renesanční a zároveň nejstarší dochované Sladovně pocházející ze 16. století.
                        Čeká na vás stálá výstava Sladovnictví, Žatec ve filmu a Historie Neobyčejné tužky. V prvním
                        patře se nachází také hlavní galerie, ve které se&nbsp;několikrát do roka obměňují výstavy
                        různých umělců.
                        <div className="paragraf">
                            <b>V prodeji po celý rok.</b>
                        </div>
                    </div>
                </div>
                {/* Tour */}
                <div className="col-lg-5 tour-padding tour-photo">
                    <a href="./img/tours/Okruh-D.jpg" data-lightbox="image-4"
                       data-title="Chmelový maják, dominanta areálu"><img src="img/tours/Okruh-D.jpg"
                                                                          className="img-fluid ripple rounded ripple-surface-light"
                                                                          alt="Chmelový maják, dominanta areálu"/></a>
                </div>
                <div className="col-lg-7 tour-padding">
                    <h4>Okruh D</h4>
                    <div className="text">
                        <b>Prohlídka s průvodcem a 3D projekcí ve Chmelovém majáku.</b>
                        <div className="paragraf">
                            Plné vstupné: 110 Kč
                            <br/>Zlevněné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Děti, senioři (65 a více let), ZTP a ZTP/P"/> : 90 Kč
                            <br/>Rodinné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                    data-placement="top" title="2 dospělí + až 3 děti"/> : 270 Kč
                        </div>
                        <div className="paragraf">
                            Doba prohlídky: 20 min
                            <br/>Prohlídky začínají každou půl hodinu od 10:00 do 16:30.<br/>Doporučujeme si <a
                            href="https://rezervace.chchp.cz" target="_blank">vytvořit rezervaci</a>.
                        </div>
                        Prohlídka s průvodcem prostřednictvím unikátního výtahu s 3D projekcí, kde uvidíte ojedinělou
                        animaci. Chmelový maják je dominanta celého areálu chmelařských technických památek a&nbsp;plní
                        několik funkcí najednou. Prostřednictvím výtahu vyjedete do 2/3 výšky a zároveň uvidíte
                        chmelařské město Žatec se svými skvosty.
                        <div className="paragraf">
                            <b>V prodeji pouze v letní turistické sezóně.</b>
                        </div>
                    </div>
                </div>
                {/* Tour */}
                <div className="col-lg-5 tour-padding tour-photo">
                    <a href="./img/tours/Okruh-E.jpg" data-lightbox="image-5"
                       data-title="Pohled z dalekohledu na Chmelovém majáku"><img src="img/tours/Okruh-E.jpg"
                                                                                  className="img-fluid ripple rounded ripple-surface-light"
                                                                                  alt="Pohled z dalekohledu na Chmelovém majáku"/></a>
                </div>
                <div className="col-lg-7 tour-padding">
                    <h4>Okruh E</h4>
                    <div className="text">
                        <b>Pěší výstup na rozhlednu Chmelový maják.<br/>V případě zájmu si můžete při zakoupení
                            vstupenky za vratnou zálohu půjčit dalekohled.</b>
                        <div className="paragraf">
                            Plné vstupné: 60 Kč
                            <br/>Zlevněné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Děti, senioři (65 a více let), ZTP a ZTP/P"/> : 50 Kč
                            <br/>Rodinné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                    data-placement="top" title="2 dospělí + až 3 děti"/> : 140 Kč
                        </div>
                        <div className="paragraf">
                            Doba prohlídky: záleží na vás 😊
                            <br/>Na tento okruh není rezervace nutná.
                        </div>
                        Samostatná prohlídka na dominantu celého areálu se zastávkami s&nbsp;výhledem na&nbsp;chmelařské
                        město Žatec a jeho architekturu. Cesta na vrchol je sice fyzicky náročná, ale stojí za to. <div
                        className="paragraf">
                        <div className="paragraf">
                            <b>V prodeji po celý rok.</b>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Tour */}
                <div className="col-lg-5 tour-padding tour-photo">
                    <a href="./img/tours/Okruh-F.jpg" data-lightbox="image-6"
                       data-title="Erbovní síň v Chrámu Chmele a Piva"><img src="img/tours/Okruh-F.jpg"
                                                                            className="img-fluid ripple rounded ripple-surface-light"
                                                                            alt="Erbovní síň v Chrámu Chmele a Piva"/></a>
                </div>
                <div className="col-lg-7 tour-padding">
                    <h4>Okruh F</h4>
                    <div className="text">
                        <b>Prohlídka s průvodcem zahrnující vnitřní expozici Chrámu Chmele a&nbsp;Piva.</b>
                        <div className="paragraf">
                            Plné vstupné: 110 Kč
                            <br/>Zlevněné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                     data-placement="top"
                                                     title="Děti, senioři (65 a více let), ZTP a ZTP/P"/> : 80 Kč
                            <br/>Rodinné vstupné <i className="fa fa-question-circle " data-toggle="tooltip"
                                                    data-placement="top" title="2 dospělí + až 3 děti"/> : 260 Kč
                        </div>
                        <div className="paragraf">
                            Doba prohlídky: 45 min
                            Prohlídka začíná v 16:00.<br/>Doporučujeme si <a href="https://rezervace.chchp.cz"
                                                                             target="_blank">vytvořit rezervaci</a>.
                        </div>
                        Uvidíte expozici v bývalém skladu chmele, kterou tvoří labyrint z&nbsp;chmelových žoků, erbovní
                        síň, tajuplná pracovna alchymisty a&nbsp;chmelový poklad. Dále Vás čeká zastávka u Chmelového
                        Orloje, kde se dozvíte zda se dostanete do pivního pekla nebo ráje a&nbsp;mnoho dalšího, co
                        jediný chmelový orloj na světě ukazuje.
                        <div className="paragraf">
                            <b>V prodeji po celý rok.</b>
                        </div>
                    </div>
                </div>
                {/* Tour */}
                <div className="col-lg-5 tour-padding tour-photo">
                    <a href="./img/tours/Muzeum-Homolupulu.jpg" data-lightbox="image-7"
                       data-title="Muzeum Homolupulů"><img src="img/tours/Muzeum-Homolupulu.jpg"
                                                           className="img-fluid ripple rounded ripple-surface-light"
                                                           alt="Muzeum Homolupulů"/></a>
                </div>
                <div className="col-lg-7 tour-padding">
                    <h4>Muzeum Homolupulů</h4>
                    <div className="text">
                        <div className="paragraf">
                            Že nevíte, co je Homo Lupulus? Jedná se o dávnou civilizaci statných mužů a&nbsp;něžných žen
                            obývající chmeloviště na Žatecku, která dala světu nejlepší chmel, atletiku, pivo, notový
                            klíč, sedmý schod a&nbsp;mnoho dalšího…
                            Poklonit se ostatkům nejstaršího pivaře na&nbsp;světě a&nbsp;objevit homolupulské geny i
                            v&nbsp;sobě můžete v&nbsp;Muzeu Homolupulů v&nbsp;Žatci. To musíte zažít! Chmelu, chmel!
                        </div>
                        <div className="paragraf">
                            Na prohlídku je NUTNÁ <a href="https://rezervace.chchp.cz" target="_blank">rezervace</a>.
                        </div>
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

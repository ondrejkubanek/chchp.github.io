<div>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Pronájem | CHCHP</title>
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
                        <a className="nav-link " href="./zazitky.html">ZÁŽITKY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="./pronajem.html">PRONÁJEM</a>
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
    <div className="banner pronajem-image w-100 vh-100 d-flex">
        <div className="page-title container">
            <h1 className="short text-white pt-6">Pronájem prostor</h1>
        </div>
    </div>
    {/* Pronajem section */}
    <section id="pronajem" className="pronajem">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 foto-hover">
                    <a href="./img/logos/sal.jpg" data-lightbox="image-1" data-title="Sál v Galerii Sladovna"><img
                        className="pronajem-areal-logo rounded" src="./img/logos/sal.jpg" alt="Sál v Galerii Sladovna"/></a>
                </div>
                <div className="col-lg-6">
                    <div className="pronajem-areal-text">
                        <table className="table table-borderless">
                            <tbody>
                            <tr>
                                <td><h4>Galerie Sladovna - sál</h4></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Sál je vhodný pro přednášky, školení, prezentace, aj.</td>
                            </tr>
                            <tr>
                                <th scope="row">Pronájem</th>
                                <td/>
                                <td>350 Kč/h</td>
                            </tr>
                            <tr>
                                <th scope="row">Akce</th>
                                <td/>
                                <td>2 500 Kč/h</td>
                            </tr>
                            <tr>
                                <th scope="row">Kontakt</th>
                                <td/>
                                <td><a href="tel:+420725703755">+420 725 703 755</a></td>
                            </tr>
                            <tr>
                                <th scope="row">E-mail</th>
                                <td/>
                                <td><a href="mailto:sladovna@chchp.cz">sladovna@chchp.cz</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 foto-hover">
                    <a href="./img/logos/zahrada.jpg" data-lightbox="image-2"
                       data-title="Spodní část Klášterní zahrady"><img className="pronajem-areal-logo d-block rounded"
                                                                       src="./img/logos/zahrada.jpg"
                                                                       alt="Spodní část Klášterní zahrady"/></a>
                </div>
                <div className="col-lg-6 ">
                    <div className="pronajem-areal-text">
                        <table className="table table-borderless">
                            <tbody>
                            <tr>
                                <td><h4>Klášterní zahrada</h4></td>
                            </tr>
                            <tr>
                                <td colSpan={3}>Klášterní zahrada je kouzelné místo pro svatby nebo je ideální pro menší
                                    koncerty pod širým nebem.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Svatba</th>
                                <td/>
                                <td>3 000 Kč/obřad</td>
                            </tr>
                            <tr>
                                <th scope="row">Akce</th>
                                <td/>
                                <td>6 000 Kč/den</td>
                            </tr>
                            <tr>
                                <th scope="row">Kontakt</th>
                                <td/>
                                <td><a href="tel:+420725703755">+420 725 703 755</a></td>
                            </tr>
                            <tr>
                                <th scope="row">E-mail</th>
                                <td/>
                                <td><a href="mailto:sladovna@chchp.cz">sladovna@chchp.cz</a></td>
                            </tr>
                            </tbody>
                        </table>
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

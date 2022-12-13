<!-- Some of those will be only once in React! -->
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pronájem | CHCHP</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <script src="https://kit.fontawesome.com/587366a1da.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link href="css/bootstrap.css" rel="stylesheet" /> 
    <link href="css/styles.css" rel="stylesheet" />
  </head>
  <body>
    <!-- Navbar  -->
    <nav class="navbar navbar-default navbar-expand-lg p-md-3">
        <div class="container">
            <a class="navbar-brand " href="./index.html"><img id="ico" class="logo"src="./img/logos/logo-white.png" alt="CHCHP - logo"></a>
            <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon top-bar"></span>
                <span class="toggler-icon middle-bar"></span>
                <span class="toggler-icon bottom-bar"></span>
              </button>
            <div class="collapse navbar-collapse " id="navbarNav">
            <div class="mx-auto"></div>
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link " href="./prohlidky.html">PROHLÍDKY</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="./zazitky.html">ZÁŽITKY</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="./pronajem.html">PRONÁJEM</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./kontakt.html">KONTAKT</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="https://www.instagram.com/chramchmeleapiva" target="_blank"><i class="fab fa-icon fa-instagram fa-15x"></i></a>
                </li>
                <li class="nav-item">
                <a class="nav-link " href="https://www.facebook.com/chchp" target="_blank"><i class="fab fa-facebook fa-15x" aria-hidden="true"></i></a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <!-- Title Image  -->
    <div class="banner pronajem-image w-100 vh-100 d-flex">
        <div class="page-title container">
            <h1 class="short text-white pt-6">Pronájem prostor</h1>
        </div>
    </div>

    <!-- Pronajem section -->
    <section id="pronajem" class="pronajem">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6">
                    <div class="pronajem-areal-text">
                        <h4>Galerii Sladovna - sál</h4>
                        <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <th scope="row">Pronájem</th>
                                <td></td>
                                <td>350 Kč/h</td>
                              </tr>
                              <tr>
                                <th scope="row">Akce</th>
                                <td></td>
                                <td>2 500 Kč/h</td>
                              </tr>
                              <tr>
                                <th scope="row">Kontakt</th>
                                <td></td>
                                <td><a href="tel:+420725703755">+420 725 703 755</a></td>
                              </tr>
                              <tr>
                                <th scope="row">E-mail</th>
                                <td></td>
                                <td><a href="mailto:sladovna@chchp.cz">sladovna@chchp.cz</a></td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <img class="pronajem-areal-logo rounded" src="./img/logos/sal.jpg">
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 ">
                    <div class="pronajem-areal-text">
                        <h4>Klášterní zahrada</h4>
                        <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <th scope="row">Svatba</th>
                                <td></td>
                                <td>3 000 Kč/obřad</td>
                              </tr>
                              <tr>
                                <th scope="row">Akce</th>
                                <td></td>
                                <td>6 000 Kč/den</td>
                              </tr>
                              <tr>
                                <th scope="row">Kontakt</th>
                                <td></td>
                                <td><a href="tel:+420725703755">+420 725 703 755</a></td>
                              </tr>
                              <tr>
                                <th scope="row">E-mail</th>
                                <td></td>
                                <td><a href="mailto:sladovna@chchp.cz">sladovna@chchp.cz</a></td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
                <div class="col-lg-6 ">
                  <img class="pronajem-areal-logo d-block rounded" src="./img/logos/zahrada.jpg">
              </div>
            </div>
        </div>
    </section>


    <!-- Footer section -->
    <img id="footer" class="footer" src="img/assets/Zapati.png" alt="Zápatí footru" >

       
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/scripts.js"></script>
    </body>
</html>
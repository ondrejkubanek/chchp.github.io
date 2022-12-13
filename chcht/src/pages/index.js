<!-- Some of those will be only once in React! -->
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Úvodní stránka | CHCHP</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <script src="https://kit.fontawesome.com/587366a1da.js" crossorigin="anonymous"></script>

    <link href="css/bootstrap.css" rel="stylesheet" /> 
    <link href="css/styles.css" rel="stylesheet" />
  </head>
  <body id="page-top">
    <button onclick="topFunction()" class="buttonNahoru" id="buttonUp" style="display: none;"><i class="fas fa-arrow-up" aria-hidden="true"></i></button>
    <!-- Navbar  -->
    <nav class="navbar navbar-default navbar-expand-lg p-md-3">
      
      <div class="container">
        <a class="navbar-brand " href="./index.html"><img id="ico" class="logo"src="./img/logos/logo-white.png" alt="CHCHP - logo"></a>
        <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="toggler-icon top-bar"></span>
          <span class="toggler-icon middle-bar"></span>
          <span class="toggler-icon bottom-bar"></span>
        </button>
        <div class="languages">
          <a href="https://www.chchp.cz">
            <img src="./img/assets/cs.svg" alt="Čeština" height="25px">
          </a>
          <a href="https://www.chchp.cz/en">
            <img src="./img/assets/de.svg" alt="Deutch" height="25px">
          </a>
          <a href="https://www.chchp.cz/de">
            <img src="./img/assets/en.svg" alt="English" height="25px">
          </a>
        </div>
        <div class="collapse navbar-collapse " id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="./prohlidky.html">PROHLÍDKY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./zazitky.html">ZÁŽITKY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./pronajem.html">PRONÁJEM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./kontakt.html">KONTAKT</a>
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
    <!-- Hero Image  -->
    <div class="banner hero-image w-100 vh-100 d-flex align-items-center">
      <img class="hero-footer" src="img/assets/Zahlavi.png" alt="Zápatí Hero sekce" >
      <div class="container">
        <h2 class="hero-text text-white"></h2>
        <a class="btn btn-primary my-3" href="#areal" role="button">Areál Chrámu Chmele a Piva</a>
        <br><a class="btn btn-secondary my-3" href="/kontakt" role="button">Otevírací doba</a>
      </div>
    </div>



    <!-- Areal section -->
    <section id="areal" class="container">
      <h3 class="long">Areál chrámu chmele a&nbsp;piva</h3>
      <div class="row my-5">
        <div class="col-lg-4">
          <img class="areal-text " src="./img/assets/GS.png" alt="Expozice Žatec ve filmu, historie o sladovnictvní nebo největší sbírka tužek?">
          <div class="areal-logo-div">
            <a href="./areal-sladovna.html"><img class="areal-logo areal-logo-down" src="./img/assets/1_Sladovna.png" alt="Logo Galerie Sladovny."></a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="areal-logo-div">
            <a href="./areal-chram.html"><img class="areal-logo" src="./img/assets/2_CHCHP.png"></a>
            
          </div>
          <img class="areal-text areal-text-2" src="./img/assets/CHCHP.png" alt="Expozice Žatec ve filmu, historie o sladovnictvní nebo největší sbírka tužek?">

        </div>
        <div class="col-lg-4">
          <img class="areal-text areal-text-3" src="./img/assets/KZ.png" alt="Expozice Žatec ve filmu, historie o sladovnictvní nebo největší sbírka tužek?">
          <div class="areal-logo-div">
            <a href="./areal-zahrada.html"><img class="areal-logo areal-logo-down" src="./img/assets/3_Zahrada.png"></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Restaurace section -->
    <section id="restaurace">
      <div class="banner restaurace-image w-100 vh-100 d-flex align-items-center">
        <div class="container restaurace">
          <div><a href="#restaurace"><img id="ico" class="logo-restaurace" src="./img/logos/logo_restaurace.png" alt="CHCHP - logo"></a></div>

          <h2 class="restaurace-text text-white">NETRADIČNÁ STYLOVÁ RESTAURACE S&nbsp;MINIPIVOVAREM V&nbsp;PŮVODNÍM CHMELOVÉM SKLADU</h2>
            <a class="btn btn-primary my-3" target="_blank" href="https://www.orlojzatec.cz" role="button">RESTAURACE</a>
        </div>
      </div>
    </section>

    <!-- Zajímavosti section -->
    <section id="zajimavosti" class="container">
      <h3 class="short">Zajímavosti</h3>
        <div class="row">
          <div class="col-sm-12 col-lg-6 col-xl-4 mt-5">
            <div class="interests">
              <a href="https://www.zatec-and-the-landscape-of-saaz-hops.com" target="_blank"><img class="interest-image" src="./img/interests/UNESCO.png" alt="Fotografie chmelnice."></a>
              <div class="interest-body">
                <h5 class="interest-title">UNESCO</h5>
                <p class="interest-text">Žatec jako kandidát na seznam UNESCO? Ano! A to i s krajinou našeho jedinečného žateckého chmele. </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 col-xl-4 mt-5">
            <div class="interests">
              <a href="#video-section"><img class="interest-image" src="./img/interests/zatecvefilmu.png" alt="Filmová klapka z expozice ve Sladovně."></a>
              <div class="interest-body">
                <h5 class="interest-title">Malý Hollywood</h5>
                <p class="interest-text">Víte, že je Žatec oblíbeným místem filmařů? V Galerii Sladovna o tom máme celou expozici… Jojo Rabbit, Úkryt&nbsp;v ZOO nebo trilogie Zahradnictví.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 col-xl-4 mt-5">
            <div class="interests">
              <a href="https://www.facebook.com/photo.php?fbid=369873475142597&set=pb.100063598418045.-2207520000.&type=3" target="_blank"><img class="interest-image" src="./img/interests/kominy.png" alt="Komíny na pražském předměstí v Žatci."></a>
              <div class="interest-body">
                <h5 class="interest-title">Komíny</h5>
                <p class="interest-text">Žatec je stokomínové město! Po bývalých sušárnách chmele nebo sirným komorách nám jich tu zbyly desítky a tak jsme si je i pojmenovali…</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 col-xl-4 mt-5">
            <div class="interests">
              <a href="https://www.facebook.com/Chmelobrana/" target="_blank"><img class="interest-image" src="./img/interests/hroblojza.png" alt="Kostra s pivem na náhrobní desce."></a>
              <div class="interest-body">
                <h5 class="interest-title">Hrob nejstaršího pivaře</h5>
                <p class="interest-text">Kolikrát jste šli přes žatecké hlavní náměstí Svobody, aniž byste si všimli hrobu Lojzy Lupulína? Nachází se kousek od morového sloupu!</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 col-xl-4 mt-5">
            <div class="interests">
              <a href="http://www.bohemiahop.cz/cz/odrudy-chmele/zatecky-polorany-cervenak" target="_blank"><img class="interest-image" src="./img/interests/zpc.png" alt="Detailní záběr na chmel."></a>
              <div class="interest-body">
                <h5 class="interest-title">Žatecký poloraný červeňák</h5>
                <p class="interest-text">V Žatecké chmelařské oblasti se pěstuje světově nejkvalitnější odrůda chmele. Proč se červeňáku daří jen v naší oblasti? To se dozvíte v naší prohlídce v Chrámu Chmele a Piva…</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6 col-xl-4 mt-5">
            <div class="interests">
              <a href="https://www.facebook.com/Chmelobrana/" target="_blank"><img class="interest-image" src="./img/interests/chmelobrana.png" alt="Chmelobrana u Chmelového majáku."></a>
              <div class="interest-body">
                <h5 class="interest-title">Chmelobrana a tajemství Homolupulů</h5>
                <p class="interest-text">Kdo byli Homolupulové? Odhalte historii dávných obyvatelů žatecké chmelařské oblasti a prozkoumejte jejich pivní kulturu. </p>
              </div>
            </div>
          </div>
          
        </div>
    </section>

     <!-- Video section -->
    <section id="video-section" class="bg-green">
      <div class="video col-lg-12">
        <!--<video id="video" class="video" controls>
          <source src="./img/video/zatecVeFilmu.mp4" type="video/mp4">
          Your browser does not support HTML video.
        </video>-->
        <iframe class="ripple rounded ripple-surface-light" id="video" src="https://www.youtube.com/embed/letVlJWLJco" title="YouTube video přehrávač" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </section>

     <!-- Galerie section -->
     <section id="galerie" class="container">
      <h3 class="short">Fotografie z akcí</h3>
        <div class="row my-5">
          <div class="col-lg-8">
            <div class="container">
              <div id="carousel-photos" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  <button type="button" data-bs-target="#carousel-photos" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div class="carousel-inner rounded">
                  <div class="carousel-item active">
                    <img src="img/events/akce_5.jpg" class="d-block w-100" alt="Lukáš Hejlík v Galerii Sladovna">
                  </div>
                  <div class="carousel-item">
                    <img src="img/events/akce_2.jpg" class="d-block w-100" alt="Obrázek 2 z akce Chrámu Chmele a Piva">
                  </div>
                  <div class="carousel-item">
                    <img src="img/events/akce_3.jpg" class="d-block w-100" alt="Obrázek 3 z akce Chrámu Chmele a Piva">
                  </div>
                  <div class="carousel-item">
                    <img src="img/events/akce_4.jpg" class="d-block w-100" alt="Obrázek 4 z akce Chrámu Chmele a Piva">
                  </div>
                  <div class="carousel-item">
                    <img src="img/events/akce_1.jpg" class="d-block w-100" alt="Obrázek 1 z akce Chrámu Chmele a Piva">
                  </div>
                  <div class="carousel-item">
                    <img src="img/events/akce_6.jpg" class="d-block w-100" alt="Obrázek 2 z akce Chrámu Chmele a Piva">
                  </div>
                  <div class="carousel-item">
                    <img src="img/events/akce_7.jpg" class="d-block w-100" alt="Obrázek 3 z akce Chrámu Chmele a Piva">
                  </div>
                  <div class="carousel-item">
                    <img src="img/events/akce_8.jpg" class="d-block w-100" alt="Obrázek 4 z akce Chrámu Chmele a Piva">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-photos" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Předchozí</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel-photos" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Následující</span>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 events-title">
            V areálu Chrámu Chmele a Piva se pravidelně pořádají nejrůznější akce. Prohlédněte si některé z nich na fotografiích: Dočesná, zahájení turistické sezóny, koncerty, vernisáže výstav, zajímavé přednášky a další zábavné kulturní zážitky.
            <br><a class="btn btn-primary my-3" target="_blank" href="https://www.infozatec.cz/kalendar-akci/" role="button">AKCE V ŽATCI</a>

          </div>
        </div>
     </section>

    <!-- Footer section -->
    <img id="footer" class="footer" src="img/assets/Zapati.png" alt="Zápatí footru" >
     <section id="footer-bottom" class=" bg-green text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <a href="#"><img id="ico" style="height:9.5rem;" src="./img/logos/logo-white.png" alt="CHCHP - logo"></a>
            <div class="footer-text">
              <br>Chrám Chmele a Piva CZ, p.o.
              <br>náměstí Prokopa Velkého 1951
              <br>Žatec, 438 01, Česká republika
              <br>IČ: 28733088 DIČ: CZ28733088
            </div>
          </div>
          <div class="col-lg-4 ">
            <div class="py-3"><a class="btn btn-secondary">Povinné informace</a></div>
            <div class="py-3"><a class="btn btn-secondary">Kontakt</a></div>
            <div class="social py-3 d-flex justify-content-center">
              <a class="mx-2 text-white social-link" target="_blank" href="https://www.instagram.com/chramchmeleapiva"><i class="icon fab fa-icon fa-instagram " aria-hidden="true"></i></a>
              <a class="mx-2 text-white social-link" target="_blank" href="https://www.facebook.com/chchp"><i class="icon fab fa-icon fa-facebook-f " aria-hidden="true"></i></a>
            </div>          
          </div>
          <div class="copy col-lg-4">
            Copyright &copy; 2021–2022
            <br>Created by: <a href="https://www.ondrejkubanek.cz">Ondřej Kubánek</a>
          </div>
        </div>
      </div>
     </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>

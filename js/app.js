const Navbar = () => {
    var urlTarget = ["coming-soon.html", "https://drive.google.com/folderview?id=1xaCQl-XPIVwc79FPBrbCv9y8YEOZ0voD", "/Inbullz/MajalahElektronik.html", "news.html"]
    return (`<header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/logo/logo.png" alt="himainfra2021-2022"
                        class="navbarLogo d-inline-block align-text-top">
                </a>
                <button class="navbar-toggler first-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <div class="animated-icon1"><span></span><span></span><span></span></div>
                </button>

                <div class="my-3 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 textCenter-mobile">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${urlTarget[0]}">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${urlTarget[3]}">Event</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${urlTarget[2]}">Inbullz</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${urlTarget[0]}">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${urlTarget[1]}">Bank Soal</a>
                        </li>
                        <li class="nav-item">
                            <a class="customButton1" type="button" style="color: white;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <i class="bi bi-chat-left-text-fill"></i> Aspiration
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>` );
}
const Footer = () => {
    var urlTarget = ["https://lin.ee/12Sc0xp", "https://www.youtube.com/channel/UC5KbMnEmjHwPtEBQcwxpE9Q", "https://www.instagram.com/himainfraukp/"]
    return (` <footer>
    <div class="container">
        <div class="row">
            <div class="col-md-6 align-self-center align-center-mobile">
                <img src="assets/logo/logo-ukp.png" alt="">
            </div>
            
            <div class="col-md-6 text-end mt-5 align-self-center align-center-mobile">
                <div class="icons">
                    <div><a href="${urlTarget[0]}"><i class="fab fa-line"></i></a></div>
                    <div><a href="${urlTarget[1]}"><i class="fab fa-youtube"></i></a></div>
                    <div><a href="${urlTarget[2]}"><i class="fab fa-instagram"></i></a></div>
                </div>
                <p class="mt-2">&copy; 2021 Creative Department HimaInfra</p>
            </div>
        </div>
    </div>
</footer>`)
}

const initState = () => {
    $("body").prepend(Navbar())
    $("body").append(Footer())
    AOS.init();
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });

}

$(window).on("load", function () {
    initState();
    $('.loading-wrapper').fadeOut("slow");
});










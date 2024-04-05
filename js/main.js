const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav__button')
const navBtnImg = document.querySelector('#nav__button-img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg"
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg"
    }
}

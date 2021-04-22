const hamburger_icon = document.querySelector('.hamburger-btn');
const header_list = document.querySelector('.clubin-header__nav ul');

hamburger_icon.addEventListener('click',toggleHeaderList);
function toggleHeaderList() {
    header_list.classList.toggle('open');
    hamburger_icon.classList.toggle('clicked');
}
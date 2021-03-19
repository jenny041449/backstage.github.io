// alert("A");
// 變更 no-show xs-noshow

function reorder() {
    $('.menu-reorder').toggleClass("xs-noshow");
    $('.right-content').toggleClass("xs-noshow");
}

// let myBtnLen = document.querySelectorAll('.noxs-list_content_show');
// for (let i = 0; i < myBtnLen.length; i++) {
//     myBtnLen.addEventListener('click', expand_more, i)
// }

let i2 = 0;

function expand_more(i) {
    let noxs = document.getElementsByClassName("noxs-list_content_show")[i - 1];
    noxs.classList.toggle("xs-show");


}
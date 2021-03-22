// alert("A");
// 變更 no-show xs-noshow
window.onload = function() {
    //  全選
    let selectAll = document.getElementById("selectAll");

    selectAll.addEventListener("change", checkall, false);

    function checkall() {
        let checkbox = document.getElementsByClassName("check-btn");


        for (let checksall in checkbox) {
            checkbox[checksall].checked = !checkbox[checksall].checked;
        }
    }
    // 
    // list 切換
    let listToggle = document.getElementsByClassName("list-toggle");

    for (let togglesall of listToggle) {

        togglesall.addEventListener("click", listTogglebtn, false);

        function listTogglebtn() {
            for (let toggle of listToggle) {
                toggle.classList.remove("border-bt");
            }
            this.classList.add("border-bt");
            // this.setAttribute("class", "border-bt list-toggle col-2");
        }
    }

    // 

}


// 導覽列
function reorder() {
    $('.menu-reorder').toggleClass("xs-noshow");
    $('.right-content').toggleClass("xs-noshow");
}


// 列表show
function expand_more(i) {
    let noxs = document.getElementsByClassName("noxs-list_content_show")[i - 1];
    noxs.classList.toggle("xs-show");


}
// search
function searchDOM() {
    //     let noxs = document.querySelectorAll("lists-contnet")[i - 1];

    //     window.addEventListener()
}
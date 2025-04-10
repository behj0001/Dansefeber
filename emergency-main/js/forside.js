const knap1 = document.querySelector("#dialogKnap1");
knap1.addEventListener("click", openDialog1);

function openDialog1() {
    document.querySelector("#dialog1").showModal();
}

const knap2 = document.querySelector("#dialogKnap2")
knap2.addEventListener("click", openDialog2)

function openDialog2() {
    document.querySelector("#dialog2").showModal()
}

const knap3 = document.querySelector("#dialogKnap3")
knap3.addEventListener("click", openDialog3)

function openDialog3() {
    document.querySelector("#dialog3").showModal()
}
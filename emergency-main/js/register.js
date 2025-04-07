
document.querySelector("#send").addEventListener("click", sendToSummary)

function sendToSummary() 
{
    Event.preventDefault
document.querySelector("#sum").style.display = "block"

    document.querySelector("#sumFornavn").textContent = document.querySelector("#fornavn").value
    document.querySelector("#sumEfternavn").textContent = document.querySelector("#efternavn").value
    document.querySelector("#sumMail").textContent = document.querySelector("#mail").value
    document.querySelector("#sumNummer").textContent = document.querySelector("#nummer").value
    document.querySelector("#sumSted").textContent = document.querySelector("#sted").value
    document.querySelector("#sumDato").textContent = document.querySelector("#dato").value
    document.querySelector("#sumTid").textContent = document.querySelector("#tid").value

const checkboxes = document.querySelectorAll('input[name="checkbox"]:checked')
console.log(checkboxes)

const myArray = []
checkboxes.forEach(lavListe)

function lavListe(element) {
    myArray.push(element.id)
}

document.querySelector("#sumMoves").textContent = myArray.join(", ")

}
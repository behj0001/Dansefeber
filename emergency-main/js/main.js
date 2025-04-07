document.querySelector("#Dame").addEventListener("mouseover", dameHue)
document.querySelector("#Dame").addEventListener("mouseout", dameHueAF)
document.querySelector("#Dame").addEventListener("click", dameInfo)

function dameHue() {
    console.log("Mouseover dame aktiveret")
    document.querySelector("#Dame").style.opacity = "0.7"
}

function dameHueAF() {
    console.log("Mouseout dame aktiveret")
    document.querySelector("#Dame").style.opacity = "1"
}

function dameInfo() {
    console.log("Click dame aktiveret")
    document.querySelector(".info-text > h2").textContent = "Grav-orm"
    document.querySelector(".info-text > article > p").textContent = "Henriette på 30 lavede ormen til hendes svogers begravelse. 'Vildt akavet', udtaler flere gæster sig."
}

document.querySelector("#Mand").addEventListener("mouseover", mandHue)
document.querySelector("#Mand").addEventListener("mouseout", mandHueAF)
document.querySelector("#Mand").addEventListener("click", mandInfo)

function mandHue() {
    console.log("Mouseover mand aktiveret")
    document.querySelector("#Mand").style.opacity = "0.7"
}

function mandHueAF() {
    console.log("Mouseout mand aktiveret")
    document.querySelector("#Mand").style.opacity = "1"
}

function mandInfo() {
    console.log("Click mand aktiveret")
    document.querySelector(".info-text > h2").textContent = "Danse-marathon!"
    document.querySelector(".info-text > article > p").textContent = "Mand i Søborg har danset i fire dage straight. Til BT kommenterede han: 'Der ild i mine fusser'."
}

document.querySelector("#Mone").addEventListener("mouseover", moneHue)
document.querySelector("#Mone").addEventListener("mouseout", moneHueAF)
document.querySelector("#Mone").addEventListener("click", moneInfo)

function moneHue() {
    console.log("Mouseover mone aktiveret")
    document.querySelector("#Mone").style.opacity = "0.7"
}

function moneHueAF() {
    console.log("Mouseout mone aktiveret")
    document.querySelector("#Mone").style.opacity = "1"
}

function moneInfo() {
    console.log("Click mone aktiveret")
    document.querySelector(".info-text > h2").textContent = "Måne = Disco"
    document.querySelector(".info-text > article > p").textContent = "I region Midtjylland erfares det at flere af de inficerede anser månen som en kæmpestor discokugle. Eksperter frygter at Herning er ved at blive lavet til floor."
}


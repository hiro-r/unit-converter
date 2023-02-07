const inputNum = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener('click', function() {
    let inputVal = inputNum.value
    convertLength(inputVal)
    convertVolume(inputVal)
    convertMass(inputVal)
})

function convertLength(inputVal) {
    const meterToFt = (inputVal * meterToFeet).toFixed(3)
    const ftToMeter = (inputVal / meterToFeet).toFixed(3)
    if(inputVal != "") {
        length.textContent = `${inputVal} meters = ${meterToFt} feet | ${inputVal} feet =  ${ftToMeter} meters`
    }
}

function convertVolume(inputVal) {
    const literToGal = (inputVal * literToGallon).toFixed(3)
    const galToLiter = (inputVal / literToGallon).toFixed(3)
    if(inputVal != "") {
        volume.textContent = `${inputVal} liters = ${literToGal} gallons | ${inputVal} gallons =  ${galToLiter} liters`
    }
}

function convertMass(inputVal) {
    const kgToLb = (inputVal * kiloToPound).toFixed(3)
    const LbToKg = (inputVal / kiloToPound).toFixed(3)
    if(inputVal != "") {
        mass.textContent = `${inputVal} kilos = ${kgToLb} pounds | ${inputVal} pounds =  ${LbToKg} kilos`
    }
}
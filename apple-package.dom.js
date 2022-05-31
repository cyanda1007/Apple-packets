const boxPrice = document.querySelector('.cost_price')
const percent = document.querySelector('.profit')
const numberOfApples = document.querySelector('.box_apples')
const calculateBtn = document.querySelector('.total_price')
const costPricePerApple = document.querySelector('.price')
const costPricePerPackets = document.querySelector('.price')
const packetsPrice = document.querySelector('.price')
const applePackets = ApplePackets()

calculateBtn.addEventListener('click', function(){
    const boxPriceValue = parseInt(boxPrice.value)
    const percentValue = parseInt(percent.value)
    const numberOfApplesValue = parseInt(numberOfApples.value)
debugger
    costPricePerApple.value = applePackets.costPricePerApple(percentValue,boxPriceValue,numberOfApplesValue)
    costPricePerPackets.value = applePackets.costPricePerPackets(boxPriceValue,numberOfApplesValue)
    packetsPrice.value = applePackets.packetsPrice()

    

}) 
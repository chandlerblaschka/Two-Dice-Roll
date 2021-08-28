// TODO: Declare any global variables we need
let numTwo = 0
let numThree = 0
let numFour = 0
let numFive = 0
let numSix = 0
let numSeven = 0
let numEight = 0
let numNine = 0
let numTen = 0
let numEleven = 0
let numTwelve = 0
const diceOne = 0
const diceTwo = 0
let rollCounter = 0
let doublesCounter = 0


//document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    //console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

let rollButton = document.querySelector('#roll')
let clearButton = document.querySelector('#clear')
const diceOneImage = document.querySelector('#dice-one')
const diceTwoImage = document.querySelector('#dice-two')
const message = document.querySelector('.message-container')
const rollTwo = document.querySelector('#twos')
const rollThree = document.querySelector('#threes')
const rollFour = document.querySelector('#fours')
const rollFive = document.querySelector('#fives')
const rollSix = document.querySelector('#sixes')
const rollSeven = document.querySelector('#sevens')
const rollEight = document.querySelector('#eights')
const rollNine = document.querySelector('#nines')
const rollTen = document.querySelector('#tens')
const rollEleven = document.querySelector('#elevens')
const rollTwelve = document.querySelector('#twelves')
const percentTwo = document.querySelector('#twos-percent')
const percentThree = document.querySelector('#threes-percent')
const percentFour = document.querySelector('#fours-percent')
const percentFive = document.querySelector('#fives-percent')
const percentSix = document.querySelector('#sixes-percent')
const percentSeven = document.querySelector('#sevens-percent')
const percentEight = document.querySelector('#eights-percent')
const percentNine = document.querySelector('#nines-percent')
const percentTen = document.querySelector('#tens-percent')
const percentEleven = document.querySelector('#elevens-percent')
const percentTwelve = document.querySelector('#twelves-percent')
const totalRolls = document.querySelector('#totalRolls')
const doubles = document.querySelector('#doubles')

//const headsPercent = document.querySelector('#heads-percent')
//const tailsPercent = document.querySelector('#tails-percent')

// Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell

rollButton.addEventListener('click', function(){
    const diceRollOne = Math.round(Math.random()*5+1)
    rollCounter++
    if (diceRollOne === 1){
        diceOneImage.setAttribute('src',"./assets/images/dice/dice1.png")
    } else if (diceRollOne === 2) {
        diceOneImage.setAttribute('src',"./assets/images/dice/dice2.png")
    } else if (diceRollOne === 3) {
        diceOneImage.setAttribute('src',"./assets/images/dice/dice3.png")
    } else if (diceRollOne === 4) {
        diceOneImage.setAttribute('src',"./assets/images/dice/dice4.png")
    } else if (diceRollOne === 5) {
        diceOneImage.setAttribute('src',"./assets/images/dice/dice5.png")
    } else if (diceRollOne === 6) {
        diceOneImage.setAttribute('src',"./assets/images/dice/dice6.png")
    }
    const diceRollTwo = Math.round(Math.random()*5+1)
    if (diceRollTwo === 1){
        diceTwoImage.setAttribute('src',"./assets/images/dice/dice1.png")
    } else if (diceRollTwo === 2) {
        diceTwoImage.setAttribute('src',"./assets/images/dice/dice2.png")
    } else if (diceRollTwo === 3) {
        diceTwoImage.setAttribute('src',"./assets/images/dice/dice3.png")
    } else if (diceRollTwo === 4) {
        diceTwoImage.setAttribute('src',"./assets/images/dice/dice4.png")
    } else if (diceRollTwo === 5) {
        diceTwoImage.setAttribute('src',"./assets/images/dice/dice5.png")
    } else if (diceRollTwo === 6) {
        diceTwoImage.setAttribute('src',"./assets/images/dice/dice6.png")
    }
    if (diceRollOne + diceRollTwo === 2){
        message.textContent = ('You rolled a 2!')
        numTwo++
        rollTwo.textContent = `${numTwo}`
    } else if (diceRollOne + diceRollTwo === 3){
        message.textContent = ('You rolled a 3!')
        numThree++
        rollThree.textContent = `${numThree}`
    } else if (diceRollOne + diceRollTwo === 4){
        message.textContent = ('You rolled a 4!')
        numFour++
        rollFour.textContent = `${numFour}`
    } else if (diceRollOne + diceRollTwo === 5){
        message.textContent = ('You rolled a 5!')
        numFive++
        rollFive.textContent = `${numFive}`
    } else if (diceRollOne + diceRollTwo === 6){
        message.textContent = ('You rolled a 6!')
        numSix++
        rollSix.textContent = `${numSix}`
    } else if (diceRollOne + diceRollTwo === 7){
        message.textContent = ('You rolled a 7!')
        numSeven++
        rollSeven.textContent = `${numSeven}`
    } else if (diceRollOne + diceRollTwo === 8){
        message.textContent = ('You rolled an 8!')
        numEight++
        rollEight.textContent = `${numEight}`
    } else if (diceRollOne + diceRollTwo === 9){
        message.textContent = ('You rolled a 9!')
        numNine++
        rollNine.textContent = `${numNine}`
    } else if (diceRollOne + diceRollTwo === 10){
        message.textContent = ('You rolled a 10!')
        numTen++
        rollTen.textContent = `${numTen}`
    } else if (diceRollOne + diceRollTwo === 11){
        message.textContent = ('You rolled an 11!')
        numEleven++
        rollEleven.textContent = `${numEleven}`
    } else if (diceRollOne + diceRollTwo === 12){
        message.textContent = ('You rolled a 12!')
        numTwelve++
        rollTwelve.textContent = `${numTwelve}`
    } 
    if (diceRollOne === diceRollTwo){
        doublesCounter++
    }
    totalRolls.textContent = (`You have rolled ${rollCounter} times.`)
    rollTwoPercent = Math.round(((numTwo/rollCounter)*100))
    percentTwo.textContent = `${rollTwoPercent}%`
    rollThreePercent = Math.round(((numThree/rollCounter)*100))
    percentThree.textContent = `${rollThreePercent}%`
    rollFourPercent = Math.round(((numFour/rollCounter)*100))
    percentFour.textContent = `${rollFourPercent}%`
    rollFivePercent = Math.round(((numFive/rollCounter)*100))
    percentFive.textContent = `${rollFivePercent}%`
    rollSixPercent = Math.round(((numSix/rollCounter)*100))
    percentSix.textContent = `${rollSixPercent}%`
    rollSevenPercent = Math.round(((numSeven/rollCounter)*100))
    percentSeven.textContent = `${rollSevenPercent}%`
    rollEightPercent = Math.round(((numEight/rollCounter)*100))
    percentEight.textContent = `${rollEightPercent}%`
    rollNinePercent = Math.round(((numNine/rollCounter)*100))
    percentNine.textContent = `${rollNinePercent}%`
    rollTenPercent = Math.round(((numTen/rollCounter)*100))
    percentTen.textContent = `${rollTenPercent}%`
    rollElevenPercent = Math.round(((numEleven/rollCounter)*100))
    percentEleven.textContent = `${rollElevenPercent}%`
    rollTwelvePercent = Math.round(((numTwelve/rollCounter)*100))
    percentTwelve.textContent = `${rollTwelvePercent}%`
    doubles.textContent = (`You have rolled doubles ${doublesCounter} times.`)
})

clearButton.addEventListener('click', function(){
    numTwo = 0
    numThree = 0
    numFour = 0
    numFive = 0
    numSix = 0
    numSeven = 0
    numEight = 0
    numNine = 0
    numTen = 0
    numEleven = 0
    numTwelve = 0
    rollTwo.textContent = 0
    rollThree.textContent = 0
    rollFour.textContent = 0
    rollFive.textContent = 0
    rollSix.textContent = 0
    rollSeven.textContent = 0
    rollEight.textContent = 0
    rollNine.textContent = 0
    rollTen.textContent = 0
    rollEleven.textContent = 0
    rollTwelve.textContent = 0
    rollCounter = 0
    doublesCounter = 0
    percentTwo.textContent = `0%`
    percentThree.textContent = `0%`
    percentFour.textContent = `0%`
    percentFive.textContent = `0%`
    percentSix.textContent = `0%`
    percentSeven.textContent = `0%`
    percentEight.textContent = `0%`
    percentNine.textContent = `0%`
    percentTen.textContent = `0%`
    percentEleven.textContent = `0%`
    percentTwelve.textContent = `0%`
    totalRolls.textContent = (`You have rolled ${rollCounter} times.`)
    message.textContent = (`Let's get rolling!`)
    doubles.textContent = (`You have rolled doubles ${doublesCounter} times.`)
})


// TODO: Declare any global variables we need
let numHeads = 0
let numTails = 0
const heads = 1
const tails = 0
let flipValue = 0;


//document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    //console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

let flipButton = document.querySelector('#flip')
let clearButton = document.querySelector('#clear')
const pennyImage = document.querySelector('#penny-image')
const message = document.querySelector('.message-container')
const headsTracker = document.querySelector('#heads')
const tailsTracker = document.querySelector('#tails')
const headsPercent = document.querySelector('#heads-percent')
const tailsPercent = document.querySelector('#tails-percent')

// Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell

flipButton.addEventListener('click', function(){
    const flip = Math.round(Math.random())
    if(flip === heads){
        pennyImage.setAttribute('src','./assets/images/penny-heads.jpg')
        message.textContent = 'You Flipped Heads!'
        numHeads++;
        headsTracker.textContent = numHeads
    } else {
        pennyImage.setAttribute('src','./assets/images/penny-tails.jpg')
        message.textContent = 'You Flipped Tails!'
        numTails++;
        tailsTracker.textContent = numTails
    }
    let numFlips = numHeads + numTails
    headsPercentMath = Math.round((numHeads/numFlips)*100)
    headsPercent.textContent = `${headsPercentMath}%`
    tailsPercentMath = Math.round((numTails/numFlips)*100) 
    tailsPercent.textContent = `${tailsPercentMath}%`
})
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

//window.location.reload() force reloads the page to clear data
clearButton.addEventListener('click', function(){
    numHeads = 0
    numTails = 0
    headsTracker.textContent = numHeads
    tailsTracker.textContent = numTails
    headsPercent.textContent = '0%'
    tailsPercent.textContent = '0%'
    message.textContent = "Let's Get Rolling!"
})
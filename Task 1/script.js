const display = document.getElementById('display')

const addToDisplay = (input) => {
    display.value += input
}

const clearDisplay = () => {
    display.value = null
}

const calculate = () => {
    try {
        display.value = eval(display.value)
    } 
    catch (error) {
        display.value = "ERROR"
    }
}
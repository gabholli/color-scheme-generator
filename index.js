const colorPicker = document.getElementById("color-picker")
const schemeSelector = document.getElementById("scheme-selector")
const schemeButton = document.getElementById("scheme-button")

let colorArray = []

// Calls getColors function when button is clicked

schemeButton.addEventListener("click", getColors)

// Stores color picker selected value and removes the "#" 
// character, since the URL parameter won't accept a value with it

function getColorPickerValue() {
    const value = document.getElementById("color-picker").value
    const newValue = value.replace("#", "")
    return newValue
}

// Sends request for data from API depending on what selections are made
// from picker and select input field, which are passed into the fetch method

function getColors() {
    const pickerValue = getColorPickerValue()
    const schemeValue = schemeSelector.value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickerValue}&mode=${schemeValue}`)
        .then(response => response.json())
        .then(data => displayColors(data))
}

// Adds the colors from the data fetched from API to a separate array,
// and produces another array using .map method. Also updates dynamically
// the HTML of the colors HTML section.
// Finally, the colors array is set to empty again to clear the previous values when done.

function displayColors(data) {
    data.colors.forEach(c => colorArray.unshift(c.hex.value))

    let middleHtml = colorArray.map(c => `
        <div class="color-section-container">
            <div class="color-section" style="background-color: ${c}" onclick()></div>
            <p class="hex-section">${c}</p>
        </div>`
    ).join("")

    document.getElementById("color-and-hex-section").innerHTML = middleHtml
    colorArray = []
}




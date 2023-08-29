const colorPicker = document.getElementById("color-picker")
const schemeSelector = document.getElementById("scheme-selector")
const schemeButton = document.getElementById("scheme-button")

let colorArray = []

schemeButton.addEventListener("click", function () {
    getColors()
})

function getColorPickerValue() {
    const value = document.getElementById("color-picker").value
    const newValue = value.replace("#", "")
    return newValue
}

function getColors() {
    const pickerValue = getColorPickerValue()
    const schemeValue = schemeSelector.value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickerValue}&mode=${schemeValue}`)
        .then(response => response.json())
        .then(data => displayColors(data))


}

function displayColors(data) {
    data.colors.forEach(c => colorArray.unshift(c.hex.value))



    let middleHtml = colorArray.map(c => `
        <div class="color-section-container">
            <div class="color-section" style="background-color: ${c}" onclick()></div>
            <p class="hex-section">${c}</p>
        </div>`
    ).join("")

    // for (let i = 0; i < 5; i++) {
    //     let style = `background-color: ${data.colors[i].name.value}`
    //     console.log(style)
    //     middleHtml += `
    //         <div style="${style}">Test</div>
    //     `
    // }

    document.getElementById("color-and-hex-section").innerHTML = middleHtml
    colorArray = []
}

// function getHexValues(data) {
//     let bottomHtml = ""
//     for (let i = 0; i < 5; i++) {
//         bottomHtml += `
//                     <p>${data.colors[i].hex.value}</p>
//                 `
//     }
//     document.getElementById("bottom-section").innerHTML = bottomHtml
// }




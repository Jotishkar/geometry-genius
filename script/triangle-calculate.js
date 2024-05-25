function calculateTriangleArea(){
    // get tringle base

    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    // get tringle height value

const tringleHeightInput = document.getElementById('tringle-hight');
const tringleHeightBase = tringleHeightInput.value;
const height = parseFloat(tringleHeightBase)
console.log(height);

// calculat triange Area
const area = 0.5 * base * height;
console.log('area of the triangle is:', area)

// display triangle area

const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;
}


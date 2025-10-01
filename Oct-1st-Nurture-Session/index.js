// const PI = 3.14;

// let a = 1;
// a = "abc";
// a = "1.2";
// a = [1, 2, 3];
// a = {
//     "a": 1,
//     "b": 2,
//     "c": 3
// };

// var b = 1;
// b = "abc";
// b = "1.2";
// b = [1, 2, 3];
// b = {
//     "a": 1,
//     "b": 2,
//     "c": 3
// };

// let num = 2;
// console.log("1: ", num);
// function returnValue() {
//     num = 3;
//     console.log("2: ", num);
// }
// console.log("3: ", num);
// returnValue();
// console.log("4: ", num);

// // Global Execution Context


// function areaOfCircle(radius) {
//     return PI * radius * radius;
// }

// console.log(areaOfCircle(5));

// // ES6 => arrow func

// const areaOfCircle2 = (radius) => {
//     return PI * radius * radius;
// }

// console.log(areaOfCircle2(15));

// // IIFI
// (function areaOfCircle3(radius){
//     console.log(PI * radius * radius);
// })(10);



// const sayHiFromAlgoU = () => {
//     console.log("Hello from AlgoUniversity!");
// }

// function sayHiFromAlgoU(){
//     console.log("Hello from AlgoUniversity!");
// }


// const head = document.getElementById("head");

// const sayHiFromAlgoU = () => {
//     head.style.color = "orange";
// }


async function askGemini(prompt) {
    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyAvrxM7wyCylbisgsxbBGO2-_MUUc48bTg",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            })
        }
    );

    const data = await response.json();
    console.log(data.candidates?.[0]?.content?.parts?.[0]?.text);
};

askGemini("What's the capital of Delhi?")

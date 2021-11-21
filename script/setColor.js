const bgColors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta", "Black"]
let index = 0

document.querySelector('#submit').addEventListener('click', () => {
    if (index <= bgColors.length - 1) {
        document.body.style.backgroundColor = bgColors[index++];
    } else {
        index = 0
    }
    console.log(bgColors.length - 1)
    console.log(index - 1)
})
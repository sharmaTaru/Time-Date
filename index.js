let a;
let date;
let time;
let i;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function formatedTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



setInterval(function () {
    a = new Date();
    let hour = formatedTime(a.getHours());
    let minutes = formatedTime(a.getMinutes());
    let seconds = formatedTime(a.getSeconds());

    date = a.toLocaleDateString(undefined, options);
    time = hour + ":" + minutes + ":" + seconds;

    document.querySelector(".time").innerHTML = time + " " + "<br>on" + " " + date;
}, 1000)

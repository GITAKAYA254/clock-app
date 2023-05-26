const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


// create a function to get data out of the computer

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h> 12){
        h = h -12
        ampm = "PM"
    }
// conditonal statement
// h is equal to and if h is less than 10 ? just write "0" + h otherwise(:)just use the h;
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    // Use inner text method to change the text inside the hour element

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()

    }, 1000)
}
updateClock()
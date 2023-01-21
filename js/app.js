const endDate = "21 Jan 2023 01:26:00 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
let interValid;


const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
   if (diff <= 0) {
     clearInterval(intervalId);
     alert("Countdown is over!");
   }


     console.log(diff);
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    inputs[1].value = (Math.floor(diff / 3600) % 24);
    inputs[2].value = (Math.floor(diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
    setInterval(clock, 1000);
}
clock()
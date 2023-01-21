

const endDate = "21 Jan 2023 06:38:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
let interValid;

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff % 60);

   if (diff < 0) {
     clearInterval(interValid);
     document.getElementById("time").innerHTML = "!! HAPPY BIRTHDAY !!";
      // alert("DONE")
     var audio = document.getElementById("musics");
     audio.autoplay = true;
     audio.play();
   }
};

interValid = setInterval(clock, 1000);

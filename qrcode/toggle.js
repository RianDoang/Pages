function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + "  " + " - " + "  " + m;

  document.getElementById("DisplayClock").innerText = time;
  document.getElementById("DisplayClock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

function generateQR() {
    let canvas = document.getElementById('canvas')
    let qrInput = document.getElementById('qrInput')
    QRCode.toCanvas(canvas, qrInput.value, (err) => {
      if(err) console.error(err)
      console.log('Berhasil dibuat!')
    })
  }

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle = addEventListener("click", function () {
  nav.classList.toggle("show");
});

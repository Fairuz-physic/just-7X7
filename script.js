let A = 0
function jawabSalah() {
  const emot = document.getElementById("emot");
  const musik = document.getElementById("musik")
  musik.play()
  emot.style.display = "block";
  emot.style.animation = "muncul 4s ease" ;
  
  setTimeout(() => {
    emot.style.display = "none";
  }, 5000);
}

function jawabBenar() {
    A += 1
    const randm = document.getElementById("opsi2");
    const tele = document.getElementById("gok")
    gok.play()
    const kerandomanX = Math.random() * 500 - 150; // nilai antara -150 sampai +150
    const kerandomanY = Math.random() * 200 - 100; // nilai antara -100 sampai +100

    randm.style.position = "relative";
    randm.style.transform = `translate(${kerandomanX}px, ${kerandomanY}px)`;
    if (A >=5 ) {
        setTimeout(() => {
            window.open("https://youtu.be/dQw4w9WgXcQ?si=EFddqmyQQ_T0fXXu")
        }, 1000);
        
    }
}



const Swal = require('sweetalert2')

var failedList = ['<strong>What the 🦆?</strong>', '<strong>🦆 🦆 goose, you lose.?</strong>']

Swal.fire({
  type: 'error',
  title: failedList[Math.floor(Math.random()*items.length)],
  html: "You had one job, man.",
  confirmButtonText: "Try again"
  //display time you lasted without visiting a distracting webpage 
})

if (confirmButtonText) {
  Swal.fire({
    type: 'error',
    title: '<strong>What the 🦆?</strong>',
    html: "You had one job, man.",
    confirmButtonText: "Try again"
    //display time you lasted without visiting a distracting webpage 
  })
}
console.log(hours)

//insert twitter code here ß
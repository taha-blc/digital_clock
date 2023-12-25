let saat = document.getElementById('saat')
let dakka = document.getElementById('dakka')
let saniye = document.getElementById('saniye')




// console.log(currentTime.getHours())

setInterval(() => {
    let currentTime = new Date()
    a = currentTime.getHours()
    b = currentTime.getMinutes()
    c = currentTime.getSeconds()

    /* saat*/
    if (a < 10) {
        saat.innerHTML = "0" + currentTime.getHours()
    }
    if (a > 10) {
        saat.innerHTML = currentTime.getHours()
    }
    /**dakika */
    if (b < 10) {
        dakka.innerHTML = "0" + currentTime.getMinutes()
    }
    if (b > 10) {
        dakka.innerHTML = currentTime.getMinutes()
    }
    /*saniye */
    if (c < 10) {
        saniye.innerHTML = "0" + currentTime.getSeconds()
    }
    if (c > 10) {
        saniye.innerHTML = currentTime.getSeconds()
    }



}, 1000)
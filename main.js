const errorDiv = document.querySelector("#errorDiv")

document.querySelector("#submit").addEventListener("click",()=>{
    const imie = document.querySelector("#imie").value
    const nazwisko = document.querySelector("#nazwisko").value
    const wiek = document.querySelector("#wiek").value
    const email = document.querySelector("#email").value
    const pesel = document.querySelector("#pesel").value
    const plec = document.querySelector("#plec").value
    const nrtel = document.querySelector("#nrtel").value
    const klasa = document.querySelector("#klasa").value
    const tytul = document.querySelector("#tytul").value
    const wydawca = document.querySelector("#wydawca").value
    const isbn = document.querySelector("#isbn").value
    const nrewid = document.querySelector("#nrewid").value
    const uwagi = document.querySelector("#uwagi").value

    const validMail = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,3}$";

    errorDiv.innerHTML = "";
    let err = 0;

    if(!Number.isInteger(parseInt(wiek))){
        errorDiv.innerHTML += "Zły wiek<br> ";
        err += 1;
    }

    if(!email.match(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/g)) {
        errorDiv.innerHTML += "Zły mail<br> "
        err += 1;
    }

    if(pesel.length !== 11 || !Number.isInteger(parseInt(pesel))) {
        errorDiv.innerHTML += "Zły pesel<br> "
        err += 1;
    }

    let sum = 0
    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
    let crc = Number(pesel.substring(10,11))
    for(let i = 0; i < 10; i++){
        sum += parseInt(pesel[i])*weight[i];
    }
    sum %= 10
    if((10 - sum)%10 !== crc) {
        errorDiv.innerHTML += "Zla suma kontrolna peselu<br> ";
        err += 1;
    }


    if((plec === "k" && pesel[9]%2 !== 0) || (plec === "m" && pesel[9]%2 !== 1)) {
        errorDiv.innerHTML += "Pesel i pleć się nie zgadzają<br> "
        err += 1;
    }

    if(!Number.isInteger(parseInt(nrtel))) {
        errorDiv.innerHTML += "Zły nr tel<br> "
        err += 1;
    }

    if(!klasa.match(/[a-zA-Z]/i)) {
        errorDiv.innerHTML += "Zła klasa<br> ";
        err += 1;
    }

    if(err === 0)
        errorDiv.innerHTML += "WSZYSTKO GIT"
})
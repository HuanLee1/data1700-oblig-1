let billetter = [];


function kjøpBillett() {
    let film = document.getElementById("getFilm").value;
    let antall = document.getElementById("getAntall").value;
    let fornavn = document.getElementById("getFornavn").value;
    let etternavn = document.getElementById("getEtternavn").value;
    let telefon = document.getElementById("getTlf").value;
    let epost = document.getElementById("getEpost").value;

    let errorFilm = document.getElementById("errorFilm");
    let errorAntall = document.getElementById("errorAntall");
    let errorFornavn = document.getElementById("errorFornavn");
    let errorEtternavn = document.getElementById("errorEtternavn");
    let errorTlf = document.getElementById("errorTlf");
    let errorEpost = document.getElementById("errorEpost");

    let antallRegex = /\d/;
    let navnRegex = /^[a-zA-ZæøåÆØÅ]+([-'\s][a-zA-ZæøåÆØÅ]+)*$/;
    let tlfRegex = /^\d{3}[\s-]?\d{2}[\s-]?\d{3}$/;
    let epostRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    let gyldig = true;

    if(film == ""){
        errorFilm.style.display = "inline";
        gyldig = false;
    } else {
        errorFilm.style.display = "none";
        film = String(film);
    }

    if(!antallRegex.test(antall)){
        errorAntall.style.display = "inline";
        gyldig = false;
    } else {
        errorAntall.style.display = "none";
        antall = Number(antall);
    }


    if(!navnRegex.test(fornavn)){
        errorFornavn.style.display = "inline";
        gyldig = false;
    } else {
        errorFornavn.style.display = "none";
        fornavn = String(fornavn);
    }


    if(!navnRegex.test(etternavn)){
        errorEtternavn.style.display = "inline";
        gyldig = false;
    } else {
        errorEtternavn.style.display = "none";
        etternavn = String(etternavn);
    }


    if(!tlfRegex.test(telefon)){
        errorTlf.style.display = "inline";
        gyldig = false;
    } else {
        errorTlf.style.display = "none";
        telefon = Number(telefon);
    }


    if(!epostRegex.test(epost)) {
        errorEpost.style.display = "inline";
        gyldig = false;
    } else {
        errorEpost.style.display = "none";
        epost = String(epost);
    }


    if (!gyldig){
        return;
    }


    document.getElementById("getFilm").value = "";
    document.getElementById("getAntall").value = "";
    document.getElementById("getFornavn").value = "";
    document.getElementById("getEtternavn").value = "";
    document.getElementById("getTlf").value = "";
    document.getElementById("getEpost").value = "";

    let billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    billetter.push(billett);
    console.log(film, antall, fornavn, etternavn, telefon, epost);

    let tabell = "<tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";
    tabell += "<tr>";
    tabell += "<td>" + film + "</td>";
    tabell += "<td>" + antall + "</td>";
    tabell += "<td>" + fornavn + "</td>";
    tabell += "<td>" + etternavn + "</td>";
    tabell += "<td>" + telefon + "</td>";
    tabell += "<td>" + epost + "</td>";
    tabell += "</tr>";
    tabell += "<br><br><br>";
    document.getElementById("billetterListe").innerHTML += tabell;
}

function slettAlt(){
    billetter = [];
    document.getElementById("billetterListe").innerHTML = "";
}
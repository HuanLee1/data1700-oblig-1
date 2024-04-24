
function kjopBillett(){
    const billett = {
        film : $("#getFilm").val(),
        antall : $("#getAntall").val(),
        fornavn : $("#getFornavn").val(),
        etternavn : $("#getEtternavn").val(),
        telefon : $("#getTlf").val(),
        epost : $("#getEpost").val()
    }

    $.post("/lagreBillett", billett, function(){
        hentBilletter();
    })

    $("#getFilm").val("");
    $("#getAntall").val("");
    $("#getFornavn").val("");
    $("#getEtternavn").val("");
    $("#getTlf").val("");
    $("#getEpost").val("");
}

function hentBilletter(){
    $.get("/hentBillett", function(data){
        formaterData(data);
    })
}

function formaterData(data){
let ut = "<table class='table table-striped'>" +
    "<tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
    "</tr>"
    for(const billett of data){
        ut += "<tr>" +
            "<td>" + billett.film +"</td>" +
            "<td>" + billett.antall +"</td>" +
            "<td>" + billett.fornavn +"</td>" +
            "<td>" + billett.etternavn +"</td>" +
            "<td>" + billett.telefon +"</td>" +
            "<td>" + billett.epost +"</td>" +
            "</tr>"
    }
    $("#billettListe").html(ut);
}

function slettAlt(){
    $.get("/slettBilletter", function(data){
        hentBilletter();
    })
}
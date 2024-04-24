$(function(){
    hentBilletter();
})

function kjopBillett() {
    const film = $("#inputFilm").val();
    const antall = $("#inputAntall").val();
    const fornavn = $("#inputFornavn").val();
    const etternavn = $("#inputEtternavn").val();
    const telefon = $("#inputTlf").val();
    const epost = $("#inputEpost").val();

    if (!film) {
        $("#inputFilm").addClass("is-invalid");
        return;
    } else {
        $("#inputFilm").removeClass("is-invalid").addClass("is-valid")
    }

    if (!antall){
        $("#inputAntall").addClass("is-invalid")
        $("#inputAntall").parent().find('.invalid-feedback').remove();
        $("#inputAntall").after('<div class="invalid-feedback">Du må velge antall billetter.</div>');
        return;
    }
    else if (antall <= 0){
        $("#inputAntall").addClass("is-invalid")
        $("#inputAntall").parent().find('.invalid-feedback').remove();
        $("#inputAntall").after('<div class="invalid-feedback">Du må ha minst en billett.</div>');
        return;
    }

    else if (antall > 99){
        $("#inputAntall").addClass("is-invalid")
        $("#inputAntall").parent().find('.invalid-feedback').remove();
        $("#inputAntall").after('<div class="invalid-feedback">Du kan ikke velge mer enn 99 billetter.</div>');
        return;
    }
    else {
        $("#inputAntall").removeClass("is-invalid").addClass("is-valid");
    }


    if(!fornavn){
        $("#inputFornavn").addClass("is-invalid")
        $("#inputFornavn").parent().find('.invalid-feedback').remove();
        $("#inputFornavn").after('<div class="invalid-feedback">Du må skrive inn fornavn.</div>');
        return;
    } else {
        $("#inputFornavn").removeClass("is-invalid").addClass("is-valid");
    }

    if(!etternavn){
        $("#inputEtternavn").addClass("is-invalid")
        $("#inputEtternavn").parent().find('.invalid-feedback').remove();
        $("#inputEtternavn").after('<div class="invalid-feedback">Du må skrive inn etternavn.</div>');
        return;
    } else {
        $("#inputEtternavn").removeClass("is-invalid").addClass("is-valid");
    }

    const telefonRegex = /^\d{3}[\s-]?\d{2}[\s-]?\d{3}$/;
    if(!telefonRegex.test(telefon)){
        $("#inputTlf").addClass("is-invalid")
        $("#inputTlf").parent().find('.invalid-feedback').remove();
        $("#inputTlf").after('<div class="invalid-feedback">Du må skrive inn et riktig telefon nummer.</div>');
        return;
    } else {
        $("#inputTlf").removeClass("is-invalid").addClass("is-valid");
    }

    const epostRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if(!epostRegex.test(epost)){
        $("#inputEpost").addClass("is-invalid")
        $("#inputEpost").parent().find('.invalid-feedback').remove();
        $("#inputEpost").after('<div class="invalid-feedback">Du må ha med e-post adresse.</div>');
        return;
    } else {
        $("#inputEpost").removeClass("is-invalid").addClass("is-valid");
    }



    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    $.post("/lagreBillett", billett, function(data) {
        hentBilletter();
    });
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
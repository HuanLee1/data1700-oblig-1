package com.example.demo;

public class billett {
    private int id;
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private int telefon;
    private String epost;

    public billett(int id, String film, int antall, String fornavn, String etternavn, int telefon, String epost){
        this.id = id;
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;
    }
    public billett(){}

    public int getId(){return id;}
    public String getFilm(){return film;}
    public int getAntall(){return antall;}
    public String getFornavn(){return fornavn;}
    public String getEtternavn(){return etternavn;}
    public int getTelefon(){return telefon;}
    public String getEpost(){return epost;}

    public void setId(int id){this.id = id;}
    public void setFilm(String film){this.film = film;}
    public void setAntall(int antall){this.antall = antall;}
    public void setFornavn(String fornavn){this.fornavn = fornavn;}
    public void setEtternavn(String etternavn){this.etternavn = etternavn;}
    public void setTelefon(int telefon){this.telefon = telefon;}
    public void setEpost(String epost){this.epost = epost;}
}

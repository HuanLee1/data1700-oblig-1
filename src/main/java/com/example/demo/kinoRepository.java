package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class kinoRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBilletter(billett innBillett){
        String sql = "INSERT INTO billett(film, antall, fornavn, etternavn, telefon, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(), innBillett.getAntall(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTelefon(), innBillett.getEpost());
    }

    public List<billett> hentAlleBilletter(){
        String sql = "SELECT * FROM billett";
        List<billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM billett";
        db.update(sql);
    }
}

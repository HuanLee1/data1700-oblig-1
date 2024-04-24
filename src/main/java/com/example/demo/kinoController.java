package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class kinoController {
    @Autowired
    private kinoRepository rep;
    @PostMapping("/lagreBillett")
    public void lagreBilletter(billett innBillett){
        rep.lagreBilletter(innBillett);
    }

    @GetMapping("/hentBillett")
    public List<billett> hentBilletter(){
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettBilletter")
    public void slettBillettene(){
        rep.slettAlleBilletter();    }

}

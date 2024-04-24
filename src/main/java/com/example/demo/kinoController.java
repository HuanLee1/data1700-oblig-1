package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class kinoController {
    private final List<billett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagreBillett")
    public void lagreBillett(billett innBillett){
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentBilletter")
    public List<billett> hentBilletter(){
        return alleBilletter;
    }

    @GetMapping("/slettBilletter")
    public void slettBillettene(){
        alleBilletter.clear();
    }

}

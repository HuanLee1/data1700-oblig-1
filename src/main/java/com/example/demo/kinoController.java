package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class kinoController {
    public final List<billett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagreBillett")
    public void lagreBilletter(billett innBillett){
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentBillett")
    public List<billett> hentBilletter(){
        return alleBilletter;
    }

    @GetMapping("/slettBilletter")
    public void slettBillettene(){
        alleBilletter.clear();
    }

}

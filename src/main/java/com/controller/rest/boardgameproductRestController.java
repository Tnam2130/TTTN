package com.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.boardgameproduct;
import com.service.boardgameService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/book")
public class boardgameproductRestController {
    @Autowired
    boardgameService service;

    @GetMapping("/{bookid}")
    public boardgameproduct getOne(@PathVariable("bookid") Integer id) {
        return service.findById(id);
    }
    
    @GetMapping()
    public List<boardgameproduct> getAll() {
        return service.findAll();
    }

    @PostMapping()
    public boardgameproduct create(@RequestBody boardgameproduct book) {
        return service.createNewBook(book);
    }

}

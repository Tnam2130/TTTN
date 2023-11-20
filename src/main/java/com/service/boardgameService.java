package com.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.entity.boardgameproduct;


public interface boardgameService {
    List<boardgameproduct> findAll();

    boardgameproduct findById(Integer id);

    boardgameproduct createNewBook(boardgameproduct boardgameproduct);

    Page<boardgameproduct> findBookByCriteria(Integer authorid, Integer publishersid, Integer categoriesid, String booknamekeyword, int page, int page_size);
}

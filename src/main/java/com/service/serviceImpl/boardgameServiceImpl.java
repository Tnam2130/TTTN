package com.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.dao.boardgameDAO;
import com.entity.boardgameproduct;
import com.service.boardgameService;

@Service
public class boardgameServiceImpl implements boardgameService {
    
    @Autowired
    boardgameDAO dao;

    @Override
    public List<boardgameproduct> findAll(){
        return dao.findAll();
    }

    @Override
    public boardgameproduct findById(Integer id) {
        return dao.findById(id).get();
    }

    @Override
    public boardgameproduct createNewBook(boardgameproduct boardgameproduct) {
        return dao.save(boardgameproduct);
    }



    @Override
    public Page<boardgameproduct> findBookByCriteria(Integer authorid, Integer publishersid , Integer categoriesid,
            String booknamekeyword, int page, int page_size) {
        Pageable pageable;
        pageable = PageRequest.of(page, page_size, Sort.unsorted());
        Specification<boardgameproduct> spec = Specification.where(null);
        if (authorid != null) {
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("authors").get("authorid"), authorid)));
        }
        if ( publishersid != null) {
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("publishers").get("pusliherid"), publishersid)));
        }
        if ( categoriesid != null ){
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("categories").get("categoryid"), categoriesid)));
        }
        if ( booknamekeyword != null) {
            spec = spec.and(((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("bname").get("bookname"), "%" + booknamekeyword + "%")));
        }
        return dao.findAll(spec, pageable);
    }

}

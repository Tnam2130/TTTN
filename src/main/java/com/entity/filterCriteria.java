package com.entity;

import lombok.Data;

@Data
public class filterCriteria {
    private Integer authorid;
    private Integer publishersid;
    private Integer categoriesid;
    private String booknamekeyword;

    public void clear() {
        this.authorid = null;
        this.publishersid = null;
        this.categoriesid = null;
        this.booknamekeyword = null;
    }
}

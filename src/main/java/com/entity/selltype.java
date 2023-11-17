package com.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class selltype {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer selltypeid;
    String selltypename;
    @JsonIgnore
    @OneToMany(mappedBy = "selltype")
    List<boardgameproduct> boardgameproducts;
}

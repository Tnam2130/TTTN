package com.entity;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class boardgameproduct {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer boardgameid;
	@ManyToOne
	@JoinColumn(name = "gamenameid")
	gname gname;
	@ManyToOne
	@JoinColumn(name = "selltypeid")
	selltype selltype;
	@ManyToOne
	@JoinColumn(name = "publisherid")
	publishers publishers;
	String description;
	Boolean available;
	String image;
	@JsonIgnore
	@OneToMany(mappedBy = "boardgameproduct")
	List<details> retaildetail;
	@JsonIgnore
	@OneToMany(mappedBy = "boardgameproduct")
	List<comments> comments;
	@ManyToOne
	@JoinColumn(name = "categoryid")
	categories categories;
	Integer quantity;
	Double price;
}

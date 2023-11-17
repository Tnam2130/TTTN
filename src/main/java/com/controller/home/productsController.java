package com.controller.home;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.dao.categoriesDAO;
import com.entity.boardgameproduct;
import com.entity.boardgameproduct;
import com.service.boardgameService;
import com.service.rentalService;

@Controller
public class productsController {
	
	@Autowired
	boardgameService service;
	
	@Autowired
	rentalService rentalService;

	@Autowired
	categoriesDAO cDAO;




	@RequestMapping("/boardkingdom/products")
	public String productsCtrl(Model model) {
		List<boardgameproduct> list = service.findAll();
		model.addAttribute("items", list);
		return "cart/main";
	}

	@RequestMapping("/boardkingdom/products/detail/{bookid}")
	public String productDetailController(Model model, @PathVariable("bookid") Integer id) {
		boardgameproduct item = service.findById(id);
		model.addAttribute("item", item);
		return "cart/detail";
	}

	@RequestMapping("/qltv/products/pdf/{bookid}")
	public String pdfController(Model model, @PathVariable("bookid") Integer id) {
		boardgameproduct item = service.findById(id);
		model.addAttribute("item", item);
		return "cart/pdf";
	}

	@RequestMapping("/user/cart")
	public String cartCtrl() {
		return "cart/cart";
	}

	@RequestMapping("/user/rental")
	public String rentalCtrl(@PathVariable("retailid") Integer id, Model model) {
		model.addAttribute("rental", rentalService.findById(id));
		return "cart/checkout";
	}

	@RequestMapping("/user/rental/detail/{retailid}")
	public String rentalDetailCtrl(@PathVariable("retailid") Integer id, Model model) {
		model.addAttribute("rdetail", rentalService.findById(id));
		return "cart/checkoutdetail";
	}

	@RequestMapping("/user/rental/history")
	public String rentalHistoryCtrl() {
		return "rentalList/rental";
	}

	// @RequestMapping("/qltv/products/search")
	// public String productsSearchByName(@Param("")){
	// 	Specification<boardgameproduct> spec = Specification.where(null);
	// 	spec = spec.and((builder) -> builder.like(root.get("bname").get("bookname")));
	// }
}

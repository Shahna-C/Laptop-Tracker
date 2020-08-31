package com.techomatics.laptop.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.techomatics.laptop.Dao.LaptopRepository;
import com.techomatics.laptop.models.Laptop;


//RestController = payload communication should be done by JSON by default
@RestController
@RequestMapping("api/v1/tees")
public class LaptopsController {
	
	@Autowired
	private LaptopRepository repo;
	
	@GetMapping
	public List<Laptop> list() {
		return repo.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Laptop laptop) {
		repo.save(laptop);
		
	}
	
	@GetMapping("/{id}")
	public Laptop get(@PathVariable("id") long id) {
		return repo.getOne(id);
	}
}

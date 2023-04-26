package com.example.clownstars.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.clownstars.model.Clownmodel;
import com.example.clownstars.service.Clownservice;


@RestController
@RequestMapping("/clowns")
public class Clowncontroller {
	@Autowired
	private Clownservice service;
	
	@GetMapping
	public List<Clownmodel> read(){
		return service.getClowns();
	}
	@GetMapping("/{id}")
	public Optional<Clownmodel> readbyid(@PathVariable int id) {
		return service.getClownbyId(id);
	}
	@PostMapping
	public Clownmodel create(@RequestBody Clownmodel clown) {
		return service.addClown(clown);
	}
	@PutMapping("/{id}")
	public Clownmodel update(@RequestBody Clownmodel clown, @PathVariable int id) {
		return service.editClown(clown, id);
	}
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteClown(id);	
	}
}

package com.example.clownstars.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.clownstars.model.Clownmodel;
import com.example.clownstars.repo.Clownrep;

@Service
public class Clownservice {
	@Autowired
	private Clownrep repository;
	
	public List<Clownmodel> getClowns(){
		return repository.findAll();
	}
	public Optional<Clownmodel> getClownbyId(int id) {
		return repository.findById(id);
	}
	public Clownmodel addClown(Clownmodel clown) {
		return repository.save(clown);
	}
	public Clownmodel editClown(Clownmodel clown, int id) {
		Clownmodel clownx = repository.findById(id).orElse(null);
		if(clownx !=null) {
			clownx.setCname(clown.getCname());
			clownx.setAge(clown.getAge());
			clownx.setColor(clown.getColor());
			return repository.saveAndFlush(clownx);
		}
		else {
			return null;
		}

	}
	public String deleteClown(int id) {
		repository.deleteById(id);
		return id + " deleted !";
	}
}

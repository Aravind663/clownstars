package com.example.clownstars.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.clownstars.model.Clownmodel;

@Repository
public interface Clownrep extends JpaRepository<Clownmodel, Integer> {

}

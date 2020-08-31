package com.techomatics.laptop.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techomatics.laptop.models.Laptop;


public interface LaptopRepository extends JpaRepository <Laptop, Long>{

}

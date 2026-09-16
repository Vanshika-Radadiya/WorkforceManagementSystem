package com.vanshika.springboot.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vanshika.springboot.model.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long>{

}

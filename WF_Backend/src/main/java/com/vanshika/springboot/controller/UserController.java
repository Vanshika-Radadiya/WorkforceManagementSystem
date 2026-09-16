package com.vanshika.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vanshika.springboot.model.User;
import com.vanshika.springboot.model.service.UserService;

@RestController
public class UserController {
	@Autowired
	UserService service;
	
	@GetMapping("/getallusers")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
	
	@GetMapping("getuser/{id}")
	public Optional<User>getUser(@PathVariable Long id){
		return service.getUser(id);
	}
	
	@PostMapping("/saveuser")
	public User saveUser(@RequestBody User user) {
		return service.saveUser(user);
	}
	
	@PutMapping("/updateuser")
	public User updateUser(@RequestBody User user) {
		return service.updateUser(user);
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public String deleteUser(@PathVariable Long id) {
		service.deleteUser(id);
		return "user has been deleted";
	} 
}

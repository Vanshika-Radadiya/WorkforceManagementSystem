package com.vanshika.springboot.model.service;

import java.util.List;
import java.util.Optional;

import com.vanshika.springboot.model.User;

public interface UserService {
	public Optional<User> getUser(Long id);
	public List<User> getAllUsers();
	public void deleteUser(Long id);
	public User updateUser(User user);
	public User saveUser(User user);

}

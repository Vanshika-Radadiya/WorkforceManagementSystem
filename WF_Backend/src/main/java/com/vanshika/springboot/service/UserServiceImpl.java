package com.vanshika.springboot.model.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vanshika.springboot.model.User;
import com.vanshika.springboot.model.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UserRepository repository;
	@Override
	public Optional<User> getUser(Long id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void deleteUser(Long id) {
	 repository.deleteById(id);
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		User userTemp = repository.findById(user.getId()).get();
		userTemp.setFirstname(user.getFirstname());
		userTemp.setLastname(user.getLastname());
		userTemp.setEmail(user.getEmail());
		return repository.save(userTemp);
	}

	@Override
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		return repository.save(user);
	}

}

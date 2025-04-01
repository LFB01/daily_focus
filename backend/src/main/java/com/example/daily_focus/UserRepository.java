package com.example.daily_focus;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository  extends CrudRepository<User, Long> {

    Optional<User> findBySecret(String secret);

    Optional<User>findByUsernameAndPassword(String username, String password);

}

package com.example.daily_focus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO toDTO (User user){
        UserDTO dto = new UserDTO();
        dto.setPassword(null);
        dto.setUsername(user.getUsername());
        dto.setSecret(user.getSecret());
        return dto;
    }

    public User fromDTO (UserDTO dto){
        User user = new User();
        user.setPassword(dto.getPassword());
        user.setUsername(dto.getUsername());
        user.setSecret(dto.getSecret());
        return user;
    }

    public User createUser (User user){
        user.setSecret(UUID.randomUUID().toString());
        userRepository.save(user);
        System.out.println(user.getSecret());
        return user;
    }

    public Optional<User> login (UserDTO loginInput){
        Optional<User> returnUser;
        returnUser = userRepository.findByUsernameAndPassword(loginInput.getUsername(),
                loginInput.getPassword());

        return returnUser;
    }



}

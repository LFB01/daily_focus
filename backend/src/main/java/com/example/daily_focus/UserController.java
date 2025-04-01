package com.example.daily_focus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<?>createUser(@RequestBody UserDTO user){
       User registeredUser = userService.createUser(userService.fromDTO(user));
       return ResponseEntity.ok(userService.toDTO(registeredUser));
    }

    @PostMapping("/login")
    public ResponseEntity<?>login(@RequestBody UserDTO dto){
        Optional<User> foundUser = userService.login(dto);
        if(foundUser.isPresent()){
            return ResponseEntity.ok(userService.toDTO(foundUser.get()));
        }
        return ResponseEntity.status(404).body("User not found");
    }


}

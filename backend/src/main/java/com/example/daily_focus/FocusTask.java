package com.example.daily_focus;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;


@Entity
@Data
public class FocusTask {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String name;
    private String furtherDescription;
    private LocalDate dueDate;


    private boolean isDone;
}

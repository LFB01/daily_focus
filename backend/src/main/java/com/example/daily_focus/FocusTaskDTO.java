package com.example.daily_focus;

import lombok.Data;

import java.time.LocalDate;

@Data
public class FocusTaskDTO {
    private Long id;
    private String name;
    private String furtherDescription;
    private LocalDate dueDate;
    private boolean done;

}

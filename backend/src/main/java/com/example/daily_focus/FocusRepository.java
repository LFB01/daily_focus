package com.example.daily_focus;

import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.Optional;
import java.util.Set;

public interface FocusRepository extends CrudRepository<FocusTask, Long> {


    Optional<FocusTask> findByIdAndUser_Secret(Long id, String secret);

    //Optional<FocusTask>findByUser_Secret(String secret);

    Set<FocusTask> findAllByUser_Secret(String secret);

    Set<FocusTask> findAllByUser_SecretAndDueDate(String secret, LocalDate date);
}

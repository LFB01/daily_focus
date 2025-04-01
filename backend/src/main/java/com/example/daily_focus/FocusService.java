package com.example.daily_focus;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FocusService {

    private final FocusRepository focusRepository;
    private final UserRepository userRepository;

    public FocusService(FocusRepository focusRepository, UserRepository userRepository) {
        this.focusRepository = focusRepository;
        this.userRepository = userRepository;
    }

    //Mapper für die DTO
    public FocusTaskDTO toDto(FocusTask task){
        FocusTaskDTO dto = new FocusTaskDTO();
        dto.setId(task.getId());
        dto.setName(task.getName());
        dto.setDone(task.isDone());
        dto.setDueDate(task.getDueDate());
        dto.setFurtherDescription(task.getFurtherDescription());
        return dto;
    }

    public FocusTask fromDto (FocusTaskDTO dto){
        FocusTask task = new FocusTask();
        task.setName(dto.getName());
        task.setId(dto.getId());
        task.setFurtherDescription(dto.getFurtherDescription());
        task.setDueDate(dto.getDueDate());
        task.setDone(dto.isDone());
        return task;
    }

    public List<FocusTaskDTO> toDtoList(Iterable<FocusTask> tasks) {
        List<FocusTaskDTO> dtoList = new ArrayList<>();
        for (FocusTask task : tasks) {
            dtoList.add(toDto(task));
        }
        return dtoList;
    }


    public FocusTask createTask(FocusTaskDTO taskDto, String secret) {
        User user = userRepository.findBySecret(secret)
                .orElseThrow(() -> new RuntimeException("User not found"));

        FocusTask task = fromDto(taskDto);

        task.setUser(user);
        return focusRepository.save(task);
    }


    public FocusTask getFocusTask (Long id, String secret){
        Optional<FocusTask> foundTask = focusRepository.findByIdAndUser_Secret(id, secret);
        if(foundTask.isPresent()){
            return foundTask.get();
        }
        return null;
    }

    public Iterable<FocusTask> getAllFocusTask (String secret){
        Iterable<FocusTask> foundTasks = focusRepository.findAllByUser_Secret( secret);
        return foundTasks;
    }

    public Iterable<FocusTask> getAllFocusTaskForDate (String secret, LocalDate date){
        Iterable<FocusTask> foundTasks = focusRepository.findAllByUser_SecretAndDueDate( secret, date);
        return foundTasks;
    }

    public void deleteFocusTask (Long id, String secret){
        Optional<FocusTask> foundTask = focusRepository.findByIdAndUser_Secret(id, secret);
        if(foundTask.isPresent()){
            focusRepository.deleteById(id);
        }
    }

    public FocusTask editTask(FocusTask editedTask, String secret) {
        Optional<FocusTask> foundTask = focusRepository.findByIdAndUser_Secret(editedTask.getId(), secret);

        if(foundTask.isPresent()){
            FocusTask existing = foundTask.get();
            existing.setName(editedTask.getName());
            existing.setFurtherDescription(editedTask.getFurtherDescription());
            existing.setDueDate(editedTask.getDueDate());
            existing.setDone(editedTask.isDone());
            return focusRepository.save(existing);
        }

        return null;
    }

    public FocusTask changeDoneStatus (long id, String secret){
        Optional<FocusTask> foundTask = focusRepository.findByIdAndUser_Secret(id, secret);

        if(foundTask.isPresent()){
            boolean done = foundTask.get().isDone();
            foundTask.get().setDone(!done);
            return focusRepository.save(foundTask.get());
        }

        return null;
    }


}

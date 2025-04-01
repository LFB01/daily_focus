package com.example.daily_focus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/task")
public class FocusController {

    private final FocusService focusService;

    public FocusController (FocusService focusService){
        this.focusService = focusService;
    }


    @PostMapping()
    public ResponseEntity<?> createFocusTask(@RequestBody FocusTaskDTO taskDto,
                                                     @RequestHeader ("secret") String secret) {
        FocusTask saved = focusService.createTask(taskDto, secret);
        return ResponseEntity.ok(focusService.toDto(saved));
    }


    @GetMapping()
    public ResponseEntity<?> getFocusTask(@RequestParam Long id,
                                          @RequestHeader("secret") String secret) {
        FocusTask task = focusService.getFocusTask(id, secret);
        if (task != null) {
            return ResponseEntity.ok(focusService.toDto(task));
        }
        return ResponseEntity.status(404).body("Task not found");
    }

    @GetMapping("/all")
    public ResponseEntity<List<FocusTaskDTO>> getAllFocusTask(
                                          @RequestHeader("secret") String secret) {
        Iterable<FocusTask> tasks = focusService.getAllFocusTask(secret);
        List<FocusTaskDTO> dtoList = focusService.toDtoList(tasks);
        return ResponseEntity.ok(dtoList);

    }

    @GetMapping("all/today")
    public ResponseEntity<List<FocusTaskDTO>> getAllFocusTaskForToday(@RequestHeader("secret")String secret){
        LocalDate date = LocalDate.now();
        return getAllFocusTaskForDate(date, secret);
    }

    @GetMapping("/all/date")
    public ResponseEntity<List<FocusTaskDTO>> getAllFocusTaskForDate(@RequestParam ("dueDate") LocalDate date,
            @RequestHeader("secret") String secret) {
        Iterable<FocusTask> tasks = focusService.getAllFocusTaskForDate(secret, date);
        List<FocusTaskDTO> dtoList = focusService.toDtoList(tasks);
        return ResponseEntity.ok(dtoList);

    }



    @PutMapping()
    public ResponseEntity<?> putFocusTask(@RequestBody FocusTaskDTO editedTask,
                                          @RequestHeader("secret") String secret) {

        FocusTask task = focusService.editTask(focusService.fromDto(editedTask), secret);
        if (task != null) {
            return ResponseEntity.ok(focusService.toDto(task));
        }
        return ResponseEntity.status(404).body("Task not found");
    }

    @PatchMapping()
    public ResponseEntity<?> changeDoneStatus (@RequestParam("id") Long id,
                                          @RequestHeader("secret") String secret) {
        FocusTask task = focusService.changeDoneStatus(id, secret);
        if (task != null) {
            return ResponseEntity.ok(focusService.toDto(task));
        }
        return ResponseEntity.status(404).body("Task not found");
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteFocusTask(@RequestParam Long id,
                                          @RequestHeader("secret") String secret) {
        focusService.deleteFocusTask(id, secret);

        return ResponseEntity.ok("Task deleted ");
    }
}

# Description

Build a to-do list app that allows users to add, edit, and delete tasks they want to work on. You would already know how to do it using `HTML/CSS/JS`. In this assignment, you must use `React`.

# Requirements

## UI requirements

1. Title of the app `ToDo App` should be displayed.
2. There should be one input field for entering the task description with placeholder `Enter here`.
3. There should be one button for adding task with title `Add To Do`.

4. A list of tasks one below the other
   - Todo tasks with the name exactly as mentioned while adding it.
   - Edit button for each added task.
   - Delete button for each added task.
   - Save button for saving the edited task. Replace add button with save button while editing.
   - Editing of the task will be available in the same input field.
   - Cancel button for cancelling the changes while editing.

## Functional requirements

1. On clicking the `Add` button, task name should be added in next row along with `edit` and `delete` button.
2. On clicking `edit` button, it will allow us to edit the task.
3. On clicking `delete` button, the task should be deleted.
4. On clicking `save` button, the edited task should be saved.
5. On clicking `cancel` button, it will undo the changes done during editing.

## Other requirements

1. Input field should contain an attribute `data-testid` and its value must be `task`.
2. Add button should contain attributes `data-testid`and `className` with the values `btn` and `saveTodo` respectively.
3. Each item in the list should contain an attribute `className` with its value `list`.
4. Edit button and save button should contain attributes `className` with values `editTask` and `saveTask` respectively.
5. Delete button should contain an attribute `className` with values `delete`.

# Sample UI

[Click here](https://drive.google.com/file/d/1M3kfT8pdKuoVHqlZSr8xyziY-5KPpn66/view?usp=sharing) for the image of a sample UI

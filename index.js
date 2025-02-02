import { tasks, addTask, sortTasksByPriority, getTasksDueWithin, sendReminders } from './taskManager.js';

try {
    // Add tasks
    addTask("Submit assignment", 10, 2); // Title, dueTime in minutes, priority
    addTask("Attend meeting", 5, 1);
    addTask("Call Mom", 20, 3);

    // Display all tasks
    console.log("All Tasks:", tasks);

    // Sort tasks by priority
    sortTasksByPriority();
    console.log("Sorted Tasks by Priority:", tasks);

    // Get tasks due within the next 10 minutes
    const dueSoon = getTasksDueWithin(10);
    console.log("Tasks Due Within 10 Minutes:", dueSoon);

    // Simulate sending reminders
    sendReminders();
} catch (error) {
    console.error("Error:", error.message);
}

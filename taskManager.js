// Array to store tasks
let tasks = [];

/**
 * Add a new task
 * @param {string} title - Title of the task
 * @param {number} dueTime - Time in minutes from now when the task is due
 * @param {number} priority - Priority of the task (1 = High, 2 = Medium, etc.)
 */
function addTask(title, dueTime, priority) {
    if (!title || dueTime < 0 || priority < 1) {
        throw new Error("Invalid task data. Ensure title, dueTime >= 0, and priority >= 1.");
    }

    const now = new Date();
    const dueDate = new Date(now.getTime() + dueTime * 60 * 1000); // Calculate due time
    tasks.push({ title, dueTime: dueDate, priority });
}

/**
 * Sort tasks by their priority
 */
function sortTasksByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
}

/**
 * Get tasks due within a specified timeframe
 * @param {number} timeframe - Timeframe in minutes
 * @returns {Array} - List of tasks due within the timeframe
 */
function getTasksDueWithin(timeframe) {
    const now = new Date();
    return tasks.filter(task => {
        const timeLeft = (task.dueTime - now) / (60 * 1000); // Time left in minutes
        return timeLeft <= timeframe;
    });
}

/**
 * Simulate sending reminders for tasks based on their due time
 */
function sendReminders() {
    const now = new Date();

    tasks.forEach(task => {
        const delay = task.dueTime - now; // Calculate the delay in milliseconds

        if (delay > 0) {
            setTimeout(() => {
                console.log(`Reminder: "${task.title}" is due now!`);
            }, delay);
        }
    });
}

// Export functions for use in other files
export { tasks, addTask, sortTasksByPriority, getTasksDueWithin, sendReminders };

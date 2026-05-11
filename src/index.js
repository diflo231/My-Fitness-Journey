/**
 * My Fitness Journey - Main Application
 */

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

/**
 * Initialize the application
 */
function initApp() {
    loadStats();
    setupEventListeners();
    console.log('My Fitness Journey app initialized');
}

/**
 * Load and display stats from localStorage
 */
function loadStats() {
    var workouts = parseInt(localStorage.getItem('workouts') || '0', 10);
    var daysActive = parseInt(localStorage.getItem('daysActive') || '0', 10);
    var goalsCompleted = parseInt(localStorage.getItem('goalsCompleted') || '0', 10);
    
    document.getElementById('workouts-count').textContent = workouts;
    document.getElementById('days-active').textContent = daysActive;
    document.getElementById('goals-completed').textContent = goalsCompleted;
}

/**
 * Save stats to localStorage
 */
function saveStats(key, value) {
    localStorage.setItem(key, value.toString());
}

/**
 * Set up button event listeners
 */
function setupEventListeners() {
    var logWorkoutBtn = document.getElementById('log-workout');
    var viewProgressBtn = document.getElementById('view-progress');
    
    if (logWorkoutBtn) {
        logWorkoutBtn.addEventListener('click', handleLogWorkout);
    }
    
    if (viewProgressBtn) {
        viewProgressBtn.addEventListener('click', handleViewProgress);
    }
}

/**
 * Handle logging a new workout
 */
function handleLogWorkout() {
    var currentWorkouts = parseInt(localStorage.getItem('workouts') || '0', 10);
    var newCount = currentWorkouts + 1;
    
    saveStats('workouts', newCount);
    document.getElementById('workouts-count').textContent = newCount;
    
    // Update days active (simple implementation)
    var lastWorkoutDate = localStorage.getItem('lastWorkoutDate');
    var today = new Date().toDateString();
    
    if (lastWorkoutDate !== today) {
        var currentDays = parseInt(localStorage.getItem('daysActive') || '0', 10);
        saveStats('daysActive', currentDays + 1);
        localStorage.setItem('lastWorkoutDate', today);
        document.getElementById('days-active').textContent = currentDays + 1;
    }
    
    alert('Workout logged! Keep up the great work!');
}

/**
 * Handle viewing progress
 */
function handleViewProgress() {
    var workouts = localStorage.getItem('workouts') || '0';
    var daysActive = localStorage.getItem('daysActive') || '0';
    var goalsCompleted = localStorage.getItem('goalsCompleted') || '0';
    
    var message = 'Your Progress:\n\n' +
        'Total Workouts: ' + workouts + '\n' +
        'Days Active: ' + daysActive + '\n' +
        'Goals Completed: ' + goalsCompleted;
    
    alert(message);
}

// script.js

// Function to initialize the application
function init() {
    console.log("E-Learning Platform Initialized"); // Log a message to the console
}

// Call the init function when the document is fully loaded
document.addEventListener("DOMContentLoaded", init); // Ensure the init function runs after the DOM is ready

// Example function to handle course progress (to be implemented)
function updateProgress(courseId, progress) {
    // This function could be used to update the progress of a specific course
    console.log(`Updating progress for course ${courseId}: ${progress}%`);
}

// Example usage of the updateProgress function
// updateProgress(1, 50); // Uncomment to test progress update
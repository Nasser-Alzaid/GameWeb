// Get the audio element
const audioElement = document.getElementById('background-audio');

// Function to start the game and audio
function startGame() {
    console.log('Starting game...');
    
    // Play the background audio
    audioElement.play().then(() => {
        console.log('Audio playback started.');
    }).catch(error => {
        console.error('Audio playback failed:', error);
    });

    // Hide the start button (if it exists)
    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.style.display = 'none';
    }

    // Your existing game start logic...
}

// Example function to stop the game and audio (if needed)


    // Your existing game stop logic...


// Add event listener to the start button (or any user interaction element)
document.getElementById('start-button').addEventListener('click', startGame);

// Additional event listener to start the audio on any click (optional)
document.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play().then(() => {
            console.log('Audio playback started on document click.');
        }).catch(error => {
            console.error('Audio playback failed on document click:', error);
        });
    }
});
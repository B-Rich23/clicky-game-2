# clicky-game-2

Overview

Clicky-Game 2 aka Marvel Clicky is memory game created with React. That tallies the number of correct user selections and displays the highest recorded score.

Instructions

The application renders 12 different cards with an image of a Marvel characters to the DOM in random order. Each image listens for click events from the user. The goal of the game is to not click the same image twice.  

The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score resets to 0 if they click the same image more than once.

Every time an image is clicked, the images rendered to the page re-shuffle themselves in a random order. Once the user's score is reset after an incorrect guess, the game restarts. 

If the user's score is higher than the highest recorded score, it becomes the new high score.


Motion Challenge Puzzle

Overview
Motion Challenge is a browser-based cognitive game focused on spatial reasoning and movement planning. The objective is to guide a movable element through a constrained grid using rule-based motion logic. The game is implemented using HTML, CSS, and JavaScript, with emphasis on deterministic movement, collision handling, and level progression.

Execution
The game must be served through a local server to function correctly.

Valid methods include:

VS Code Live Server
Python HTTP server

Example command:

python -m http.server

Game Objective
Navigate the red ball to the target destination (black hole) by following valid movement paths defined by the grid system.

Core Mechanics

Selecting the ball reveals all valid movement directions
Movement is constrained by predefined grid rules
The engine enforces collision, boundary, and win conditions
Each move updates the game state deterministically

System Design

Grid-based movement engine governs all interactions
Directional logic determines valid transitions
Collision system prevents invalid moves
Win condition triggers upon reaching the target

Technical Stack
HTML for structure
CSS for layout and visual states
JavaScript for game engine, movement logic, and state management

Notes
The application is designed to simulate rule-based aptitude challenges, emphasizing planning accuracy, spatial awareness, and controlled execution under constraints.
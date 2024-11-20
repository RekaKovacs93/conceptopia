"use client";

import { useEffect, useRef, useState } from "react";

const Snake = () => {
  const canvasRef = useRef(null); // Reference to the canvas element
  const [gameOver, setGameOver] = useState(false); // Game Over state
  const [score, setScore] = useState(0); // Score state
  const directionRef = useRef("RIGHT"); // Direction state using ref to avoid re-render on each change
  const snakeRef = useRef([ // Snake body coordinates as an array of [x, y] coordinates
    { x: 8, y: 5 },
    { x: 7, y: 5 },
    { x: 6, y: 5 },
  ]);
  const foodRef = useRef({ x: 4, y: 4 }); // Food position

  // Constants for the game grid size and the snake's speed
  const gridSize = 20;
  const tileSize = 20; // Size of each grid tile in pixels
  const speed = 200; // Speed of the game, in milliseconds

  // Function to update the snake's position
  const moveSnake = () => {
    const snake = snakeRef.current;
    const head = { ...snake[0] };

    // Update the head position based on the current direction
    if (directionRef.current === "RIGHT") head.x += 1;
    if (directionRef.current === "LEFT") head.x -= 1;
    if (directionRef.current === "UP") head.y -= 1;
    if (directionRef.current === "DOWN") head.y += 1;

    // Add the new head to the front of the snake
    snake.unshift(head);

    // Check if the snake eats food
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      // Increase score
      setScore((prevScore) => prevScore + 1);

      // Generate new food position
      foodRef.current = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
    } else {
      // If no food, remove the tail
      snake.pop();
    }

    // Check for collisions with walls or self
    if (
      head.x < 0 ||
      head.x >= gridSize ||
      head.y < 0 ||
      head.y >= gridSize ||
      snake.slice(1).some(
        (segment) => segment.x === head.x && segment.y === head.y
      )
    ) {
      setGameOver(true);
    }

    // Update the snake body in the ref
    snakeRef.current = snake;
  };

  // Draw the game on the canvas
  const draw = (ctx) => {
    // Clear the canvas
    ctx.fillStyle = "rgb(28, 28, 28)";
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  
    // Create a linear gradient spanning the entire snake
    const snake = snakeRef.current;
    const head = snake[0];
    const tail = snake[snake.length - 1];
    
    // Define the gradient from the head to the tail
    const gradient = ctx.createLinearGradient(
      head.x * tileSize + tileSize / 2, head.y * tileSize + tileSize / 2, // Start at the head
      tail.x * tileSize + tileSize / 2, tail.y * tileSize + tileSize / 2  // End at the tail
    );
    gradient.addColorStop(0, "rgba(98,94,235,1)"); // Start color
    gradient.addColorStop(0.5, "rgba(243,125,206,1)"); // Middle color
    gradient.addColorStop(1, "rgba(252,206,144,1)"); // End color
  
    // Draw the snake using the gradient
    ctx.fillStyle = gradient;
    snake.forEach((segment) => {
      ctx.fillRect(
        segment.x * tileSize,
        segment.y * tileSize,
        tileSize,
        tileSize
      );
    });
  
    // Draw the food
    ctx.fillStyle = 'blanchedalmond';
    ctx.fillRect(
      foodRef.current.x * tileSize,
      foodRef.current.y * tileSize,
      tileSize,
      tileSize
    );
  };
  
  // Main game loop
  const gameLoop = () => {
    if (gameOver) return; // Stop the loop if the game is over
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    moveSnake();
    draw(ctx);
  };

  // Set up the game loop and handle key events
  useEffect(() => {
    const interval = setInterval(gameLoop, speed); // Call gameLoop every 200ms
    return () => clearInterval(interval); // Clean up on unmount
  }, [gameOver]);

  // Handle keyboard events to change snake direction
  useEffect(() => {
    const handleKeydown = (e) => {
      if (gameOver) return;
      if (e.key === "ArrowUp" && directionRef.current !== "DOWN") {
        directionRef.current = "UP";
      }
      if (e.key === "ArrowDown" && directionRef.current !== "UP") {
        directionRef.current = "DOWN";
      }
      if (e.key === "ArrowLeft" && directionRef.current !== "RIGHT") {
        directionRef.current = "LEFT";
      }
      if (e.key === "ArrowRight" && directionRef.current !== "LEFT") {
        directionRef.current = "RIGHT";
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [gameOver]);

  // Restart the game when the user clicks the "Restart" button
  const restartGame = () => {
    snakeRef.current = [
      { x: 8, y: 5 },
      { x: 7, y: 5 },
      { x: 6, y: 5 },
    ];
    foodRef.current = { x: 4, y: 4 };
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-dark">
      <h1 className="font text-4xl text-center text-grad mt-40 mb-10">???</h1>
      <h2 className="font text-2xl text-center text-grad mb-20">Score: {score}</h2>
      <div className="relative">
      <canvas
        ref={canvasRef}
        width={gridSize * tileSize}
        height={gridSize * tileSize}
        style={{
          border: "2px solid blanchedalmond",
          marginBottom: "20px",
          backgroundColor: "rgb(28,28,28)", // Set canvas background directly
        }}
        className="bg-dark relative border color rounded-lg"
      ></canvas>
      {gameOver && (
        <div className="absolute inset-0 text-4xl bg-dark">
          <p className="font text-4xl text-center text-grad mb-10">Looser</p>
          <button className="buttonlight" onClick={restartGame}>Restart</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Snake;

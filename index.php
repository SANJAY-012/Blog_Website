<?php
// Start PHP session if needed (for example, if using user authentication)
session_start();

// Add any server-side logic or include files here if needed
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SF BEN - Tech Blog Platform</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
    <header>
        <div class="container header-content">
            <a href="#" class="logo">SF BEN</a>
            <button class="mobile-menu-btn">&#9776;</button>
            <nav class="nav-menu">
                <a href="#" class="nav-link">Events</a>
                <a href="#" class="nav-link">Career</a>
                <a href="#" class="nav-link">AppAssessor</a>
                <a href="#" class="nav-link">Salesforce News</a>
                <a href="#" class="nav-link">Articles by Role</a>
            </nav>
            <button class="dark-mode-toggle">🌙</button>
        </div>
    </header>

    <main class="container">
        <div class="filter-tabs">
            <button class="tab active">Latest</button>
            <button class="tab">Most Popular</button>
            <button class="tab">Editor's Picks</button>
        </div>

        <div class="articles-grid">
            <!-- Articles will be dynamically populated -->
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>

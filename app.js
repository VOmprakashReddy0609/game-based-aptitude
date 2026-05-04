const gameFrame    = document.getElementById("game-frame");
const landing      = document.getElementById("landing");
const gameView     = document.getElementById("game-view");
const gameTitle    = document.getElementById("game-title");
const errorOverlay = document.getElementById("error-overlay");
const errorBackBtn = document.getElementById("error-back-btn");

/* Game metadata */
const games = {
    "geo-sudoku": {
        title: "Geo Sudoku",
        path: "/games/geo-sudoku/index.html"
    },
    "motion-challenge": {
        title: "Motion Challenge",
        path: "/games/motion-challenge/index.html"
    },
    "switch-challenge": {
        title: "Switch Challenge",
        path: "/games/switch-challenge/index.html"
    }
};

/* Load selected game */
function loadGame(gameKey) {
    const game = games[gameKey];
    if (!game) return;

    errorOverlay.classList.add("hidden");
    gameFrame.src = game.path;
    gameTitle.textContent = game.title;

    landing.classList.add("hidden");
    gameView.classList.remove("hidden");
    window.scrollTo(0, 0);

    history.pushState({ game: gameKey }, "", `?game=${gameKey}`);
}

/* Back to landing */
function goBack() {
    window.location.href = 'index.html';
}

/* Detect iframe load failure */
gameFrame.addEventListener("load", () => {
    try {
        const doc = gameFrame.contentDocument;
        if (gameFrame.src && (!doc || doc.URL === "about:blank")) {
            errorOverlay.classList.remove("hidden");
        }
    } catch (e) {
        // SecurityError = cross-origin, actually loaded fine
    }
});

gameFrame.addEventListener("error", () => {
    errorOverlay.classList.remove("hidden");
});

/* Back buttons */
errorBackBtn.addEventListener("click", goBack);
document.getElementById("back-btn").addEventListener("click", goBack);

/* Browser back/forward */
window.addEventListener("popstate", (event) => {
    if (event.state?.game) {
        loadGame(event.state.game);
    } else {
        goBack();
    }
});

/* Auto-load from URL on page open */
window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);
    const game = params.get("game");
    if (game && games[game]) {
        loadGame(game);
    }
});
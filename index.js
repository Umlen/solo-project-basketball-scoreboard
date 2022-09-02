let homeScoresElem = document.getElementById('home-scores');
let guestScoresElem = document.getElementById('guest-scores');

let homeScoresCount = 0;
let guestScoresCount = 0;

homeScoresElem.textContent = homeScoresCount;
guestScoresElem.textContent = guestScoresCount;

function addOneScore(event) {
    if (event.target.parentElement.previousElementSibling.id === 'home-scores') {
        homeScoresCount += 1;
        homeScoresElem.textContent = homeScoresCount;
        scoreColorChange();
    } else if (event.target.parentElement.previousElementSibling.id === 'guest-scores') {
        guestScoresCount += 1;
        guestScoresElem.textContent = guestScoresCount;
        scoreColorChange();
    }
}

function addTwoScores(event) {
    if (event.target.parentElement.previousElementSibling.id === 'home-scores') {
        homeScoresCount += 2;
        homeScoresElem.textContent = homeScoresCount;
        scoreColorChange();
    } else if (event.target.parentElement.previousElementSibling.id === 'guest-scores') {
        guestScoresCount += 2;
        guestScoresElem.textContent = guestScoresCount;
        scoreColorChange();
    }
}

function addThreeScores(event) {
    if (event.target.parentElement.previousElementSibling.id === 'home-scores') {
        homeScoresCount += 3;
        homeScoresElem.textContent = homeScoresCount;
        scoreColorChange();
    } else if (event.target.parentElement.previousElementSibling.id === 'guest-scores') {
        guestScoresCount += 3;
        guestScoresElem.textContent = guestScoresCount;
        scoreColorChange();
    }
}

function scoreColorChange() {
    if (homeScoresCount > guestScoresCount) {
        homeScoresElem.style.color = '#70e000';
        guestScoresElem.style.color = '#f40000';
    } else if (homeScoresCount < guestScoresCount) {
        homeScoresElem.style.color = '#f40000';
        guestScoresElem.style.color = '#70e000';
    } else {
        homeScoresElem.style.color = '#fefdff';
        guestScoresElem.style.color = '#fefdff';
    }
}

function newGame() {
    homeScoresCount = 0;
    guestScoresCount = 0;
    homeScoresElem.textContent = homeScoresCount;
    guestScoresElem.textContent = guestScoresCount;
    scoreColorChange();
}
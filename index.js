let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let leader;

function homeIncrement1() {
  homeScore += 1;
  if (homeScore > 99) {
    homeScore = 0;
  }
  homeScoreEl.textContent = homeScore;
  updateLeader();
}

function homeIncrement2() {
  homeScore += 2;
  if (homeScore > 99) {
    homeScore = 0;
  }
  homeScoreEl.textContent = homeScore;
  updateLeader();
}

function homeIncrement3() {
  homeScore += 3;
  if (homeScore > 99) {
    homeScore = 0;
  }
  homeScoreEl.textContent = homeScore;
  updateLeader();
}

function guestIncrement1() {
  guestScore += 1;
  if (guestScore > 99) {
    guestScore = 0;
  }
  guestScoreEl.textContent = guestScore;
  updateLeader();
}

function guestIncrement2() {
  guestScore += 2;
  if (guestScore > 99) {
    guestScore = 0;
  }
  guestScoreEl.textContent = guestScore;
  updateLeader();
}

function guestIncrement3() {
  guestScore += 3;
  if (guestScore > 99) {
    guestScore = 0;
  }
  guestScoreEl.textContent = guestScore;
  updateLeader();
}

function updateLeader() {
  if (homeScore > guestScore) {
    homeScoreEl.style.color = "#ffe600ff";
    guestScoreEl.style.color = "#f94f6d";
  } else if (guestScore > homeScore) {
    guestScoreEl.style.color = "#ffe600ff";
    homeScoreEl.style.color = "#f94f6d";
  } else {
    homeScoreEl.style.color = "#f94f6d";
    guestScoreEl.style.color = "#f94f6d";
  }
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  updateLeader();
}

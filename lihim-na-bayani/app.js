// Grab overlays
const overlays = {
  chapter: document.getElementById("chapterOverlay"),
  credits: document.getElementById("creditsOverlay"),
};

// Main menu
const mainMenu = document.getElementById("mainMenu");

// Hide/show helpers
function showOverlay(overlay) { overlay.classList.remove("hidden"); }
function hideOverlay(overlay) { overlay.classList.add("hidden"); }

// === STORY DATA (Chapter 1 Full with images) ===
let story = [
  // Scene 1 – Hut
  {
    speaker: "Bonifacio",
    text: "We cannot wait for mercy. Tomorrow, we tear our cedulas.",
    bg: "hut.jpg", portrait: "bonifacio.jpg",
    next: 1
  },
  {
    speaker: "Aguinaldo",
    text: "But are we ready, Supremo? Passion without muskets is suicide.",
    bg: "hut.jpg", portrait: "aguinaldo.jpg",
    next: 2
  },
  {
    speaker: "Gregoria",
    text: "We have fire. That fire is enough.",
    bg: "hut.jpg", portrait: "gregoria.jpg",
    next: 3
  },
  {
    speaker: "Mariano Álvarez",
    text: "The Spanish will not forgive rebellion. If we rise, there is no turning back.",
    bg: "hut.jpg", portrait: "mariano.jpg",
    next: 4
  },
  {
    speaker: "Narrator",
    text: "How should the Katipunan proceed?",
    bg: "hut.jpg",
    choices: [
      { text: "We attack now. Better to die free.", next: 5 },
      { text: "We wait until Cavite strengthens us.", next: 6 },
      { text: "We spread word to the barrios first.", next: 7 }
    ]
  },
  {
    speaker: "Bonifacio",
    text: "Then let the first blow be ours. Courage before cannons!",
    bg: "hut.jpg", portrait: "bonifacio.jpg",
    next: 8
  },
  {
    speaker: "Aguinaldo",
    text: "Cavite gathers strength. One day more could save many lives.",
    bg: "hut.jpg", portrait: "aguinaldo.jpg",
    next: 8
  },
  {
    speaker: "Mariano Álvarez",
    text: "We whisper to the barrios tonight. Tomorrow the fields will answer.",
    bg: "hut.jpg", portrait: "mariano.jpg",
    next: 8
  },
  {
    speaker: "Narrator",
    text: "Later that night, outside the hut, the moon watches Tondo’s silent streets.",
    bg: "streets.jpg",
    next: 9
  },

  // Scene 2 – Streets
  {
    speaker: "Gregoria",
    text: "Andres, even generals doubt. But if you falter, all falter.",
    bg: "streets.jpg", portrait: "gregoria.jpg",
    next: 10
  },
  {
    speaker: "Bonifacio",
    text: "The burden crushes me. Yet if I fail, who carries it?",
    bg: "streets.jpg", portrait: "bonifacio.jpg",
    next: 11
  },
  {
    speaker: "Aguinaldo",
    text: "No man carries this alone. Cavite will not bow to Tondo, but neither will it abandon it.",
    bg: "streets.jpg", portrait: "aguinaldo.jpg",
    choices: [
      { text: "Then stand with me, brother, not behind me.", next: 12 },
      { text: "If Cavite hesitates, history will pass it by.", next: 13 },
      { text: "I hear your counsel, but the Supremo must decide.", next: 14 }
    ]
  },
  {
    speaker: "Aguinaldo",
    text: "You have my word. Cavite stands with you tonight.",
    bg: "streets.jpg", portrait: "aguinaldo.jpg",
    next: 15
  },
  {
    speaker: "Aguinaldo",
    text: "Then let history judge us both. I will not be left behind.",
    bg: "streets.jpg", portrait: "aguinaldo.jpg",
    next: 15
  },
  {
    speaker: "Aguinaldo",
    text: "Then decide. The people wait for your command.",
    bg: "streets.jpg", portrait: "aguinaldo.jpg",
    next: 15
  },
  {
    speaker: "Gregoria",
    text: "Listen, Andres. What they must see from you is…",
    bg: "streets.jpg", portrait: "gregoria.jpg",
    choices: [
      { text: "Strength — a leader unshaken.", next: 16 },
      { text: "Heart — love for the people.", next: 16 },
      { text: "Patience — or we lose all.", next: 16 }
    ]
  },
  {
    speaker: "Katipunero",
    text: "Supremo! Spanish guards nearby!",
    bg: "streets.jpg",
    choices: [
      { text: "Hide the papers. Burn what they cannot find.", next: 17 },
      { text: "Stand firm. If they search, they will fear our courage.", next: 18 },
      { text: "Scatter. Live to fight tomorrow.", next: 19 }
    ]
  },
  {
    speaker: "Gregoria",
    text: "Wise. Let ash hide our steps.",
    bg: "streets.jpg", portrait: "gregoria.jpg",
    next: 20
  },
  {
    speaker: "Aguinaldo",
    text: "Then let them see we do not tremble.",
    bg: "streets.jpg", portrait: "aguinaldo.jpg",
    next: 20
  },
  {
    speaker: "Mariano Álvarez",
    text: "The cause needs survivors more than martyrs tonight.",
    bg: "streets.jpg", portrait: "mariano.jpg",
    next: 20
  },
  {
    speaker: "Narrator",
    text: "Midnight becomes a drumbeat. The Katipunan gathers in a wide, open field.",
    bg: "gathering.jpg",
    next: 21
  },

  // Scene 3 – Gathering
  {
    speaker: "Bonifacio",
    text: "This cedula — the symbol of our chains. Tear it! Let Spain hear our defiance!",
    bg: "gathering.jpg", portrait: "bonifacio.jpg",
    next: 22
  },
  {
    speaker: "Narrator",
    text: "How will you raise the cry?",
    bg: "gathering.jpg",
    choices: [
      { text: "Raise your voice! Let Manila hear!", next: 23 },
      { text: "Keep it quiet. Too loud and they strike first.", next: 24 },
      { text: "Let the barrios join before the shout is thunder.", next: 25 }
    ]
  },
  {
    speaker: "Crowd",
    text: "Kalayaan! Kalayaan!",
    bg: "gathering.jpg",
    next: 26
  },
  {
    speaker: "Narrator",
    text: "Whispers carry like smoke; discipline steadies the ranks.",
    bg: "gathering.jpg",
    next: 26
  },
  {
    speaker: "Narrator",
    text: "Messengers race to the barrios. The spark learns to breathe.",
    bg: "gathering.jpg",
    next: 26
  },
  {
    speaker: "Narrator",
    text: "The oath of the Katipunan is sworn under the moonlight, sealing the brotherhood of revolution.",
    bg: "gathering.jpg",
    next: 27
  },
  {
    speaker: "Narrator",
    text: "Chapter 1 End — The Cry of 1896.",
    bg: "gathering.jpg",
    next: null
  }
];

// Dialogue runtime
let currentIndex = 0;

function showLine() {
  const line = story[currentIndex];
  if (!line) return;

  const nameplate = document.getElementById("nameplate");
  const dialogueText = document.getElementById("dialogueText");
  const choicesContainer = document.getElementById("choices");
  const portrait = document.getElementById("portrait");
  const bg = document.getElementById("bg");

  // Background
  if (line.bg) {
    bg.style.backgroundImage = `url('images/${line.bg}')`;
  }

  // Portrait
  if (line.portrait) {
    portrait.src = `images/${line.portrait}`;
    portrait.style.display = "block";
  } else {
    portrait.style.display = "none";
  }

  // Narrator style
  if (line.speaker === "Narrator") {
    document.getElementById("dialogueBox").classList.add("narrator");
  } else {
    document.getElementById("dialogueBox").classList.remove("narrator");
  }

  nameplate.textContent = line.speaker || "";
  dialogueText.textContent = line.text || "";

  // Choices
  choicesContainer.innerHTML = "";
  if (line.choices) {
    choicesContainer.hidden = false;
    line.choices.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.textContent = c.text;
      btn.onclick = () => {
        currentIndex = c.next;
        showLine();
      };
      choicesContainer.appendChild(btn);
    });
  } else {
    choicesContainer.hidden = true;
  }
}

function nextLine() {
  const line = story[currentIndex];
  if (line && line.next !== undefined && line.next !== null) {
    currentIndex = line.next;
    showLine();
  }
}

// UI buttons
document.getElementById("btnNext").addEventListener("click", nextLine);

// === MENU FUNCTIONS ===
function startGame() {
  if (mainMenu) mainMenu.classList.add("hidden");
  document.getElementById("dialogueBox").classList.remove("hidden");
  currentIndex = 0;
  showLine();
}

function openCredits() { showOverlay(overlays.credits); }
function openChapters() { showOverlay(overlays.chapter); }
function exitGame() {
  if (mainMenu) mainMenu.classList.remove("hidden");
  document.getElementById("dialogueBox").classList.add("hidden");
}

// Close overlays
overlays.chapter.addEventListener("click", (e) => {
  if (e.target.dataset.action === "closeChapters") hideOverlay(overlays.chapter);
});
overlays.credits.addEventListener("click", (e) => {
  if (e.target.dataset.action === "closeCredits") hideOverlay(overlays.credits);
});

// Escape closes overlay
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    Object.values(overlays).forEach((overlay) => {
      if (!overlay.classList.contains("hidden")) hideOverlay(overlay);
    });
  }
});

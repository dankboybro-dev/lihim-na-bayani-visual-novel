// === OVERLAYS & MENU ===
const overlays = {
  chapter: document.getElementById("chapterOverlay"),
  credits: document.getElementById("creditsOverlay"),
};
const mainMenu = document.getElementById("mainMenu");

function showOverlay(overlay) { overlay.classList.remove("hidden"); }
function hideOverlay(overlay) { overlay.classList.add("hidden"); }

// === CHAPTER DATA ===
const chapters = [
  { id: 1, title: "Chapter 1: The Cry of 1896", startIndex: 0, unlocked: true },
  { id: 2, title: "Chapter 2: The Cry of Pugad Lawin", startIndex: 28, unlocked: false },
  { id: 3, title: "Chapter 3: Fire at San Juan del Monte", startIndex: 50, unlocked: false },
  { id: 4, title: "Chapter 4: The Province That Burns", startIndex: 75, unlocked: false },
  { id: 5, title: "Chapter 5: Dawn at Bagumbayan", startIndex: 100, unlocked: false },
  { id: 6, title: "Chapter 6: Betrayal at Tejeros", startIndex: 125, unlocked: false },
  { id: 7, title: "Chapter 7: The Sacrifice of the Supremo", startIndex: 150, unlocked: false },
  { id: 8, title: "Chapter 8: The Compromise of Biak-na-Bato", startIndex: 175, unlocked: false },
  { id: 9, title: "Chapter 9: Strange New Allies", startIndex: 200, unlocked: false },
  { id: 10, title: "Chapter 10: The Price of Kalayaan", startIndex: 225, unlocked: false }
];

// === STORY DATA (Chapter 1) ===
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
    text: "Later that night, outside the hut, the moon watches Tondo's silent streets.",
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

// === GAME STATE ===
let currentIndex = 0;
let historyStack = [];

// === DIALOGUE SYSTEM ===
function showLine() {
  const line = story[currentIndex];
  if (!line) return;

  const nameplate = document.getElementById("nameplate");
  const dialogueText = document.getElementById("dialogueText");
  const choicesContainer = document.getElementById("choices");
  const portrait = document.getElementById("portrait");
  const bg = document.getElementById("bg");
  const backBtn = document.getElementById("btnBack");

  // Background
  if (line.bg) {
    bg.style.backgroundImage = `url('images/${line.bg}')`;
  }

  // Portrait with error handling
  if (line.portrait) {
    portrait.src = `images/${line.portrait}`;
    portrait.style.display = "block";
    portrait.onerror = () => {
      portrait.style.display = "none";
    };
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
        historyStack.push(currentIndex);
        currentIndex = c.next;
        showLine();
      };
      choicesContainer.appendChild(btn);
    });
  } else {
    choicesContainer.hidden = true;
  }

  // Update back button
  backBtn.disabled = historyStack.length === 0;
}

function nextLine() {
  const line = story[currentIndex];
  if (line && line.next !== undefined && line.next !== null) {
    historyStack.push(currentIndex);
    currentIndex = line.next;
    showLine();
  }
}

function prevLine() {
  if (historyStack.length > 0) {
    currentIndex = historyStack.pop();
    showLine();
  }
}

// === MENU FUNCTIONS ===
function startGame() {
  mainMenu.classList.add("hidden");
  document.getElementById("dialogueBox").classList.remove("hidden");
  currentIndex = 0;
  historyStack = [];
  showLine();
}

function openChapters() {
  const chapterList = document.getElementById("chapterList");
  chapterList.innerHTML = "";
  
  chapters.forEach((chapter) => {
    const btn = document.createElement("button");
    btn.className = "btn chapter-btn";
    btn.textContent = chapter.unlocked ? chapter.title : "🔒 " + chapter.title;
    btn.disabled = !chapter.unlocked;
    
    if (chapter.unlocked) {
      btn.onclick = () => {
        currentIndex = chapter.startIndex;
        historyStack = [];
        hideOverlay(overlays.chapter);
        mainMenu.classList.add("hidden");
        document.getElementById("dialogueBox").classList.remove("hidden");
        showLine();
      };
    }
    
    chapterList.appendChild(btn);
  });
  
  showOverlay(overlays.chapter);
}

function openCredits() {
  showOverlay(overlays.credits);
}

function exitGame() {
  const dialogueBox = document.getElementById("dialogueBox");
  
  // If in game, return to menu
  if (!dialogueBox.classList.contains("hidden")) {
    dialogueBox.classList.add("hidden");
    mainMenu.classList.remove("hidden");
    currentIndex = 0;
    historyStack = [];
  } else {
    // Already in menu
    if (confirm("Close the game?")) {
      location.reload();
    }
  }
}

// === EVENT LISTENERS ===
document.addEventListener("DOMContentLoaded", () => {
  // Navigation buttons
  document.getElementById("btnNext").addEventListener("click", nextLine);
  document.getElementById("btnBack").addEventListener("click", prevLine);
  
  // Close overlay buttons
  document.querySelectorAll("[data-action='closeChapters']").forEach(btn => {
    btn.addEventListener("click", () => hideOverlay(overlays.chapter));
  });
  document.querySelectorAll("[data-action='closeCredits']").forEach(btn => {
    btn.addEventListener("click", () => hideOverlay(overlays.credits));
  });
  
  // Keyboard controls
  document.addEventListener("keydown", (e) => {
    // Escape closes overlays or returns to menu
    if (e.key === "Escape") {
      if (!overlays.chapter.classList.contains("hidden")) {
        hideOverlay(overlays.chapter);
      } else if (!overlays.credits.classList.contains("hidden")) {
        hideOverlay(overlays.credits);
      } else if (!document.getElementById("dialogueBox").classList.contains("hidden")) {
        exitGame();
      }
    }
    
    // Space/Enter to advance (only when choices not showing)
    if (!document.getElementById("dialogueBox").classList.contains("hidden")) {
      if ((e.key === " " || e.key === "Enter") && document.getElementById("choices").hidden) {
        e.preventDefault();
        nextLine();
      }
    }
  });
});

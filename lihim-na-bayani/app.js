// === OVERLAYS & MENU ===
const overlays = {
  chapter: document.getElementById("chapterOverlay"),
  credits: document.getElementById("creditsOverlay"),
};
const mainMenu = document.getElementById("mainMenu");

function showOverlay(overlay) { overlay.classList.remove("hidden"); }
function hideOverlay(overlay) { overlay.classList.add("hidden"); }

const chapters = [
  { id: 1, title: "Chapter 1: The Cry of 1896", startIndex: 0, unlocked: true },
  { id: 2, title: "Chapter 2: The Cry of Pugad Lawin", startIndex: 28, unlocked: false },
  { id: 3, title: "Chapter 3: Fire at San Juan del Monte", startIndex: 53, unlocked: false },
  { id: 4, title: "Chapter 4: The Province That Burns", startIndex: 75, unlocked: false },
  { id: 5, title: "Chapter 5: Dawn at Bagumbayan", startIndex: 100, unlocked: false },
  { id: 6, title: "Chapter 6: Betrayal at Tejeros", startIndex: 125, unlocked: false },
  { id: 7, title: "Chapter 7: The Sacrifice of the Supremo", startIndex: 150, unlocked: false },
  { id: 8, title: "Chapter 8: The Compromise of Biak-na-Bato", startIndex: 175, unlocked: false },
  { id: 9, title: "Chapter 9: Strange New Allies", startIndex: 200, unlocked: false },
  { id: 10, title: "Chapter 10: The Price of Kalayaan", startIndex: 225, unlocked: false }
];

// === Chapter unlock map — index of the "Chapter X End" slide : chapter ID to unlock ===
const chapterEndMap = {
  27: 2,   // Ch1 end unlocks Ch2
  42: 3,   // Ch2 end unlocks Ch3
  56: 4,   // Ch3 end unlocks Ch4
  70: 5,   // Ch4 end unlocks Ch5
  84: 6,   // Ch5 end unlocks Ch6
  99: 7,   // Ch6 end unlocks Ch7
  113: 8,  // Ch7 end unlocks Ch8
  127: 9,  // Ch8 end unlocks Ch9
  141: 10  // Ch9 end unlocks Ch10
};

// === FULL STORY DATA (Chapters 1-10) ===
let story = [
  // ==================== CHAPTER 1 ====================
  { speaker: "Bonifacio", text: "We cannot wait for mercy. Tomorrow, we tear our cedulas.", bg: "hut.jpg", portrait: "bonifacio.jpg", next: 1 },
  { speaker: "Aguinaldo", text: "But are we ready, Supremo? Passion without muskets is suicide.", bg: "hut.jpg", portrait: "aguinaldo.jpg", next: 2 },
  { speaker: "Gregoria", text: "We have fire. That fire is enough.", bg: "hut.jpg", portrait: "gregoria.jpg", next: 3 },
  { speaker: "Mariano Álvarez", text: "The Spanish will not forgive rebellion. If we rise, there is no turning back.", bg: "hut.jpg", portrait: "mariano.jpg", next: 4 },
  { speaker: "Narrator", text: "How should the Katipunan proceed?", bg: "hut.jpg", choices: [
    { text: "We attack now. Better to die free.", next: 5 },
    { text: "We wait until Cavite strengthens us.", next: 6 },
    { text: "We spread word to the barrios first.", next: 7 }
  ]},
  { speaker: "Bonifacio", text: "Then let the first blow be ours. Courage before cannons!", bg: "hut.jpg", portrait: "bonifacio.jpg", next: 8 },
  { speaker: "Aguinaldo", text: "Cavite gathers strength. One day more could save many lives.", bg: "hut.jpg", portrait: "aguinaldo.jpg", next: 8 },
  { speaker: "Mariano Álvarez", text: "We whisper to the barrios tonight. Tomorrow the fields will answer.", bg: "hut.jpg", portrait: "mariano.jpg", next: 8 },
  { speaker: "Narrator", text: "Later that night, outside the hut, the moon watches Tondo's silent streets.", bg: "streets.jpg", next: 9 },
  { speaker: "Gregoria", text: "Andres, even generals doubt. But if you falter, all falter.", bg: "streets.jpg", portrait: "gregoria.jpg", next: 10 },
  { speaker: "Bonifacio", text: "The burden crushes me. Yet if I fail, who carries it?", bg: "streets.jpg", portrait: "bonifacio.jpg", next: 11 },
  { speaker: "Aguinaldo", text: "No man carries this alone. Cavite will not bow to Tondo, but neither will it abandon it.", bg: "streets.jpg", portrait: "aguinaldo.jpg", choices: [
    { text: "Then stand with me, brother, not behind me.", next: 12 },
    { text: "If Cavite hesitates, history will pass it by.", next: 13 },
    { text: "I hear your counsel, but the Supremo must decide.", next: 14 }
  ]},
  { speaker: "Aguinaldo", text: "You have my word. Cavite stands with you tonight.", bg: "streets.jpg", portrait: "aguinaldo.jpg", next: 15 },
  { speaker: "Aguinaldo", text: "Then let history judge us both. I will not be left behind.", bg: "streets.jpg", portrait: "aguinaldo.jpg", next: 15 },
  { speaker: "Aguinaldo", text: "Then decide. The people wait for your command.", bg: "streets.jpg", portrait: "aguinaldo.jpg", next: 15 },
  { speaker: "Gregoria", text: "Listen, Andres. What they must see from you is…", bg: "streets.jpg", portrait: "gregoria.jpg", choices: [
    { text: "Strength — a leader unshaken.", next: 16 },
    { text: "Heart — love for the people.", next: 16 },
    { text: "Patience — or we lose all.", next: 16 }
  ]},
  { speaker: "Katipunero", text: "Supremo! Spanish guards nearby!", bg: "streets.jpg", choices: [
    { text: "Hide the papers. Burn what they cannot find.", next: 17 },
    { text: "Stand firm. If they search, they will fear our courage.", next: 18 },
    { text: "Scatter. Live to fight tomorrow.", next: 19 }
  ]},
  { speaker: "Gregoria", text: "Wise. Let ash hide our steps.", bg: "streets.jpg", portrait: "gregoria.jpg", next: 20 },
  { speaker: "Aguinaldo", text: "Then let them see we do not tremble.", bg: "streets.jpg", portrait: "aguinaldo.jpg", next: 20 },
  { speaker: "Mariano Álvarez", text: "The cause needs survivors more than martyrs tonight.", bg: "streets.jpg", portrait: "mariano.jpg", next: 20 },
  { speaker: "Narrator", text: "Midnight becomes a drumbeat. The Katipunan gathers in a wide, open field.", bg: "gathering.jpg", next: 21 },
  { speaker: "Bonifacio", text: "This cedula — the symbol of our chains. Tear it! Let Spain hear our defiance!", bg: "gathering.jpg", portrait: "bonifacio.jpg", next: 22 },
  { speaker: "Narrator", text: "How will you raise the cry?", bg: "gathering.jpg", choices: [
    { text: "Raise your voice! Let Manila hear!", next: 23 },
    { text: "Keep it quiet. Too loud and they strike first.", next: 24 },
    { text: "Let the barrios join before the shout is thunder.", next: 25 }
  ]},
  { speaker: "Crowd", text: "Kalayaan! Kalayaan!", bg: "gathering.jpg", portrait: "crowd.png", next: 26 },
  { speaker: "Narrator", text: "Whispers carry like smoke; discipline steadies the ranks.", bg: "gathering.jpg", next: 26 },
  { speaker: "Narrator", text: "Messengers race to the barrios. The spark learns to breathe.", bg: "gathering.jpg", next: 26 },
  { speaker: "Narrator", text: "The oath of the Katipunan is sworn under the moonlight, sealing the brotherhood of revolution.", bg: "gathering.jpg", next: 27 },
  { speaker: "Narrator", text: "Chapter 1 End — The Cry of 1896.", bg: "gathering.jpg", next: 28 },

  // ==================== CHAPTER 2 ====================
  { speaker: "Narrator", text: "August 23, 1896. The house of Juan Ramos in Pugad Lawin, Caloocan. Over a thousand Katipuneros gather. Spanish spies have discovered the Katipunan. There is no hiding left.", bg: "pugadlawin.jpg", next: 29 },
  { speaker: "Juan Ramos", text: "The authorities know everything. They will come for us within days. We act now — or be slaughtered in our homes like criminals.", bg: "pugadlawin.jpg", portrait: "juanramos.png", next: 30 },
  { speaker: "Bonifacio", text: "Then let them come! We will meet them with bolo and courage! Today we tear our cédulas and mark ourselves free men!", bg: "pugadlawin.jpg", portrait: "bonifacio.jpg", next: 31 },
  { speaker: "Narrator", text: "The tearing of cédulas fills the air like a storm of paper. A thousand voices rise: KALAYAAN! KALAYAAN!", bg: "pugadlawin.jpg", portrait: "crowd.png", next: 32 },
  { speaker: "Pio Valenzuela", text: "Supremo — we sent word to Rizal in Dapitan. He refused to lead the revolt. He believes it is premature and will only bring greater repression upon the people.", bg: "pugadlawin.jpg", portrait: "pio.png", next: 33 },
  { speaker: "Bonifacio", text: "Rizal writes beautifully about freedom but will not bleed for it. We respect him — but we will not wait for any man's permission to be free.", bg: "pugadlawin.jpg", portrait: "bonifacio.jpg", choices: [
    { text: "Rizal's pen has done its work. Now the bolo must do the rest.", next: 34 },
    { text: "Protect Rizal's name. Spain will use him against us if we are careless.", next: 35 },
    { text: "Send word again. The revolution needs a face the ilustrados will respect.", next: 36 }
  ]},
  { speaker: "Bonifacio", text: "The men cheer. You are a brother in arms.", bg: "pugadlawin.jpg", portrait: "bonifacio.jpg", next: 37 },
  { speaker: "Pio Valenzuela", text: "Wise. His name is more powerful than any musket.", bg: "pugadlawin.jpg", portrait: "pio.png", next: 37 },
  { speaker: "Bonifacio", text: "The messenger rides at dawn.", bg: "pugadlawin.jpg", portrait: "bonifacio.jpg", next: 37 },
  { speaker: "Bonifacio", text: "Listen — every man here becomes a target from this moment. Your families may suffer. Your homes may burn. But the motherland is calling.", bg: "pugadlawin.jpg", portrait: "bonifacio.jpg", choices: [
    { text: "Go home, child. We fight so your mother never has to fear again.", next: 38 },
    { text: "The revolution needs every hand. Stay and fight for all our mothers.", next: 39 },
    { text: "This is your choice alone. No man should be forced to bleed.", next: 40 }
  ]},
  { speaker: "Narrator", text: "The boy weeps and runs. Three others follow. But a hundred more remain.", bg: "pugadlawin.jpg", next: 41 },
  { speaker: "Narrator", text: "The boy steels himself, jaw trembling. He stays — and will one day become a legend.", bg: "pugadlawin.jpg", next: 41 },
  { speaker: "Narrator", text: "The boy thinks for a long moment — and stays. A choice that will follow him forever.", bg: "pugadlawin.jpg", next: 41 },
  { speaker: "Gregoria", text: "I will carry the Katipunan documents to safety. Spain may burn our homes — but they will not burn our history.", bg: "pugadlawin.jpg", portrait: "gregoria.jpg", next: 42 },
  { speaker: "Narrator", text: "Chapter 2 End — The Cry of Pugad Lawin.", bg: "pugadlawin.jpg", next: 43 },

  // ==================== CHAPTER 3 ====================
  { speaker: "Narrator", text: "August 30, 1896. Bonifacio leads thousands toward the Spanish powder depot at San Juan del Monte. The plan: seize the arsenal, arm the revolution. The Spanish garrison stands ready.", bg: "sanjuan.jpg", next: 44 },
  { speaker: "Bonifacio", text: "If we take the powder depot, we arm the revolution for a year! Advance! Let the cannons of Spain tremble before our bolos!", bg: "sanjuan.jpg", portrait: "bonifacio.jpg", next: 45 },
  { speaker: "Francisco Carreon", text: "Supremo, the Spanish have reinforced the walls overnight. Their rifles will cut through our men long before we reach the gates.", bg: "sanjuan.jpg", portrait: "francisco.png", choices: [
    { text: "Charge the east flank — fast and loud. Draw their fire for the others.", next: 46 },
    { text: "Circle wide — take the hill and fire down into the garrison.", next: 47 },
    { text: "Hold position until darkness. Strike when they cannot see our numbers.", next: 48 }
  ]},
  { speaker: "Narrator", text: "Your charge costs lives but creates a diversion. Three Katipuneros reach the wall.", bg: "sanjuan.jpg", next: 49 },
  { speaker: "Narrator", text: "The Spanish scramble to defend the high ground. Bonifacio's center advances further.", bg: "sanjuan2.jpg", next: 49 },
  { speaker: "Narrator", text: "Patience proves wise — the night assault causes chaos in the garrison ranks.", bg: "sanjuan.jpg", next: 49 },
  { speaker: "Narrator", text: "The battle rages for hours. Bolo against rifle. Courage against cannon. The walls of the garrison are wet with the blood of both sides.", bg: "sanjuan2.jpg", next: 50 },
  { speaker: "Wounded Katipunero", text: "Lieutenant... I cannot rise. Take my bolo. Tell my wife in Tondo that I died with my cédula torn. That I died free.", bg: "sanjuan.jpg", portrait: "wounded.png", choices: [
    { text: "No man left behind. I carry you out myself.", next: 51 },
    { text: "Brother, I will tell them. You close his hand around his bolo and press forward.", next: 52 },
    { text: "Signal the medic and mark his position before advancing.", next: 53 }
  ]},
  { speaker: "Narrator", text: "You save him but miss the assault window. He survives — and will fight in a hundred more battles.", bg: "sanjuan.jpg", next: 54 },
  { speaker: "Narrator", text: "Your advance helps breach the outer wall. The guilt becomes a scar you carry home.", bg: "sanjuan2.jpg", next: 54 },
  { speaker: "Narrator", text: "The medic reaches him in time. You rejoin the fight with a clear conscience.", bg: "sanjuan.jpg", next: 54 },
  { speaker: "Bonifacio", text: "Fall back to Marikina! We cannot hold against their reinforcements! Fall back!", bg: "sanjuan.jpg", portrait: "bonifacio.jpg", next: 55 },
  { speaker: "Francisco Carreon", text: "We lost today — but the Spanish lost twenty men and their confidence. They know now: this is not a riot. This is a war for a nation.", bg: "sanjuan.jpg", portrait: "francisco.png", next: 56 },
  { speaker: "Narrator", text: "Chapter 3 End — Fire at San Juan del Monte.", bg: "sanjuan.jpg", next: 57 },

  // ==================== CHAPTER 4 ====================
  { speaker: "Narrator", text: "September 1896. While Manila reeled from defeat, Cavite exploded into revolution. Under Emilio Aguinaldo, the Magdalo faction swept Spanish garrisons from town after town. The province became a beacon of hope.", bg: "cavite.jpg", next: 58 },
  { speaker: "Aguinaldo", text: "We have taken Kawit, Noveleta, Imus, and Bacoor. Cavite is free. But we cannot rest — every liberated town must be defended before we can advance further.", bg: "cavite.jpg", portrait: "aguinaldo.jpg", next: 59 },
  { speaker: "Baldomero Aguinaldo", text: "Cousin, Bonifacio's messengers arrive daily. He wants us to coordinate a joint assault on Manila from both flanks at once.", bg: "cavite.jpg", portrait: "baldomero.png", next: 60 },
  { speaker: "Aguinaldo", text: "Manila is not ready for siege. We consolidate Cavite first. Bonifacio's heart is brave — but tactics matter more than passion in modern warfare.", bg: "cavite2.jpg", portrait: "aguinaldo.jpg", choices: [
    { text: "Cavite is powerful. Coordinate with them — or the revolution fractures at its strongest moment.", next: 61 },
    { text: "Aguinaldo plays his own game. Watch him carefully, Supremo.", next: 62 },
    { text: "The Supremo's authority must be formally recognized by Cavite in writing.", next: 63 }
  ]},
  { speaker: "Narrator", text: "Bonifacio listens, troubled but grateful for your honesty. A summit is planned.", bg: "cavite.jpg", next: 64 },
  { speaker: "Narrator", text: "Bonifacio's eyes narrow. His suspicion grows — and perhaps rightly so.", bg: "cavite2.jpg", next: 64 },
  { speaker: "Narrator", text: "A tense summit is convened. Authority is reaffirmed — but the cracks are already forming.", bg: "cavite.jpg", next: 64 },
  { speaker: "Teresa Magbanua", text: "The revolution is not only Manila and Cavite. In the Visayas, women fight too. I command a hundred fighters in Iloilo. We need arms — not speeches.", bg: "cavite2.jpg", portrait: "teresa.png", next: 65 },
  { speaker: "Aguinaldo", text: "A woman commander in the Visayas — remarkable. Send her what rifles we can spare. The revolution needs every province aflame.", bg: "cavite.jpg", portrait: "aguinaldo.jpg", choices: [
    { text: "Grant her Captain. She has earned it in blood, not words.", next: 66 },
    { text: "The rank can wait — rifles first, politics after the war.", next: 67 },
    { text: "Her people follow her without any rank. What matters is that she fights.", next: 68 }
  ]},
  { speaker: "Narrator", text: "Teresa smiles fiercely. Three more Visayan commanders immediately join the cause.", bg: "cavite.jpg", portrait: "teresa.png", next: 69 },
  { speaker: "Narrator", text: "Teresa accepts the weapons. But the slight is not forgotten. Visayan coordination delays by weeks.", bg: "cavite2.jpg", next: 69 },
  { speaker: "Teresa", text: "I like this one. The Visayas begin to burn.", bg: "cavite.jpg", portrait: "teresa.png", next: 69 },
  { speaker: "Aguinaldo", text: "Spain threatens — but Cavite stands. And as long as one Filipino province stands free, Spain has not won this war.", bg: "cavite.jpg", portrait: "aguinaldo.jpg", next: 70 },
  { speaker: "Narrator", text: "Chapter 4 End — The Province That Burns.", bg: "cavite.jpg", next: 71 },

  // ==================== CHAPTER 5 ====================
  { speaker: "Narrator", text: "December 1896. José Rizal — writer, doctor, patriot — sits in Fort Santiago awaiting death. Spain has tried him as the principal organizer of the revolt. The charge is false. The sentence is real.", bg: "fortsantiago.jpg", next: 72 },
  { speaker: "Rizal", text: "I did not ask for this revolution. But if my death gives it meaning — if my blood waters the seed of freedom — then perhaps that is the purpose God set for me.", bg: "fortsantiago.jpg", portrait: "rizal.png", next: 73 },
  { speaker: "Spanish Guard", text: "Face the wall, traitor. Die with your back to Spain, as all cowards do.", bg: "bagumbayan.jpg", portrait: "spanishguard.png", next: 74 },
  { speaker: "Rizal", text: "I will not turn my back on anything I can face with honor. Fire when ready.", bg: "bagumbayan.jpg", portrait: "rizal.png", next: 75 },
  { speaker: "Narrator", text: "December 30, 1896. José Rizal turns to face his executioners at Bagumbayan Field. The volley rings across Manila. A nation holds its breath — then exhales in rage.", bg: "bagumbayan.jpg", choices: [
    { text: "Weep openly, defiantly — let them see what Spain has done to the Filipino soul.", next: 76 },
    { text: "Stand in absolute silence — memorizing every face of every executioner.", next: 77 },
    { text: "Shout his name into the crowd — let others take up the call.", next: 78 }
  ]},
  { speaker: "Narrator", text: "A soldier raises his rifle toward you. A Filipino woman pulls you into the crowd. You live — scarred.", bg: "bagumbayan2.jpg", next: 79 },
  { speaker: "Narrator", text: "The Spanish officer notes your stillness. Your silence unnerves him far more than tears.", bg: "bagumbayan.jpg", next: 79 },
  { speaker: "Narrator", text: "Fifty voices join yours. Three are arrested. The name RIZAL echoes across the field.", bg: "bagumbayan2.jpg", next: 79 },
  { speaker: "Bonifacio", text: "They have murdered our greatest voice. Spain leaves us no choice but the sword. Rizal's death is the revolution's final birth cry.", bg: "bagumbayan.jpg", portrait: "bonifacio.jpg", choices: [
    { text: "Announce it in every barrio. His death is our single greatest recruitment cry.", next: 80 },
    { text: "Make him a martyr of faith — light candles, say his name in church after mass.", next: 81 },
    { text: "His death proves that diplomacy with Spain is impossible. We ask for nothing more.", next: 82 }
  ]},
  { speaker: "Narrator", text: "Thousands join overnight. The revolution swells beyond anyone's ability to contain.", bg: "bagumbayan2.jpg", next: 83 },
  { speaker: "Narrator", text: "The Catholic faithful, long silent, begin to stir. The friars begin to lose their hold.", bg: "bagumbayan.jpg", next: 83 },
  { speaker: "Narrator", text: "The revolutionaries grow grim and utterly resolute. No surrender will ever be considered.", bg: "bagumbayan2.jpg", next: 83 },
  { speaker: "Gregoria", text: "They can kill the man. But Rizal's words are already in ten thousand Filipino hearts. You cannot execute an idea.", bg: "bagumbayan.jpg", portrait: "gregoria.jpg", next: 84 },
  { speaker: "Narrator", text: "Chapter 5 End — Dawn at Bagumbayan.", bg: "bagumbayan.jpg", next: 85 },

  // ==================== CHAPTER 6 ====================
  { speaker: "Narrator", text: "March 1897. The Katipunan has become a republic-in-arms. But who leads it? The Magdalo of Cavite and the Magdiwang of Tondo cannot agree. At Tejeros, a convention is called to unify — and it ends in fracture.", bg: "tejeros.jpg", next: 86 },
  { speaker: "Daniel Tirona", text: "I nominate Emilio Aguinaldo for President of the Philippine Republic. He has demonstrated military genius and commands the complete loyalty of Cavite.", bg: "tejeros.jpg", portrait: "daniel.png", next: 87 },
  { speaker: "Bonifacio", text: "I founded this Katipunan with my own blood! My people — the poor of Tondo, the farmers, the fishermen — they are the revolution! Their voice must be heard here!", bg: "tejeros.jpg", portrait: "bonifacio.jpg", next: 88 },
  { speaker: "Aguinaldo", text: "Let the delegates vote freely. I will accept whatever the people of this revolution decide.", bg: "tejeros.jpg", portrait: "aguinaldo.jpg", choices: [
    { text: "Vote for Bonifacio — the Supremo, the father of the revolution, deserves his seat.", next: 89 },
    { text: "Vote for Aguinaldo — military strength is what the revolution urgently needs now.", next: 90 },
    { text: "Abstain — this vote is a wound the revolution cannot afford to suffer.", next: 91 }
  ]},
  { speaker: "Narrator", text: "Your vote is counted, but he loses. Aguinaldo's men will remember your loyalty to Bonifacio.", bg: "tejeros.jpg", next: 92 },
  { speaker: "Narrator", text: "You vote with the majority. But Bonifacio's eyes find yours across the crowded room.", bg: "tejeros.jpg", next: 92 },
  { speaker: "Narrator", text: "Others note your silence. You become neither enemy nor ally to either side.", bg: "tejeros.jpg", next: 92 },
  { speaker: "Daniel Tirona", text: "Bonifacio is nominated for Director of Interior — but I object. He lacks the legal training and the refinement required for such a distinguished post.", bg: "tejeros.jpg", portrait: "daniel.png", next: 93 },
  { speaker: "Bonifacio", text: "You dare insult me before my brothers?! I am the Supremo! No ilustrado who has never bled will dismiss me like a household servant!", bg: "tejeros.jpg", portrait: "bonifacio.jpg", next: 94 },
  { speaker: "Narrator", text: "Bonifacio tears the election results to pieces. He storms out with his Magdiwang supporters. The revolution has delivered its first wound to itself.", bg: "tejeros.jpg", choices: [
    { text: "Follow him out. Your loyalty was always to the Supremo.", next: 95 },
    { text: "Stay and attempt to mediate before this fracture becomes permanent.", next: 96 },
    { text: "Stay — but report everything to Bonifacio later. Watch Aguinaldo's next move.", next: 97 }
  ]},
  { speaker: "Narrator", text: "You walk beside him into the dark. He grips your arm — grateful, haunted, already wondering what comes next.", bg: "tejeros.jpg", next: 98 },
  { speaker: "Narrator", text: "Neither side trusts you fully now. But your effort delays the worst outcome by precious days.", bg: "tejeros.jpg", next: 98 },
  { speaker: "Narrator", text: "You become a double observer. The truth you gather will matter greatly to history.", bg: "tejeros.jpg", next: 98 },
  { speaker: "Gregoria", text: "They used the revolution to remove its own father. History will remember this — and it will not be kind to those who held the knife.", bg: "tejeros.jpg", portrait: "gregoria.jpg", next: 99 },
  { speaker: "Narrator", text: "Chapter 6 End — Betrayal at Tejeros.", bg: "tejeros.jpg", next: 100 },

  // ==================== CHAPTER 7 ====================
  { speaker: "Narrator", text: "May 1897. After Tejeros, Bonifacio established a rival government at Naic. Aguinaldo's generals declared him a traitor. He was captured, tried in a mockery of justice, and sentenced to death.", bg: "mountbuntis.jpg", next: 101 },
  { speaker: "General Mariano Noriel", text: "The Supremo is to be executed for treason and sedition against the Philippine Republic. The sentence is signed by the President himself.", bg: "mountbuntis.jpg", portrait: "noriel.png", next: 102 },
  { speaker: "Bonifacio", text: "I did not betray the revolution. I am the revolution. You are executing the man who gave you the very fire you now use to burn him with.", bg: "mountbuntis2.jpg", portrait: "bonifacio.jpg", next: 103 },
  { speaker: "Narrator", text: "You have access to Aguinaldo. This is your final chance to intervene.", bg: "mountbuntis2.jpg", choices: [
    { text: "General — spare him. Exile him to Hong Kong if you must, but do not execute him.", next: 104 },
    { text: "At least let Gregoria say goodbye. Grant him that one human mercy.", next: 105 },
    { text: "Say nothing. The brutal politics of war leave no room for sentiment.", next: 106 }
  ]},
  { speaker: "Narrator", text: "Aguinaldo pauses. Then quietly: The republic cannot survive two heads. Bonifacio is not spared.", bg: "mountbuntis2.jpg", next: 107 },
  { speaker: "Narrator", text: "A brief farewell is allowed. Gregoria's goodbye becomes the most heartrending moment of the entire revolution.", bg: "mountbuntis3.jpg", next: 107 },
  { speaker: "Narrator", text: "You stay silent. The guilt becomes a stone you will carry for the rest of your days.", bg: "mountbuntis.jpg", next: 107 },
  { speaker: "Gregoria", text: "Andres... they cannot take what you gave the Philippines. Not with all the rifles in the world. Not ever.", bg: "mountbuntis3.jpg", portrait: "gregoria.jpg", next: 108 },
  { speaker: "Bonifacio", text: "Gregoria... tell the barrios... that I loved them. That every torn cédula... every drop of blood... was worth it.", bg: "mountbuntis3.jpg", portrait: "bonifacio.jpg", next: 109 },
  { speaker: "Narrator", text: "May 10, 1897. Andrés and Procopio Bonifacio are executed on the slopes of Mount Buntis, Maragondon. Gregoria de Jesús is left a widow by the very revolution her husband created.", bg: "mountbuntis.jpg", choices: [
    { text: "Bury your grief and serve the republic. The revolution must continue regardless.", next: 110 },
    { text: "Write down everything you witnessed. History must know the unvarnished truth.", next: 111 },
    { text: "Leave Aguinaldo's service and fight independently — for the ideals Bonifacio died believing in.", next: 112 }
  ]},
  { speaker: "Narrator", text: "You carry on. The people need leadership even when the leaders prove flawed.", bg: "mountbuntis2.jpg", next: 113 },
  { speaker: "Narrator", text: "Your account survives the war. Historians a century later will cite your testimony.", bg: "mountbuntis.jpg", next: 113 },
  { speaker: "Narrator", text: "You become a beloved guerrilla commander, fighting for the people Bonifacio loved most.", bg: "mountbuntis3.jpg", next: 113 },
  { speaker: "Aguinaldo", text: "History will judge me. But a divided revolution is a dead revolution. I chose the republic over the man. May God forgive me if I am wrong.", bg: "mountbuntis.jpg", portrait: "aguinaldo.jpg", next: 114 },
  { speaker: "Narrator", text: "Chapter 7 End — The Sacrifice of the Supremo.", bg: "mountbuntis.jpg", next: 115 },

  // ==================== CHAPTER 8 ====================
  { speaker: "Narrator", text: "Late 1897. The revolution has stalled. Spain appoints new Governor-General Primo de Rivera, who offers amnesty and money. Aguinaldo's army is exhausted, starving, and dangerously low on ammunition. Negotiations begin at Biak-na-Bato in Bulacan.", bg: "biaknabato.jpg", next: 116 },
  { speaker: "Pedro Paterno", text: "Governor-General de Rivera offers 800,000 pesos, full amnesty for all fighters, and a promise of political reforms. General Aguinaldo — this is the best terms we can hope for. For now.", bg: "biaknabato.jpg", portrait: "paterno.png", next: 117 },
  { speaker: "Aguinaldo", text: "Spain has promised reforms before and kept none of them. Yet my men are starving, the sick have no medicine, and our ammunition is nearly exhausted.", bg: "biaknabato2.jpg", portrait: "aguinaldo.jpg", choices: [
    { text: "Accept it — use the money to buy arms abroad. Return ten times stronger.", next: 118 },
    { text: "Reject it. Spain only negotiates when it fears us. Press the advantage now.", next: 119 },
    { text: "Accept the exile — but never accept that the revolution is over.", next: 120 }
  ]},
  { speaker: "Narrator", text: "Aguinaldo nods slowly. This validates the plan already forming in his mind.", bg: "biaknabato.jpg", next: 121 },
  { speaker: "Narrator", text: "Your fire impresses the generals — but the soldiers are truly desperate.", bg: "biaknabato2.jpg", next: 121 },
  { speaker: "Narrator", text: "Aguinaldo looks at you with something that might be respect. Exactly what I needed to hear.", bg: "biaknabato.jpg", next: 121 },
  { speaker: "Luna", text: "Spain thinks it has bought peace. It has bought time — and we will use every single hour of it.", bg: "biaknabato2.jpg", portrait: "luna.png", next: 122 },
  { speaker: "Narrator", text: "Paterno asks you to publicly endorse the pact to keep the soldiers from mutinying:", bg: "biaknabato.jpg", choices: [
    { text: "Endorse it publicly — morale must hold, and men need hope to survive exile.", next: 123 },
    { text: "Refuse publicly. You will not tell soldiers their cause has been surrendered.", next: 124 },
    { text: "Endorse it publicly — but whisper to every man that the revolution is only sleeping.", next: 125 }
  ]},
  { speaker: "Narrator", text: "The soldiers accept exile with less despair. Your words hold the army together.", bg: "biaknabato.jpg", next: 126 },
  { speaker: "Narrator", text: "Two hundred soldiers refuse to lay down arms and fight on as guerrillas in the mountains.", bg: "biaknabato2.jpg", next: 126 },
  { speaker: "Narrator", text: "The soldiers hear both messages. They wait, sharpening their bolos in the dark.", bg: "biaknabato.jpg", next: 126 },
  { speaker: "Aguinaldo", text: "We go to Hong Kong. We accept their silver. But this is not the end. Not while Spain still hasn't honored a single promise made to this people.", bg: "biaknabato2.jpg", portrait: "aguinaldo.jpg", next: 127 },
  { speaker: "Narrator", text: "Chapter 8 End — The Compromise of Biak-na-Bato.", bg: "biaknabato.jpg", next: 128 },

  // ==================== CHAPTER 9 ====================
  { speaker: "Narrator", text: "April 1898. The United States declares war on Spain over Cuba. Commodore George Dewey's Asiatic Squadron sits in Hong Kong — and his eyes turn toward Manila Bay and the Spanish fleet anchored there.", bg: "hongkong.jpg", next: 129 },
  { speaker: "George Dewey", text: "General Aguinaldo — the United States and the Philippines share a common enemy. Help us defeat Spain, and the Philippines can govern itself freely. America has no colonial ambitions here.", bg: "hongkong.jpg", portrait: "dewey.png", next: 130 },
  { speaker: "Aguinaldo", text: "And after Spain falls — what exactly happens then? Does America sail home? Or does it remain in our waters?", bg: "hongkong.jpg", portrait: "aguinaldo.jpg", next: 131 },
  { speaker: "George Dewey", text: "America fights for freedom, General. Just as you do. We are allies in this common struggle against tyranny.", bg: "hongkong.jpg", portrait: "dewey.png", choices: [
    { text: "Use them for their firepower — but trust nothing they say until their ships sail away empty.", next: 132 },
    { text: "They are the most powerful nation on earth. With them beside us, Spain falls by summer.", next: 133 },
    { text: "Get their commitment in writing. Demand formal recognition of Philippine independence now.", next: 134 }
  ]},
  { speaker: "Narrator", text: "Aguinaldo files your words away carefully. He will remember this counsel — though perhaps too late.", bg: "hongkong.jpg", next: 135 },
  { speaker: "Narrator", text: "Pragmatic — but the true price of this alliance may be higher than anyone can yet imagine.", bg: "hongkong.jpg", next: 135 },
  { speaker: "Narrator", text: "Dewey evades every direct question. His evasion tells you more than any answer could.", bg: "hongkong.jpg", next: 135 },
  { speaker: "Narrator", text: "May 1, 1898. Dewey's fleet enters Manila Bay before dawn. By noon, the entire Spanish Asiatic Squadron is destroyed. Spain's naval power in Asia ends in a single morning of cannon fire.", bg: "manilabay.jpg", next: 136 },
  { speaker: "Mabini", text: "General Aguinaldo — the Americans did not sail ten thousand miles for liberty. Empires never travel that far without expecting a return on the voyage.", bg: "manilabay.jpg", portrait: "mabini.png", choices: [
    { text: "Declare independence from ALL foreign powers — Spain, America, every empire without exception.", next: 137 },
    { text: "Thank America for their assistance in the preamble. Keep the language friendly and open.", next: 138 },
    { text: "Include a clause appealing to all free nations to formally recognize our republic.", next: 139 }
  ]},
  { speaker: "Narrator", text: "The declaration is unambiguous. America's consul reads it with cold, calculating eyes.", bg: "manilabay.jpg", next: 140 },
  { speaker: "Narrator", text: "The declaration is softer. Mabini frowns deeply. America will exploit every soft word written here.", bg: "manilabay.jpg", next: 140 },
  { speaker: "Narrator", text: "The appeal goes out. No great power answers — but the moral ground is permanently established.", bg: "manilabay.jpg", next: 140 },
  { speaker: "Aguinaldo", text: "June 12, 1898 — today the Philippine Republic is proclaimed. Today we stand as a free and sovereign nation before the world.", bg: "manilabay.jpg", portrait: "aguinaldo.jpg", next: 141 },
  { speaker: "Mabini", text: "Not yet, General. Not yet. The battle for true independence has only just begun.", bg: "manilabay.jpg", portrait: "mabini.png", next: 142 },
  { speaker: "Narrator", text: "Chapter 9 End — Strange New Allies.", bg: "manilabay.jpg", next: 143 },

  // ==================== CHAPTER 10 ====================
  { speaker: "Narrator", text: "June 12, 1898. The balcony of Aguinaldo's mansion in Kawit, Cavite. The Philippine flag — sun, stars, and stripes of red, white, and blue — is raised for the first time before the people. Julián Felipe's march plays. Tears fall freely.", bg: "kawit1.jpg", next: 144 },
  { speaker: "Aguinaldo", text: "People of the Philippines — today we declare our independence, our freedom, our identity as a nation. We are no longer subjects of Spain. We are Filipinos. And we are free!", bg: "kawit1.jpg", portrait: "aguinaldo.jpg", next: 145 },
  { speaker: "Mabini", text: "The flag flies — but America has not recognized us. Spain surrenders to the United States, not to us. We must be clear-eyed about what this day means — and what it does not yet secure.", bg: "kawit1.jpg", portrait: "mabini.png", next: 146 },
  { speaker: "Luna", text: "Let them underestimate us. The Filipino soldier who survived Spain will not kneel to any other empire.", bg: "kawit1.jpg", portrait: "luna.png", choices: [
    { text: "This day — June 12 — will live in every Filipino heart forever. We are finally home.", next: 147 },
    { text: "We have won a battle — not the war. Sharpen your bolos. The real fight may be ahead.", next: 148 },
    { text: "Remember those not here — Rizal, Bonifacio, every nameless Katipunero. This day is theirs.", next: 149 }
  ]},
  { speaker: "Narrator", text: "The crowd roars. Children are lifted to shoulders. Old men weep without shame.", bg: "kawit1.jpg", next: 150 },
  { speaker: "Narrator", text: "Silence — then slowly, understanding nods. The crowd disperses with quiet, iron resolve.", bg: "kawit1.jpg", next: 150 },
  { speaker: "Narrator", text: "A profound silence. Then weeping. Then the anthem, sung louder than it has ever been sung before.", bg: "kawit1.jpg", next: 150 },
  { speaker: "Gregoria", text: "Andres... they are singing. Can you hear them from wherever you are? They are singing the anthem you died to make possible.", bg: "kawit1.jpg", portrait: "gregoria.jpg", next: 151 },
  { speaker: "Narrator", text: "America sends a note: they wish to 'administer' the Philippines after Spain's surrender. How do you advise Aguinaldo?", bg: "kawit1.jpg", choices: [
    { text: "Reject it immediately and mobilize the army. We did not bleed to trade one master for another.", next: 152 },
    { text: "Negotiate — buy time, build the republic, grow our army before any confrontation comes.", next: 153 },
    { text: "Appeal to the world — to every nation that believes in sovereignty and self-rule.", next: 154 }
  ]},
  { speaker: "Narrator", text: "Aguinaldo takes a hard line. The Philippine-American War becomes inevitable — but fought on Filipino terms.", bg: "kawit2.jpg", next: 155 },
  { speaker: "Narrator", text: "Time is bought. But America uses every day of it to reinforce its own position in the islands.", bg: "kawit2.jpg", next: 155 },
  { speaker: "Narrator", text: "No great power answers — but the moral record is established for every generation that follows.", bg: "kawit2.jpg", next: 155 },
  { speaker: "Mabini", text: "Let the record show — we asked for nothing but what every people deserves. Recognition. Sovereignty. The right to govern ourselves on our own land.", bg: "kawit2.jpg", portrait: "mabini.png", next: 156 },
  { speaker: "Aguinaldo", text: "They may take our land again. They may silence our flag again. But they cannot unmake this day. June 12, 1898 — the Philippines was free.", bg: "kawit2.jpg", portrait: "aguinaldo.jpg", next: 157 },
  { speaker: "Narrator", text: "The revolution born in whispers in a Tondo hut had roared across three years of blood, betrayal, brilliance, and sacrifice. Spain was defeated. A republic was declared. But the final price of Kalayaan was still to be paid — and the next chapter of the Philippines' story had already begun.", bg: "kawit2.jpg", next: 158 },
  { speaker: "Luna", text: "History is not made by those who wait. It is made by those who dare — and those who never forget.", bg: "kawit.jpg", portrait: "luna.png", next: 159 },
  { speaker: "Narrator", text: "— MABUHAY ANG PILIPINAS —", bg: "kawit.jpg", next: null }
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
    portrait.onerror = () => { portrait.style.display = "none"; };
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

  // === AUTO-UNLOCK NEXT CHAPTER ===
  if (chapterEndMap[currentIndex] !== undefined) {
    const chapter = chapters.find(c => c.id === chapterEndMap[currentIndex]);
    if (chapter) chapter.unlocked = true;
  }

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

  if (!dialogueBox.classList.contains("hidden")) {
    dialogueBox.classList.add("hidden");
    mainMenu.classList.remove("hidden");
    currentIndex = 0;
    historyStack = [];
  } else {
    if (confirm("Close the game?")) {
      location.reload();
    }
  }
}

// === EVENT LISTENERS ===
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnNext").addEventListener("click", nextLine);
  document.getElementById("btnBack").addEventListener("click", prevLine);

  document.querySelectorAll("[data-action='closeChapters']").forEach(btn => {
    btn.addEventListener("click", () => hideOverlay(overlays.chapter));
  });
  document.querySelectorAll("[data-action='closeCredits']").forEach(btn => {
    btn.addEventListener("click", () => hideOverlay(overlays.credits));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!overlays.chapter.classList.contains("hidden")) {
        hideOverlay(overlays.chapter);
      } else if (!overlays.credits.classList.contains("hidden")) {
        hideOverlay(overlays.credits);
      } else if (!document.getElementById("dialogueBox").classList.contains("hidden")) {
        exitGame();
      }
    }

    if (!document.getElementById("dialogueBox").classList.contains("hidden")) {
      if ((e.key === " " || e.key === "Enter") && document.getElementById("choices").hidden) {
        e.preventDefault();
        nextLine();
      }
    }
  });
});

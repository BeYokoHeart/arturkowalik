 console.log("I-CHING APP READY");


// =========================
// STATE
// =========================

const state = {
  lines: [], // {value:6/7/8/9, binary:0/1, changing:boolean}
  primaryHexagram: null,
  secondaryHexagram: null
};

let isCasting = false;
let castToken = 0;

// =========================
// DOM ELEMENTS
// =========================

const castButton = document.getElementById("castButton");
const resetButton = document.getElementById("resetButton");
const coinArea = document.getElementById("coinArea");
const hexagramArea = document.getElementById("hexagramArea");
const resultArea = document.getElementById("resultArea");
const secondaryHexagramArea = document.getElementById("secondaryHexagramArea");


// =========================
// RESET BUTTON
// =========================

function resetReading() {
  state.lines = [];
  state.primaryHexagram = null;
  state.secondaryHexagram = null;

  coinArea.innerHTML = "";
  hexagramArea.innerHTML = "";
  resultArea.innerHTML = "";

  if (secondaryHexagramArea) {
    secondaryHexagramArea.innerHTML = "";
  }
}


// =========================
// COIN SYSTEM (CLASSIC I-CHING)
// =========================

// 50/50 coin
function tossCoin() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

// heads = 3, tails = 2
function tossLine() {
  const coins = rollCoins();

  let sum = 0;

  coins.forEach(c => {
    sum += c.value;
  });

  return {
    value: sum,
    changing: sum === 6 || sum === 9,
    binary: (sum === 7 || sum === 9) ? 1 : 0,
    coins
  };
}

function rollCoins() {
  const coins = [];

  for (let i = 0; i < 3; i++) {
    const result = tossCoin();

    coins.push({
      result,
      value: result === "heads" ? 3 : 2
    });
  }

  return coins;
}

// =========================
// HEXAGRAM LOGIC
// =========================

// build 6 lines (bottom → top)
function buildHexagram() {
  const lines = [];

  for (let i = 0; i < 6; i++) {
    lines.push(tossLine());
  }

  return lines;
}

// convert to binary string
function toBinary(lines) {
  return lines.map(l => l.binary).join("");
}

// get hexagram from DB
function getHexagram(binary) {
  return HEXAGRAMS[binary] || null;
}

// secondary (after transformation)
function buildSecondary(lines) {
  return lines.map(l => {
    if (l.value === 6) return 1; // yin → yang
    if (l.value === 9) return 0; // yang → yin
    return l.binary;
  }).join("");
}

// =========================
// RENDERING
// =========================

function renderHexagram(lines) {
  if (!hexagramArea) return;

  hexagramArea.innerHTML = "";

  // reverse = bottom → top visual order
  lines.slice().reverse().forEach(line => {
    const div = document.createElement("div");

    div.className = "line " + (line.binary ? "yang" : "yin");

    if (line.changing) {
      div.classList.add("changing");
    }

    hexagramArea.appendChild(div);
  });
}



// =========================
// MAIN RITUAL FLOW
// =========================

async function cast() {
  if (isCasting) return;

  isCasting = true;
  const myToken = ++castToken; // 👈 klucz: identyfikator tej sesji

  castButton.disabled = true;
  castButton.classList.add("disabled");
  castButton.style.pointerEvents = "none";

  try {
    // RESET STANU
    state.lines = [];

    hexagramArea.innerHTML = "";
    resultArea.innerHTML = "";
    if (secondaryHexagramArea) secondaryHexagramArea.innerHTML = "";

    console.log("CAST START");

    // RENDER 6 LINES
    for (let i = 0; i < 6; i++) {
      const line = tossLine();
      state.lines.push(line);

      renderCoins(line.coins);

      await new Promise(r => setTimeout(r, 700));

      renderHexagram(state.lines);

      await new Promise(r => setTimeout(r, 400));

      // 👇 jeśli użytkownik kliknął reset / nowy cast
      if (myToken !== castToken) return;
    }

    // FINAL CALCULATIONS
    const primaryBinary = toBinary(state.lines);
    const secondaryBinary = buildSecondary(state.lines);

    const changingLines = getChangingLines(state.lines);

    state.primaryHexagram = getHexagram(primaryBinary);
    state.secondaryHexagram = getHexagram(secondaryBinary);

    renderResults(
      state.primaryHexagram,
      state.secondaryHexagram,
      changingLines
    );

    // 🔥 FIX: natychmiastowy render bez requestAnimationFrame
    if (changingLines.length) {
      setTimeout(() => {
        if (myToken !== castToken) return;
        renderSecondaryHexagram(state.lines);
      }, 0);
    }

    console.log("PRIMARY:", primaryBinary);

  } finally {
    if (myToken === castToken) {
      isCasting = false;
      castButton.disabled = false;
      castButton.classList.remove("disabled");
      castButton.style.pointerEvents = "auto";
    }
  }
}

/*
async function cast() {
  if (isCasting) return;

  isCasting = true;

  castButton.disabled = true; // 👈 KLUCZOWE: natychmiast blokujesz UI
  castButton.classList.add("disabled"); // opcjonalnie
  castButton.style.pointerEvents = "none";

  try {
    state.lines = [];

    hexagramArea.innerHTML = "";
    resultArea.innerHTML = "";

    console.log("CAST START");

    for (let i = 0; i < 6; i++) {
      const line = tossLine();
      state.lines.push(line);

      renderCoins(line.coins);

      await new Promise(r => setTimeout(r, 700));

      renderHexagram(state.lines);

      await new Promise(r => setTimeout(r, 400));
    }

    const primaryBinary = toBinary(state.lines);
    const secondaryBinary = buildSecondary(state.lines);

    const changingLines = getChangingLines(state.lines);

    state.primaryHexagram = getHexagram(primaryBinary);
    state.secondaryHexagram = getHexagram(secondaryBinary);

    renderResults(
      state.primaryHexagram,
      state.secondaryHexagram,
      changingLines
    );

   if (changingLines.length) {
      requestAnimationFrame(() => {
        renderSecondaryHexagram(state.lines);
      });
    }

    console.log("PRIMARY:", primaryBinary);

  } finally {
    // 🔥 zawsze się wykona (nawet jeśli coś padnie)
    isCasting = false;
    castButton.disabled = false;
    castButton.classList.remove("disabled");
    castButton.style.pointerEvents = "auto";
  }
}

*/
/*
async function cast() {
  state.lines = [];



  hexagramArea.innerHTML = "";
  resultArea.innerHTML = "";

  console.log("CAST START");

  for (let i = 0; i < 6; i++) {

    // 1. roll coins
    const line = tossLine();
    state.lines.push(line);

    // 2. show coins result
    renderCoins(line.coins);

    await new Promise(r => setTimeout(r, 700));

    // 3. render hexagram step-by-step
    renderHexagram(state.lines);

    await new Promise(r => setTimeout(r, 400));
  }

  const primaryBinary = toBinary(state.lines);
  const secondaryBinary = buildSecondary(state.lines);

  const changingLines = getChangingLines(state.lines);

  state.primaryHexagram = getHexagram(primaryBinary);
  state.secondaryHexagram = getHexagram(secondaryBinary);

  renderResults(
    state.primaryHexagram,
    state.secondaryHexagram,
    changingLines
  );

  if (changingLines.length) {

    await new Promise(r => setTimeout(r, 1200));

    renderSecondaryHexagram(state.lines);
  }

  console.log("PRIMARY:", primaryBinary);
}
*/
// =========================
// EVENTS
// =========================

if (castButton) {
  castButton.addEventListener("click", () => {
    cast();
  });
}

function renderCoins(coinsData = null) {
  if (!coinArea) return;

  coinArea.innerHTML = "";

  // jeśli brak danych → tylko wizualny placeholder
  if (!coinsData) {
    for (let i = 0; i < 3; i++) {
      const coin = document.createElement("div");
      coin.className = "coin";
      coin.textContent = "?";
      coinArea.appendChild(coin);
    }
    return;
  }

  coinsData.forEach(c => {
    const coin = document.createElement("div");
    coin.className = "coin";

    coin.textContent = c.result === "heads" ? "H" : "T";

    const label = document.createElement("div");
    label.className = "coin-label";
    label.textContent = c.result;

    coin.appendChild(label);
    coinArea.appendChild(coin);
  });
}

function buildMeaningHTML(meanings) {
  const m = meanings;

  if (!m) return "";

  const meaningLabels = {
    general: "General",
    love: "Love",
    career: "Career",
    finance: "Finance",
    health: "Health",
    energy_in_home: "Home Energy",
    spirituality: "Spirituality",
    relationships: "Relationships",
    emotions: "Emotions",
    obstacles: "Obstacles",
    advice: "Advice",
    transformation: "Transformation"
  };

  return Object.entries(meaningLabels)
    .filter(([key]) => m[key] && typeof m[key] === "string" && m[key].trim() !== "")
    .map(([key, label]) => {
      return `<div><b>${label}</b><br>${m[key]}</div>`;
    })
    .join("");
}

function renderResults(primary, secondary, changingLines) {

  if (!resultArea) return;

  const primaryMeanings =
    buildMeaningHTML(primary?.meanings);

  const secondaryMeanings =
    buildMeaningHTML(secondary?.meanings);

  resultArea.innerHTML = `

    <div class="results-grid">

      <!-- PRIMARY -->

      <div class="result-card">

        <div class="result primary-result">

          <div class="result-label">
            PRIMARY HEXAGRAM
          </div>

          <div class="symbol">
            ${primary.symbol}
          </div>

          <div class="name">
            ${primary.id}. ${primary.name}
          </div>

          <div class="english">
            ${primary.english}
          </div>

          <div class="keywords">
            ${primary.keywords.join(" • ")}
          </div>

        </div>

        ${
          primaryMeanings
          ? `
            <div class="meanings">

              <div class="meaning-title-main">
                Interpretation
              </div>

              <div class="meaning-grid">
                ${primaryMeanings}
              </div>

            </div>
          `
          : ""
        }

      </div>

      

      ${
        changingLines.length
          ? `
            <div class="change-center">

              <div class="changing-lines">

                <div class="changing-title">
                  CHANGING LINES
                </div>

                <div class="changing-values">
                  ${changingLines.join(" & ")}
                </div>

              </div>

            </div>
          `
          : ""
      }



      <!-- SECONDARY -->

      <div class="result-card">

        ${
          secondary && primary.id !== secondary.id
          ? `
            <div class="result secondary-result">

              <div class="result-label">
                TRANSFORMED HEXAGRAM
              </div>

              <div class="symbol">
                ${secondary.symbol}
              </div>

              <div class="name">
                ${secondary.id}. ${secondary.name}
              </div>

              <div class="english">
                ${secondary.english}
              </div>

              <div class="keywords">
                ${secondary.keywords.join(" • ")}
              </div>

            </div>

            ${
              secondaryMeanings
              ? `
                <div class="meanings">

                  <div class="meaning-title-main">
                    Transformed Interpretation
                  </div>

                  <div class="meaning-grid">
                    ${secondaryMeanings}
                  </div>

                </div>
              `
              : ""
            }
          `
          : ""
        }

      </div>

    </div>

    

  `;
}

/*
function renderResults(primary, secondary, changingLines) {
  if (!resultArea) return;

  const primaryMeanings = buildMeaningHTML(primary?.meanings);
  const secondaryMeanings = buildMeaningHTML(secondary?.meanings);

  resultArea.innerHTML = `
  
    <div class="result primary-result">
      <div class="result-label">PRIMARY HEXAGRAM</div>

      <div class="symbol">${primary.symbol}</div>
      <div class="name">${primary.id}. ${primary.name}</div>
      <div class="english">${primary.english}</div>

      <div class="keywords">
        ${primary.keywords.join(" • ")}
      </div>
    </div>

    ${
      primaryMeanings
        ? `
      <div class="meanings">
        <div class="meaning-title-main">Interpretation</div>
        <div class="meaning-grid">
          ${primaryMeanings}
        </div>
      </div>
    `
        : ""
    }

    ${
      changingLines.length
        ? `
      <div class="changing-lines">
        Changing lines: ${changingLines.join(", ")}
      </div>
    `
        : ""
    }

    ${
      secondary && primary.id !== secondary.id
        ? `
      <div class="transformation-divider">
        changing lines →
      </div>

      <div class="result secondary-result">

        <div class="result-label">TRANSFORMED HEXAGRAM</div>

        <div class="symbol">${secondary.symbol}</div>
        <div class="name">${secondary.id}. ${secondary.name}</div>
        <div class="english">${secondary.english}</div>

        <div class="keywords">
          ${secondary.keywords.join(" • ")}
        </div>
      </div>
    `
        : ""
    }

    ${
      secondaryMeanings
        ? `
      <div class="meanings secondary-meanings">
        <div class="meaning-title-main">Transformed Interpretation</div>
        <div class="meaning-grid">
          ${secondaryMeanings}
        </div>
      </div>
    `
        : ""
    }

  `;
}
*/
/*
function renderResults(primary, secondary, changingLines) {

  if (!resultArea) return;

  resultArea.innerHTML = `
  
    <div class="result primary-result">
      <div class="result-label">
        PRIMARY HEXAGRAM
      </div>

      <div class="symbol">${primary.symbol}</div>

      <div class="name">
        ${primary.id}. ${primary.name}
      </div>

      <div class="english">
        ${primary.english}
      </div>

      <div class="keywords">
        ${primary.keywords.join(" • ")}
      </div>
    </div>

    ${
      changingLines.length
      ? `
        <div class="changing-lines">
          Changing lines:
          ${changingLines.join(", ")}
        </div>
      `
      : ""
    }

    ${
      secondary && primary.id !== secondary.id
      ? `
        <div class="transformation-divider">
          changing lines →
        </div>

        <div class="result secondary-result">

          <div class="result-label">
            TRANSFORMED HEXAGRAM
          </div>

          <div class="symbol">${secondary.symbol}</div>

          <div class="name">
            ${secondary.id}. ${secondary.name}
          </div>

          <div class="english">
            ${secondary.english}
          </div>

          <div class="keywords">
            ${secondary.keywords.join(" • ")}
          </div>

        </div>
      `
      : ""
    }

    ${
      primary?.meanings ? `
        <div class="meanings">

          <div class="meaning-title-main">Interpretation</div>

          <div class="meaning-grid">

            <div><b>General</b><br>${primary.meanings.general}</div>
            <div><b>Love</b><br>${primary.meanings.love}</div>
            <div><b>Career</b><br>${primary.meanings.career}</div>
            <div><b>Finance</b><br>${primary.meanings.finance}</div>
            <div><b>Health</b><br>${primary.meanings.health}</div>
            <div><b>Home Energy</b><br>${primary.meanings.energy_in_home}</div>
            <div><b>Spirituality</b><br>${primary.meanings.spirituality}</div>
            <div><b>Relationships</b><br>${primary.meanings.relationships}</div>
            <div><b>Emotions</b><br>${primary.meanings.emotions}</div>
            <div><b>Obstacles</b><br>${primary.meanings.obstacles}</div>
            <div><b>Advice</b><br>${primary.meanings.advice}</div>
            <div><b>Transformation</b><br>${primary.meanings.transformation}</div>

          </div>

        </div>
      `
      : ""
    }

  `;
}
*/
if (resetButton) {
  resetButton.addEventListener("click", resetReading);
}

// ===================
// CHANGING LINES
// ===================

function getChangingLines(lines) {

  const changing = [];

  lines.forEach((line, index) => {

    if (line.changing) {
      changing.push(index + 1);
    }

  });

  return changing;
}

function renderSecondaryHexagram(lines) {

  if (!secondaryHexagramArea) return;

  secondaryHexagramArea.innerHTML = "";

  const transformed = lines.map(line => {

    if (line.value === 6) {
      return {
        binary: 1,
        changing: false
      };
    }

    if (line.value === 9) {
      return {
        binary: 0,
        changing: false
      };
    }

    return {
      binary: line.binary,
      changing: false
    };
  });

  transformed
    .slice()
    .reverse()
    .forEach(line => {

      const div = document.createElement("div");

      div.className =
        "line " + (line.binary ? "yang" : "yin");

      secondaryHexagramArea.appendChild(div);
    });
}

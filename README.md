# Sommarledighet 2025 – Närvaro

**Enkelt webbformulär med kalender** där admin kan ange aktiviteter och föräldrar markera närvaro och tid.

## Installation

1. Klona eller packa upp mappen.
2. Skapa `.env` från `.env.example` och fyll i SMTP-inställningar.
3. Installera beroenden:
   ```bash
   npm install
   ```
4. Starta servern:
   ```bash
   npm start
   ```
5. Öppna webbläsare på `http://localhost:3000`.

## Struktur

- `index.html` – Frontend (HTML/CSS/JS).
- `server.js` – Express-server som skickar mejl.
- `.env.example` – Miljövariabler för SMTP.
- `package.json` – Projektmanifest.


# Daily Focus _(daily-focus)_

_Eine minimalistische Web-App zur täglichen Aufgabenfokussierung – Fullstack mit React & Spring Boot._

[![Frontend: Vercel](https://img.shields.io/badge/frontend-vercel-blue)](https://vercel.com)
[![Backend: Railway](https://img.shields.io/badge/backend-railway-green)](https://railway.app)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE.md)

**Daily Focus** ist eine Webanwendung zur Verwaltung und Visualisierung von Tagesaufgaben.  
Sie wurde von mir entwickelt, um meine Kenntnisse in der **Fullstack-Entwicklung mit Java (Spring Boot)** und **React** praxisnah zu vertiefen.

> 🔧 Das Backend ist aktuell **nicht aktiv** (aus Kostengründen) – der Fokus liegt auf Codequalität, Struktur und UI/UX.

## Live-Demo

Frontend erreichbar unter:  
👉 [https://daily-focus-two.vercel.app](https://daily-focus-two.vercel.app)

**Wichtiger Hinweis**  
Das Backend ist aktuell nicht aktiv gehostet, daher sind Login und Datenänderungen in der Live-Demo nicht funktionsfähig. 
Die Screenshots unten zeigen exemplarisch die Funktionalitäten.

**Hinweis**
> Dieses Projekt wurde im Rahmen meiner persönlichen Weiterentwicklung erstellt, um Fähigkeiten in Full-Stack-Entwicklung mit Java Spring Boot und React zu üben und zu festigen. Es ist nicht für die produktive Nutzung gedacht, sondern zeigt mein technisches Verständnis, Clean Code-Prinzipien und strukturierte API-Entwicklung.

## Screenshots

### Login & Registrierung
![Login Screenshot](/assets/screenshot-login.png)
![Registrierung Screenshot](/assets/screenshot-register.png)
### Aufgabenansicht
![Tagesansicht Screenshot](/assets/screenshot-taskList.png)

### Aufgaben anlegen
![Aufgaben anlegen](/assets/screenshot-newTask.png) 

### 7 Tage Ansicht
![Wochenansicht Screenshot](/assets/screenshot-7days.png)

---

## Inhaltsverzeichnis

- [Projektstruktur](#projektstruktur)
- [Kurzbeschreibung](#kurzbeschreibung)
- [Langbeschreibung](#langbeschreibung)
- [Installation](#installation)
- [Verwendung](#verwendung)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [API](#api)
- [Maintainer](#maintainer)
- [Mitwirken](#mitwirken)
- [Lizenz](#lizenz)

---

## 📁 Projektstruktur

📁 **root/**
- `frontend/` → React-App (Vercel Deployment)
- `backend/` → Spring Boot REST-API (Railway Deployment)
- `README.md` → Dieses Dokument

---

## Kurzbeschreibung

Aufgaben organisieren, verwalten und visualisieren. Login-basierte To-Do-App mit Aufgabenstatus, Fälligkeiten und Wochenansicht.

---

## Langbeschreibung

**Daily Focus** wurde entwickelt, um Nutzer:innen zu helfen, sich auf anstehende Aufgaben zu konzentrieren. Es bietet eine minimalistische UI kombiniert mit einem performanten REST-API-Backend. Aufgaben werden nach Benutzer gefiltert, und jeder User erhält ein geheimes Token (Secret) zur Authentifizierung.

---

## Installation

### Voraussetzungen

- **Backend**:
  - Java 17+
  - Maven

- **Frontend**:
  - Node.js (empfohlen: v18+)
  - npm oder yarn

### Setup

```bash
# Backend starten
cd backend
./mvnw spring-boot:run

# Frontend starten
cd frontend
npm install
npm start
```

> Hinweis: Ändere ggf. die API-URL im Frontend für lokale Entwicklung auf `http://localhost:8080`

---

## Verwendung

### Frontend

- Entwickelt mit React
- Kommunikation mit dem Backend über Fetch API
- Speicherung des Secret-Tokens im LocalStorage
- Gehostet über: [Vercel](https://vercel.com)

### Backend

- Spring Boot REST API
- Persistenz via Spring Data JPA (MySQL)
- Endpunkte erfordern Secret-Token im Header
- Gehostet über: [Railway](https://railway.app)

---

## API

### User

| Methode | Pfad             | Beschreibung          |
|--------|------------------|-----------------------|
| POST   | `/user/register` | Registrierung         |
| POST   | `/user/login`    | Login (liefert secret)|

### Aufgaben

| Methode | Pfad                   | Beschreibung              |
|---------|------------------------|---------------------------|
| GET     | `/task/all/today`      | Aufgaben für heute        |
| GET     | `/task/all/date`       | Aufgaben für ein Datum    |
| POST    | `/task`                | Aufgabe erstellen         |
| PUT     | `/task`                | Aufgabe bearbeiten        |
| PATCH   | `/task?id=ID`          | Status (done) toggeln     |
| DELETE  | `/task?id=ID`          | Aufgabe löschen           |

---
## Geplante Features

- weitere User APIs: Password ändern und Account löschen 
- Nutzung der Task-API PUT zur Bearbeitung einer Aufgabe
- Statistiken zur Aufgaben-Erledigung (z. B. Wochenübersicht)
- Multi-User-Support zur gemeinschaftlichen Bearbeitung von Aufgaben

---


## Maintainer

- [@LFB01](https://github.com/LFB01)

---

## Mitwirken

Pull Requests sind willkommen – bitte nutze Issues für Vorschläge oder Bugreports.

### Beitragsrichtlinien

- Code bitte mit gültigem Linter-Stil einreichen
- PR-Beschreibungen klar und strukturiert
- Freundlicher, hilfsbereiter Umgangston

---

## Lizenz

MIT License © 2025 [LFB01]

[SEE LICENSE IN LICENSE.md](./LICENSE)



# 📊 IoT Dashboard — Supervision de capteurs

## Description

Ce projet est une application fullstack permettant de **simuler, stocker, traiter et visualiser des données issues de capteurs IoT**.

L’objectif est de proposer un dashboard clair permettant :

* le suivi des mesures (température, humidité)
* la supervision des capteurs (état, batterie)
* la détection d’anomalies
* l’analyse de l’évolution des données dans le temps

Afin de permettre une démonstration immédiate des fonctionnalités (historique, filtres temporels, alertes), le projet inclut des scripts de génération de données simulées.

---

## Objectifs du projet

* Concevoir une API REST pour recevoir des données simulées
* Stocker les données dans une base MongoDB
* Structurer les données autour de capteurs et de mesures
* Traiter et exploiter les données reçues
* Afficher les informations via une interface React
* Mettre en place une logique d’alertes
* Permettre la simulation et le test des données (historique + cas critiques)

---

## Fonctionnalités (MVP)

* Réception de données simulées via API REST (générées par des scripts de seed)
* Stockage en base de données
* Dashboard avec cartes de statut (capteurs)
* Historique des mesures
* Filtres temporels (heure / jour / semaine / mois)
* Détection d’alertes (seuils)
* Génération de données historiques simulées
* Simulation de scénarios d’alertes

---

## Interface utilisateur (UX/UI)

L’application est conçue selon une approche **mobile first** afin de garantir une utilisation fluide sur tous les supports.

Elle s’articule autour de **quatre pages principales** :

* **Dashboard** : vue globale des données avec indicateurs clés, graphiques et alertes récentes
* **Historique des mesures** : analyse détaillée avec filtres temporels et tableau des données
* **Détail d’un capteur** : informations complètes d’un capteur (état, seuils, historique, alertes)
* **Alertes** : centralisation des anomalies détectées

### Organisation du Dashboard

Les données sont organisées **par zone (pièce)** afin de refléter un cas d’usage réaliste.

Dans le cadre de la démonstration, l’application simule une habitation composée de :

* Salon
* Cuisine
* Chambre

Chaque zone regroupe :

* Température
* Humidité
* Nombre d’alertes
* Un graphique d’évolution (affiché sur une journée par défaut)

### Navigation

* **Mobile** : navigation verticale avec menu burger
* **Desktop** : navigation latérale (sidebar)

L’accès au détail d’un capteur se fait via des interactions contextuelles (dashboard, tableaux, alertes).

---

## Stack technique

### Frontend

* React.js
* React Router
* SCSS

### Backend

* Node.js
* Express.js

### Base de données

* MongoDB

### Outils

* Git / GitHub
* Whimsical (Wireframes)
* Figma (Maquettes graphiques)
* Postman

---

## Architecture du projet

/backend

* controllers
* models
* routes
* services

/frontend

* components
* pages
* services

/scripts

* seedHistory.js → génération de données historiques (longue période)
* seedAlerts.js → simulation de dépassements de seuil

---

## Modèle de données

Chaque capteur est associé à un seul type de mesure (température ou humidité).

### Sensor (Capteur)

```json
{
  "id": "sensor-001",
  "name": "Capteur température salon",
  "type": "temperature",
  "location": "Salon",
  "battery": 87,
  "isActive": true,
  "alertThresholds": {
    "min": 18,
    "max": 28
  },
  "createdAt": "2026-05-01T10:00:00Z"
}
```

### Measurement (Mesure)

```json
{
  "id": "measure-001",
  "sensorId": "sensor-001",
  "value": 24.8,
  "unit": "°C",
  "timestamp": "2026-05-01T10:15:00Z"
}
```

---

## Installation

### 1. Cloner le projet

```bash
git clone git@github.com:Anthony-Hannoteaux/dashboard-iot-supervision-fullstack.git
cd dashboard-iot-supervision-fullstack
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Génération de données

Le projet inclut plusieurs scripts pour faciliter les tests et la démonstration.

Ces scripts permettent de rendre l’application immédiatement testable sans dépendre d’une génération de données en temps réel.

### Génération d’historique

Permet de précharger la base de données avec des données réalistes sur une longue période.

```bash
node scripts/seedHistory.js
```

### Simulation d’alertes

Permet d’injecter des valeurs anormales afin de tester le système d’alertes.

```bash
node scripts/seedAlerts.js
```

### Objectif

Ces scripts permettent de :

* tester immédiatement les filtres temporels
* visualiser un historique riche de données
* valider le comportement des alertes
* éviter toute dépendance au temps réel

---

## Evolution possibles

* Script de mélange de données normales et critiques (seedMixed.js)
* Temps réel avec WebSocket
* Intégration MQTT
* Connexion à un capteur réel
* Authentification utilisateur
* Gestion multi-capteurs

---

## Documentation

* [Cahier des charges](./docs/cahier-des-charges.md)
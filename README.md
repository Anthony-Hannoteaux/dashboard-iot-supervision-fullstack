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
* Stocker les données dans une base PostgreSQL
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
* Un graphique d’évolution (affiché sur une journée par défaut)

### Navigation

* **Mobile** : navigation verticale avec barre de navigation située en bas de page 
* **Desktop** : navigation latérale (sidebar)

L’accès au détail d’un capteur se fait via des interactions contextuelles (dashboard, tableaux, alertes).

---

## Stack technique

### Frontend

* React.js
* Vite
* React Router
* SCSS
* Recharts

### Backend

* Node.js
* Express.js
* Vitest

### Base de données

* PostgreSQL

### Tests

* Vitest
* REST Client

### Déploiement

* Vercel pour le frontend
* Render pour l’API
* Render Postgres pour la base de données

### Outils

* Git / GitHub
* Whimsical (Wireframes)
* Figma (Maquettes graphiques)
* Docker
* Docker Compose

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

* script de seed SQL à venir

---

## Modèle de données (Simplifié)

Chaque capteur est associé à un seul type de mesure (température ou humidité).

### Location (Localisation)

```json
{
  "id": 1,
  "name": "Salon"
}
```

### Sensor (Capteur)

```json
{
  "id": 1,
  "name": "Capteur température salon",
  "type": "temperature",
  "battery": 87,
  "is_active": true,
  "minimum_threshold": 18,
  "maximum_threshold": 28,
  "createdAt": "2026-05-01T10:00:00Z",
  "location_id": 1
}
```

### Measure (Mesure)

```json
{
  "id": 1,
  "value": 24.8,
  "unit": "°C",
  "recorded_at": "2026-05-01T10:15:00Z",
  "sensor_id": 1
}
```

### Alert (Alerte)

```json
{
  "id": 1,
  "alert_type": "maximum_threshold",
  "urgency_degree": "warning",
  "message": "Température du salon supérieure au seuil maximal",
  "is_active": true,
  "threshold_value": 28,
  "created_at": "2026-05-01T10:15:00Z",
  "resolved_at": null,
  "measure_id": 1
}
```

---

## Tests

Le projet prévoit plusieurs niveaux de tests :

- tests unitaires avec Vitest
- tests fonctionnels avec Vitest
- tests manuels des routes API avec REST Client

Les tests permettront de vérifier la logique métier, les services backend, les routes principales de l’API et la cohérence des réponses retournées au frontend.

---

## Déploiement prévu

Le déploiement de l’application sera séparé en trois parties :

* frontend React déployé sur Vercel
* API Express déployée sur Render
* base de données PostgreSQL hébergée avec Render Postgres

Les URLs et informations sensibles seront configurées via des variables d’environnement afin de séparer les environnements de développement et de production.

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
* [Wireframe (Mobile/Desktop)](<docs/Wireframe (Mobile - Desktop).png>)
* [Charte et Maquettes Graphiques (Mobile/Desktop)](https://www.figma.com/design/2Q7SbIW21Bynv4JQrIN2nj/Maquette-Graphique---Dashboard-IoT?node-id=0-1&t=cQhnD4vse5NKivmr-1)
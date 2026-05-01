# Cahier des charges

## 1. Nom du projet :

- **Dashboard de supervision IoT**

## 2. Objectif :

Développer une application permettant de superviser des données issues de capteurs IoT afin de faciliter leur analyse, leur suivi et la détection d’anomalies.

## 3. MVP :

Fonctionnalités principales :

- Recevoir des données simulées via une API REST (générées par des scripts de seed)
- Stocker les mesures dans une base de données
- Visualiser les données sur un dashboard
- Afficher les informations clés sous forme de cartes de statut
- Consulter l’historique des mesures
- Filtrer les données par période (heure, jour, semaine, mois)
- Détecter et afficher des alertes en cas de dépassement de seuil

## 4. Évolutions potentielles :

- Mise à jour des données en temps réel (WebSocket)
- Intégration du protocole MQTT pour la réception des données
- Connexion à un capteur physique réel
- Authentification utilisateur (admin / utilisateur)
- Gestion de plusieurs capteurs

## 5. Stack technique :

Frontend :

- React.js
- React Router
- SCSS

Backend :

- Node.js
- Express.js

Base de données :

- MongoDB

Outils :

- Git / GitHub
- Whimsical (Wireframes)
- Figma (Maquettes graphiques)
- Postman (tests API)

## 6. Modélisation des données (simplifiée)

### Sensor (Capteur)

Représente un capteur physique ou simulé.

Chaque capteur mesure un seul type de variable.

- id
- name
- type (temperature | humidity)
- location
- battery
- isActive
- alertThresholds
    - min
    - max
- createdAt

**Exemple :**

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

---

### Measurement (Mesure)

Représente une mesure unique issue d’un capteur.

- id
- sensorId
- value
- unit
- timestamp

**Exemple :**

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

### Relation entre les données

- Un **Sensor** peut avoir plusieurs **Measurements**
- Chaque **Measurement** est associée à un seul **Sensor** via `sensorId`

---

### Gestion des alertes

Les seuils d’alerte sont définis au niveau du **Sensor**.

Une alerte est déclenchée si :

- la valeur est inférieure à `min`
- la valeur est supérieure à `max`

## 7. Roadmap (méthode agile) :

### Sprint 0 :

- Définition des besoins
- Modélisation des données
- Wireframes (Whimsical)
- Maquettes UI (Figma)

### Sprint 1 :

- Setup backend
- Création API REST
- Structure du projet

### Sprint 2 :

- Connexion MongoDB
- Implémentation du stockage des mesures

### Sprint 3 :

- Génération de données simulées (seed historique)
- Script de génération de données anormales (alertes)
- Injection de données dans l’API

### Sprint 4 :

- Dashboard React (cartes + graphiques)
- Affichage des mesures
- Filtres temporels (heure / jour / semaine / mois)

### Sprint 5 :

- Implémentation des alertes (logique métier)
- Affichage des alertes dans le dashboard
- Améliorations UI/UX
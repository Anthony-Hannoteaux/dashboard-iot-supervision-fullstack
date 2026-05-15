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
- RESTClient (tests API)
- Docker

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

## 8. Conception UX/UI — Structure des interfaces

### Objectif

Définir la structure des interfaces utilisateur du MVP afin d’assurer une navigation claire, une lecture efficace des données et une cohérence globale de l’application.

---

### Structure de l’application

L’application est composée de quatre pages principales :

- Dashboard
- Historique des mesures
- Détail d’un capteur
- Page des alertes

Aucun système d’authentification n’est prévu dans le MVP.

L’utilisateur accède directement au Dashboard.

---

### 1. Dashboard

### Objectif

Fournir une vue globale des données issues des capteurs afin de permettre une compréhension rapide de l’état du système.

### Contenu

- Header :
    - Titre de la page
    - Filtres temporels (heure, jour, semaine, mois)
- Cartes de statut :
    - Température actuelle
    - Humidité actuelle
    - Graphique principal :
        - Évolution des mesures dans le temps (24h par défault)
- Alertes récentes :
    - Type
    - Niveau
    - Timestamp
    - Accès vers les pages associées

---

### 2. Historique des mesures

### Objectif

Permettre l’analyse détaillée des données enregistrées.

### Contenu

- Filtres :
    - Période (heure, jour, semaine, mois)
    - Type de capteur (température, humidité)
- Tableau des mesures :
    - Timestamp
    - Capteur
    - Valeur
    - Unité
- Graphiques :
    - Visualisation des données en fonction des filtres appliqués

---

### 3. Détail d’un capteur

### Objectif

Afficher l’ensemble des informations relatives à un capteur spécifique.

### Contenu

- Informations générales :
    - Nom
    - Localisation
    - Type
- État du capteur :
    - Batterie
    - Statut
- Seuils d’alerte :
    - Valeur minimale
    - Valeur maximale
- Graphique dédié :
    - Évolution des mesures du capteur
- Historique :
    - Tableau des mesures associées
- Alertes :
    - Liste des alertes liées au capteur

---

### 4. Page des alertes

### Objectif

Centraliser les anomalies détectées sur les capteurs.

### Contenu

- Liste des alertes :
    - Type
    - Niveau
    - Timestamp
- Filtres :
    - Type de capteur
    - Niveau d’alerte
    - Période
- Navigation :
    - Accès au détail du capteur concerné

---

## 9. Navigation

L’application adopte une approche **mobile first**.

### Navigation mobile

Sur mobile, la navigation est pensée pour une utilisation simple et fluide :

- Organisation verticale des contenus (lecture de haut en bas)
- Accès aux différentes pages via la barre de navigation située en bas de page
- Navigation minimaliste afin de privilégier la lisibilité des données

---

### Navigation desktop

Sur desktop, l’application utilise une navigation latérale permettant d’accéder aux sections principales :

- Dashboard
- Historique des mesures
- Alertes

L’accès au détail d’un capteur se fait via des interactions contextuelles (tableaux, alertes, dashboard).

---

### Organisation des données — Dashboard

Les données du Dashboard sont organisées **par zone (pièce)** afin de refléter un cas d’usage réel.

Dans le cadre du MVP, l’application simule une habitation composée de trois zones :

- Salon
- Cuisine
- Chambre

Chaque zone est représentée par un groupe de cartes contenant :

- Température
- Humidité
- Un graphique associé

Le graphique affiche par défaut l’évolution des données sur une journée.

Cette organisation permet :

- Une lecture rapide par zone
- Une meilleure contextualisation des données
- Une navigation plus intuitive pour l’utilisateur

---
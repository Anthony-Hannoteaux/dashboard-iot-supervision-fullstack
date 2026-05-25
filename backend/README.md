# 📊 BACKEND : IoT Dashboard — Supervision de capteurs

## Stack technique

### API

* Node.js
* Express.js

### Base de données

* PostgreSQL

### Tests

* Vitest
* REST Client

### Déploiement

* Render pour l’API
* Render Postgres pour la base de données

### Outils

* Git / GitHub
* Docker
* Docker Compose

---

## Architecture du projet

/backend

* config
* controllers
* models
* routes
* utils

/database

---

## Modèle de données

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
  "alert_type": "tenperature_high",
  "urgency_degree": "warning",
  "message": "Température élevée - Salon",
  "is_active": true,
  "threshold_value": 28,
  "created_at": "2026-05-01T10:15:00Z",
  "resolved_at": null,
  "measure_id": 1
}
```
---

### MPD

```sql
location (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT UNIQUE NOT NULL
);

sensor (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT UNIQUE NOT NULL,
  "type" TEXT NOT NULL,
  "battery" INTEGER NOT NULL CHECK ("battery" >= 0 AND battery <= 100),
  "is_active" BOOLEAN NOT NULL DEFAULT TRUE,
  "minimum_threshold" DOUBLE PRECISION NOT NULL,
  "maximum_threshold" DOUBLE PRECISION NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "location_id" INTEGER NOT NULL REFERENCES location("id"),
  CHECK ("minimum_threshold" < "maximum_threshold")
);

measure (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "value" DOUBLE PRECISION NOT NULL,
  "unit" TEXT NOT NULL,
  "recorded_at" TIMESTAMP NOT NULL,
  "sensor_id" INTEGER NOT NULL REFERENCES sensor("id"),
  UNIQUE ("sensor_id", "recorded_at")
);

alert (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "alert_type" TEXT NOT NULL,
  "urgency_degree" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT TRUE,
  "threshold_value" DOUBLE PRECISION NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "resolved_at" TIMESTAMP,
  "measure_id" INTEGER UNIQUE NOT NULL REFERENCES measure("id")
);

```

---

### Relation entre les données

- Une **Location** peut avoir plusieurs **Sensor**
- Un **Sensor** peut avoir plusieurs **Measure**
- Chaque **Measure** est associée à un seul **Sensor** via `sensor_id`
- Chaque **Alert** est associée à une seule **Measure** via `measure_id`

---

## Tests

Le projet prévoit plusieurs niveaux de tests :

- tests fonctionnels avec Vitest
- tests manuels des routes API avec REST Client

---

## Lancer le projet (Envrionnement de Développement)

### Lancement du projet avec Docker

Cette section permet de lancer l'application complète dans un environnement Docker local dans le cadre du développement de l'application.

L'environnement Docker démarre deux services :

- un conteneur pour l'API Node.js / Express
- un conteneur pour la base de données PostgreSQL

Ce mode de lancement est prévu pour un environnement de développement local et pour faciliter la duplication du projet.

### Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

- Docker
- Docker Compose

### 1. Cloner le projet

```bash
git clone git@github.com:Anthony-Hannoteaux/dashboard-iot-supervision-fullstack.git
cd dashboard-iot-supervision-fullstack/
```

### 2. Créer les fichiers d'environnement

Le projet utilise des fichiers ``.env`` pour configurer le backend.

Depuis la racine du projet, copier les fichiers d'exemple :

```bash
cp .env.example .env
cp backend/.env.example backend/.env
```

### 3. Configurer les variables d'environnement

#### Backend

Ouvrir le fichier suivant :

```
backend/.env
```

Les variables à modifier sont principalement :

```env
DB_PORT=5433
DB_PASSWORD=votre_bd_mot_de_passe
```

Remarque : Le changement du port est facultatif, à réaliser si nécessaire.

### 4. Créer les images et lancer les conteneurs Docker

Depuis la racine du projet :

```bash
docker compose up -d
```

### 5. Lancer la création de la base de données et le seeding des tables

Depuis la racine du projet, copier/coller la commande suivante :

```bash
cat \
database/schema.sql \
database/seeding/00_reset.sql \
database/seeding/01_location.sql \
database/seeding/02_sensor.sql \
database/seeding/03_measure_living_room.sql \
database/seeding/04_measure.sql \
| docker compose exec -T postgres sh -c 'psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
```

Note : l’automatisation de cette commande via un script npm est prévue dans une prochaine amélioration du projet.

> Important : Les alertes sont générées directement par l'API à partir des mesures existantes et des seuils définis par les capteurs.

Pour alimenter la table "alert", toujours depuis la racine du projet :

```bash
npm run db:generate:alert
```

### 6. Arrêter/Supprimer les conteneurs et le volume

Pour arrêter et supprimer les conteneurs ainsi que les volumes associés :

```bash
docker compose down -v
```

### 7. Supprimer les images Docker

Pour supprimer les images Docker du projet :

```bash
docker rmi dashboard-iot-supervision-fullstack-api:latest
```

L'application utilise la version ``postgres:18-alpine`` de PostgreSQL, si vous souhaitez la supprimer également :

```bash
docker rmi postgres:18-alpine
```

## Notes Importantes

Les variables présentes dans les fichier ``.env.example`` sont fournies uniquement pour faciliter le lancement local du projet.

Elles ne doivent pas être utilisées telles quelles en productions.

La variable suivante doit rester ainsi :

```env
PGHOST=postgres
```

``postgres`` faisant référence au service PostgreSQL.

---


## Ressouces

### Docker

- Cheat Sheet Docker : https://www.hostinger.com/fr/tutoriels/cheat-sheet-docker
- Orchestrer les conteneurs avec Docker Compose : https://blog.stephane-robert.info/docs/conteneurs/orchestrateurs/docker-compose/
- Comprendre les images Docker : https://blog.stephane-robert.info/docs/conteneurs/images-conteneurs/
- Comprendre les volumes Docker : https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/volumes/
- Gérer les données sensibles en toute sécurité : https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/secrets/
- Conteneuriser des applications : https://www.datacamp.com/fr/tutorial/how-to-containerize-application-using-docker
- Tutoriel YouTube réalisé par "Nicely Dev" : https://www.youtube.com/playlist?list=PLpLG--nxBMd-wO_MAWh3gzqCcFh4qNMvP

### SQL

- Clause WITH :
  - https://docs.postgresql.fr/9.6/queries-with.html
  - https://www.datacamp.com/fr/doc/mysql/mysql-with

- Instruction CASE :
  - https://docs.postgresql.fr/15/functions-conditional.html#FUNCTIONS-CASE
  - https://www.datacamp.com/fr/tutorial/case-statement-sql

- Fonction CROSS JOIN :
  - https://sql.sh/cours/jointures/cross-join
  - https://www.datacamp.com/fr/doc/postgresql/cross-join

-- Informations démonstration : --
-- Le seeding des mesures des capteurs autres que ceux situés dans le salon
-- Seront volontairement peu fournis en valeur pour cette démonstration
-- Le but étant de pouvoir proposer des valeurs récupérables côté front

BEGIN;

INSERT INTO measure (
    "value",
    "unit",
    "recorded_at",
    "sensor_id"
)
VALUES
    -- Température Cuisine enregistré depuis la dernière heure
    (24.3, '°C', CURRENT_TIMESTAMP - INTERVAL '10 min', 3),
    (28.3, '°C', CURRENT_TIMESTAMP - INTERVAL '30 min', 3),
    (22.3, '°C', CURRENT_TIMESTAMP - INTERVAL '1 hour', 3),

    -- Température Cuisine enregistré depuis les dernières 24 heures
    (27.8, '°C', CURRENT_TIMESTAMP - INTERVAL '12 hours', 3),
    (22.3, '°C', CURRENT_TIMESTAMP - INTERVAL '1 day', 3),

    -- Température Cuisine enregistré depuis la dernières semaine
    (27.8, '°C', CURRENT_TIMESTAMP - INTERVAL '4 days', 3),
    (22.3, '°C', CURRENT_TIMESTAMP - INTERVAL '7 days', 3),

    -- Humidité Cuisine enregistré depuis la dernière heure
    (45.7, '%', CURRENT_TIMESTAMP - INTERVAL '10 min', 4),
    (44.6, '%', CURRENT_TIMESTAMP - INTERVAL '30 min', 4),
    (50.6, '%', CURRENT_TIMESTAMP - INTERVAL '1 hour', 4),

    -- Humidité Cuisine enregistré depuis les dernières 24 heures
    (45.3, '%', CURRENT_TIMESTAMP - INTERVAL '12 hours', 4),
    (70.6, '%', CURRENT_TIMESTAMP - INTERVAL '1 day', 4),

    -- Humidité Cuisine enregistré depuis la dernières semaine
    (59.2, '%', CURRENT_TIMESTAMP - INTERVAL '4 day', 4),
    (43.2, '%', CURRENT_TIMESTAMP - INTERVAL '7 day', 4),

    -- Température Chambre enregistré depuis la dernière heure
    (24.3, '°C', CURRENT_TIMESTAMP - INTERVAL '10 min', 5),
    (28.3, '°C', CURRENT_TIMESTAMP - INTERVAL '30 min', 5),
    (22.3, '°C', CURRENT_TIMESTAMP - INTERVAL '1 hour', 5),

    -- Température Chambre enregistré depuis les dernières 24 heures
    (27.8, '°C', CURRENT_TIMESTAMP - INTERVAL '12 hours', 5),
    (22.3, '°C', CURRENT_TIMESTAMP - INTERVAL '1 day', 5),

    -- Température Chambre enregistré depuis la dernières semaine
    (27.8, '°C', CURRENT_TIMESTAMP - INTERVAL '4 days', 5),
    (22.3, '°C', CURRENT_TIMESTAMP - INTERVAL '7 days', 5),

    -- Humidité Chambre enregistré depuis la dernière heure
    (45.7, '%', CURRENT_TIMESTAMP - INTERVAL '10 min', 6),
    (44.6, '%', CURRENT_TIMESTAMP - INTERVAL '30 min', 6),
    (50.6, '%', CURRENT_TIMESTAMP - INTERVAL '1 hour', 6),

    -- Humidité Chambre enregistré depuis les dernières 24 heures
    (45.3, '%', CURRENT_TIMESTAMP - INTERVAL '12 hours', 6),
    (70.6, '%', CURRENT_TIMESTAMP - INTERVAL '1 day', 6),

    -- Humidité Chambre enregistré depuis la dernières semaine
    (59.2, '%', CURRENT_TIMESTAMP - INTERVAL '4 day', 6),
    (43.2, '%', CURRENT_TIMESTAMP - INTERVAL '7 day', 6);

COMMIT;
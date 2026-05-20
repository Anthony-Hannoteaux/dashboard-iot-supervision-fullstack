-- Informations démonstration : --
-- Dans un cas réel, les valeurs seraient récupérées toutes les 10min
-- Pour cette démonstration nous ne calculerons donc pas les moyennes des valeurs
-- Nous utiliserons des intervalles fixes pour faciliter la simulation des données récupérées

BEGIN;

INSERT INTO measure (
    "value",
    "unit",
    "recorded_at",
    "sensor_id"
)
VALUES
    -- Température Salon enregistrée depuis la dernière heure
    (22.3, '°C', CURRENT_TIMESTAMP - INTERVAL '10 min', 1),
    (22.6, '°C', CURRENT_TIMESTAMP - INTERVAL '20 min', 1),
    (22.5, '°C', CURRENT_TIMESTAMP - INTERVAL '30 min', 1),
    (22.1, '°C', CURRENT_TIMESTAMP - INTERVAL '40 min', 1),
    (21.7, '°C', CURRENT_TIMESTAMP - INTERVAL '50 min', 1),
    (21.4, '°C', CURRENT_TIMESTAMP - INTERVAL '1 hour', 1),

    -- Température Salon enregistrée depuis les dernières 24 heures
    (22.2, '°C', CURRENT_TIMESTAMP - INTERVAL '2 hours', 1),
    (23.6, '°C', CURRENT_TIMESTAMP - INTERVAL '3 hours', 1),
    (21.2, '°C', CURRENT_TIMESTAMP - INTERVAL '4 hours', 1),
    (20.7, '°C', CURRENT_TIMESTAMP - INTERVAL '5 hours', 1),
    (19.3, '°C', CURRENT_TIMESTAMP - INTERVAL '6 hours', 1),
        -- Valeur générant une alerte (critique)
    (16.6, '°C', CURRENT_TIMESTAMP - INTERVAL '7 hours', 1),
    (18.8, '°C', CURRENT_TIMESTAMP - INTERVAL '8 hours', 1),
    (19.3, '°C', CURRENT_TIMESTAMP - INTERVAL '9 hours', 1),
    (20.2, '°C', CURRENT_TIMESTAMP - INTERVAL '10 hours', 1),
    (21.4, '°C', CURRENT_TIMESTAMP - INTERVAL '11 hours', 1),
    (21.9, '°C', CURRENT_TIMESTAMP - INTERVAL '12 hours', 1),
    (22.4, '°C', CURRENT_TIMESTAMP - INTERVAL '13 hours', 1),
    (22.1, '°C', CURRENT_TIMESTAMP - INTERVAL '14 hours', 1),
    (23.9, '°C', CURRENT_TIMESTAMP - INTERVAL '15 hours', 1),
    (24.5, '°C', CURRENT_TIMESTAMP - INTERVAL '16 hours', 1),
    (24.2, '°C', CURRENT_TIMESTAMP - INTERVAL '17 hours', 1),
    (23.5, '°C', CURRENT_TIMESTAMP - INTERVAL '18 hours', 1),
    (22.2, '°C', CURRENT_TIMESTAMP - INTERVAL '19 hours', 1),
    (21.8, '°C', CURRENT_TIMESTAMP - INTERVAL '20 hours', 1),
    (21.3, '°C', CURRENT_TIMESTAMP - INTERVAL '21 hours', 1),
    (22.8, '°C', CURRENT_TIMESTAMP - INTERVAL '22 hours', 1),
    (23.7, '°C', CURRENT_TIMESTAMP - INTERVAL '23 hours', 1),
    (23.1, '°C', CURRENT_TIMESTAMP - INTERVAL '1 day', 1),

    -- Température Salon enregistrée depuis la dernière semaine
    (20.8, '°C', CURRENT_TIMESTAMP - INTERVAL '2 days', 1),
    (22.6, '°C', CURRENT_TIMESTAMP - INTERVAL '3 days', 1),
        -- Valeur générant une alerte (info)
    (28.7, '°C', CURRENT_TIMESTAMP - INTERVAL '4 days', 1),
    (24.6, '°C', CURRENT_TIMESTAMP - INTERVAL '5 days', 1),
    (19.7, '°C', CURRENT_TIMESTAMP - INTERVAL '6 days', 1),
    (22.5, '°C', CURRENT_TIMESTAMP - INTERVAL '7 days', 1),

    -- Humidité Salon enregistré depuis la dernière heure
    (45.7, '%', CURRENT_TIMESTAMP - INTERVAL '10 min', 2),
    (44.6, '%', CURRENT_TIMESTAMP - INTERVAL '20 min', 2),
    (46.8, '%', CURRENT_TIMESTAMP - INTERVAL '30 min', 2),
    (47.1, '%', CURRENT_TIMESTAMP - INTERVAL '40 min', 2),
    (46.4, '%', CURRENT_TIMESTAMP - INTERVAL '50 min', 2),
    (45.5, '%', CURRENT_TIMESTAMP - INTERVAL '1 hour', 2),

    -- Humidité Salon enregistré depuis les dernières 24 heures
    (43.2, '%', CURRENT_TIMESTAMP - INTERVAL '2 hours', 2),
        -- Valeur générant une alerte (avertissement)
    (38.8, '%', CURRENT_TIMESTAMP - INTERVAL '3 hours', 2),
    (45.8, '%', CURRENT_TIMESTAMP - INTERVAL '4 hours', 2),
    (50.7, '%', CURRENT_TIMESTAMP - INTERVAL '5 hours', 2),
    (51.3, '%', CURRENT_TIMESTAMP - INTERVAL '6 hours', 2),
    (53.6, '%', CURRENT_TIMESTAMP - INTERVAL '7 hours', 2),
    (48.8, '%', CURRENT_TIMESTAMP - INTERVAL '8 hours', 2),
    (42.3, '%', CURRENT_TIMESTAMP - INTERVAL '9 hours', 2),
    (57.2, '%', CURRENT_TIMESTAMP - INTERVAL '10 hours', 2),
    (65.4, '%', CURRENT_TIMESTAMP - INTERVAL '11 hours', 2),
    (46.9, '%', CURRENT_TIMESTAMP - INTERVAL '12 hours', 2),
    (51.4, '%', CURRENT_TIMESTAMP - INTERVAL '13 hours', 2),
        -- Valeur générant une alerte (information)
    (70.1, '%', CURRENT_TIMESTAMP - INTERVAL '14 hours', 2),
    (44.9, '%', CURRENT_TIMESTAMP - INTERVAL '15 hours', 2),
    (46.5, '%', CURRENT_TIMESTAMP - INTERVAL '16 hours', 2),
    (45.2, '%', CURRENT_TIMESTAMP - INTERVAL '17 hours', 2),
    (56.5, '%', CURRENT_TIMESTAMP - INTERVAL '18 hours', 2),
    (54.2, '%', CURRENT_TIMESTAMP - INTERVAL '19 hours', 2),
    (60.8, '%', CURRENT_TIMESTAMP - INTERVAL '20 hours', 2),
    (43.3, '%', CURRENT_TIMESTAMP - INTERVAL '21 hours', 2),
    (43.8, '%', CURRENT_TIMESTAMP - INTERVAL '22 hours', 2),
    (46.7, '%', CURRENT_TIMESTAMP - INTERVAL '23 hours', 2),
    (48.1, '%', CURRENT_TIMESTAMP - INTERVAL '1 day', 2),

    -- Humidité Salon enregistré depuis la dernière semaine
    (43.8, '%', CURRENT_TIMESTAMP - INTERVAL '2 days', 2),
    (55.6, '%', CURRENT_TIMESTAMP - INTERVAL '3 days', 2),
    (49.7, '%', CURRENT_TIMESTAMP - INTERVAL '4 days', 2),
    (58.6, '%', CURRENT_TIMESTAMP - INTERVAL '5 days', 2),
    (43.7, '%', CURRENT_TIMESTAMP - INTERVAL '6 days', 2),
    (50.5, '%', CURRENT_TIMESTAMP - INTERVAL '7 days', 2);

COMMIT;
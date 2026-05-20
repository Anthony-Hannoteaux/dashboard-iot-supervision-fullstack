BEGIN;

INSERT INTO sensor (
    "name",
    "type",
    "battery",
    "is_active",
    "minimum_threshold",
    "maximum_threshold",
    "location_id"
)
VALUES
    -- Capteurs situé dans le salon
    ('Température Salon', 'temperature', 87, TRUE, 18, 28, 1),
    ('Humidité Salon', 'humidity', 80, TRUE, 40, 70, 1),

    -- Capteurs situé dans la cuisine
    ('Température Cuisine', 'temperature', 50, TRUE, 22, 30, 2),
    ('Humidité Cuisine', 'humidity', 90, TRUE, 30, 80, 2),

    -- Capteurs situé dans la chambre
    ('Température Chambre', 'temperature', 71, TRUE, 17, 26, 3),
    ('Humidité Chambre', 'humidity', 64, TRUE, 40, 65, 3);

COMMIT;
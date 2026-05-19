BEGIN;

DROP TABLE IF EXISTS location, sensor, measure, alert CASCADE;

CREATE TABLE location (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL
);

CREATE TABLE sensor (
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

CREATE TABLE measure (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "recorded_at" TIMESTAMP NOT NULL,
    "sensor_id" INTEGER NOT NULL REFERENCES sensor("id"),
    UNIQUE ("sensor_id", "recorded_at")
);

CREATE TABLE alert (
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

COMMIT;
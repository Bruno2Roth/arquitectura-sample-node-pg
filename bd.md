-- Tabla materias
CREATE TABLE materias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(75) NOT NULL
);

-- Tabla calificaciones
-- Cada alumno tiene UNA sola calificación por materia (no se puede repetir la combinación alumno+materia).
CREATE TABLE calificaciones (
    id SERIAL PRIMARY KEY,
    id_alumno INT NOT NULL REFERENCES alumnos(id),
    id_materia INT NOT NULL REFERENCES materias(id),
    nota INT NOT NULL,
    fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    UNIQUE(id_alumno, id_materia)
);

INSERT INTO materias (nombre) VALUES ('Matemática');
INSERT INTO materias (nombre) VALUES ('Lengua');
INSERT INTO materias (nombre) VALUES ('Historia');
INSERT INTO materias (nombre) VALUES ('Programación');
INSERT INTO materias (nombre) VALUES ('Base de Datos');

INSERT INTO calificaciones (id_alumno, id_materia, nota, fecha) VALUES
(1, 1, 8, '2025-03-10'),
(2, 1, 6, '2025-03-12'),
(3, 2, 9, '2025-03-15'),
(4, 3, 7, '2025-03-18'),
(5, 2, 10, '2025-03-20');
-- Creación de la tabla para almacenar la información de las fiscalías
CREATE TABLE Fiscalias (
  id INT IDENTITY(1,1) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  ubicacion VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL
);
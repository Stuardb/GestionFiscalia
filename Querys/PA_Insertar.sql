-- Procedimiento almacenado para insertar una fiscalía
CREATE PROCEDURE InsertarFiscalia
  @nombre VARCHAR(100),
  @ubicacion VARCHAR(100),
  @telefono VARCHAR(20)
AS
BEGIN
  INSERT INTO Fiscalias (nombre, ubicacion, telefono)
  VALUES (@nombre, @ubicacion, @telefono);
END;

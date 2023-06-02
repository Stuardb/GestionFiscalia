-- Procedimiento almacenado para actualizar la información de una fiscalía
CREATE PROCEDURE ActualizarFiscalia
  @id INT,
  @nombre VARCHAR(100),
  @ubicacion VARCHAR(100),
  @telefono VARCHAR(20)
AS
BEGIN
  UPDATE Fiscalias
  SET nombre = @nombre, ubicacion = @ubicacion, telefono = @telefono
  WHERE id = @id;
END;

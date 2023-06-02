-- Procedimiento almacenado para obtener todas las fiscalías
CREATE PROCEDURE ObtenerFiscalias
AS
BEGIN
  SELECT * FROM Fiscalias;
END;

-- Procedimiento almacenado para eliminar una fiscalía por su ID
CREATE PROCEDURE EliminarFiscalia
  @id INT
AS
BEGIN
  DELETE FROM Fiscalias WHERE id = @id;
END;

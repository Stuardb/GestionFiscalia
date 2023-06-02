import { getConnection, sql, queries } from "../database";

export const getFiscalias = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllFiscalias);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createFiscalia = async (req, res) => {
  const { nombre, ubicacion, telefono } = req.body;

  if (!nombre || !ubicacion || !telefono) {
    return res
      .status(400)
      .json({ msg: "Error. Completa todos los campos." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("ubicacion", sql.VarChar, ubicacion)
      .input("telefono", sql.VarChar, telefono)
      .execute(queries.addNewFiscalia);

    res.json({ nombre, ubicacion, telefono });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getFiscaliaById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .execute(queries.getFiscaliaById);

    if (result.recordset.length === 0) {
      return res.status(404).json({ msg: "Fiscalia not found." });
    }

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateFiscalia = async (req, res) => {
  const { id } = req.params;
  const { nombre, ubicacion, telefono } = req.body;

  if (!nombre || !ubicacion || !telefono) {
    return res
      .status(400)
      .json({ msg: "Error. Completa todos los campos." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.Int, id)
      .input("nombre", sql.VarChar, nombre)
      .input("ubicacion", sql.VarChar, ubicacion)
      .input("telefono", sql.VarChar, telefono)
      .execute(queries.updateFiscalia);

    res.sendStatus(204);
    //res.status(200).json({ message: "Fiscalia deleted successfully", id, nombre, ubicacion, telefono });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteFiscalia = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.Int, id)
      .execute(queries.deleteFiscalia);
    res.status(200).json({ message: "Fiscalia deleted successfully", id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


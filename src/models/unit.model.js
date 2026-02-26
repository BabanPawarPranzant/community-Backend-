const db = require("../config/db");

// exports.create = async (data) => {
//   const result = await db.query(
//     "SELECT public.fn_insert_units($1) AS result",
//     [data]
//   );
//   return result.rows[0].result;
// };


exports.create = async (data) => {
  const result = await db.query(
    "SELECT public.fn_insert_units($1::jsonb) AS result",
    [JSON.stringify(data)]
  );
  return result.rows[0].result;
};

exports.update = async (id, data) => {
  const result = await db.query(
    "SELECT public.fn_update_units($1,$2) AS result",
    [id, data]
  );
  return result.rows[0].result;
};

// exports.delete = async (id, updated_by) => {
//   const result = await db.query(
//     "SELECT public.fn_delete_units($1,$2) AS result",
//     [id, updated_by]
//   );
//   return result.rows[0].result;


// };
exports.delete = async (id) => {
  const result = await db.query(
    "SELECT public.fn_delete_units($1) AS result",
    [id]
  );
  return result.rows[0].result;
};

exports.getAll = async (search = "") => {
  const result = await db.query(
    `SELECT * FROM units
     WHERE is_active = true
     AND unit_number ILIKE $1
     ORDER BY unit_id DESC`,
    [`%${search}%`]
  );
  return result.rows;
};

exports.getById = async (id) => {
  const result = await db.query(
    "SELECT * FROM units WHERE unit_id = $1",
    [id]
  );
  return result.rows[0];
};
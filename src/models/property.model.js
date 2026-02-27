// const db = require("../config/db");

// // exports.create = async (data) => {
// //   const result = await db.query(
// //     "SELECT public.fn_insert_properties($1) AS result",
// //     [data]
// //   );
// //   return result.rows[0].result;
// // };
// exports.create = async (data) => {
//   const result = await db.query(
//     "SELECT public.fn_insert_properties($1) AS result",
//     [data]
//   );
// };

// exports.update = async (id, data) => {
//   const result = await db.query(
//     "SELECT public.fn_update_properties($1,$2) AS result",
//     [id, data]
//   );
//   return result.rows[0].result;
// };

// // exports.delete = async (id, updated_by) => {
// //   const result = await db.query(
// //     "SELECT public.fn_delete_properties($1,$2) AS result",
// //     [id, updated_by]
// //   );
// //   return result.rows[0].result;
// // };


// exports.delete = async (id) => {
//   const result = await db.query(
//     "SELECT public.fn_delete_properties($1) AS result",
//     [id]
//   );
//   return result.rows[0].result;
// };

// // exports.getAll = async (search = "") => {
// //   const result = await db.query(
// //     `SELECT * FROM properties
// //      WHERE is_active = true
// //      AND property_name ILIKE $1
// //      ORDER BY property_id DESC`,
// //     [`%${search}%`]
// //   );
// //   return result.rows;
// // };

// exports.getAll = async (search = "") => {
//   const result = await db.query(
//     "SELECT * FROM public.fn_get_properties($1)",
//     [search]
//   );
//   return result.rows;
// };
// // exports.getById = async (id) => {
// //   const result = await db.query(
// //     "SELECT * FROM properties WHERE property_id = $1",
// //     [id]
// //   );
// //   return result.rows[0];
// // };


// exports.getById = async (id) => {
//   const result = await db.query(
//     `
//     SELECT 
//       u.*,
//       p.property_name,
//       c.community_name

//     FROM units u
//     LEFT JOIN properties p 
//       ON u.property_id = p.property_id
//     LEFT JOIN communities c 
//       ON p.community_id = c.community_id

//     WHERE u.unit_id = $1
//     `,
//     [id]
//   );

//   return result.rows[0];
// };



//2

// const db = require("../config/db");

// /* ================================
//    CREATE
// ================================ */
// exports.create = async (data) => {
//   const result = await db.query(
//     "SELECT public.fn_insert_properties($1::jsonb) AS result",
//     [JSON.stringify(data)]
//   );
//   return result.rows[0].result;
// };

// /* ================================
//    UPDATE
// ================================ */
// exports.update = async (id, data) => {
//   const result = await db.query(
//     "SELECT public.fn_update_properties($1,$2::jsonb) AS result",
//     [id, JSON.stringify(data)]
//   );
//   return result.rows[0].result;
// };

// /* ================================
//    DELETE
// ================================ */
// exports.delete = async (id) => {
//   const result = await db.query(
//     "SELECT public.fn_delete_properties($1) AS result",
//     [id]
//   )};






//==========
const db = require("../config/db");

/* ================= CREATE ================= */
exports.create = async (data) => {
  const result = await db.query(
    "SELECT public.fn_insert_properties($1::jsonb) AS result",
    [JSON.stringify(data)]
  );
  return result.rows[0].result;
};

/* ================= UPDATE ================= */
exports.update = async (id, data) => {
  const result = await db.query(
    "SELECT public.fn_update_properties($1,$2::jsonb) AS result",
    [id, JSON.stringify(data)]
  );
  return result.rows[0].result;
};

/* ================= DELETE ================= */
exports.delete = async (id) => {
  const result = await db.query(
    "SELECT public.fn_delete_properties($1) AS result",
    [id]
  );
  return result.rows[0].result;
};

/* ================= GET ALL ================= */
exports.getAll = async (search = "") => {
  const result = await db.query(
    `
    SELECT 
      p.*,
      c.community_name,
      c.location,
      c.city,
      c.country
    FROM properties p
    JOIN communities c 
      ON p.community_id = c.community_id
    WHERE p.is_active = true
      AND p.property_name ILIKE $1
    ORDER BY p.property_id DESC
    `,
    [`%${search}%`]
  );

  return result.rows;
};

/* ================= GET BY ID ================= */
exports.getById = async (id) => {
  const result = await db.query(
    "SELECT * FROM public.fn_get_property_by_id($1)",
    [id]
  );
  return result.rows[0];
};
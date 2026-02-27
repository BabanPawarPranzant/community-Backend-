// const model = require("../models/property.model");


// exports.getAll = async (req, res) => {
//   try {
//     const search = req.query.search || "";
//     const data = await model.getAll(search);
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };

// exports.create = async (req, res) => {
//   try {
//     const data = req.body;

//     if (req.file) {
//       data.property_image = `/uploads/${req.file.filename}`;
//     }

//     const result = await model.create(data);

//     return res.status(200).json({
//       success: true,
//       message: "Property created successfully",
//       data: result
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const data = req.body;
//     if (req.file) data.property_image = `/uploads/${req.file.filename}`;
//     const result = await model.update(req.params.id, data);
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };



// exports.delete = async (req, res) => {
//   try {
//     const result = await model.delete(req.params.id);

//     if (!result.success) {
//       return res.status(404).json({
//         success: false,
//         message: "Property not found"
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Property deleted permanently"
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };


// exports.getById = async (req, res) => {
//   try {
//     const data = await model.getById(req.params.id);

//     if (!data) {
//       return res.status(404).json({
//         success: false,
//         message: "Property not found"
//       });
//     }

//     return res.json({
//       success: true,
//       data
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };





//====================

// const model = require("../models/unit.model");

// /* =========================
//    CREATE UNIT
// ========================= */
// exports.create = async (req, res) => {
//   try {
//     const data = req.body;

//     const result = await model.create(data);

//     return res.json({
//       success: true,
//       message: "Unit created successfully",
//       data: result
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };

// /* =========================
//    UPDATE UNIT
// ========================= */
// exports.update = async (req, res) => {
//   try {
//     const result = await model.update(req.params.id, req.body);

//     return res.json({
//       success: true,
//       message: "Unit updated successfully",
//       data: result
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };

// /* =========================
//    DELETE UNIT
// ========================= */
// exports.delete = async (req, res) => {
//   try {
//     const result = await model.delete(req.params.id);

//     return res.json({
//       success: true,
//       message: "Unit deleted successfully",
//       data: result
//     });

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };

// /* =========================
//    GET ALL UNITS
// ========================= */
// exports.getAll = async (req, res) => {
//   try {
//     const search = req.query.search || "";
//     const data = await model.getAll(search);

//     return res.json(data);

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };

// /* =========================
//    GET UNIT BY ID
// ========================= */
// exports.getById = async (req, res) => {
//   try {
//     const data = await model.getById(req.params.id);

//     if (!data) {
//       return res.status(404).json({
//         success: false,
//         message: "Unit not found"
//       });
//     }

//     return res.json(data);

//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       message: err.message
//     });
//   }
// };




//============
const model = require("../models/property.model");

/* ================= CREATE ================= */
exports.create = async (req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.property_image = `/uploads/${req.file.filename}`;
    }

    const result = await model.create(data);

    return res.json({
      success: true,
      message: "Property created successfully",
      data: result
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ================= UPDATE ================= */
exports.update = async (req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.property_image = `/uploads/${req.file.filename}`;
    }

    const result = await model.update(req.params.id, data);

    return res.json({
      success: true,
      message: "Property updated successfully",
      data: result
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ================= DELETE ================= */
exports.delete = async (req, res) => {
  try {
    const result = await model.delete(req.params.id);

    return res.json({
      success: true,
      message: "Property deleted successfully",
      data: result
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ================= GET ALL ================= */
exports.getAll = async (req, res) => {
  try {
    const search = req.query.search || "";
    const data = await model.getAll(search);

    return res.json(data);  // Flat array for UI table

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

/* ================= GET BY ID ================= */
exports.getById = async (req, res) => {
  try {
    const data = await model.getById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Property not found"
      });
    }

    return res.json(data);

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
import multer from "multer";
import path from "path";

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/temp"); // Folder where files will be stored
  },

  filename: function (req, file, cb) {

    cb(
      null,
      file.originalname
    );
  },
});

// Export multer middleware
export const upload = multer({
  storage,
});
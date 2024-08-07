import { body, param } from "express-validator";

export const postErrorValidator = [
  body("first_name")
    .isString()
    .withMessage("First_Name must be a string")
    .isLength({ min: 2 })
    .withMessage("First_Name must be at least 2 characters long"),

  body("last_name")
    .isString()
    .withMessage("Last_Name must be a string")
    .isLength({ min: 2 })
    .withMessage("Last_Name must be at least 2 characters long"),

  body("email").isEmail().withMessage("this is not a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
];

// Middleware to check if user is authenticated
export const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

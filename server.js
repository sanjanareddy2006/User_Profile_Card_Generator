const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// POST route
app.post("/create-profile", (req, res) => {
  const { name, bio, image } = req.body;

  // Basic validation
  if (!name || !bio || !image) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Create formatted profile object
  const profileCard = {
    name,
    bio,
    image,
  };

  res.json({
    success: true,
    profile: profileCard,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
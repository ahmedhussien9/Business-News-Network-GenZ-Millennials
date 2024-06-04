const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Serve the JSON file
app.get('/api/posts', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'social_media_posts_with_updated_videos.json')
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

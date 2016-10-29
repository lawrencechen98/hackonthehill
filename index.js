const express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, "public")))

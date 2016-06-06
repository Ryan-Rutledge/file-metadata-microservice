var app = require('express')();
var upload = require('multer')();

// File upload route
app.post('/post_file', upload.single('file'), function(req, res) {
    res.json({ fileSize: req.file && req.file.size || null });
});

// Homepage
app.get(['/', 'index', 'index.html'], function(req, res) {
    res.sendFile('index.html', { root: __dirname});
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port', process.env.PORT);
});
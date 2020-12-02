app.post('/upload-image', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let newFile = req.files.avatar;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            newFile.mv('./uploads/' + newFile.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: newFile.name,
                    mimetype: newFile.mimetype,
                    size: newFile.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
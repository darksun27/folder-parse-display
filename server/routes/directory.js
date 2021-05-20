const fs = require("fs");

module.exports = (app) => {
    app.get("/getInfo", async (req, res) => {
        await fs.readdir(`/home/darksun27/Desktop/mettl-interview/server/routes`, (err,files) => {
            if(err) {
                console.log("Path Reading Error")
            }
            let fileDetails = [];
            files.forEach(file => {
                fileDetails.push({
                    fileName: file,
                    fileType: file.split(".").length > 1 ? 'txt' : 'folder'
                });
            });
            res.send(fileDetails);
        });
    })
}

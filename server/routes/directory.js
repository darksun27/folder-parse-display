const fs = require("fs");

module.exports = (app) => {
    app.post("/getInfo", async (req, res) => {
        let pathToSearch = `${process.cwd()}/testdir`;
        if(req.body.path != "null") {
            pathToSearch = req.body.path;
        }
        await fs.readdir( pathToSearch, (err,files) => {
            if(err) {
                console.log("Path Reading Error")
                res.send([]);
            }
            else {
                let fileDetails = [];
                files.forEach(file => {
                    fileDetails.push({
                        fileName: file,
                        fileType: file.split(".").length > 1 ? 'txt' : 'folder'
                    });
                });
                res.send(fileDetails);
            }
        });
    });
}

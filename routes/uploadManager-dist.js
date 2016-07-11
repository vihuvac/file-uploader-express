// config the uploader
var options = {
	tmpDir: __dirname + "/../public/uploaded/tmp",
	uploadDir: __dirname + "/../public/uploaded/files",
	uploadUrl: "/uploaded/files/",
	maxPostSize: 11000000000, // 11 GB
	minFileSize: 1,
	maxFileSize: 10000000000, // 10 GB
	acceptFileTypes: /.+/i,
	// Files not matched by this regular expression force a download dialog,
	// to prevent executing any scripts in the context of the service domain:
	inlineFileTypes: /\.(gif|jpe?g|png)$/i,
	imageTypes: /\.(gif|jpe?g|png)$/i,
    copyImgAsThumb: true,
	imageVersions: {
		maxWidth: 200,
		maxHeight: "auto"
	},
	accessControl: {
		allowOrigin: "*",
        allowMethods: "OPTIONS, HEAD, GET, POST, PUT, DELETE",
        allowHeaders: "Content-Type, Content-Range, Content-Disposition, Content-Description"
	},
	storage: {
		type: "aws",
		aws: {
			region: "sa-east-1",
			accessKeyId: "xxxxxxxxxxxxxxxxx",
			secretAccessKey: "xxxxxxxxxxxxxxxxx",
			bucketName: "xxxxxxxxxxxxxxxxx",
            path: "images/"
		}
	},
	nodeStatic: {
		cache: 3600 // seconds to cache served files
	}
};


var uploader = require("blueimp-file-uploader-express")(options);


module.exports = function (router) {
	router.get("/upload", function (req, res) {
		uploader.get(req, res, function (err, obj) {
			res.send(JSON.stringify(obj));
		});
	});

	router.post("/upload", function (req, res) {
		uploader.post(req, res, function (err, obj) {
			res.send(JSON.stringify(obj));
		});
	});

    router.delete("/uploaded/files/:directory/:name", function (req, res) {
		uploader.delete(req, res, function (err, obj) {
			res.send(JSON.stringify(obj));
		});
	});

	return router;
};

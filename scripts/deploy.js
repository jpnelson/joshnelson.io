const bucket = require("../config.json").bucket;
const s3 = require("s3");
var client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  }
});

var params = {
  localDir: "build",
  deleteRemoved: true,
  s3Params: {
    Bucket: bucket,
    Prefix: "/"
  }
};
var uploader = client.uploadDir(params);
uploader.on("error", function(err) {
  console.error("unable to sync:", err.stack);
  process.exit(1);
});
uploader.on("progress", function() {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on("end", function() {
  console.log("done uploading");
});

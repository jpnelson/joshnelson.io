const { bucket } = require('../config.json');

var params = {
  localDir: 'build',
  deleteRemoved: true,
 
  s3Params: {
    Bucket: bucket,
  },
};
var uploader = client.uploadDir(params);
uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', function() {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function() {
  console.log("done uploading");
});

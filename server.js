const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const AWS = require('aws-sdk');


console.log(process.env.BUCKETEER_AWS_ACCESS_KEY_ID);

const s3  = new AWS.S3({
  accessKeyId: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

const params = {
  Key:    'hello',
  Bucket: 'bucketeer-9ca994f9-1458-4d3d-9d14-ee9dcdba4c88',
  Body:   new Buffer('Hello, node.js'),
};

s3.putObject(params, function put(err, data) {
  if (err) {
    console.log(err, err.stack);
    return;
  } else {
    console.log(data);
  }

  delete params.Body;
  s3.getObject(params, function put(err, data) {
    if (err) console.log(err, err.stack);
    else     console.log(data);

    console.log(data.Body.toString());
  });
});

app.use(express.static(__dirname + '/app/public/dist'));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'app/public/dist', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);
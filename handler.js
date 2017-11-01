'use strict';

module.exports.getPhotos = (event, context, callback) => {
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'photo-bucket-tmp-prjct'
  };

  s3.listObjects(params, (err, data) => {
    const response = {
      statusCode: 200,
      headers: {
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Credentials": true
      },
      body: {
        message: JSON.stringify(data)
        //input: event,
      },
    };
    callback(null, response);
  });
};
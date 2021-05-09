var axios = require('axios');
var express = require('express');
var app = express();
var cors = require('cors')


app.use(cors());

app.get('/my-oauth', function (req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token'
  const CLIENT_ID = 'a785333efeff6818cd65'
  const CLIENT_SECRET = 'efccc828e778c3e6efdc524f05da3b4a6f3424e1'
  const CODE = req.query.code

  axios({
    method: 'post',
    url: GITHUB_AUTH_ACCESSTOKEN_URL,
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: CODE
    }
  })
  .then(function (response) {
    res.send({token: response.data.replace('access_token=','').replace('&scope=public_repo&token_type=bearer','')})
  })
  .catch(function (error) {
    console.error('Error ' + error.message)
  })
});

app.listen(3001, function () {
  console.log('my-oauth listening on port 3001!');
});

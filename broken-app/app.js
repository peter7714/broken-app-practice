const express = require('express');
const app = express();
const HandleError = require('./handleError');
const axios = require('axios');

app.use(express.json());

app.post('/', async function(req, res, next) {
    try {
      if(!req.body.developers){
        return res.json({message: 'add devs to body'});
      }
      let devs = req.body.developers;
      let result = [];
      for(let i=0; i<devs.length; i++){
        let dev = await axios.get(`https://api.github.com/users/${devs[i]}`);
        result.push(dev.data);
      };
      let final = result.map((d) => {
        return {name: d.login, bio: d.bio};
      })
      return res.json(final);
    } catch (e) {
      next(e)
    }
    });

// error handling //
app.use((req, res, next) =>{
  const err = new HandleError('Not Found', 404);
  return next(err);
});

app.use((err, req, res, next) =>{
  res.status(err.status || 500);
  return res.json({
      error: err,
      message: err.msg
  });
});

// setup app //
app.listen(3000, () => {
  console.log('App on port 3000');
});

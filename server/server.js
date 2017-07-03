const express = require('express');

var app = express();

app.get('/', (req, res) =>{
  res.send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});


//GET users
//Give users a name prop and age prop
app.get('/users', (req, res) => {
  res.send([{
    name: 'Anand',
    age: 30
  }, {
    name: 'Mike',
    age: 27
  }, {
    name: 'Jen',
    age: 30
  }]);
});

app.listen(3000);

module.exports = {
  app
};

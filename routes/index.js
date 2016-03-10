module.exports = function Routes(app,server){
  app.get('/', function(req,res){
    res.render('index')
  })
  app.post('/quotes', function(req,res){
  })
  app.get('/quotes', function(req,res){
  })
}

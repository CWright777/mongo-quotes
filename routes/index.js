module.exports = function Routes(app,Quotes){
  app.get('/', function(req,res){
    res.render('index')
  })
  app.post('/quotes', function(req,res){
    quotes = new Quotes({name: req.body.name, quote: req.body.quote})
    quotes.save(function(err){
      if(err){
        console.log("error")
      } else {
        res.redirect('/quotes')
      }
    })
  })
  app.get('/quotes', function(req,res){
    Quotes.find({},function(error,quotes){
      res.render('quotes',{quotes: quotes})
    })
  })
}

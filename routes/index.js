module.exports = function Routes(app,Quotes){
  var errors_array = [];
  app.get('/', function(req,res){
    res.render('index', {errors: errors_array})
  })
  app.post('/quotes', function(req,res){
    quotes = new Quotes({name: req.body.name, quote: req.body.quote})
    quotes.save(function(err){
      errors_array =[];
      if(err){
        for(var x in err.errors){
          errors_array.push(err.errors[x].message)
        }
        res.redirect('/')
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

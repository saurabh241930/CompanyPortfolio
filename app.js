var  methodOverride = require('method-override'),
         bodyParser = require('body-parser'),
           mongoose = require('mongoose'),
            express = require('express'),
              flash = require('connect-flash'),
           passport = require('passport'),
      LocalStrategy = require('passport-local'),
            Message = require('./models/Message'),
              User = require('./models/User'),
  
        
                app = express();


       
  var  authRoutes = require('./routes/index');

  var cloudinary = require('cloudinary');
  var multer = require('multer'); 


//seedDB(); //Seed the database

//================================================PASSPORT CONFIGURATION==================================================//

 cloudinary.config({ 
 cloud_name: 'dxotafsfa', 
 api_key: '247743586122155', 
 api_secret: 'lRSmFwRap_LS-tKzXQqgdqhv8Xo' 
 }); 




app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();
})



//================================================PASSPORT CONFIGURATION==================================================//

app.use(require('express-session')({
  secret: "This is secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//================================================PASSPORT CONFIGURATION==================================================//







   //==================================================APP CONFIG=========================================================//

   
   mongoose.Promise = global.Promise;
   mongoose.connect(process.env.DATABASEURL);
// mongoose.connect('mongodb://localhost/portfolio', { useMongoClient: true, });
   app.set('view engine','ejs');
   app.use(express.static(__dirname +'/public'));
   app.use(bodyParser.urlencoded({extended:true}));
   app.use(methodOverride('_method'));
  //===================================================APP CONFIG==========================================================//








  




 app.use(authRoutes);






// app.listen(3000, function () {
//   console.log('Server started');
// });

app.listen(process.env.PORT,process.env.IP, function () {
  console.log('Server started');
});
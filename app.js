var  methodOverride = require('method-override'),
         bodyParser = require('body-parser'),
           mongoose = require('mongoose'),
            express = require('express'),
              flash = require('connect-flash'),

               Message = require('./models/Message'),
  
        
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








//================================================PASSPORT CONFIGURATION==================================================//




   //==================================================APP CONFIG=========================================================//

   
   mongoose.Promise = global.Promise;
   mongoose.connect(process.env.DATABASEURL);
//    mongoose.connect('mongodb://chirag778:chirag123@ds255889.mlab.com:55889/boleh');
   app.set('view engine','ejs');
   app.use(express.static(__dirname +'/public'));
   app.use(bodyParser.urlencoded({extended:true}));
   app.use(methodOverride('_method'));
  //===================================================APP CONFIG==========================================================//




///Default event creation///
//   Main.find({},function(err,main){
//     if (err) {
//       console.log(err);
//     } else {
    
//       if(main.length === 0){
//         Main.create({
//         Description:"Description of CSI"
//      })
//       }
      
      
//     }
//   })
///Default event creation///





// //==============ADDING DATA================//
//     Course.create({
//      courseTitle:'HTML basics',
//      titleImage :'http://www.spilgames.com/wp-content/uploads/2014/12/documentation_html5_logo.png',
//      Chapters:[{"lessons":"Part 1"},{"lessons":"Part2"},{"lessons":"Part3"},{"lessons":"Part4"},{"lessons":"Part5"}]
//     });

// var datas = db.blogs.find({"creater.username":"developer"});
// console.log(datas);



    



  
//==============ADDING DATA================//

//==================================================RESTFUL ROUTES=========================================================//



 app.use(authRoutes);






// app.listen(3000, function () {
//   console.log('Server started');
// });

app.listen(process.env.PORT,process.env.IP, function () {
  console.log('Server started');
});
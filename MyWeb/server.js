var express = require('express');
var app = express();
var path = require('path');

app.set('view engine','pug');
app.set('views',path.join(__dirname+'/views'))
//app.configure, app.use etc
app.use("/images",express.static(path.join(__dirname + '/images')));
app.use("/css",express.static(path.join(__dirname + '/css')));
app.use(express.static(path.join(__dirname + '/js')));

app.get('/', function (req, res) {
       res.sendFile(path.join(__dirname + '/ui/index.html'));
});
app.get('/profile/:username',function(req,res){
        var str=`Introduce a little anarchy, upset the established order, and everything becomes chaos,
         I’m an agent of chaos , and you know the thing about chaos? It’s fair.”`
        res.render('profilePage',{name:'Jocker',about:str,image1:'prof_backView.jpg',image2:'prof_backView.jpg',image3:'prof_frontView.jpg'})
});
app.get('/profile/:username/newArticle',function(req, res){
  res.render('editor');
  //res.render('ArticleEditor');
})
app.get('/profile/:username/articleGallery',function(req, res){
  res.send("Need to design a pug file such that it is used to show all the articles written");
  //res.render('ArticleEditor');
})
app.set('port',8080);
app.listen(app.get('port'),function(){
  console.log("started listening")
});

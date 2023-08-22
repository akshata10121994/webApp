const path = require('path');
const port = 8000;
const hbs = require('hbs');
const express = require('express');
const app = express();

console.log(__dirname);
// const staticPath = (path.join(__dirname,'../public'));
const viewsPath = (path.join(__dirname,'../views'))
const templateFolderPath = (path.join(__dirname,'../template/views'));
const partialPath = (path.join(__dirname,'../template/partials'))

app.set('view engine', 'hbs');
// app.set('views', viewsPath)
app.set('views',templateFolderPath)
hbs.registerPartials(partialPath)

// app.use(express.static(staticPath));


app.get('/',(req,res)=>{
 res.render('index',{
  user:'vinod'
 })
})

app.get('/about',(req,res)=>{
  console.log(req.query);
   res.render('about',{
    name: req.query.name
   })
})

app.get('/about/*',(req,res)=>{
    res.render('404',{
      errorComment:"this about us page could not be found"
    })
})







app.get('*',(req,res)=>{
  res.render('404',{
    errorComment: 'this page could not be found'
  })
})


app.listen(port,(err)=>{
if(err){
    console.log('error occurs:',err);
}
    console.log('your request has been listened successfully at port no:',port);

})
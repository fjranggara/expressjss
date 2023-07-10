const express=require('express');

const app=express();

app.listen(2008,function(){
    console.log("server is running on port 2008")
})

app.get('/', function(request, response){
    response.send('home')
})
app.get('/about',function(request,response){
    response.send('About')
})
app.get('/user',function(request,response){
    response.send('get user')
})
app.post('/user',function(request,response){
    response.send('Post user')
})
app.put('/user/:id',function(request,response){
    const id=request.params.id
    response.send(id)
})
app.delete('/user/:delId',function(request,response){
    response.send(request.params.delId)
})





## middleware

DEf: c'est une function qui accede aux objects (request/response) et il passe un callback next()

```Javascript

function app.get('/path', function(req,res,next){
    // processing
    next()
})

```

```Javascript

function mid_one(req,res,next){
    req.user="Ali";
    console.log('my simple middleware');
    next();
}
function mid_two(req,res,next){
    req.password="toto";
    console.log('my second middleware');
    next();
}

// first variant
app.get('path',mid_one,mid_two,function(req,res){
    // processing
    res.json()
})

// second variant
app.get('path',mid_one)
app.get('path',mid_two)

app.get('path',function(req,res){
    // processing
    res.json()
})


// third variant
app.get('path',[mid_one,mid_two],function(req,res){
    // processing
    res.json()
})


// forth variant
app.use(mid_one)
app.use(mid_two)
app.get('path',,function(req,res){
    // processing
    res.json()
}))
```
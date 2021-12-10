## middleware

DEf: c'est une function qui accede aux objects (request/response) et il passe un callback next()

```Javascript

function app.get('/path', function(req,res,next){
    // processing
    next()
})

```
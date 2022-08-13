const User = require('../../../../model/user')
const {postModel} = require('../../../../model/post')
const user = require ('../../../../model/user')
//--- test crud user in mongodb
// function post(req,res){
//     let user = new User({
//         username : req.user.username,
//         password : req.user.password,
//         blog: req.body.data 
//     })
//     user.save()
//     .catch((e)=>{console.log('error when save');
//                  console.log(e)
//                  res.sendStatus(506)
//             })
//     .then((doc)=>{console.log('save sucess'); 
//                 console.log("doc",doc);
//                 res.sendStatus(206)
//                 })
    
// }

async function  postBlog (req,res){
    let writer;
    try{
    writer = await user.findOne({"username": req.user.username})
    console.log('writer', writer)
    }catch{(e)=>{
        console.log('have error  when find user to write blog\n', err)
    }}
     
    const post = new postModel({
        '_writter': writer._id,
        'title' : req.body.data.title,
        'content': req.body.data.content,
        'date': new Date()
    })
    const compareTitle =  new Promise((resolve, reject)=>{
        postModel.findOne({
            'title' : req.body.data.title
        },(err,sucess)=>{
            if (err){
                reject(err)
            }else{
                resolve(sucess)
            }
        })
    })

    await compareTitle.then( (sucess=>{
        if(!sucess){
            post.isNew = true
            console.log("title not duplicate")
        }
        else{
            post.isNew = false
            console.log("title duplicate")
        }
    }))
    .catch((err)=>{
        console.log("error when compare Title",err)
    })
    console.log(post.isNew)
    console.log(post)
    post.save()
    .then(()=>{
        console.log("save into db")
        res.sendStatus(206);
    })
    .catch((err)=>{
        res.sendStatus(406)
        console.log('cannot save into db', err)
    })
}
module.exports = postBlog;
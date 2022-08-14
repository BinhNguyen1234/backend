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
    let post;
    try{
    writer = await user.findOne({"username": req.user.username})
    console.log('writer', writer)
    }catch{(e)=>{
        console.log('have error  when find user to write blog\n', err);
    }}
     
   
    const compareTitle =  new Promise((resolve, reject)=>{
        postModel.findOne({
            'title' : req.body.data.title
        },(err,sucess)=>{
            if (err){
                reject(err);
            }else{
                resolve(sucess);
            }
        })
    })

    await compareTitle.then( (sucess=>{
        if(!sucess){
            
            console.log(`title not duplicate(${req.body.data.title})`)
            post = new postModel({
                '_writter': writer._id,
                'title' : req.body.data.title,
                'content': req.body.data.content,
                'date': new Date()
            })
            post.save()
            .then(()=>{
                console.log('content',req.body.data.content,)
                console.log("save into db")
                writer.updateOne({$push: {_post: post._id}},(err, result)=>{if(err){
                    console.log("error when updated post to writer",err)
                }else{
                    console.log('save new post to writer sucess', result)
                }
                })
                res.sendStatus(206);
            })
            .catch((err)=>{
                res.sendStatus(406)
                console.log('cannot save into db', err)
            })
            
        }
        else{
            res.sendStatus(406)
            console.log("title duplicate")
        }
    }))
    .catch((err)=>{
        console.log("error when compare Title",err)
    })
   
}
module.exports = postBlog;
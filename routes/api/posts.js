const router = require('express').Router()
const {Post} = require('../../db')
router.get('/',async (req,res)=>{
    const posts = await Post.findAll()
    res.json(posts);
    
})
router.post('/',async(req,res)=>{
    const post=await Post.create(req.body);
    res.json(post)
})
router.put('/:postId',async (req,res)=>{
    await Post.update(req.body,{
        where:{id:req.params.postId}
    })
    res.json({success:'It has been modified'})
})
router.delete('/:postId',async (req,res)=>{
    await Post.destroy({
        where:{id:req.params.postId}
    });
    res.json({success:'It has been removed'})
})
module.exports= router
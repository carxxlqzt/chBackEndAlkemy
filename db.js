const Sequelize = require('sequelize')
const PostModel = require('./models/posts')
const sequelize = new Sequelize('bv2j24vuWY','bv2j24vuWY','o3vta4pzrp',{
    host:'remotemysql.com',
    dialect:'mysql'
});
const Post = PostModel(sequelize,Sequelize);
sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sinc')
})
module.exports={
    Post
}
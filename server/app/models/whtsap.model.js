module.exports=(sequelize,Sequelize)=>{
    const Whtsap = sequelize.define('whtsap',{
        title:{
            type:Sequelize.STRING
        },
        description:{
            type:Sequelize.STRING
        },
        published:{
            type:Sequelize.BOOLEAN
        }
    });
    return Whtsap;
}
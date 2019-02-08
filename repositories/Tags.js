
const TagModel = require("./../models/Tags")
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const visible = ['id', 'name']
const limit = 10

module.exports = {
 
  all: function() {
    return TagModel.findAll({
      attributes: visible,
    })
  },

  byTag: function(tag) {
      return UserModel.find({
        attributes: visible,
        where: {tag}
      })
  },

  byId: function(id){
    return UserModel.findOne({where: {id}, attributes:visible})
  },

  active: function() {
    

  },

  activate: function(id){
    return UserModel.update(
      {
      actived_at: new Date
      },
      {
        where: {id}
      })

  },

  down: function(id){
    UserModel.update(
      {
        actived_at: null,
        deleted_at: new Date
      },
      {
        where: {id}
      }
    )
  },

  changeEmail: function(id, email){
    return UserModel.update({email}, {where: {id}})
  },

  changePassword: function(id, password){
    return UserModel.update({
      password: md5('password')
    }, {where: {id}})
  },


  modify: function(id, fields) {

    let toUpdate = {}

    updateable.forEach(field => {
      if(fields[field]) {
        return toUpdate[field] = fields[field]
      }
    })

    return UserModel.update(toUpdate, {where: {id}})

  }

}
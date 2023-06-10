const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addNewArticleSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  userId: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
})

const NewArticle = mongoose.model('NewArticle', addNewArticleSchema, 'add_new_article')
const mySchemas = {
  NewArticle: NewArticle,
}

module.exports = mySchemas

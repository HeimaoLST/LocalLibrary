const mongoose = require("mongoose");
const { DateTime } = require('luxon')
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// 虚拟属性'name'：表示作者全名
AuthorSchema.virtual("name").get(function () {
  return this.family_name + ", " + this.first_name;
});

// 虚拟属性'lifespan'：作者寿命
AuthorSchema.virtual("lifespan").get(function () {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString();
});
AuthorSchema.virtual("dateOfBirth").get( function() {
  let res = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATETIME_MED)
  
  return this.date_of_birth ? res :  "???"
})

AuthorSchema.virtual("dateOfDeath").get( function() {
  let res = DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATETIME_MED)
  
  return this.date_of_death ? res :  "???"
})


// 虚拟属性'url'：作者 URL
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id;
});

// 导出 Author 模型
module.exports = mongoose.model("Author", AuthorSchema);

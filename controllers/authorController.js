const author = require("../models/author");
const Author = require("../models/author");
const asyncHandler = require("express-async-handler");
const Book = require("../models/book");

// 显示完整的作者列表
exports.author_list = asyncHandler(async (req, res) =>  {

  authorList = await Author.find().sort([["family name",'ascending']]).exec()

  res.render('author_list',{
    title: "Author List",
    allAuthor:authorList
  })
  
});

// 为每位作者显示详细信息的页面
exports.author_detail = asyncHandler(async (req, res, next) => {
  const [author,allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({author:req.params.id},"title summary").exec()

  ])

  if (author === null){
    const err = new Error("Author not found")
    err.status = 404

    return next(err)
  }

  res.render('author_detail',{
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor
  })

})

// 由 GET 显示创建作者的表单
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：创建作者的 GET");
})

// 由 POST 处理作者创建操作
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：创建作者的 POST");
});

// 由 GET 显示删除作者的表单
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：删除作者的 GET");
});

// 由 POST 处理作者删除操作
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：删除作者的 POST");
});

// 由 GET 显示更新作者的表单
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("未实现：更新作者的 GET");
});

// 由 POST 处理作者更新操作
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("未实现：更新作者的 POST");
});

module.exports
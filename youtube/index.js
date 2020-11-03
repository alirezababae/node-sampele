const fs = require('fs')
const youtubedl = require('youtube-dl')
 
const video = youtubedl('https://www.youtube.com/watch?v=Fy9SdZLBTOo',
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname })
 
// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)
})
 
video.pipe(fs.createWriteStream('myvideo111.mp4'))



// const fs = require('fs')
// const youtubedl = require('youtube-dl')
 
// const video = youtubedl('https://youtu.be/Fy9SdZLBTOo',
//   // Optional arguments passed to youtube-dl.
//   ['--format=18'],
//   // Additional options can be given for calling `child_process.execFile()`.
//   { cwd: __dirname })
 
// // Will be called when the download starts.
// video.on('info', function(info) {
//   console.log('Download started')
//   console.log('filename: ' + info._filename)
//   console.log('size: ' + info.size)
// })
 
// video.pipe(fs.createWriteStream('Youdl.mp4'))




// var filename = "https://youtu.be/Fy9SdZLBTOo";
// var fs = require('fs');
// fs.readFile(filename, function (err, data){
//   if (err) return console.log(err);
//   // Header setup for download
//   res.writeHead(206,{
//     "Content-type" : "video/mp4",
//     "Content-length" : data.length,
//     "Content-disposition" : "attachment; filename="+req.query.filename+".mp4"
//   })

//   // fs(filename+'.mp4')
//   filename(fs.createWriteStream('myvideo2.mp4'))

//   res.send(data)
// });


// const youtubedl = require('youtube-dl')
 
// const url = 'http://www.youtube.com/watch?v=WKsjaOqDXgg'
// // Optional arguments passed to youtube-dl.
 
// youtubedl.getInfo(url, function(err, info) {
//   if (err) throw err
 
//   console.log('id:', info.id)
//   console.log('title:', info.title)
//   console.log('url:', info.url)
//   console.log('thumbnail:', info.thumbnail)
//   console.log('description:', info.description)
//   console.log('filename:', info._filename)
//   console.log('format id:', info.format_id)
// })
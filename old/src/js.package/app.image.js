
// 1. 得到二进制的图片格式
export function getBlob(file){
  let  url = null ;
  if (window.createObjectURL!=undefined) { // basic
    url = window.createObjectURL(file) ;
  } else if (window.URL!=undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file) ;
  } else if (window.webkitURL!=undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file) ;
  }
  return url ;
}

// 2. 修改图片的大小
export function updateSize( imgFile,compressWidth =  200  ){
  if(imgFile.width > compressWidth ) {
    let scaling = 1-( imgFile.width- compressWidth)/imgFile.width;
    imgFile.width = imgFile.width * scaling;
    imgFile.height = imgFile.height * scaling;
  }
  return imgFile;
}

// 3. 得到base64图片格式
export function getBase64(img,prop = 0.7 , size ){
  let canvas = document.createElement("canvas");
  if(size){
    img =  updateSize( img,size )
  }
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
  let dataUrl = canvas.toDataURL("image/jpeg",prop);
  ctx.clearRect( 0, 0, img.width, img.height);
  return dataUrl;
}

// 4. 得到压缩图片格式 返回的是base64数据格式
export function getCompress({type='file',value,prop = 0.7,size}){
  if(!value) return ;
  return new Promise((resolve,reject)=>{

    let img = value;
    if(type == 'file'){
      img = this.getBlob(value);
    }

    var image = new Image();
    image.src = img;
    image.onload =  () => {
      let dataUrl = getBase64(img,prop,size);
      resolve(dataUrl);
    };
    image.error = function(){
      console.log('图片压缩失败');
      reject('图片压缩失败');
    }
  })

}

// 5. 得到pc端的图片，传的参 是通过input file 选择的图片文件
export function getBase64PC(file){
  return new Promise((resolve,reject)=>{
    let reader = new FileReader();
    reader.onload = function() {
      let img = new Image();
      img.src = reader.result;
      img.onload = function () {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
        let dataUrl = canvas.toDataURL("image/jpeg",1);
        ctx.clearRect( 0, 0, img.width, img.height);
        resolve(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  })
}


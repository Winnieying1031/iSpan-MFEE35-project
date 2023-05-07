// 获取模态窗口
var modal= document.getElementById('myModal_1');
var modal= document.getElementById('myModal_2');
var players1 = document.getElementById('players1');
var players2 = document.getElementById('players2');

// 获取图片模态框，alt 属性作为图片弹出中文本描述
var img_players1 = document.getElementById('players1');
var img_players2 = document.getElementById('players2');
// var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img_players1.onclick = function(){
    modal.style.display = "block";
    
    // modalImg.src = this.src;
    // modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
img_players2.onclick = function(){
  modal.style.display = "block";
  
  // modalImg.src = this.src;
  // modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
}

// 获取 <span> 元素，设置关闭模态框按钮
var span = document.getElementsByClassName("btn-close")[0];

// 点击 <span> 元素上的 (x), 关闭模态框
span.onclick = function() { 
    modal.style.display = "none";
}

modal.addEventListener('click', function(e){
    console.log(e.target);
  if(e.target !== img01){
    modal.style.display = 'none';
  }
}, false);
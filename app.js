

window.onload = () =>{
      main();
}

function main(){
   const root = document.getElementById('root');
   const changeBackground = document.getElementById('clickBtn');

   changeBackground.addEventListener("click",function(){
      const bgColor = getGenerateRGB();
      root.style.backgroundColor = bgColor;
   });
}

function getGenerateRGB(){
      const red = Math.floor(Math.random()*255);
      const green = Math.floor(Math.random()*255);
      const blue = Math.floor(Math.random()*255);
      
      return `rgb(${red},${green},${blue})`;
}









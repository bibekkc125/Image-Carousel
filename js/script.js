let dim = {
    width: 600,
    height:400
}

//carousel container
let container = document.querySelector('.carousel-container');
let containercss = container.style;
containercss.width = dim.width + "px";
containercss.height = dim.height + "px";
containercss.overflow = "hidden";

//images 
let arr = document.querySelectorAll('.carousel-image-wrapper img');
let array = Array.from(arr);
array.forEach(item=>{
    item.style.width = dim.width + "px";
    item.style.height = dim.height + "px";
    item.style.float = "left";
})

const MAX_WIDTH = array.length * dim.width;
console.log(MAX_WIDTH);
//carousel wrapper
let wrapper = document.querySelector('.carousel-image-wrapper');
let wrappercss = wrapper.style; 
wrappercss.width = MAX_WIDTH + 'px';
wrappercss.height = dim.height + "px";
wrappercss.marginLeft = 0;
let delay = 16.67;
let currentIndex = 0;
let ti = 1;
let dir=-1;
let transition;
let animationDuration;
// console.log(targetIndex);
let temp = 0;   
let hold = 2000;        
class Carousel{
    previous(){
        console.log(ti);
        animationDuration = 10;
        this.animation();
        currentIndex = currentIndex - 1;
        console.log(currentIndex);
    }
    next(){
        animationDuration = -10;
        console.log(ti);
        this.animation();
        currentIndex = currentIndex + 1;
        console.log(currentIndex);
    }
    animation(){
        let transition = setInterval(function (){
            temp = temp + animationDuration;
            wrappercss.marginLeft = temp + 'px';
            // console.log(temp);
            // console.log(targetIndex * dim.width);
            // console.log((targetIndex * dim.width * dir));
            // console.log(`previous:${dir}`);
            // console.log(temp);
            if(temp == (currentIndex * dim.width * dir)){
                clearTimeout(transition);
                
                // console.log('hello');
            }
        },delay);
    }
    slideshow(){
           
        let tmintrvl = setInterval(()=>{
            let tmout = setTimeout(()=>{
                if (currentIndex <= array.length){
                    animationDuration = -10;
                    this.animation(); 
                    currentIndex = currentIndex + 1;
                    
                }
                else{
                    // console.log('hello');
                    animationDuration = +10;
                    console.log(temp);
                    this.animation();
                    currentIndex = currentIndex - 1;
                }
            },0);
        },3000);
         
    }
}
let a =new Carousel();
a.slideshow();

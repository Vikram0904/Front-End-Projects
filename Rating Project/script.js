let star=document.querySelectorAll(".rating");
let value=document.getElementById("result")
let starRating;

star.forEach((rate,index)=>{
    rate.addEventListener("click",()=>{
        starRating=index+1;
        if(starRating===1){
            value.innerHTML=`Rating:Low`;
        }
        if(starRating===2){
            value.innerHTML=`Rating:Average`;
        }
        if(starRating===3){
            value.innerHTML=`Rating:Good`;
        }
        if(starRating===4){
            value.innerHTML=`Rating:Very Good`;
        }
        if(starRating===5){
            value.innerHTML=`Rating:Awesome`;
        }

        star.forEach((rate,index)=>{
            if(starRating>=index+1){
                rate.innerHTML="&#9733"
            }
            else{
                rate.innerHTML="&#9734"
            }
        })
    })
})





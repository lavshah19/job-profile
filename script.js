let job=document.querySelectorAll(".job");
job.forEach((j)=>{
    j.addEventListener("click",()=>{
        // console.log(j);
        j.classList.toggle("active");
        j.firstElementChild.classList.toggle("active2");
        j.firstElementChild.firstElementChild.classList.toggle("white");
        // console.log( j.firstElementChild.firstElementChild);
        j.lastElementChild.classList.toggle("active3");
    })
});

    //   or you can use this also 
// j.children[0].classList.toggle("active2");
// j.children[1].classList.toggle("active3");

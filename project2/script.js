window.addEventListener("mousemove", function(details){
    let rect = document.querySelector('#rect');

    let Xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        50 + rect.getBoundingClientRect().width / 2,
      window.innerWidth - ( 50 + rect.getBoundingClientRect().width / 2),
      details.clientX
    );
   
    
    gsap.to('#rect', {
        left: Xval,
        ease : Power3
    });
    
});
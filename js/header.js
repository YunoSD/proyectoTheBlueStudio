let ultimoScroll = 0;
const header = document.querySelector("header");
 

window.addEventListener("scroll", () => {
    const scrollActual = window.scrollY;

    if(scrollActual <= 0){
        header.classList.remove("hide");
        return;
    }

    if(scrollActual > ultimoScroll){
        header.classList.add("hide");
    }else{
        header.classList.remove("hide");
    }

    ultimoScroll = scrollActual;
})
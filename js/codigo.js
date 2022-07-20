const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            document.querySelectorAll("main + section article")[0].classList.add("fadeIn");
        }
    })
});

observer.observe(document.querySelector("section + section h3"));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            document.querySelectorAll("section + section div article")[0].classList.add("fadeIn");
            document.querySelectorAll("section + section div article")[1].classList.add("fadeIn");
        }
    })
})

observer2.observe(document.querySelector("section + section div article:nth-last-of-type(3)"));

const observer3 = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            document.querySelectorAll("section + section div article")[2].classList.add("fadeIn");
            document.querySelectorAll("section + section div article")[3].classList.add("fadeIn");
        }
    })
})

observer3.observe(document.querySelector("form"));

const observer4 = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            document.querySelectorAll("form")[0].classList.add("fadeInLeft");
            document.querySelectorAll("form + div img")[0].classList.add("fadeInLeft");
        }
    })
})

observer4.observe(document.querySelector("fieldset input:last-of-type"))
const designIterationsNav = document.getElementById("designContainer");
const iterations = document.getElementsByClassName("design");

const top = document.querySelector("main");
top.setAttribute("id", "#Top");


function createIterationNav(){
    const ul = document.createElement("ul");
    for (let i=0; i < iterations.length; i++){
        const li = document.createElement("li");
        const a = document.createElement("a");

        const href = iterations[i].querySelector("h2").innerText;
        const trim_href = href.replaceAll(" ","");
        a.setAttribute("href", "#"+trim_href);
        a.innerText = href;

        iterations[i].setAttribute("id", trim_href);

        li.appendChild(a);
        ul.appendChild(li);
    }
    designIterationsNav.appendChild(ul);
}

function backToTop(){
    for (const iteration of iterations) {
        const nav = iteration.querySelector("nav");
        const a = document.createElement("a");
        a.innerText = "back to top";
        a.setAttribute("href", "#Top");
        nav.appendChild(a);
    }
}

createIterationNav();
backToTop();
const statsNav = document.getElementById("statsNav");
const statsArticles = document.getElementsByClassName("card");
const statsContent = document.getElementsByClassName("e-content");
const statsAnchors = document.getElementsByClassName("statsAnchor");
const statsHeaders = document.getElementsByClassName("statsName");

function createStatsNav(){
    const ul = document.createElement("ul");
    for (let i=0; i<statsArticles.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        const splitHeader = statsHeaders[i].innerText.split(":");
        const front = splitHeader[0];
        const trimHeader = front.replaceAll(" ","");
        let href = "#" + trimHeader;
        a.setAttribute("href", href);
        // a.innerText = statsHeaders[i].innerText;
        a.innerText = front;

        statsArticles[i].setAttribute("id", trimHeader);

        li.appendChild(a);
        ul.appendChild(li)
    }
    statsNav.appendChild(ul);
} 

function backToTop(){
    for (const stats of statsArticles) {
        const nav = stats.querySelector("nav");
        const a = document.createElement("a");
        a.innerText = "back to top";
        a.setAttribute("href", "#Top");
        nav.appendChild(a);
        }
}

function statsOpenClose(){
    for (let i=0; i<statsAnchors.length; i++) {
        const splitHeader = statsHeaders[i].innerText.split(":");
        const front = splitHeader[0];
        const trimHeader = front.replaceAll(" ","") + "Content";
        let _href = "#" + trimHeader;
        statsAnchors[i].setAttribute("href", _href);

        statsContent[i].setAttribute("id", trimHeader);
        statsContent[i].setAttribute("hidden", "until-found");

        const closeButton = document.createElement("button");
        closeButton.innerText = "close";
        statsContent[i].appendChild(document.createElement("br"));
        statsContent[i].appendChild(closeButton);

        closeButton.addEventListener("click", (event)=>{
            statsContent[i].setAttribute("hidden", "until-found");
            statsAnchors[i].scrollIntoView(true);
        })
        closeButton.addEventListener("touchstart", (event)=>{
            statsContent[i].setAttribute("hidden", "until-found");
            statsAnchors[i].scrollIntoView(true);
        },false)
    }
}

statsOpenClose();
backToTop();
createStatsNav();
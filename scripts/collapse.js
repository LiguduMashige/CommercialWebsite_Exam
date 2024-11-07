const designAnchor = document.getElementsByClassName("designAnchor");
const designContent = document.getElementsByClassName("content");
const designHeader = document.getElementsByClassName("headerName")

function iterationOpenClose(){
    for (let i=0; i<designAnchor.length; i++){
        const trimHeader = designHeader[i].innerText.replaceAll(" ","") + "Content";
        let _href = "#" + trimHeader;
        designAnchor[i].setAttribute("href", _href);

        designContent[i].setAttribute("id", trimHeader);
        designContent[i].setAttribute("hidden", "until-found");

        const closeButton = document.createElement("button");
        closeButton.innerText = "close";
        designContent[i].appendChild(document.createElement("br"))
        designContent[i].appendChild(closeButton);

        closeButton.addEventListener("click", (event)=>{
            designContent[i].setAttribute("hidden", "until-found");
            designAnchor[i].scrollIntoView(true);
        })
        closeButton.addEventListener("touchstart", (event)=>{
            designContent[i].setAttribute("hidden", "until-found");
            designAnchor[i].scrollIntoView(true);
        }, false)
    }
}

iterationOpenClose();
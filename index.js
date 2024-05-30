var Informations = document.getElementsByClassName("Informationss");
var Infocontents = document.getElementsByClassName("Info-contents");

function opentab(Informationname){
    for(Information of Informations){
        Information.classList.remove("active-link");
    }
    for(Infocontent of Infocontents){
        Infocontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(Informationname).classList.add("active-content");
}
let radios = document.querySelectorAll(".radio");
let blackeditioncon = document.querySelector("#blackedition-con");
let noreward = document.querySelector("#noreward-con");
let blackedipurch = document.querySelector("#blackedition-purchase")
let norewardpurch = document.querySelector("#noreward-purchase")

radios.forEach((e)=>{
    e.addEventListener("click",function (){
        noreward.style.border = "none";
        blackeditioncon.style.border = "none";
        blackedipurch.style.display = "none";
        norewardpurch.style.display = "none";
        let choosedcontainer = document.querySelector(`#${e.id}-con`);
        let purchasecon = document.querySelector(`#${e.id}-purchase`);
        choosedcontainer.style.border = "2px solid var(--Moderatehcyan)"
        purchasecon.style.display  = "Block";
    })
})
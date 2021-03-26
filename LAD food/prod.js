let btnSetData = document.getElementById("btnSetData");
btnSetData.addEventListener("click", function() {
    let prodInfo = {
        
        prodTitle: "Bún bò Huế",
        prodPrice: "20.00"
    };
    localStorage.setItem("prodInfo", JSON.stringify(prodInfo));
})
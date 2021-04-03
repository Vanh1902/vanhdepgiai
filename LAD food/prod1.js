let btnSetData = document.getElementById("btnSetData");
btnSetData.addEventListener("click", function() {
    let prodInfo = {
        prodId: "prod01",
        prodTitle: "Bún chả Hương Liên",
        prodPrice: "Giá trung bình:35.000đ - 50.000đ"
    
    };
    localStorage.setItem("prodInfo", JSON.stringify(prodInfo));
})
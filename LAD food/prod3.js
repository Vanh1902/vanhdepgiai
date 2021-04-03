let btnSetData1 = document.getElementById("btnSetData1");
btnSetData1.addEventListener("click", function() {
    let prodInfo1 = {
        prodId1: "prod01",
        prodTitle1: "Bún chả Hương Liên",
        prodPrice1: "Giá trung bình:35.000đ - 50.000đ"
    
    };
    localStorage.setItem("prodInfo1", JSON.stringify(prodInfo1));
})
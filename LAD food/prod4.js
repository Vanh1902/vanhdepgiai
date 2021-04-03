//Bước 1: lấy thông tin mã sản phẩm 
let prodInfo1 = JSON.parse(localStorage.getItem("prodInfo1"));

// Bước 2: kiểm tra có lấy được thông tin hay không
if(prodInfo1){
    // Bước 3: tìm kiếm sản phẩm trong danh sách sản phẩm thông qua prodId
}else{
    // Bước 4: Chuyển về trang index.html
}

document.getElementById("prodTitle1").innerHTML = prodInfo1.prodTitle1;
document.getElementById("prodPrice1").innerHTML = prodInfo1.prodPrice1;
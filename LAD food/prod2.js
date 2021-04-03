// Bước 1: lấy thông tin mã sản phẩm 
let prodInfo = JSON.parse(localStorage.getItem("prodInfo"));

// Bước 2: kiểm tra có lấy được thông tin hay không
if(prodInfo){
    // Bước 3: tìm kiếm sản phẩm trong danh sách sản phẩm thông qua prodId
}else{
    // Bước 4: Chuyển về trang index.html
}

document.getElementById("prodTitle").innerHTML = prodInfo.prodTitle;
document.getElementById("prodPrice").innerHTML = prodInfo.prodPrice;
var Product = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function() {
    Product.src = SmallImg[0].src;
}
SmallImg[1].onclick = function() {
    Product.src = SmallImg[1].src;
}
SmallImg[2].onclick = function() {
    Product.src = SmallImg[2].src;
}
SmallImg[3].onclick = function() {
    Product.src = SmallImg[3].src;
}
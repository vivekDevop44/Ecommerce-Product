document.querySelector(".menu_icon").addEventListener("click", () => {
  document.querySelector(".mobile_menu").style.display = "block";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".mobile_menu").style.display = "none";
});

badgeCount = 0;
const addToCartBtn = document.querySelector(".add_to_cart");
const cartContainer = document.querySelector(".cart_container");
const itemContainer = document.querySelector(".item");
const cartBtn = document.querySelector(".cart");
const badge = document.querySelector(".badge");
const quantity2 = document.querySelector(".quantity2");
const checkOutBtn = document.querySelector(".checkout");
const carImg = document.querySelectorAll(".car_img");
const carMainImg = document.querySelector(".car_main_img");

const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const image = document.createElement("img");
const deleteImage = document.createElement("img");
const para = document.createElement("p");
const quantitySpan = document.createElement("span");
const totalSpan = document.createElement("span");

image.src = images[0];
deleteImage.src = "images/icon-delete.svg";
quantitySpan.classList.add("quantity");
totalSpan.classList.add("total");
para.innerHTML = "Limited Edition Sneakers <br> $125.00 x &#160";

function addToCartItem() {
  para.insertBefore(quantitySpan, para[1]);
  para.insertAdjacentElement("beforeend", totalSpan);
  itemContainer.insertBefore(para, itemContainer[1]);
  itemContainer.insertAdjacentElement("afterbegin", image);
  itemContainer.insertAdjacentElement("beforeend", deleteImage);
  quantitySpan.innerHTML = badgeCount;

  totalSpan.innerHTML = "&#160 $" + badgeCount * 125 + ".00";
}

cartBtn.addEventListener("click", () => {
  cartContainer.classList.toggle("hide_cart_container");
  if (quantity2.innerHTML > 0) {
    while (itemContainer.hasChildNodes()) {
      itemContainer.removeChild(itemContainer.firstChild);
    }
    addToCartItem();
    checkOutBtn.style.display = "block";
  } else {
    itemContainer.innerText = "Your cart is empty";
    checkOutBtn.style.display = "none";
  }
});

deleteImage.addEventListener("click", () => {
  while (itemContainer.hasChildNodes()) {
    itemContainer.removeChild(itemContainer.firstChild);
    checkOutBtn.style.display = "none";
    badgeCount = 0;
    countHtml();
  }
});

let imgInd = 0;
const carasoulImage = document.querySelector(".carasoule img");
const backBtn = document.querySelector(".right");


document.querySelector(".right").addEventListener("click", () => {
  imgInd++;
  if (imgInd > images.length - 1) {
    imgInd = 0;
  }
  carasoulImage.src = images[imgInd];
});
document.querySelector(".left").addEventListener("click", () => {
  imgInd--;
  if (imgInd <= 0) {
    imgInd = images.length - 1;
  }
  carasoulImage.src = images[imgInd];
});
carImg.forEach((img) => {
  img.addEventListener("click", () => {
    console.log(img.src);
    carMainImg.src = img.src;
  });
});
carImg.forEach((img) => {
  img.addEventListener("mouseover", () => {
    console.log(img.src);
    carMainImg.src = img.src;
  });
});
function countHtml() {
  badge.innerHTML = badgeCount;
  quantity2.innerHTML = badgeCount;
}

addToCartBtn.addEventListener("click", () => {
  badgeCount++;
  countHtml();
});
document.querySelector(".add").addEventListener("click", () => {
  badgeCount++;
  countHtml();
});
document.querySelector(".minus").addEventListener("click", () => {
  badgeCount--;
  countHtml();
});

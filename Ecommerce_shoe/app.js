const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products =
    [
        {
            id: 1,
            title: "Jordan",
            price: "Rs19200",
            colors: [
                {
                    code: "blue",
                    img: "./image/p22.webp",
                },
                {
                    code: "Black",
                    img: "./image/p1.webp",
                },
            ],
        },
        {
            id: 2,
            title: "Air Max",
            price: "Rs11900",
            colors: [
                {
                    code: "Red",
                    img: "./image/a1.webp",
                },
                {
                    code: "Purple",
                    img: "./image/a2.webp",
                },
            ],
        },
        {
            id: 3,
            title: "Blazer",
            price: "Rs9750",
            colors: [
                {
                    code: "Green",
                    img: "./image/b1.avif",
                },
                {
                    code: "Blue",
                    img: "./image/b2.jpg",
                },
            ],
        },
        {
            id: 4,
            title: "Crater",
            price: "Rs14600",
            colors: [
                {
                    code: "Black",
                    img: "./image/c1.jpeg",
                },
                {
                    code: "Green",
                    img: "./image/c2.webp",
                },
            ],
        },
        {
            id: 5,
            title: "Hippie",
            price: "Rs17600",
            colors: [
                {
                    code: "Green",
                    img: "./image/d1.webp",
                },
                {
                    code: "Gray",
                    img: "./image/d2.jpeg",
                },
            ],
        },
    ];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = products[index];
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img;
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
            });
    });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    });

});
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black"
        size.style.color="white";
    });
});
const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");
productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})


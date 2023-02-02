const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 300;

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
    if (event.target.className == "fa-solid fa-minus") {
        if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
            event.target.parentElement.querySelector(".quantity").innerText--;
        } else {
            if (
                confirm(
                    `${
                        event.target.parentElement.parentElement.querySelector("h2").innerText
                } will be deleted!!!`
                )
            ) {
                event.target.closest(".product").remove();
            }
        }
    } else if (event.target.className == "fa-solid fa-plus") {
        event.target.previousElementSibling.innerText++;
    } else if (event.target.className == "remove-product") {
        // event.target.parentElement.parentElement.parentElement.remove()
        event.target.closest(".product").remove()
    }
    calculateProductPrice(event.target);
    calculateCartPrice();
});

const calculateProductPrice = (btn) => {
    const productInfoDiv = btn.parentElement.parentElement;
    //   console.log(productInfoDiv)
    const price = Number(productInfoDiv.querySelector(".product-price strong").innerText);
    const quantity = Number(productInfoDiv.querySelector(".quantity").innerText);
    const productTotalDiv = productInfoDiv.querySelector(".price");
    productTotalDiv.innerText = (price * quantity).toFixed(2);
}
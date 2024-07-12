document.addEventListener('DOMContentLoaded', () => {
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    const totalElement = document.querySelector(".total");
  
    const updateTotalPrice = () => {
      let totalPrice = 0;
      document.querySelectorAll(".card").forEach((card) => {
        const quantityElement = card.querySelector(".quantity");
        const unitPriceElement = card.querySelector(".unit-price");
        const quantity = parseInt(quantityElement.innerText);
        const unitPrice = parseFloat(unitPriceElement.innerText.replace('$', ''));
        totalPrice += quantity * unitPrice;
      });
      totalElement.innerText = `${totalPrice.toFixed(2)} $`;
    };
  
    plusButtons.forEach((plus, index) => {
      plus.addEventListener("click", () => {
        const card = plus.closest(".card");
        const quantityElement = card.querySelector(".quantity");
        let quantity = parseInt(quantityElement.innerText);
        quantity++;
        quantityElement.innerText = (quantity < 10) ? "" + quantity : quantity;
        updateTotalPrice();
      });
    });
  
    minusButtons.forEach((minus, index) => {
      minus.addEventListener("click", () => {
        const card = minus.closest(".card");
        const quantityElement = card.querySelector(".quantity");
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 0) {
          quantity--;
          quantityElement.innerText = (quantity < 10) ? "" + quantity : quantity;
          updateTotalPrice();
        }
      });
    });
  });
  
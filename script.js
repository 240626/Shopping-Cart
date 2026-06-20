function addToCart(name,price){

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${name} - $${price}</span>

        <div>
            <input type="number" value="1" min="1"
                   onchange="calculateTotal()">

            <button class="remove"
                    onclick="removeItem(this)">
                    Remove
            </button>
        </div>
    `;

    li.dataset.price = price;

    document.getElementById("cart").appendChild(li);

    calculateTotal();
}

function removeItem(btn){

    btn.closest("li").remove();

    calculateTotal();
}

function calculateTotal(){

    let total = 0;

    let items = document.querySelectorAll("#cart li");

    items.forEach(item => {

        let price = Number(item.dataset.price);

        let quantity =
        item.querySelector("input").value;

        total += price * quantity;
    });

    document.getElementById("total").innerText = total;
}
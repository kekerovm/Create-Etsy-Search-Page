const html = item
  .map(function(item) {
    return currency`
  <div class="product">
    <img src="http://placehold.it/200">
    <p class="title">${item.title}</p>
    <p class="price">${
      item.currency_code === "GBP" ? "pound;" : "$"
    }${item.price}  </p>
  </div>
  `
  })
  .join("\n")

document.querySelector("#product").innerHTML = html

// function current(strings, title, code, price) {}

function current(strings, title, code, price) {
  const curr = code === "GBP" ? "&pound;" : "$"

  return strings[0] + title + strings[1] + curr + price.toFixed[2] + strings[2]
}

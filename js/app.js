const products = [
  { title: "تیشرت", price: "20000", payment_link: "#" },
  { title: "شلوار", price: "35000", payment_link: "#" }
];

const productsDiv = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h2>${p.title}</h2>
    <p>قیمت: ${p.price}</p>
    <button onclick="buy('${p.title}', '${p.price}', '${p.payment_link}')">خرید</button>
  `;
  productsDiv.appendChild(div);
});

function buy(title, price, link) {
  const name = prompt("نام خود را وارد کنید:");
  const email = prompt("ایمیل:");
  const address = prompt("آدرس:");
  const quantity = prompt("تعداد:");
  if(name && email && address && quantity){
    alert(`برای پرداخت روی لینک زیر کلیک کنید:\n${link}`);
  }
}

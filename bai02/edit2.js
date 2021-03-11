let a = Number(prompt("Nhập số đầu tiên :"));
let b = Number(prompt("Nhập số thứ hai :"));
let c = Number(prompt("Nhập số thứ ba :"));
let product = a * b * c;
if (product < 0) {
    alert("Tích của 3 số mang dấu -");
} else if (product >= 0) {
    alert("Tích của 3 số mang dấu +");
} else {
    alert("Hãy nhập 3 số thực");
}
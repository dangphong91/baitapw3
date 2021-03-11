let a = Number(prompt("Nhập số đầu tiên :"));
let b = Number(prompt("Nhập số thứ hai :"));
let c = Number(prompt("Nhập số thứ ba :"));
let d = Number(prompt("Nhập số thứ tư :"));
let e = Number(prompt("Nhập số thứ năm :"));
if (Number.isInteger(a + b + c + d +e)) {
    if (a > b && a > c && a > d && a > e) {
        alert(a + " là số lớn nhất.");
    } else if (b > a && b > c && b > d && b > e) {
        alert(b + " là số lớn nhất.");
    } else if (c > a && c > b && c > d && c > e) {
        alert(c + " là số lớn nhất.");
    } else if (d > a && d > b && d > c && d > e) {
        alert(d + " là số lớn nhất.");
    } else if (e > a && e > b && e > c && e > d) {
        alert(e + " là số lớn nhất.");
    } else {
        alert("Hãy nhập 5 số khác nhau.");
    }
} else {
    alert("Hãy nhập 5 số thực.")
}
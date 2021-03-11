let a = Number(prompt("Nhập 1 số nguyên :"));
let b = Number(prompt("Nhập số nguyên thứ 2 :"));
let testa = a / parseInt(a);
let testb = b / parseInt(b);
if (testa == 1 && testb ==1) {
    if (a > b) {
        alert(a + " là số lớn hơn.");
    } else {
        alert(b + " là số lớn hơn.");
    }
} else {
    alert("Hãy nhập 2 số nguyên !!!");
}
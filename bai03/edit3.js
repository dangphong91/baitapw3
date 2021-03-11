let a = Number(prompt("Nhập số đầu tiên :"));
let b = Number(prompt("Nhập số thứ hai :"));
let c = Number(prompt("Nhập số thứ ba :"));
if (Number.isInteger(a + b + c)) {
    if (a > b && a > c) {
        if (b > c) {
            alert(a + " ," + b + " ," + c);
        } else {
            alert(a + " ," + c + " ," + b);
        }
    } else if (b > a && b > c) {
        if (a > c) {
            alert(b + " ," + a + " ," + c);
        } else {
            alert(b + " ," + c + " ," + a);
        }
    } else if (c > a && c > b) {
        if (a > b) {
            alert(c + " ," + a + " ," + b);
        } else {
            alert(c + " ," + b + " ," + a);
        }
    } else {
        alert("Yêu cầu 3 số khác nhau.");
    }
} else {
    alert("Hãy nhập 3 số thực.");
}
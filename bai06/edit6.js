let David = Number(prompt("Nhập điểm David :"));
let Vinoth = Number(prompt("Nhập điểm Vinoth :"));
let Divya = Number(prompt("Nhập điểm Divya :"));
let Ishitha = Number(prompt("Nhập điểm Ishitha :"));
let Thomas = Number(prompt("Nhập điểm Thomas :"));
let dtb = (David + Vinoth + Divya + Ishitha + Thomas) / 5;
if (dtb > 0 && dtb < 60) {
    alert("Xếp loại F");
} else if (dtb < 70) {
    alert("Xếp loại D");
} else if (dtb < 80) {
    alert("Xếp loại C");
} else if (dtb < 90) {
    alert("Xếp loại B");
} else if (dtb <= 100) {
    alert("Xếp loại A");
} else {
    alert("Điểm phải từ 0 - 100");
}
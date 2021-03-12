let number = Number(prompt("Nhập số sao 1 cạnh :"));
let i = 1;
for (; i <= number; i++) {
    for( let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
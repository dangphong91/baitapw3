let i = 1;
for (; i <= 100; i++) {
if (i % 5 == 0 && i % 3 ==0) {
    document.write(i + " FizzBuzz <br>");
} else if (i % 5 == 0) {
    document.write(i + " Buzz <br>");
} else if (i % 3 ==0) {
    document.write(i + " Fizz <br>");
} else {
    document.write(i + "<br>");
}
}
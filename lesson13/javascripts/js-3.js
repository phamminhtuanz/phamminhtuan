// Toán tử, toán hạng, biểu thức, câu lệnh, khối lệnh
//1.Toán tử số học: +, -, *, /, %,
var num1, num2;
//gán giá trị
num1 = 12;
num2 = 25;
// thực hiện các phép tính toán số học
res = num1*num2
console.log(num1, "*", num2,"=",res);
res = num1+num2
console.log(num1, "+", num2,"=",res);
res = num1-num2
console.log(num1, "-", num2,"=",res);
res = num1/num2
console.log(num1, "/", num2,"=",res);
res = num2%num1
console.log(num2, "%", num1,"=",res);

// phép toán so sánh => trả về giá trị kiểu boolean (true/flase)
// >; >=; <; <=; ==; !=; !==

res = num1>num2
console.log(num1, ">", num2,"=>",res);
res = num1<num2
console.log(num1, "<", num2,"=>",res);
res = num1>=num2
console.log(num1, ">=", num2,"=>",res);
res = num1<=num2
console.log(num1, "<=", num2,"=>",res);
res = num1==num2
console.log(num1, "==", num2,"=>",res);

//3. Toán tử logic (and &&; or ||; not !)

res = (num1>10) && (num2<10)
console.log("(num1>10) && (num2<10)=>", res);
res = (num1>10) || (num2<10)
console.log("(num1>10) || (num2<10)=>", res);
res = !((num1>10) || (num2<10))
console.log("(num1>10) || (num2<10)=>", res);
res = !(num1>10) || (num2<10)
console.log("(num1>10) || (num2<10)=>", res);

//4. toán tử đặc biệt
res = (num1 > 10)? "Gía trị lớn hơn":"nhỏ hơn";
console.log(res);
res = (num2 % 2 == 0)?"số chẵn":"số lẻ";
console.log(num2," là ",res);

// typeof
res = typeof(num1); //number
console.log("typeof(num1):", res);

rum1 = "12345";
res = typeof(num1); // string
console.log("typeof(num1):", res);

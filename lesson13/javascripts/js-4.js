//cấu trúc điểu khiển if
//dạng 1:if đơn
/*
cú pháp:
if(conndition-expression){
block statement;
}
*/
// ví dụ: cho số num; kiểm tra số num có là số dương?
num = 10;
if(num > 0){
    console.log(num, "là số dương");
}
//nếu num > 0 thì gán lại giá trị -100;
if(num > 0){
    num = -100;
    console.log(num);
}
//dạng 2: if ... else
num = 13;
//kiểm tra xem số num là số chẵn hay số lẻ
if(num % 2==0){
    console.log(num, "là số chẵn")
}else{
    console.log(num, "là số lẻ")
}
    //dạng 3: if bậc thang; if ... else if ...
    // kiểm tra số num là số nguyên dương, âm hay số 0
    num = -21;
    if(num > 0){
        console.log(num, "là số dương");
    }else if(num < 0){
        console.log(num, "là số âm")
    }else{
        console.log(num, "là số không")
    }

    //dạng 4: nested if
    num1 = 12;
    num2 = 15;
    //nếu num1 là số chẵn ; kiểm tra nếu num2 là số lẻ
    //thì tính: res = num1 + num2

    if(num1 % 2 == 0){
        if(num2 % 2 == 1){
            res = num1 + num2;
            console.log(res);
        }
    }else{
        if(num2 % 2 == 1){
            res = num1 - num2;
            console.log(res);
        }
    }

    // luyện tập 1 : giải phương trình bậc 1: ax+b=0

    // luyện tập 2: giải phương trình bậc 2 : ax^2+bx+c=0

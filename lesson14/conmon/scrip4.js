$(document).ready(function(){
    $("#HTML").click(function(){
        $("#HTML").css("backgroud-color","red");
        $("#content").text("HTML viết tắt là Hyper Text Markup Language");
        $("#PHP,#Css,#Jquery").css("backgroud-color","#ccc");
    })
    $("#Css").click(function(){
        $("#Css").css("backgroud-color","green");
        $("#content").text("Thay đổi màu mặc định của thẻ html");
        $("#PHP,#HTML,#Jquery").css("backgroud-color","#ccc");
    })
    $("#Jquery").click(function(){
        $("#Jquery").css("backgroud-color","blue");
        $("#content").text("jQuery là 1 thư viện của javascript");
        $("#PHP,#Css,#HTML").css("backgroud-color","#ccc");
    })
    $("#PHP").click(function(){
        $("#PHP").css("backgroud-color","aqua");
        $("#content").text("PHP là 1 ngôn ngữ lập trình phía sever");
        $("#HTML,#Css,#Jquery").css("backgroud-color","#ccc");
    })
})
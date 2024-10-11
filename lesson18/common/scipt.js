$(document).ready(function(){
    let isEditing=false;
    let editingIndex=null;
    if(!localStorage.getItem('student')){
        const itinialStudents =[

         { studentId: "SV001", studentName: "Nguyễn Văn An", age: 21, sex: true, birthDate: "2003-09-28", birthPlace: "HP", address: "Thủy Nguyên-Hải Phòng" },
         { studentId: "SV005", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
         { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "BN", address: "1, Ngô Quyền" },
         { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
         { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
        ];
        localStorage.setItem('students',JSON.stringify(itinialStudents));
    }
    function getStudents(){
        return JSON.parse(localStorage.getItem('students')) || [];
    }
    function saveStudents(students){
        localStorage.setItem('students',JSON.stringify(students));
    }
    function refreshTable(){
        const students = getStudents();
        $('#studentTable').html('');
        students.forEarch((students, index)=>{
            $("#studentTable").append(`
                <tr>
                <td>${index +1}</td>
                <td>${student.studenId}</td>
                <td>${student.studentName}</td>
                <td>${student.age}</td>
                <td>${student.sex ? 'Nam' : 'Nữ'}</td>
                <td>
                <button class="btn btn-info action viewBth" data-index=${index}">=Xem</button>
                <button class="btn btn-warning action editBth" data-index=${index}">=Sửa</button>
                <button class="btn btn-danger action deleteBth" data-index=${index}">=Xóa</button>
                </td>
                </tr>
            `)
        })
    }
    $('#saveStudentForm').submit(function(e){
        e.prevenDefaults();
        const students = getStudents();
        const student ={
            studenId: $('#studentID').val(),
            studentName:$('#studentName').val(),
            age:$('#studentAge').val(),
            sex:$('#studentGender').val(),
            birthDate:$('#studentBrithDate').val(),
            birthPlace:$('#studentBrithPlace').val(),
            address:$('#studenAddress').val(),
        };
    })
    if(isEditing){
        students[editingIndex] = student;
        isEditing=false;
        editingIndex=null;
    }
    else{
        students.push(students);
    }
    saveStudents(students);
    refreshTable();
    $('#studentForm').hide();
    $('#saveStudentForm')[0].reset();

    
});
$('#addStudenBtn').click(function(){
    $('#studentForm').show();
    $('formTitle').text('Thêm mới sinh viên');
    $('saveStudentForm')[0].reset;
    isEditing=false;
});
$(document).on('click','editBtn',function(){
    editingIndex=$(this).data('index');
    const students = getStudents();
    const student = students[editingIndex];
    $('#studentID').val(student.studenId);
    $('#studentName').val(student.studenName);
    $('#studentAge').val(student.age);
    $('#studentGender').val(student.sex ? 'true':'false');
    $('#studentBrithDate').val(student.birthDate);
    $('#studentBrithPlace').val(student.birthPlace);
    $('#studentAddress').val(student.address);
    $('#formTitle').text('Sửa sinh viên');
    isEditing=true;
});
$(document).on('click','deleteBtn',function(){
    const index=$(this).data('index');
    let students = getStudents();
    students.splice(index,1);
    saveStudents(students);
    refreshTable();
});
refreshTable();


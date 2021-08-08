function adminStudent(callback1, callback2) {
    let hasStudentEnrolled = true;
    let hasStudentLeft = false;

    if(hasStudentEnrolled){
        callback1({
            name: "Kriti Mishra",
            message: "I have enrolled"
        });
    }else if(hasStudentLeft){
        callback2({
            name: "xyz",
            message: "Student has left"
        })
    }else{
        callback2("Student is enjoying the course, he/she has enrolled in")
    }
}
function callback1(msg){
    console.log(msg)
}
function callback2(obj){
    console.log(obj.name)
    console.log(obj.message)
}
adminStudent(callback1, callback2);

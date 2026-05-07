// kerakli html teg lariga ulanish 

const form = document.querySelector (". content_form");
const input = document.querySelector (". form_input");
const addBtn = document.querySelector (". form_btn");
const todolist = document.querySelector (". todo_list");

form.addEventListener("subit" , function (e) {
    e.preventDefault(); // qayta yuklanishni o'chiradi 

    // Agar input faqat space dan iborat bo'lsa , dastur to'xtatishi kerak
    if(!input.ariaValueMax.trim()) {
        return;
    }

    console.log('input bosh emas');

}) ;

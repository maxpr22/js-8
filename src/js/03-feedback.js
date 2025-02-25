import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

const refs = {
    form : document.querySelector(".feedback-form"),
    email : document.querySelector("input"),
    textarea : document.querySelector("textarea"),
}

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onAllFieldInput, 500));


function onFormSubmit(evt){
    evt.preventDefault()
    if(refs.email.value === "" || refs.textarea.value === ""){
        return alert("Всі поля мають бути заповнені")
    }
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY)
    evt.target.reset()
    formData = {}
}

function onAllFieldInput(evt){
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(STORAGE_KEY , JSON.stringify(formData))
}

refs.email.value = formData.email ?? ""
refs.textarea.value = formData.message ?? ""


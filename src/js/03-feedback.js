import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
    form : document.querySelector(".feedback-form"),
    email : document.querySelector("input"),
    textarea : document.querySelector("textarea"),
}

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onAllFieldInput, 500));

function onFormSubmit(){

}


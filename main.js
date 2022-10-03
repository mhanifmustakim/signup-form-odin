const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const submitBtn = document.querySelector('form button[type="submit"]');

[pwd, confirmPwd].forEach((input) => {
    input.addEventListener("input", () => {
        if (pwd.value == "" || confirmPwd.value == "") return

        if (pwd.value !== confirmPwd.value) {
            pwd.classList.add("invalid-input");
            confirmPwd.classList.add("invalid-input");
            pwd.parentElement.querySelector(".error").hidden = false;
        } else {
            pwd.classList.remove("invalid-input");
            confirmPwd.classList.remove("invalid-input");
            pwd.parentElement.querySelector(".error").hidden = true;
        }
    })
})

submitBtn.addEventListener("click", (e) => {
    if (submitBtn.parentElement.querySelector(".invalid-input")) {
        e.preventDefault();
        alert("Error: Password entered does not match!");
    }
})
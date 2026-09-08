console.log("FrontEnd JS ishka tushdi");

function itemTemplate(item) {
    return `<li 
              class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
              <span class="item-text">${item.reja}</span>
              <div>
                <button
                 data-id="${item._id}" 
                 class="edit-me btn btn-secondary btn-sm mr-1">
                    O'zgartirish
                </button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
                    O'chirish
                </button>
              </div>
            </li>`;
}

// STEP6: BACKENDdan FRONTENTga yetip keldi
let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();  // TRADITIONAL API ni to'xtatish uchun. (Ya'ni 
                         // boshqat "page"ga o'tib ketmasligi uchun)
       
    axios      // REST API ni ishga tushirish uchun
    .post("/create-item", { reja: createField.value })
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data))
    createField.value = "";
    createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan xarakat qiling");
    });
});

document.addEventListener("click", function(e) {
    // DELETE oper
    console.log(e.target);
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan xarakat qiling");
            });
        }
    }

    // EDIT oper
    if(e.target.classList.contains("edit-me")) {
        let userInput = prompt("O'zgartirish kiriting",       // <-- EDIT bosilganda yangi text kiritish uchun 
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );     
        if (userInput) {                 // O'zgartirganda INPUTdaham o'zgartirish uchun mantiq
            axios.post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                new_input: userInput,               // o'zgartirilgan yangi input uchun
            }).then(response => {
                 console.log(response.data);
                 e.target.parentElement.parentElement.querySelector(".item-text")
                 .innerHTML = userInput;
            }).catch(err => {
                console.log("Iltimos qaytadan xarakat qiling ");
            })
        }
    }
});

// DELETE ALL oper

document.getElementById("clean-all").addEventListener("click", function(e) {
    console.log(e.target);
    if(confirm("Aniq o'chirmoqchimisiz?")) {
        axios
        .post("clean-all", {delete_all: true})
        .then(response => {
            alert(response.data.state);
            document.location.reload();
        })
    }
})
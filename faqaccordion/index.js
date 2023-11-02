//Select all Questions
const faq = document.querySelectorAll(".q-section");
//Creates a node list

//We're interating over each question for each question we have in object node list we have.
faq.forEach((faq) => {
    faq.addEventListener("click", () => {
        //if we want to change the class .question to show the answer, we need to add another class with css that shows it.
        if (faq.classList.contains("is-open")) {
            faq.classList.remove("is-open");
        } else {
            const faqOpen = document.querySelectorAll(".is-open");
            faqOpen.forEach((faqOpen) => {
                faqOpen.classList.remove("is-open")
            })

            faq.classList.add("is-open")
        }
    })
})

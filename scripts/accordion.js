const acc = document.querySelectorAll(".faq-item");
const panels = document.querySelectorAll(".faq-item_answer");
const titles = document.querySelectorAll(".faq-item__question");

acc.forEach((item, index) => {
    let panel = panels[index];
    const paddingTop = window.getComputedStyle(panel).paddingTop.slice(0, -2)
    const paddingBottom = window.getComputedStyle(panel).paddingBottom.slice(0, -2)

    item.addEventListener('click', () => {
        panel.classList.toggle("active");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            titles[index].classList.remove("active");
          } else {
            panel.style.maxHeight = panel.scrollHeight+ paddingBottom + paddingTop + "px";
            titles[index].classList.add("active");
          }
    })
})


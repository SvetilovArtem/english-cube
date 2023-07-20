const selectSingleList = document.querySelectorAll('.__select')
const selectSingleTitleList = document.querySelectorAll('.__select__title')
const selectSingleLabelsList = document.querySelectorAll('.__select__label')

let activeTitle = null

// Toggle menu
selectSingleTitleList.forEach((title, index) => {
    title.addEventListener('click', () => {
        if ('active' === selectSingleList[index].getAttribute('data-state')) {
            selectSingleList[index].setAttribute('data-state', '')
            activeTitle = null
        } else {
            selectSingleList[index].setAttribute('data-state', 'active')
            activeTitle = index
        }
      })
})

selectSingleLabelsList.forEach((label, index) => {
    label.addEventListener('click', (evt) => {
        selectSingleTitleList[activeTitle].innerHTML = evt.target.innerHTML;
        selectSingleList[activeTitle].setAttribute('data-state', '')
        console.log(selectSingleTitleList[index])
    })
})

// Close when click to option
// for (let i = 0; i < selectSingleLabelsList.length; i++) {
//     selectSingleLabelsList[i].addEventListener('click', (evt) => {
//         selectSingleTitleList[i].textContent = evt.target.innerHTML;
//         selectSingleList[i].setAttribute('data-state', '')
//   })
// }


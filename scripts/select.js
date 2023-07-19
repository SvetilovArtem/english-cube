const selectSingleList = document.querySelectorAll('.__select')
const selectSingleTitleList = document.querySelectorAll('.__select__title')
const selectSingleLabelsList = document.querySelectorAll('.__select__label')

// Toggle menu
selectSingleTitleList.forEach((title, index) => {
    title.addEventListener('click', () => {
        if ('active' === selectSingleList[index].getAttribute('data-state')) {
            selectSingleList[index].setAttribute('data-state', '')
        } else {
            selectSingleList[index].setAttribute('data-state', 'active')
        }
      })
})


// Close when click to option
for (let i = 0; i < selectSingleLabelsList.length; i++) {
    selectSingleLabelsList[i].addEventListener('click', (evt) => {
        selectSingleTitleList[i].textContent = evt.target.innerHTML;
        selectSingleList[i].setAttribute('data-state', '')
  })
}


const submitBtn = document.getElementById('submit')
const ratedStar = document.querySelector('.text-area span')
const button = document.querySelectorAll('.select-btn')
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')

// get value of butten
// interprolate it into rated div.

const selectedBtn = button.forEach((item) =>
  item.addEventListener('click', (e) => {
    return (ratedStar.textContent = `${e.target.textContent}`)
  })
)

submitBtn.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.remove('hidden')
})

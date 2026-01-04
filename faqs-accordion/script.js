const infoBox = document.querySelectorAll('.faq-container');
//console.log(infoBox)
const answer = document.querySelectorAll('.answer');
//console.log(answer)
for (let i = 0; i < infoBox.length; i++) {
    infoBox[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

// HEADER MODAL
const buyModal = document.querySelector('.buy__modal-bg')
const cartBtn = document.querySelector('.cart')
const buyModalClose = document.querySelector('.buy__modal-close')
cartBtn.addEventListener('click', () => {
    buyModal.classList.toggle('buy__modal-active')
})
buyModal.addEventListener('click', (e) => {
    if (e.target.className == 'buy__modal-bg buy__modal-active') {
        buyModal.classList.toggle('buy__modal-active')
    } else {
        return
    }
})
buyModalClose.addEventListener('click', () => {
    buyModal.classList.toggle('buy__modal-active')
})  
// DB
const tikets = document.querySelector('.tikets')

fetch("http://localhost:3001")
    .then((res) => res.json())
    .then((tiket) => {
        return tiket.map(tiket => {
            const div = document.createElement('div')
            div.className = 'tiket'
            tikets.append(div)
            div.innerHTML =
                `
        <div class='tiket__info-left'>
            <div class='tiket__way'>
                <div class='tiket__from'>${tiket.from}</div> 
                -
                <div class='tiket__to'>${tiket.to}</div>
            </div>
            <div class="tiket__transport">
                <p>${tiket.transport}</p>
            </div>
        </div>
        <div class='ticket__arrow'>^</div>
        <div class='tiket__info-right'>
                <p class="tiket__price">${tiket.price}</p>
                <p class="tiket__date">${tiket.date}</p>
        </div>
        `
        })
    })
    .catch((e) => {
        console.log(e)
        return tikets.innerHTML = "DataBase not working"
    })
// SEARCH
let searchBtn = document.querySelector('.search__btn')
let searchFrom = document.querySelector('.search__from')
let searchTo = document.querySelector('.search__to')
let searchDate = document.querySelector('.search__date')

function deleteTikets(tiket, to) {

    tiket.forEach(e => {
        if (to.innerHTML == searchTo.value || searchTo.value == '') {
            e.classList.remove('delete')
            console.log(e);
        } else {
            console.dir(e);
            e.classList.add('delete')
        }
    });
}

searchBtn.addEventListener('click', () => {
    let tiket = document.querySelectorAll('.tiket')
    let to = document.querySelectorAll('.tiket__to')

    deleteTikets(tiket, to)
})
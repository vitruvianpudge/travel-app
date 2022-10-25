// HEADER MODAL
// const buyModal = document.querySelector('.buy__modal-bg')
// const cartBtn = document.querySelector('.cart')
// const buyModalClose = document.querySelector('.buy__modal-close')
// cartBtn.addEventListener('click', () => {
//     buyModal.classList.toggle('buy__modal-active')
// })
// buyModal.addEventListener('click', (e) => {
//     if (e.target.className == 'buy__modal-bg buy__modal-active') {
//         buyModal.classList.toggle('buy__modal-active')
//     } else {
//         return
//     }
// })
// buyModalClose.addEventListener('click', () => {
//     buyModal.classList.toggle('buy__modal-active')
// })

// DB
const tickets = document.querySelector('.tickets')


async function dbOrder() {
    await fetch("http://localhost:3001")
        .then((res) => res.json())
        .then((ticket) => {
            return ticket.map(ticket => {
                const div = document.createElement('div')
                div.className = 'ticket'
                tickets.append(div)
                div.innerHTML =
                    `
        <div class='ticket__inner'>            
            <div class='ticket__info-left'>
                <div class='ticket__way'>
                    <div class='ticket__from'>${ticket.from}</div> 
                    -
                    <div class='ticket__to'>${ticket.to}</div>
                </div>
                <div class="ticket__transport">
                    <p>${ticket.transport}</p>
                </div>
            </div>
            <div class='ticket__arrow'>^</div>
            <div class='ticket__info-right'>
                <p class="ticket__price">${ticket.price}</p>
                <p class="ticket__date">${ticket.date}</p>
            </div>
        </div>
        <div id="${ticket.transport}" class="ticket__img">
            <img src="./images/${ticket.transport}.svg">
        </div>
        `
            })
        })
        .catch((e) => {
            console.log(e)
            return tickets.innerHTML = "DataBase not working"
        })

    //accordion 

    let ticketInner = document.querySelectorAll('.ticket__inner')

    ticketInner.forEach((e) => {
        e.addEventListener('click', () => {
            e.nextElementSibling.classList.toggle('active')
        })
    });

    //place
    let ticketImg = document.querySelectorAll('.ticket__img')
    ticketImg.forEach(e => {
        const div = document.createElement('div')
        div.className = ''
        e.append(div)
        if (e.id == 'plane') {
            div.innerHTML = `
            <div class='plase__plane'>
            <div class='place__column'>
                <div class='plase__row'>
                    <button class='place__nummber place__nummber-small'>1</button>
                    <button class='place__nummber place__nummber-small'>2</button>
                    <button class='place__nummber place__nummber-small'>3</button>
                    <button class='place__nummber place__nummber-small'>4</button>
                    <button class='place__nummber place__nummber-small'>5</button>
                    <button class='place__nummber place__nummber-small'>6</button>
                    <button class='place__nummber place__nummber-small'>7</button>
                    <button class='place__nummber place__nummber-small'>8</button>
                    <button class='place__nummber place__nummber-small'>9</button>
                    <button class='place__nummber place__nummber-small'>10</button>
                    <button class='place__nummber place__nummber-small'>11</button>
                    <button class='place__nummber place__nummber-small'>12</button>
                </div>
                <div class='plase__row'>
                    <button class='place__nummber place__nummber-small'>13</button>
                    <button class='place__nummber place__nummber-small'>14</button>
                    <button class='place__nummber place__nummber-small'>15</button>
                    <button class='place__nummber place__nummber-small'>16</button>
                    <button class='place__nummber place__nummber-small'>17</button>
                    <button class='place__nummber place__nummber-small'>18</button>
                    <button class='place__nummber place__nummber-small'>19</button>
                    <button class='place__nummber place__nummber-small'>20</button>
                    <button class='place__nummber place__nummber-small'>21</button>
                    <button class='place__nummber place__nummber-small'>22</button>
                    <button class='place__nummber place__nummber-small'>23</button>
                    <button class='place__nummber place__nummber-small'>24</button>
                </div>
            </div>
            <div class='place__column'>
            <div class='plase__row'>
                <button class='place__nummber place__nummber-small'>25</button>
                <button class='place__nummber place__nummber-small'>26</button>
                <button class='place__nummber place__nummber-small'>27</button>
                <button class='place__nummber place__nummber-small'>28</button>
                <button class='place__nummber place__nummber-small'>29</button>
                <button class='place__nummber place__nummber-small'>30</button>
                <button class='place__nummber place__nummber-small'>31</button>
                <button class='place__nummber place__nummber-small'>32</button>
                <button class='place__nummber place__nummber-small'>33</button>
                <button class='place__nummber place__nummber-small'>34</button>
                <button class='place__nummber place__nummber-small'>35</button>
                <button class='place__nummber place__nummber-small'>36</button>
            </div>
            <div class='plase__row'>
                <button class='place__nummber place__nummber-small'>37</button>
                <button class='place__nummber place__nummber-small'>38</button>
                <button class='place__nummber place__nummber-small'>39</button>
                <button class='place__nummber place__nummber-small'>40</button>
                <button class='place__nummber place__nummber-small'>41</button>
                <button class='place__nummber place__nummber-small'>42</button>
                <button class='place__nummber place__nummber-small'>43</button>
                <button class='place__nummber place__nummber-small'>44</button>
                <button class='place__nummber place__nummber-small'>45</button>
                <button class='place__nummber place__nummber-small'>46</button>
                <button class='place__nummber place__nummber-small'>47</button>
                <button class='place__nummber place__nummber-small'>48</button>
            </div>
        </div>
        </div>
            `
        } else if (e.id == 'train') {
            div.innerHTML = `
        <div class='plase__train'>
            <div class='place__column'>
                <div class='plase__row'>
                    <button class='place__nummber place__nummber-normal'>1</button>
                    <button class='place__nummber place__nummber-normal'>2</button>
                    <button class='place__nummber place__nummber-normal'>3</button>
                    <button class='place__nummber place__nummber-normal'>4</button>
                    <button class='place__nummber place__nummber-normal'>5</button>
                    <button class='place__nummber place__nummber-normal'>6</button>
                    <button class='place__nummber place__nummber-normal'>7</button>
                    <button class='place__nummber place__nummber-normal'>8</button>
                    <button class='place__nummber place__nummber-normal'>9</button>
                    <button class='place__nummber place__nummber-normal'>10</button>
                    <button class='place__nummber place__nummber-normal'>11</button>
                    <button class='place__nummber place__nummber-normal'>12</button>
                </div>
                <div class='plase__row'>
                    <button class='place__nummber place__nummber-normal'>13</button>
                    <button class='place__nummber place__nummber-normal'>14</button>
                    <button class='place__nummber place__nummber-normal'>15</button>
                    <button class='place__nummber place__nummber-normal'>16</button>
                    <button class='place__nummber place__nummber-normal'>17</button>
                    <button class='place__nummber place__nummber-normal'>18</button>
                    <button class='place__nummber place__nummber-normal'>19</button>
                    <button class='place__nummber place__nummber-normal'>20</button>
                    <button class='place__nummber place__nummber-normal'>21</button>
                    <button class='place__nummber place__nummber-normal'>22</button>
                    <button class='place__nummber place__nummber-normal'>23</button>
                    <button class='place__nummber place__nummber-normal'>24</button>
                </div>
            </div>
            <div class='place__column'>
            <div class='plase__row'>
                <button class='place__nummber place__nummber-normal'>25</button>
                <button class='place__nummber place__nummber-normal'>26</button>
                <button class='place__nummber place__nummber-normal'>27</button>
                <button class='place__nummber place__nummber-normal'>28</button>
                <button class='place__nummber place__nummber-normal'>29</button>
                <button class='place__nummber place__nummber-normal'>30</button>
                <button class='place__nummber place__nummber-normal'>31</button>
                <button class='place__nummber place__nummber-normal'>32</button>
                <button class='place__nummber place__nummber-normal'>33</button>
                <button class='place__nummber place__nummber-normal'>34</button>
                <button class='place__nummber place__nummber-normal'>35</button>
                <button class='place__nummber place__nummber-normal'>36</button>
            </div>
            <div class='plase__row'>
                <button class='place__nummber place__nummber-normal'>37</button>
                <button class='place__nummber place__nummber-normal'>38</button>
                <button class='place__nummber place__nummber-normal'>39</button>
                <button class='place__nummber place__nummber-normal'>40</button>
                <button class='place__nummber place__nummber-normal'>41</button>
                <button class='place__nummber place__nummber-normal'>42</button>
                <button class='place__nummber place__nummber-normal'>43</button>
                <button class='place__nummber place__nummber-normal'>44</button>
                <button class='place__nummber place__nummber-normal'>45</button>
                <button class='place__nummber place__nummber-normal'>46</button>
                <button class='place__nummber place__nummber-normal'>47</button>
                <button class='place__nummber place__nummber-normal'>48</button>
            </div>
        </div>
        </div>
            `
        }
    });
    //add to card 
    let modalItems = document.querySelector('.buy__modal-items')
    let placeNummber = document.querySelectorAll('.place__nummber')

    placeNummber.forEach(e => {
        e.addEventListener('click', () => {
            e.classList.toggle('place__active')
            // console.dir(e);
            // if (e.classList.length == 3) {
            //     console.log('+');
            //     const div = document.createElement('div')
            //     div.className = ''
            //     modalItems.append(div)
            //     div.innerHTML = ``
            // } else if (e.className == 'place__nummber') {
            //     modalItems.remove(div)
            // }

        })
    });
}

dbOrder()

// SEARCH
let searchBtn = document.querySelector('.search__btn')
let searchFrom = document.querySelector('.search__from')
let searchTo = document.querySelector('.search__to')
let searchDate = document.querySelector('.search__date')




searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    let ticket = document.querySelectorAll('.ticket')
    let inputFrom = document.querySelectorAll('.ticket__from')
    let inputTo = document.querySelectorAll('.ticket__to')
    let ticket__date = document.querySelectorAll('.ticket__date')

    inputTo.forEach(e => {
        let inputToText = searchTo.value
        console.dir(inputToText.value);
        // console.log(e.innerHTML);
        if (inputToText == e.innerHTML || inputToText == '' ) {
                e.closest('.ticket').classList.remove('hide')
                e.closest('.ticket').classList.add('show')
            console.log('inputToText +');

        } else {
            console.log('inputToText -');
                e.closest('.ticket').classList.remove('show')
                e.closest('.ticket').classList.add('hide')
        }
    });

    inputFrom.forEach(e => {
        let inputFromText = searchFrom.value

        if (inputFromText == e.innerHTML || inputFromText == '') {
            e.closest('.ticket').classList.add('show')
        } else {
            e.closest('.ticket').classList.add('hide')
        }
    });

    ticket__date.forEach(e => {
        let inputDateText = searchDate.value
        let inputDateYear = (inputDateText.slice(0, 4));
        let inputDateMount = (inputDateText.slice(5, 7));
        let inputDateDay = (inputDateText.slice(8, 10));
        let inputDate = `${inputDateDay + '-' + inputDateMount+ '-'+ inputDateYear}`

        if (inputDate == e.innerHTML || inputDateText == '') {
            e.closest('.ticket').classList.add('show')
            console.log('ticket__date +');
        } else {
            console.log('ticket__date -');
            e.closest('.ticket').classList.add('hide')
        }
    });
})

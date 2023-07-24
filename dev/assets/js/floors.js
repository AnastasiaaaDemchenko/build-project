const flats = document.querySelectorAll('.flat')

flats.forEach(flat => {
  if(flat.classList.contains('booking')){
    flat.querySelector('.status-text').innerHTML = "Бронь"
  } else if (flat.classList.contains('action')) {
    flat.querySelector('.status-text').innerHTML = "Акция"
  } else if (flat.classList.contains('sold')) {
    flat.querySelector('.status-text').innerHTML = "Продано"
  }
  else {
    flat.querySelector('.status-text').innerHTML = "Свободно"
  } 
})

// window.addEventListener('load', function(){
//     if(document.querySelector('.floor-plan-page')){
//         installFloorPlan()
//     } else {
//         null
//     }
// })

const flatArray = [
  {
    id: 0,
    house: 2,
    floor: 13,
    rooms: 3,
    square: "82.3 м²",
    price: "700$",
    priceTotal: "57610$",
    flatNumber: 1,
    status: "Бронь"
  },

  {
    id: 1,
    house: 2,
    floor: 13,
    rooms: 2,
    square: "65 м²",
    price: "600$",
    priceTotal: "39000$",
    flatNumber: 2,
    status: "Продано"
  },

  {
    id: 2,
    house: 2,
    floor: 13,
    rooms: 2,
    square: "65 м²",
    price: "500$",
    priceTotal: "32500$",
    flatNumber: 3,
    status: "Акция"
  },

  {
    id: 3,
    house: 4,
    floor: 13,
    rooms: 3,
    square: "80 м²",
    price: "700$",
    priceTotal: "56000$",
    flatNumber: 4,
    status: "Свободно"
  },

  {
    id: 4,
    house: 2,
    floor: 13,
    rooms: 3,
    square: "82.3 м²",
    price: "550$",
    priceTotal: "45000$",
    flatNumber: 5,
    status: "Акция"
  },

  {
    id: 5,
    house: 2,
    floor: 13,
    rooms: 1,
    square: "40 м²",
    price: "400$",
    priceTotal: "16000$",
    flatNumber: 6,
    status: "Свободно"
  },

  {
    id: 6,
    house: 2,
    floor: 13,
    rooms: 2,
    square: "47 м²",
    price: "500$",
    priceTotal: "23500$",
    flatNumber: 7,
    status: "Бронь"
  },

  {
    id: 7,
    house: 2,
    floor: 13,
    rooms: 2,
    square: "40 м²",
    price: "400$",
    priceTotal: "16000$",
    flatNumber: 8,
    status: "Свободно"
  },

  {
    id: 8,
    house: 2,
    floor: 13,
    rooms: 3,
    square: "82.3 м²",
    price: "550$",
    priceTotal: "45000$",
    flatNumber: 9,
    status: "Продано"
  },
]

window.addEventListener('load', function() {
  document.querySelector('.floor-plan-page') ? installFloorPlan() : null;

  function installFloorPlan() {


      const flatGroup = document.querySelectorAll(".flat")
      const flatInfo = document.querySelector('#flat-info')

      function deleteActiveClass() {
          flatGroup.forEach(active => {
              active.classList.remove('active')
          })
      }

      const flatObj = [{
          id: 0,
          house: "2",
          floor: "1",
          rooms: "3",
          square: "82.3 м.кв.",
          price: "700$",
          priceTotal: "52500$",
          flatNumber: 1,
          status: "Бронь",
      }]

      const renderInfo = (array) => {
        const flatInformation = array.map(item => {
          return (`
          <div class="flat-item flat-info__house">
              Номер дома : <b id="house-number">${item.house}</b>
          </div>
          <div class="flat-item flat-item--floor">
              Этаж: <b id="floor-number">${item.floor}</b>
          </div>
          <div class="flat-item flat-item--rooms">
              Кол-во комнат: <b id="rooms-quantity">${item.rooms}</b>
          </div>
          <div class="flat-item flat-item--square">
              Площадь квартиры: <b id="flat-square">${item.square}</b>
          </div>
          <div class="flat-item flat-item--price">
              Цена за м²: <b id="price-meter">${item.price}</b>
          </div>
          <div class="flat-item flat-item--price-total">
              Цена за квартиру: <b id="price-total">${item.priceTotal}</b>
          </div>
          <div class="flat-item flat-item--number">
              Номер квартиры: <b id="flat-number">${item.flatNumber}</b>
          </div>
          <div class="flat-item flat-item--status">
              Статус квартиры: <b id="flat-status">${item.status}</b>
          </div>
          `)
        })

        flatInfo.innerHTML = flatInformation
      }
      renderInfo(flatObj)

      flatGroup.forEach(flat => {
        flat.addEventListener('click', () => {

            deleteActiveClass()
            flat.classList.add('active')

            let thisFlat = flat.getAttribute('data-number')

            let flatNumber = flatArray.filter(obj => obj.flatNumber === Number(thisFlat))
            console.table(flatNumber);

            renderInfo(flatNumber)
        })
    })
}
})
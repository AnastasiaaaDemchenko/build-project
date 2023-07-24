const builds = document.querySelectorAll('.build');
const buildValue = document.querySelector('#build-value');
const stagesValue = document.querySelector('#stages-value');
const flatsValue = document.querySelector('#flats-value');
const buildDescriptions = document.querySelector('.build-info__descriptions');
const buildLinks = document.querySelectorAll('.build-link');

builds.forEach(build => {
    build.addEventListener('mouseover', function () {
        const dataBuildNumber = build.getAttribute('data-build-number');
        const dataStagesNumber = build.getAttribute('data-stages-number');
        const dataFlatsNumber = build.getAttribute('data-flats-number');
        const dataDescriptions = build.getAttribute('data-descriptions');

        buildValue.innerHTML = dataBuildNumber;
        stagesValue.innerHTML = dataStagesNumber;
        flatsValue.innerHTML = dataFlatsNumber;
        buildDescriptions.innerHTML = dataDescriptions;      
    })
})

buildLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        if (link.classList.contains('sold')){
            const path =  link.querySelector(".build")       
            path.style.fill = "#ff41417f";
            path.style.stroke = "#ff4141ce";
        }
    })

    link.addEventListener('mouseout', function() {
        if (link.classList.contains('sold')){
            const path =  link.querySelector(".build")       
            path.style.fill = "#bdbddb00";
            path.style.stroke = "#00000000";
        }
    })

    link.addEventListener('click', function(event){
        if (link.classList.contains('sold')){
            event.preventDefault();
            alert('Все квартиры распроданы')
        } else {
            null
        }
    })
})

const floors = document.querySelectorAll('.floor')
const floorItem = document.querySelector('#floor-item')
const flatsFree = document.querySelector('#flats-free')
const flatsBooking = document.querySelector('#flats-booking')
const flatsAction = document.querySelector('#flats-action')
const flatsSold = document.querySelector('#flats-sold')

floors.forEach(floor =>{
    floor.addEventListener('mouseover', ()=> {
        const dataFloorItem = floor.getAttribute('data-floor-item')
        const dataFlatsFree = floor.getAttribute('data-flats-free')
        const dataFlatsBooking = floor.getAttribute('data-flats-booking')
        const dataFlatsAction = floor.getAttribute('data-flats-action')
        const dataFlatsSold = floor.getAttribute('data-flats-sold')

        floorItem.innerHTML = dataFloorItem;
        flatsFree.innerHTML = dataFlatsFree;
        flatsBooking.innerHTML = dataFlatsBooking;
        flatsAction.innerHTML = dataFlatsAction;
        flatsSold.innerHTML = dataFlatsSold;
    })
})
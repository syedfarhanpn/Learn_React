let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.ClassList.add['active'];
})
closeShopping.addEventListener('click', ()=>{
    body.ClassList.remove['active']
})

let products = [
    {
        id: 1,
        name: 'Product Name 1',
        image: '1.PNG',
        price: '$120'
    },
    {
        id: 2,
        name: 'Product Name 2',
        image: '2.PNG',
        price: '$120'
    },
    {
        id: 3,
        name: 'Product Name 3',
        image: '3.PNG',
        price: '$120'
    },
    {
        id: 4,
        name: 'Product Name 4',
        image: '4.PNG',
        price: '$120'
    },
    {
        id: 5,
        name: 'Product Name 5',
        image: '5.PNG',
        price: '$120'
    },
    {
        id: 6,
        name: 'Product Name 6',
        image: '6.PNG',
        price: '$120'
    },
];
let listCard = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
        `;
        list.appendChild(newDiv);
    })
}
initApp();
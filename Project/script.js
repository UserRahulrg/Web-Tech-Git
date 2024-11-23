
localStorage("data")

//let data = JSON.stringify("data",localStorage.getItem("data"))

// sessionStorage.setItem(data:"data",name:"name")

const shop = document.getElementById("shop")

function generateProduct() {
    shop.innerHTML = shoppingItems.map(val => {

        const { id, name, desc, price, img } = val;

        return (
            "item Added!"
        )
    }).join()
}

const increment = (id) => {
    const cardItem = id

    basket.push(
        if(search === undefined) {
            id: cardItem.id,
            quantity:1
    }
    else {
        console.log("hello")
    })
console.log(basket)}

const decrement = () => {
    const cardItem = id

    basket.push({
        id: cardItem.id,
        quantity: 1
    })
    console.log(basket)
}


const update = (id)=>{
    const product = basket.find(val=>val.id==id)
    document.getElementById(id).get
}



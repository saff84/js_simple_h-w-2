let goods = [
    {
        id: 1,
        name: 'apple',
        description: 'phone',
        sizes: [10, 12, 13, 14],
        price: 100,
        available: true,
    },
    {
        id: 2,
        name: 'nokia',
        description: 'phone',
        sizes: [1, 2, 3],
        price: 10,
        available: true,
    },
    {
        id: 3,
        name: 'xaomi',
        description: 'phone',
        sizes: [13, 14],
        price: 50,
        available: true,
    },
    {
        id: 4,
        name: 'oppo',
        description: 'phone',
        sizes: [12, 13],
        price: 50,
        available: true,
    },
    {
        id: 5,
        name: 'apple',
        description: 'nophone',
        sizes: [14],
        price: 90,
        available: true,
    },
];

let basket = [
    {
        good: 1,
        amount: 2,
    },
    {
        good: 4,
        amount: 5,
    },
];

function addToBasket(good, amount) {
    goods.forEach(el => {
        if (good === el.id && el.available) {
            basket.push({
                good: `${el.id}`,
                amount: amount,
            })
        }
    });
}
// addToBasket(3, 10);
// console.log(basket);


function delInBasket(good, amount) {
    basket.forEach(el => {
        if (good === el.good && el.amount > amount) {
            el.amount -= amount;
        } else if (good === el.good && el.amount <= amount) {
            basket.splice(basket.indexOf(el), 1);
        }
    });
}

// console.log(basket);
// delInBasket('1', 1);
// console.log(basket);

function delAllBasket() {
    basket.splice(0,);
}

// console.log(basket);
// delAllBasket()
// console.log(basket);

function totalGoodsInBasket() {
    let totalAmount = 0;
    let totalSumm = 0;
    basket.forEach(el => {
        totalAmount += el.amount;
        goods.forEach(elem => {
            if (el.good === elem.id) {
                totalSumm += elem.price * el.amount;
            }
        })
    });
    return {
        'totalAmount': totalAmount,
        'totalSumm': totalSumm,
    }
}


// console.log(totalGoodsInBasket())


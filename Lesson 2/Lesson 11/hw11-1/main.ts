// #HmvAfRQM
const cartsDiv:HTMLDivElement = document.createElement('div');
cartsDiv.className = 'carts';

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObj => {
        const {carts} = cartsObj;
        console.log(cartsObj);

        for (const cart of carts) {
            const cartInfo:HTMLDivElement = document.createElement('div');
            cartInfo.className = 'cart';
            cartInfo.innerText = `
            discountedTotal: ${cart.discountedTotal},
            id: ${cart.id},
            total: ${cart.discountedTotal},
            totalProducts: ${cart.total},
            totalQuantity: ${cart.totalQuantity},
            userId: ${cart.userId}
            `

            for(const product of cart.products){
                const productInfo:HTMLParagraphElement = document.createElement('p');
                productInfo.className = 'productInfo';
                productInfo.innerText = `
                title: ${product.title},
                total: ${product.total},
                id: ${product.id},
                price: ${product.price},
                quantity: ${product.quantity},
                discountPercentage: ${product.discountPercentage},
                discountedTotal: ${product.discountedTotal}
                `

                const productImg:HTMLImageElement = document.createElement('img');
                productImg.src = product.thumbnail;

                productInfo.append(productImg);
                cartInfo.appendChild(productInfo);
            }

            cartsDiv.appendChild(cartInfo);
        }
    });

document.body.appendChild(cartsDiv);
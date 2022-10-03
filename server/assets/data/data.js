const { v4: uuidv4 } = require('uuid');

const data = {
    products: [
        {
            id: uuidv4(),
            name: 'Nike-Slim-Shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: 'https://d.scdn.gr/images/sku_images/055625/55625201/20220131161510_6bd5801f.jpeg',
            price: 120,
            countInstock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt',
        },
        {
            id: uuidv4(),
            name: 'Puma-Slim-Shirt',
            slug: 'puma-slim-shirt',
            category: 'Shirts',
            image: 'https://d.scdn.gr/images/sku_images/055625/55625201/20220131161510_6bd5801f.jpeg',
            price: 80,
            countInstock: 15,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality shirt',
        },
        {
            id: uuidv4(),
            name: 'Adidas-Slim-Pants',
            slug: 'adidas-slim-pants',
            category: 'Pants',
            image: 'https://d.scdn.gr/images/sku_images/055625/55625201/20220131161510_6bd5801f.jpeg',
            price: 65,
            countInstock: 5,
            brand: 'Adidas',
            rating: 4,
            numReviews: 10,
            description: 'high quality shirt',
        },{
            id: uuidv4(),
            name: 'Adidas-Slim-Pants',
            slug: 'adidas-slim-pants',
            category: 'Pants',
            image: 'https://d.scdn.gr/images/sku_images/055625/55625201/20220131161510_6bd5801f.jpeg',
            price: 65,
            countInstock: 5,
            brand: 'Adidas',
            rating: 4,
            numReviews: 10,
            description: 'high quality shirt',
        }
    ]
}

module.exports = data;
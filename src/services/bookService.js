import axios from 'axios';

export default {
    query,
    getPriceRange
}

function query() {
    return axios.get('http://localhost:3000/books')
        .then(res => res.data)
}

async function getPriceRange() {
    const books = await query();
    const prices = new Set();
    books.forEach(book => prices.add(book.listPrice.amount));
    return { max: Math.max(...prices), min: Math.min(...prices) };
}
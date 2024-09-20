document.querySelectorAll('.category').forEach(element => {
    element.onclick = (event) => {
        // const products = event.target.nextElementSibling
        const products = element.querySelector('.products')

        console.log(products.classList.contains('hide'))
        if (products.classList.contains('hide')) {
            products.classList.remove('hide')
        } else {
            products.classList.add('hide')
        }
        
    }
})

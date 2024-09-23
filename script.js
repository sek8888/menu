document.querySelectorAll('.category').forEach(element => {
    element.onclick = (event) => {
        const products_list = element.querySelector('.products').classList
        
        if (products_list.contains('hide')) {
            products_list.remove('hide')
        } else {
            products_list.add('hide')
        }
        
    }
})

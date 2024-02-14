const selectors = [
    { selector: '.click__sobreNos', target: '.sobre__nos' },
    { selector: '.click__servicos', target: '.servicos' },
    { selector: '.click__projetos', target: '.projetos' },
    { selector: '.click__nossoTime', target: '.time' },
    { selector: '.click__clientes', target: '.clientes' },
    { selector: '.click__preco', target: '.preco' },
    { selector: '.click__fatos', target: '.fatos' },
    { selector: '.click__contate', target: '.contato' }
]

selectors.forEach(item => {
    document.querySelectorAll(item.selector).forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            document.querySelectorAll('.active').forEach(activeElement => {
                activeElement.classList.remove('active');
            });
            element.classList.add('active');
            const targetSection = document.querySelector(item.target);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
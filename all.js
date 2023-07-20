window.scroll({
    top: 0,
    behavior:'smooth',

});

const faqItems = document.querySelectorAll('.div-faq');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe 'active' de todos os itens antes de adicionar ao item clicado
    faqItems.forEach(item => item.classList.remove('active'));

    // Adiciona a classe 'active' ao item clicado para acionar a transição de escala
    item.classList.add('active');

    // Obtém o elemento .p-faq dentro do item clicado
    const faqContent = item.querySelector('.p-faq');
    
    // Adiciona/Remove a classe 'show' ao .p-faq para exibir/ocultar suavemente o conteúdo
    faqContent.classList.toggle('show');

    // Atualiza a exibição dos ícones "add" e "remove" com base no estado do .p-faq
    const addIcon = item.querySelector('.add');
    const removeIcon = item.querySelector('.rem');
    if (faqContent.classList.contains('show')) {
      addIcon.style.display = 'none';
      removeIcon.style.display = 'inline-block';
    } else {
      addIcon.style.display = 'inline-block';
      removeIcon.style.display = 'none';
    }
  });
});

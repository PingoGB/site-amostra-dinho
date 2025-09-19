function abrirModal({ imagem, titulo, descricao, etiqueta, alt }) {
  const img = document.getElementById('modal-imagem');
  const t = document.getElementById('modal-titulo');
  const d = document.getElementById('modal-descricao');
  const e = document.getElementById('modal-etiqueta');
  const modal = document.getElementById('modal-galeria');

  img.src = imagem || '';
  img.alt = alt || titulo || '';
  t.textContent = titulo || '';
  d.textContent = descricao || '';
  e.textContent = etiqueta || '';

  modal.classList.add('visivel');
  modal.setAttribute('aria-hidden', 'false');
}

function fecharModal() {
  const modal = document.getElementById('modal-galeria');
  modal.classList.remove('visivel');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('modal-imagem').src = '';
}

// Listeners para cartões (clique/teclado)
document.querySelectorAll('.cartao-foto').forEach((card) => {
  card.addEventListener('click', () => {
    abrirModal({
      imagem: card.dataset.imagem || card.querySelector('img')?.src,
      titulo: card.dataset.titulo || card.querySelector('h4')?.textContent || '',
      descricao: card.dataset.descricao || '',
      etiqueta: card.dataset.etiqueta || '',
      alt: card.querySelector('img')?.alt || ''
    });
  });

  // acessibilidade: abrir com Enter/Espaço
  card.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      card.click();
    }
  });
});

// Fechar modal: botão, clique fora e ESC
document.getElementById('fechar-modal')?.addEventListener('click', fecharModal);

document.getElementById('modal-galeria')?.addEventListener('click', (ev) => {
  if (ev.target.id === 'modal-galeria') fecharModal();
});

document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') fecharModal();
});
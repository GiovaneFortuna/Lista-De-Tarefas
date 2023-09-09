function adicionar() {
    const tarefa = document.getElementById('tarefa').value;
    const li = document.createElement('li');
    li.textContent = tarefa;
  
    const btn = document.createElement('button');
    btn.textContent = 'Remover';
    btn.type = 'button';
    btn.style.marginLeft = '20px';
    btn.addEventListener('click', function() {
      li.remove();
    });
    li.appendChild(btn);
  
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Concluídas';
    btnExcluir.type = 'button';
    btnExcluir.style.marginLeft = '20px';
    btnExcluir.addEventListener('click', function() {
      li.parentNode.removeChild(li); 
      const concluidas = document.getElementById('concluidas');
      concluidas.appendChild(li); 
    });
    li.appendChild(btnExcluir);
  
    const pendentes = document.getElementById('pendentes');
    pendentes.appendChild(li);
  
    document.getElementById('tarefa').value = '';
    document.getElementById('tarefa').focus();
  }


document.addEventListener('DOMContentLoaded', () => {
    const formMinerador = document.getElementById('formMinerador');
    const formMinerio = document.getElementById('formMinerio');
    const formExtracao = document.getElementById('formExtracao');
    const mineradorIdSelect = document.getElementById('mineradorId');
    const minerioIdSelect = document.getElementById('minerioId');

    // Preencher opções dos selects de mineradores e minérios
    fetchMineradores();
    fetchMinerios();

    formMinerador.addEventListener('submit', cadastrarMinerador);
    formMinerio.addEventListener('submit', cadastrarMinerio);
    formExtracao.addEventListener('submit', registrarExtracao);

    function fetchMineradores() {
        // Lógica para buscar mineradores do backend (pode ser com fetch ou axios)
        // Exemplo:
        // fetch('/api/mineradores')
        //     .then(response => response.json())
        //     .then(data => {
        //         data.forEach(minerador => {
        //             const option = document.createElement('option');
        //             option.value = minerador.id;
        //             option.textContent = minerador.nome;
        //             mineradorIdSelect.appendChild(option);
        //         });
        //     });
    }

    function fetchMinerios() {
        // Lógica para buscar minérios do backend (pode ser com fetch ou axios)
        // Exemplo:
        // fetch('/api/minerios')
        //     .then(response => response.json())
        //     .then(data => {
        //         data.forEach(minerio => {
        //             const option = document.createElement('option');
        //             option.value = minerio.id;
        //             option.textContent = minerio.nome;
        //             minerioIdSelect.appendChild(option);
        //         });
        //     });
    }

    function cadastrarMinerador(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const endereco = document.getElementById('endereco').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const dataContratacao = document.getElementById('dataContratacao').value;

        // Lógica para enviar dados para o backend (pode ser com fetch ou axios)
        // Exemplo:
        // fetch('/api/cadastrar_minerador', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ nome, cpf, endereco, telefone, email, dataContratacao })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Minerador cadastrado com sucesso:', data);
        //     // Limpar campos do formulário ou feedback de sucesso
        // })
        // .catch(error => console.error('Erro ao cadastrar minerador:', error));
    }

    function cadastrarMinerio(event) {
        event.preventDefault();
        const nomeMinerio = document.getElementById('nomeMinerio').value;
        const descricao = document.getElementById('descricao').value;
        const valorPorTonelada = document.getElementById('valorPorTonelada').value;

        // Lógica para enviar dados para o backend (pode ser com fetch ou axios)
        // Exemplo:
        // fetch('/api/cadastrar_minerio', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ nomeMinerio, descricao, valorPorTonelada })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Minério cadastrado com sucesso:', data);
        //     // Limpar campos do formulário ou feedback de sucesso
        // })
        // .catch(error => console.error('Erro ao cadastrar minério:', error));
    }

    function registrarExtracao(event) {
        event.preventDefault();
        const mineradorId = mineradorIdSelect.value;
        const minerioId = minerioIdSelect.value;
        const dataExtracao = document.getElementById('dataExtracao').value;
        const quantidadeExtracao = document.getElementById('quantidadeExtracao').value;

        // Lógica para enviar dados para o backend (pode ser com fetch ou axios)
        // Exemplo:
        // fetch('/api/registrar_extracao', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ mineradorId, minerioId, dataExtracao, quantidadeExtracao })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Extracao registrada com sucesso:', data);
        //     // Limpar campos do formulário ou feedback de sucesso
        // })
        // .catch(error => console

const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
      imagemPerfil: 'https://4maos.com.br/wp-content/webp-express/webp-images/uploads/2022/06/7d28e2dd11e46566ee87bc8ef5a9b76f.jpg.webp'
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
      imagemPerfil: 'https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-perfil-masculino-inteligente-retrato-estilo-desenho-animado-m%C3%ADnimo-166146967.jpg?w=768'
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
      imagemPerfil: 'https://img.freepik.com/fotos-premium/a-blue-circle-with-a-man-s-head-and-a-blue-background_745528-3003.jpg?w=360'
    },
  ];
  const htmlList = document.querySelector('#medicos');

  for (let medico of medicos) {
    const medicoDiv = document.createElement('div');
    medicoDiv.className = 'medico';

    const p = document.createElement('p');
    htmlList.appendChild(p);

    const img = document.createElement('img');
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img);

    let apresentacao = '';

    switch (medico.genero) {
        case 'nao-binario':
            apresentacao = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'masculino':
            apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'feminino':
            apresentacao = `Dra. ${medico.nome} ${medico.sobrenome}`;
            break;
        default:
            apresentacao = `Médico não informou o gênero`;
    }

    const pApresentacao = document.createElement('p');
    pApresentacao.textContent = apresentacao;
    medicoDiv.appendChild(pApresentacao);

    htmlList.appendChild(medicoDiv);
}
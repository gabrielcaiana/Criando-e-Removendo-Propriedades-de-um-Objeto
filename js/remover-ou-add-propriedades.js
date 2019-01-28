  //Criando objeto literal
  let hotel =  {
    nome: 'Caiana',
    quartos: 50,
    reservados: 25
  }
  //Adicionando propriedades ao objeto hotel
  hotel.piscina = true;
  hotel.academia = false;
  delete hotel.reservados; // deletando uma propriedade do objeto

  //Obtendo id do Hotel e exibindo as informações para o usuário
  let elHotelNome = document.getElementById('hotelName');
  elHotelNome.textContent = hotel.nome;

  let elHotelPiscina = document.getElementById('pool');
  elHotelPiscina.className = 'piscina: ' + hotel.piscina;

  let elHotelAcademia = document.getElementById('gym');
  elHotelAcademia.className = 'academia: ' + hotel.academia;

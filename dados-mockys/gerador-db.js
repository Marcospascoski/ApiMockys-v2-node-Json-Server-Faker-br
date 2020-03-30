const faker = require('faker-br');
  let database = { 
    usuarios: [],
    grupos: []
  
  };
  const quantidade = 10;

  for (let i = 1; i<= quantidade; i++) {
  database.usuarios.push({
    id: i,
    nome: faker.name.firstName() + " " + faker.name.lastName(),
    email: faker.internet.email(),
    senha: faker.internet.password(8),
    telefone: faker.phone.phoneNumber(),
    image: "https://source.unsplash.com/1600x900/?user",
  });
  
  database.grupos.push({
    id: i,
    nome: faker.commerce.department()
  });

 }
 console.log(JSON.stringify(database));
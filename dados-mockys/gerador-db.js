const faker = require('faker-br');
faker.setLocale = 'pt_BR';

  let database = { 
    
    grupos: [],
    produtos: [],
    usuarios: [],
    pessoas:[],
    enderecos:[]
  
  };
  const quantidade = 40;

  for (let i = 1; i<= quantidade; i++) {
   database.grupos.push({
    id: i,
    nome: faker.commerce.department()
  });
  
  database.produtos.push({
    id: i,
    codigoBarras: faker.random.number({min:8, max:13}),
    nome: faker.commerce.productName(),
    unidade: faker.random.arrayElement(["LT","KG","PC","G"]),
    status:  faker.random.arrayElement(["Ativo","inativo"]),
    grupos:  { id: i},
    valor: faker.commerce.price(.10,5.00,2),
    imagem: faker.image.food() //"https://source.unsplash.com/1600x900/?product"
  });

  database.usuarios.push({
    id: i,
    nome: faker.internet.userName(),
    email: faker.internet.email(),
    senha: faker.internet.password(8),
    status: faker.random.arrayElement(["Ativo","inativo"]),
    pessoaId: { id: i },
    TipoPerfil: faker.random.arrayElement(["Cliente","Lojista","Admin"]),
    imagem: faker.image.avatar()
  });

  database.pessoas.push({
    id: i,
    nome: faker.name.firstName() + " " + faker.name.lastName(),
    cpfcnpj: faker.br.cpf() || faker.br.cnpj(),
    ddd: faker.phone.phoneNumber('###'),
    telefone: faker.phone.phoneNumber('####-####'),
    dataNascimento: faker.date.past(),
    contato: faker.name.firstName()
  });

  database.enderecos.push({
    pessoaId: { id: i },
    id: i,
    nome: faker.company.companyName(0),
    logradouro: faker.address.streetName(), 
    cep: faker.address.zipCode("#####-###"),
    cidade: faker.address.city(),
    bairro: faker.name.title(),
    numero: faker.address.zipCode(),
    complemento: faker.address.streetPrefix(),
    status: faker.random.arrayElement(["Ativo","inativo"]),
    tipoLocalizacao: faker.address.secondaryAddress(1),
    reference: faker.hacker.phrase()
  });

 }
 console.log(JSON.stringify(database));
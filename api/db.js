const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
  //tinto
  { 
    name: 'Altos Del Condor Cabernet Sauvignon Malbec 2022', 
    description: 'Vinho jovem, corpo médio, frutado, com taninos marcantes e equilibrado', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29297-01.png', 
    category: 'tinto', 
    price_in_cents: 32.82
  },
  { 
    name: 'Baron Philippe de Rothschild Mas Andes Cabernet Sauvignon 2021', 
    description: 'Vinho jovem, corpo médio, frutado com toques de especiarias e herbáceo, taninos presentes e macios, acidez média, agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28632-01.png', 
    category: 'tinto', 
    price_in_cents: 58.71
  },
  { 
    name: 'Príncipe de Viana D.O. Navarra Tempranillo 2020', 
    description: 'Expressão frutada intensa na boca, perfeitamente apoiada por uma boa estrutura, taninos doces e um refrescante e durável final', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/26579-01.png', 
    category: 'tinto', 
    price_in_cents: 70.47
  },
  { 
    name: 'Manos Negras Stone Soil Malbec 2018', 
    description: 'Concentrado, intenso, taninos macios', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/25047-01.png', 
    category: 'tinto', 
    price_in_cents: 164.90
  },
  { 
    name: 'Colección De Familia La Mateo D.O.Ca. Rioja 2017', 
    description: 'Encorpado, bem equilibrado, volumoso e com boa estrutura, frutado com nuances da barrica, taninos presentes, boa acidez, final longo', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/26453-01.png', 
    category: 'tinto', 
    price_in_cents: 358.71
  },
  { 
    name: 'Almaviva 2019', 
    description: 'Encorpado, frutas maduras com nuances do tempo em barrica, opulento, suculento, volumoso, equilibrado, taninos polidos e firmes, acidez refrescante, final persistente e complexo', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/27495-01.png', 
    category: 'tinto', 
    price_in_cents: 1999.00
  },
  
  //branco
  { 
    name: 'Uma Wine Bar Chardonnay 2022', 
    description: 'Vinho jovem, leve, bem equilibrado, frutado, boa acidez e agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28485-01.png', 
    category: 'branco', 
    price_in_cents: 35.18
  },
  { 
    name: 'Casas del Toqui Single Estate Sauvignon Blanc 2022 375 mL', 
    description: 'Vinho jovem, leve, frutado com toques herbáceos e minerais, acidez média para alta, agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/29026-01.png', 
    category: 'branco', 
    price_in_cents: 44.59
  },
  { 
    name: 'Las Mercedes Singular Semillon 2020', 
    description: 'Vinho jovem, leve, frutado, acidez média para alta, agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28346-01.png', 
    category: 'branco', 
    price_in_cents: 98.88
  },
  { 
    name: 'Monte da Pimenta I.G Alentejano Antao Vaz Arinto Verdelho Branco 2022', 
    description: 'Personalidade forte, intenso, bom corpo e acidez, com final fresco e vigoroso', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28901-01.png', 
    category: 'branco', 
    price_in_cents: 117.53
  },
  { 
    name: 'Las Mercedes SKIN 2020', 
    description: 'Corpo médio para encorpado, frutado com nuances herbáceas e de especiarias, bem estruturado, acidez média, final longo', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28347-01.png', 
    category: 'branco', 
    price_in_cents: 223.42
  },

  //espumante
  { 
    name: 'Espumante Ballade by Miolo Rosé Brut', 
    description: 'Vinho jovem, leve, frutado, equilibrado, acidez vibrante e agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28525-01.png', 
    category: 'espumante', 
    price_in_cents: 56.35
  },
  { 
    name: 'Espumante Fantinel Cuvée Prestige Brut', 
    description: 'Leve, fresco, floral, frutado, acidez agradável', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/10839-01.png', 
    category: 'espumante', 
    price_in_cents: 76.35
  },
  { 
    name: 'Espumante Amitié Viognier Brut', 
    description: 'Fresco e tem ótima cremosidade, acidez e persistência gustativa marcante', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28147-01.png', 
    category: 'espumante', 
    price_in_cents: 129.29
  },
  { 
    name: 'Champagne Montaudon Brut', 
    description: 'Cremoso, boa acidez, médio corpo, elegante', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/3170-01.png', 
    category: 'espumante', 
    price_in_cents: 341.06
  },

  //rosé
  { 
    name: 'Altos Del Condor Rosé 2022', 
    description: 'Vinho jovem, leve, frutado, com boa acidez e agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28482-01.png', 
    category: 'rose', 
    price_in_cents: 32.82
  },
  {
    name: 'Electum Tempranillo Rosé 2021', 
    description: 'Vinho jovem, leve, frutado, suculento, acidez média para alta, agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28611-01.png', 
    category: 'rose', 
    price_in_cents: 41.06
  },
  { 
    name: 
    'Navaldar D.O.Ca Rioja Rosado 2020', 
    description: 'Perfeito equilíbrio entre fruta e acidez, final delicado.', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/26485-01.png', 
    category: 'rose', 
    price_in_cents: 88.12
  },
  { 
    name: 'Sagrado D.O.C. Douro Rosé 2020', 
    description: 'Vinho jovem, corpo leve para médio, volumoso, frutado, acidez média, agradável frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/28954-01.png', 
    category: 'rose', 
    price_in_cents: 141.06
  },
  { 
    name: 'Rosé à La Rose A.O.C. Côtes de Provence Rosé 2020', 
    description: 'Um vinho jovem, leve, frutado com nuances florais, acidez média para alta que lhe proporciona excelente frescor', 
    image_url: 'https://www.wine.com.br/cdn-cgi/image/f=png,h=238,q=99/assets-images/produtos/26691-01.png', 
    category: 'rose', 
    price_in_cents: 258.71
  }
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const products = baseProducts.map(product => ({
    ...product, 
    id: faker.datatype.uuid(),
    // price_in_cents: faker.datatype.number({
    //   min: 2000,
    //   max: 10000,
    // }),
    sales: faker.datatype.number(40),
    created_at: faker.date.past()
  })).sort(() => .5 - Math.random());

  return [...acc, ...products]
}, [])

module.exports = {
  products: allProducts
}

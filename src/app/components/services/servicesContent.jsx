const servicesContent = [
  // {
  //   photo: "https://picsum.photos/500/300",
  //   title: "Campo",
  //   content: [
  //     {
  //       title: "Manutenção em subestações",
  //       subTitle: "Manutenção em subestações de EAT, AT, MT e BT",
  //       acting: [
  //         {
  //           name: "Nossos profissionais são qualificados e habilitados sempre atendendo à norma de segurança NR10.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Serviços de oficina",
  //     title: "Oficina",
  //     descricao:
  //       "Contamos com profissionais treinados pelos principais fabricantes de equipamentos elétricos.",
  //     types: [
  //       "Reforma e recondicionamento de disjuntor de MT e BT",
  //       "Reforma e recondicionamento de contator de MT",
  //       "Retrofit de proteção",
  //       "Retrofit de disjuntor de MT e BT",
  //       "Retrofit de contator de MT",
  //     ],
  //   },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Ensaios especiais",
  //     title: "",
  //     descricao: "",
  //     types: [
  //       "Laudo de conformidade das normas NR10, NBR 5419, NBR 5410, NBR14039",
  //       "Estudo de curto circuito",
  //       "Estudo de seletividade",
  //       "Estudo de arc flash",
  //       "Análise de qualidade de energia",
  //       "Medição de grandezas elétricas (corrente, tensão, potência ativa, reativa, fator de potência e harmônicos)",
  //     ],
  //   },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Serviços de engenharia",
  //     title: "",
  //     descricao: "",
  //     types: [
  //       "Laudo de conformidade das normas NR10, NBR 5419, NBR 5410, NBR14039",
  //       "Estudo de curto circuito",
  //       "Estudo de seletividade",
  //       "Estudo de arc flash",
  //       "Análise de qualidade de energia",
  //       "Medição de grandezas elétricas (corrente, tensão, potência ativa, reativa, fator de potência e harmônicos)",
  //     ],
  //   },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Análise de óleo",
  //     title: "",
  //     descricao:
  //       "Tratamento termo vácuo em óleo isolante mineral e vegetal. Regeneração de óleo isolante mineral. Substituição do óleo isolante e acessórios.",
  //     types: [
  //       "Físico Química",
  //       "Cromatografia",
  //       "Teor de PCB",
  //       "Teor de Furfuraldeído",
  //       "Enxofre Corrosivo",
  //       "Teor de DBDS",
  //       "Teor de passivação",
  //       "Grau de polimerização do papel",
  //       "Contagem de partículas",
  //     ],
  //   },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Manutenção em Transformador e Reator",
  //     title: "Manutenção em transformadores e reatores.",
  //     descricao: "Manutenção e montagem de Transformadores.",
  //     types: [
  //       "Testes de comissionamento",
  //       "Substituição de acessórios",
  //       "Substituição / regeneração de óleo isolante",
  //       "Manutenção preventiva / corretiva",
  //       "Substituição de vedações",
  //       "Serviços de reforma e pintura",
  //       "Revisão em comutador de tapes",
  //       "Substituição de buchas",
  //     ],
  //   },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Comissionamento de equipamentos de subestação",
  //     title: "",
  //     descricao: "",
  //     types: [
  //       "Testes de comissionamento em equipamentos de pátio de subestações de energia elétrica de EAT/AT/MT/BT, atendemos a todos os ensaios de TAC",
  //       "Testes de comissionamento / parametrização / configuração de relés de proteção digital",
  //       "Testes de comissionamento em sistemas de sinalização, comando, intertravamento, corrente, tensão, potência e automação",
  //       "Testes de comissionamento em painéis elétricos de MT",
  //       "Testes de comissionamento em painéis CA e CC",
  //       "Testes de comissionamento em retificador e banco de baterias",
  //     ],
  //   },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Inspeção por termografia e ultrassom",
  //     title: "",
  //     descricao:
  //       "Através da inspeção como por termografia e ultrassom, é possível obter informações em tempo real acerca das condições dos equipamentos. Isso oferece a chance de prever possíveis falhas e antecipar uma parada não planejada.",
  //     types: [
  //       "Inspeção por profissional devidamente treinado",
  //       "Equipamento de ponta e com todas as certificações necessárias",
  //       "Analise minuciosa levando em consideração as características dos equipamentos inspecionados e do ambiente",
  //       "Elaboração de relatório técnico com roteiro dos locais inspecionados, imagens, assim como também um relato das anormalidades encontradas e recomendações para sanar o defeito",
  //     ],
  //   },
  //   {
  //     photo: "https://picsum.photos/500/300",
  //     nome: "Testes em EPI’s e EPC’s",
  //     title: "",
  //     descricao:
  //       "Para sua comodidade dispomos de laboratório móvel para testes em EPI's e EPC's. Atendemos em todo território nacional. Realizamos ensaios em uma ampla gama de Equipamentos de Proteção Individual (EPI's) e Equipamentos de Proteção Coletiva (EPC's).",
  //     types: [
  //       "Luvas isolantes",
  //       "Capacetes de segurança",
  //       "Ferramentas isoladas ",
  //       "Botas de segurança",
  //       "Sistemas de aterramento",
  //       "Bastões isolantes",
  //       "Detectores de tensão",
  //     ],
  //   },
];
for (let i = 1; i <= 20; i++) {
  const newService = {
    id: i,
    photo: `https://picsum.photos/500/300?random=${i}`,
    title: `Serviço ${i}`,
    content: [],
  };

  for (let j = 1; j <= 5; j++) {
    newService.content.push({
      id: j,
      title: `Conteúdo${j}`,
      subTitle: `Subtítulo${j}`,
      photo: `https://picsum.photos/500/300?random=${i}`,
      acting: [
        {
          id: j,
          name: `Ação${j * j}`,
        },
        {
          id: j,
          name: `Ação${j * j}`,
        },
        {
          id: j,
          name: `Ação${j * j}`,
        },
        {
          id: j,
          name: `Ação${j * j}`,
        },
        {
          id: j,
          name: `Ação${j * j}`,
        },
        {
          id: j,
          name: `Ação${j * j}`,
        },
      ],
    });
  }

  servicesContent.push(newService);
}

export default servicesContent;

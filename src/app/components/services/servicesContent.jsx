const servicesContent = [
  {
    id: 1,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Contrado de manutenção",
    content: [
      {
        id: 1,
        tab: "Gestão de Manutenção",
        title: "Gestão de Manutenção",
        subTitle:
          "A SOS Service realiza a gestão da manutenção em subestações, através de inspeções técnicas de analise, tendo como principal objetivo evitar falhas nos ativos, ocasionando paradas não programadas.",
        photo: "https://picsum.photos/500/300?random=1",
      },
      {
        id: 2,
        tab: "Inspeções",
        title: "Inspeções",
        subTitle:
          "As inspeções visam confirmar com regularidade a manutenção das boas condições de funcionamento e de segurança dos equipamentos, de acordo com as suas características técnicas ou procedimentos definidos.",
        photo: "https://picsum.photos/500/300?random=2",
      },
      {
        id: 3,
        tab: "Limpeza Técnica",
        title: "Limpeza Técnica",
        subTitle:
          "A limpeza técnica em equipamentos é ação importante de manutenção, para preservação dos ativos, auxilia evitar possiveis incidentes aos equipamentos, meio ambiente e as pessoas.",
        photo: "https://picsum.photos/500/300?random=3",
      },
      {
        id: 4,
        tab: "Manutenção de equipamentos ",
        title: "Manutenção de equipamentos ",
        subTitle:
          "A manutenção de subestação consiste em realizar ensaios em equipamentos para analisar os dados coletados visando acompanhar o desgaste ou envelhecimento dos ativos através de comparativos de diagnósticos normalizados.",
        photo: "https://picsum.photos/500/300?random=4",
      },
    ],
  },
  {
    id: 2,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Serviços de oficina",
    content: [
      {
        id: 1,
        tab: "Serviços de oficina",
        subTitle:
          "A SOS SERVICE possui 03 oficinas (São Paulo, Paraná e Bahia) para revisão e reforma de disjuntores de Média e Baixa tensão. Nossa equipe é composta por profissionais altamente treinados e qualificados para realização dos trabalhos em equipamentos de todos fabricantes existentes no mercado.",
        photo: "https://picsum.photos/500/300?random=1",
        acting: [
          {
            id: 1,
            name: "Reforma e recondicionamento de disjuntor de Média e Baixa tensão",
          },
          {
            id: 2,
            name: "Reforma e recondicionamento de contator de Média tensão",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Construção e Montagem de Subestações",
    content: [
      {
        id: 1,
        tab: "Construção e Montagem de Subestações",
        title: "Construção e Montagem de Subestações",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "A SOS Service é especializada na montagem e comissionamento de subestações de energia elétrica, oferecendo seus serviços para empreendimentos em todo o território nacional. Com uma equipe altamente qualificada, estamos prontos para realizar serviços em diferentes locais, garantindo que cada projeto seja realizado com excelência e dentro dos padrões de segurança e qualidade exigidos.",
        acting: [
          {
            id: 1,
            name: "Realizamos Montagem eletromecânica de equipamentos de subestação de EAT/AT/MT",
          },
          {
            id: 2,
            name: "Replacement de equipamentos de EAT / AT / MT",
          },
          {
            id: 3,
            name: "Construção de parede corta fogo, bacia de captação, caixa de contenção e separador água / óleo, conforme IT37-19 e NBR 13231",
          },
          {
            id: 4,
            name: "Construção de bases para disjuntor, para raio, TC, TP e transformador de potência",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Retrofit em Equipamentos",
    content: [
      {
        id: 1,
        tab: "Retrofit em Oficina",
        title: "Retrofit em Oficina",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "O retrofit de disjuntores é um processo que consiste em modernizar a infraestrutura elétrica de uma construção e conservar a estrutura original do local, promovendo a substituição ou acréscimo em elementos mais antigos, inadequados e obsoletos, por equipamentos mais modernos. Assim fazendo a adaptação necessária para que os novos equipamentos tornem-se intercambiáveis ao sistema existente. Esse processo é aconselhável quando os equipamentos e dispositivos do ambiente se encontram em estado de decomposição avançado. Desta forma podemos evitar queima de aparelhos elétricos, gasto de energia elétrica desproporcional, curtos-circuitos, entre outros problemas.",
      },
      {
        id: 2,
        tab: "Retrofit em Campo",
        title: "Retrofit em Campo",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "O retrofit em campo tem como principio manter o painel existente com suas respectivas características, adequando ao mesmo, um novo equipamento como disjuntor ou relés de proteção, realizando a adaptação necessária para que os novos equipamentos tornem-se intercambiáveis ao sistema existente. Um bom exemplo é o acrescimo de relés digitais inteligente com comunicação  para gerenciamento ou controle nos disjuntores, para aumento de confiabilidade e utilização de meios de extinção de arco sustentaveis e ecologicos.",
      },
    ],
  },
  {
    id: 5,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Transformadores de Potência",
    content: [
      {
        id: 1,
        tab: "Transformadores de Potência",
        title: "Transformadores de Potência",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "Para evitar ou corrigir as paradas súbitas dos equipamentos, a inconstância ou paralisação do fornecimento de energia, a perda de produtividade e até mesmo o risco de eventuais acidentes a SOS Service oferece diversos tipos de serviços em transformadores de potência.",
        acting: [
          {
            id: 1,
            name: "Testes de comissionamento",
          },
          {
            id: 2,
            name: "Substituição de acessórios",
          },
          {
            id: 3,
            name: "Substituição / regeneração de óleo isolante",
          },
          {
            id: 4,
            name: "Manutenção preventiva e corretiva",
          },
          {
            id: 5,
            name: "Substituição de vedações",
          },
          {
            id: 6,
            name: "Serviços de reforma e pintura",
          },
          {
            id: 7,
            name: "Revisão em comutador de tapes",
          },
          {
            id: 8,
            name: "Substituição de buchas",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Manutenção Preditiva",
    content: [
      {
        id: 1,
        tab: "Inspeção por Ultrassom",
        title: "Inspeção por Ultrassom",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "A inspeção por ultrassom é uma técnica não destrutiva utilizada para realizar a detecção de descontinuidades em equipamentos, com o objetivo de identificar falhas e corrigi-las, permitindo com que seja realizada uma manutenção evitando queima de aparelhos elétricos, curtos-circuitos, entre outros problemas.",
      },
      {
        id: 2,
        tab: "Inspeção por Termografia",
        title: "Inspeção por Termografia",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "Através da inspeção como por termografia é possível obter informações em tempo real acerca das condições dos equipamentos. Isso oferece a chance de prever possíveis falhas e antecipar uma parada não planejada, permitindo com que seja realizada uma manutenção aumentando a vida útil dos equipamentos.",
      },
      {
        id: 3,
        tab: "Análise de Óleo",
        title: "Análise de Óleo",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "Com o objetivo de identificar com antecedência a deterioração e falhas nestes fluidos, a fim de evitar danos maiores a equipamentos essenciais para a empresa, a SOS Service oferece diversos tipos de ensaios em óleo isolante.",
        acting: [
          {
            id: 1,
            name: "Físico Química",
          },
          {
            id: 2,
            name: "Cromatografia",
          },
          {
            id: 3,
            name: "Teor de PCB",
          },
          {
            id: 4,
            name: "Teor de Furfuraldeído",
          },
          {
            id: 5,
            name: "Enxofre Corrosivo",
          },
          {
            id: 6,
            name: "Teor de DBDS",
          },
          {
            id: 7,
            name: "Teor de passivação",
          },
          {
            id: 8,
            name: "Grau de polimerização do papel",
          },
          {
            id: 9,
            name: "Contagem de partículas",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Laudos e Estudos",
    content: [
      {
        id: 1,
        tab: "Análise de Rede",
        title: "Análise de Rede",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "Descrição da Análise de Rede Descrição da Análise de Rede Descrição da Análise de Rede",
      },
      {
        id: 2,
        tab: "Curto Circuito e Seletividade",
        title: "Curto Circuito e Seletividade",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "Descrição de Curto Circuito e Seletividade Descrição de Curto Circuito e Seletividade Descrição de Curto Circuito e Seletividade",
      },
      {
        id: 3,
        tab: "SPDA",
        title: "SPDA",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle: "Descrição do SPDA Descrição do SPDA Descrição do SPDA",
      },
      {
        id: 4,
        tab: "NR10",
        title: "NR10",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle: "Descrição da NR10 Descrição da NR10 Descrição da NR10",
      },
    ],
  },
  {
    id: 8,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Testes em EPI’s e EPC’s",
    content: [
      {
        id: 1,
        tab: "Testes em EPI’s e EPC’s",
        title: "Testes em EPI’s e EPC’s",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "Para sua comodidade dispomos de laboratório móvel para testes em EPI's e EPC's. Atendemos em todo território nacional. Realizamos ensaios em uma ampla gama de Equipamentos de Proteção Individual (EPI's) e Equipamentos de Proteção Coletiva (EPC's). Os ensaios abrangem diversos itens essenciais como:",
        acting: [
          {
            id: 1,
            name: "Luvas isolantes",
          },
          {
            id: 2,
            name: "Capacetes de segurança",
          },
          {
            id: 3,
            name: "Ferramentas isoladas",
          },
          {
            id: 4,
            name: "Botas de segurança",
          },
          {
            id: 5,
            name: "Sistemas de aterramento",
          },
          {
            id: 6,
            name: "Bastões isolantes",
          },
          {
            id: 7,
            name: "Detectores de tensão",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    photo: "https://picsum.photos/500/300?random=1",
    title: "Ensaios Especiais",
    content: [
      {
        id: 1,
        tab: "Torkel",
        title: "Torkel",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "O Torkel é um equipamento utilizado para verificar a integridade das baterias.",
        acting: [
          {
            id: 1,
            name: "Único teste que fornece visão abrangente da capacidade da bateria / banco",
          },
          {
            id: 2,
            name: "Monitor de tensão por elemento, para que, se a tensão cair para um nível ligeiramente acima da tensão de teste final o TORKEL emite alarme, e se houver ",
          },
          {
            id: 3,
            name: "Teste com corrente constante, potência constante e resistência constante",
          },
          {
            id: 4,
            name: "Uso para teste em bateria chumbo ácida e Ni-Ca (níquel cádmio)",
          },
        ],
      },
      {
        id: 2,
        tab: "CPC 100",
        title: "CPC 100",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "O CPC 100 é um equipamento capaz de realizar testes elétricos em diversos equipamentos. O sistema de teste substitui dispositivos de ensaios individuais além de oferecer novos métodos inovadores de testes.",
        acting: [
          {
            id: 1,
            name: "Teste TC e TP",
            content: [
              {
                id: 1,
                name: "Relação de transformação",
              },
              {
                id: 2,
                name: "Polaridade",
              },
              {
                id: 3,
                name: "Saturação",
              },
              {
                id: 4,
                name: "Resistência de enrolamento",
              },
              {
                id: 5,
                name: "Carga (Burden)",
              },
              {
                id: 6,
                name: "Fator de potência da isolação",
              },
            ],
          },
          {
            id: 2,
            name: "Teste disjuntor",
            content: [
              {
                id: 1,
                name: "Resistência de contato",
              },
            ],
          },
          {
            id: 3,
            name: "Teste transformador de potência",
            content: [
              {
                id: 1,
                name: "Relação de transformação",
              },
              {
                id: 2,
                name: "Resistência de enrolamento",
              },
              {
                id: 3,
                name: "Corrente de excitação / magnetização",
              },
              {
                id: 4,
                name: "Teste do comutador sob carga",
              },
              {
                id: 5,
                name: "Fator de potência da isolação, 10 KV, com variação de frequência (15 a 400 Hz) - fator de potência são realizadas para investigar o estado do isolamento de transformadores de potência e buchas. Quando exposto a um número excessivo de altas correntes em decorrência de curtos-circuitos externos, a isolação vai se deteriorando a tal ponto de favorecer a ocorrência de curtos-circuitos",
              },
            ],
          },
          {
            id: 4,
            name: "Teste malha de terra",
            content: [
              {
                id: 1,
                name: "Resistência ôhmica do aterramento",
              },
              {
                id: 2,
                name: "Tensão de passo e toque",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        tab: "CT Analyzer",
        title: "CT Analyzer",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "O CT Analyzer determina automaticamente todos os valores relevantes do transformador de corrente e compara os resultados com o padrão selecionado.",
        acting: [
          {
            id: 1,
            name: "Relação de transformação",
          },
          {
            id: 2,
            name: "Erro",
          },
          {
            id: 3,
            name: "Impedância",
          },
          {
            id: 4,
            name: "Saturação",
          },
          {
            id: 5,
            name: "Polaridade",
          },
          {
            id: 6,
            name: "Resistência de enrolamento",
          },
        ],
      },
      {
        id: 4,
        tab: "Franeo",
        title: "Franeo",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "A análise de resposta em frequência (geralmente chamada de FRA ou SFRA) é eficaz para testar a integridade mecânica dos núcleos e enrolamentos do transformador.",
        acting: [
          {
            id: 1,
            name: "Testa integridade mecânica e elétrica dos transformadores de potência (deformação mecânica dos núcleos, enrolamentos, bobinas e cabos do transformador)",
          },
          {
            id: 2,
            name: "O teste deve ser aplicado após transporte e pós curto circuito e ou descarga atmosférica sofrido",
          },
          {
            id: 3,
            name: "Como manutenção preventiva o teste é recomendado a intervalos de 5 anos",
          },
          {
            id: 4,
            name: "O teste faz uma varredura da resposta de frequência (SFRA)",
          },
          {
            id: 5,
            name: "Aumenta confiabilidade do transformador, reduz custos de manutenção e evita falhas caras",
          },
        ],
      },
      {
        id: 5,
        tab: "VLF",
        title: "VLF (Very Low Frequency)",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "O VLF (Very Low Frequency) é o equipamento ideal para verificar a integridade e prolongar a vida útil dos cabos.",
        acting: [
          {
            id: 1,
            name: "O teste de muito baixa frequência (VLF) permite detectar danos no isolamento no menor tempo possível, sem afetar a qualidade do material de isolamento. Esta técnica é utilizada para medir cabos de média tensão",
          },
          {
            id: 2,
            name: "O VLF-60 é um sistema de teste de alto potencial que opera com frequência muito baixa para assegurar um teste eficiente e a localização de falhas em cabos de média tensão",
          },
          {
            id: 3,
            name: "O teste com frequência muito baixa (VLF) envolve a aplicação de frequências na faixa de 0,01 até 0,1Hz no cabo sob teste, o que não é destrutivo para o isolamento dos cabos em bom funcionamento, mas capaz de detectar falhas presentes nos cabos com defeitos eventuais",
          },
          {
            id: 4,
            name: "Comparado com o teste baseado em CC, que pode introduzir danos no isolamento de cabos em bom estado caso não seja bem realizado, o teste do tipo VLF não introduz efeitos danosos no cabo que estiver sendo testado",
          },
        ],
      },
      {
        id: 6,
        tab: "Vidar",
        title: "Vidar",
        photo: "https://picsum.photos/500/300?random=1",
        subTitle:
          "Destinado a testes em disjuntores de média tensão com isolação a vácuo ou gás SF6.",
        acting: [
          {
            id: 1,
            name: "Ensaio de tensão Aplicada com VIDAR (verificação da integridade das ampolas)",
          },
          {
            id: 2,
            name: "Teste do interruptor de vácuo VIDAR é utilizado para testar a capacidade da câmara de vácuo de inibir flashovers",
          },
        ],
      },
    ],
  },
];

export default servicesContent;

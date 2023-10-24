const ItemsHeader = () => {
  return [
    {
      label: "Início",
      href: "/home#startPage",
      hrefMenu: "/home#startPage",
    },
    {
      label: "Serviços",
      hrefMenu: "/home#servicos",
      children: [
        {
          label: "Contratos de Manutenção",
          children: [
            {
              idRef: 1,
              id: 1,
              label: "Gestão da manutenção",
              href: "/services",
            },
            {
              idRef: 1,
              id: 2,
              label: "Inspeções",
              href: "/services",
            },
            {
              idRef: 1,
              id: 3,
              label: "Limpeza Técnica",
              href: "/services",
            },
            {
              idRef: 1,
              id: 4,
              label: "Manutenção de equipamentos",
              href: "/services",
            },
          ],
        },
        {
          idRef: 2,
          label: "Serviços de oficina",
          href: "/services",
        },
        {
          idRef: 3,
          label: "Construção e montagem de subestações",
          href: "/services",
        },
        {
          idRef: 4,
          label: "Retrofit em equipamentos",
          children: [
            {
              idRef: 4,
              id: 1,
              label: "Retrofit em oficina",
              href: "/services",
            },
            {
              idRef: 4,
              id: 2,
              label: "Retrofit em campo",
              href: "/services",
            },
          ],
        },
        {
          idRef: 5,
          label: "Transformadores de potência",
          href: "/services",
        },
        {
          idRef: 6,
          label: "Manutenção preditiva",
          children: [
            {
              idRef: 6,
              id: 1,
              label: "Inspeção por ultrassom",
              href: "/services",
            },
            {
              idRef: 6,
              id: 2,
              label: "Inspeção por termografia",
              href: "/services",
            },
            {
              idRef: 6,
              id: 3,
              label: "Análise de óleo",
              href: "/services",
            },
          ],
        },
        {
          idRef: 7,
          label: "Laudos e estudos",
          children: [
            {
              idRef: 7,
              id: 1,
              label: "Analise de rede",
              href: "/services",
            },
            {
              idRef: 7,
              id: 2,
              label: "Curto circuito e seletividade",
              href: "/services",
            },
            {
              idRef: 7,
              id: 3,
              label: "SPDA",
              href: "/services",
            },
            {
              idRef: 7,
              id: 4,
              label: "NR10",
              href: "/services",
            },
          ],
        },
        {
          idRef: 8,
          label: "Serviços de Campo",
          children: [
            {
              idRef: 8,
              id: 1,
              label: "Manutenção Preventiva",
              href: "/services",
            },
            {
              idRef: 8,
              id: 2,
              label: "Manutenção Corretiva",
              href: "/services",
            },
            {
              idRef: 8,
              id: 3,
              label: "Teste em EPI's e EPC's",
              href: "/services",
            },
          ],
        },
        {
          idRef: 9,
          label: "Ensaios especiais",
          children: [
            {
              idRef: 9,
              id: 1,
              label: "Torkel",
              href: "/services",
            },
            {
              idRef: 9,
              id: 2,
              label: "CPC 100",
              href: "/services",
            },
            {
              idRef: 9,
              id: 3,
              label: "CT Analyzer",
              href: "/services",
            },
            {
              idRef: 9,
              id: 4,
              label: "Franeo",
              href: "/services",
            },
            {
              idRef: 9,
              id: 5,
              label: "VLF",
              href: "/services",
            },
            {
              idRef: 9,
              id: 6,
              label: "Vidar",
              href: "/services",
            },
          ],
        },
        {
          idRef: 7,
          label: "Ver todos",
          href: "/services",
        },
      ],
    },
    {
      label: "Filiais",
      href: "/home#branhs",
      hrefMenu: "/home#branhs",
    },
    {
      label: "Certificações",
      href: "/home#certificate",
      hrefMenu: "/home#certificate",
    },
    {
      label: "Contato",
      href: "#contatc",
      hrefMenu: "#contatc",
    },
    {
      label: "Blog",
      href: "/home#blog",
      hrefMenu: "/home#blog",
    },
    {
      label: "Área Cliente",
      href: "https://www.sos-service.com.br/02/index.php/component/users/?view=login",
      login: true,
    },
  ];
};

export { ItemsHeader };

const ItemsHeader = () => {
  return [
    {
      label: "Início",
      href: "#startPage",
      hrefMenu: "#startPage",
    },
    {
      label: "Serviços",
      hrefMenu: "#servicos",
      children: [
        {
          label: "Contratos de Manutenção",
          children: [
            {
              label: "Gestão da manutenção",
              href: "#",
            },
            {
              label: "Inspeções",
              href: "#",
            },
            {
              label: "Limpeza Técnica",
              href: "#",
            },
            {
              label: "Manutenção de equipamentos",
              href: "#",
            },
          ],
        },
        {
          label: "Serviços de oficina",
          href: "#",
        },
        {
          label: "Construção e montagem de subestações",
          href: "#",
        },
        {
          label: "Retrofit em equipamentos",
          children: [
            {
              label: "Retrofit em oficina",
              href: "#",
            },
            {
              label: "Retrofit em campo",
              href: "#",
            },
          ],
        },
        {
          label: "Transformadores de potência",
          href: "#",
        },
        {
          label: "Manutenção preditiva",
          children: [
            {
              label: "Inspeção por ultrassom",
              href: "#",
            },
            {
              label: "Inspeção por termografia",
              href: "#",
            },
            {
              label: "Análise de óleo",
              href: "#",
            },
          ],
        },
        {
          label: "Laudos e estudos",
          children: [
            {
              label: "Analise de rede",
              href: "#",
            },
            {
              label: "Curto circuito e seletividade",
              href: "#",
            },
            {
              label: "SPDA",
              href: "#",
            },
            {
              label: "NR10",
              href: "#",
            },
          ],
        },
        {
          label: "Testes em EPI’s e EPC’s",
          href: "#",
        },
        {
          label: "Ensaios especiais",
          children: [
            {
              label: "Torkel",
              href: "#",
            },
            {
              label: "CPC 100",
              href: "#",
            },
            {
              label: "CT Analyzer",
              href: "#",
            },
            {
              label: "Franeo",
              href: "#",
            },
            {
              label: "VLF",
              href: "#",
            },
            {
              label: "Vidar",
              href: "#",
            },
          ],
        },
        {
          label: "Ver todos",
          href: "/services",
        },
      ],
    },
    {
      label: "Filiais",
      href: "#branhs",
      hrefMenu: "#branhs",
    },
    {
      label: "Certificações",
      href: "#certificate",
      hrefMenu: "#certificate",
    },
    {
      label: "Contato",
      href: "#contatc",
      hrefMenu: "#contatc",
    },
    {
      label: "Blog",
      href: "#blog",
      hrefMenu: "#blog",
    },
    {
      label: "Área Cliente",
      href: "#",
      login: true,
    },
  ];
};

export { ItemsHeader };

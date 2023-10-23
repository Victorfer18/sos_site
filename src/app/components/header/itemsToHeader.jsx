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
              label: "Gestão da manutenção",
              href: "/services",
            },
            {
              label: "Inspeções",
              href: "/services",
            },
            {
              label: "Limpeza Técnica",
              href: "/services",
            },
            {
              label: "Manutenção de equipamentos",
              href: "/services",
            },
          ],
        },
        {
          label: "Serviços de oficina",
          href: "/services",
        },
        {
          label: "Construção e montagem de subestações",
          href: "/services",
        },
        {
          label: "Retrofit em equipamentos",
          children: [
            {
              label: "Retrofit em oficina",
              href: "/services",
            },
            {
              label: "Retrofit em campo",
              href: "/services",
            },
          ],
        },
        {
          label: "Transformadores de potência",
          href: "/services",
        },
        {
          label: "Manutenção preditiva",
          children: [
            {
              label: "Inspeção por ultrassom",
              href: "/services",
            },
            {
              label: "Inspeção por termografia",
              href: "/services",
            },
            {
              label: "Análise de óleo",
              href: "/services",
            },
          ],
        },
        {
          label: "Laudos e estudos",
          children: [
            {
              label: "Analise de rede",
              href: "/services",
            },
            {
              label: "Curto circuito e seletividade",
              href: "/services",
            },
            {
              label: "SPDA",
              href: "/services",
            },
            {
              label: "NR10",
              href: "/services",
            },
          ],
        },
        {
          label: "Testes em EPI’s e EPC’s",
          href: "/services",
        },
        {
          label: "Ensaios especiais",
          children: [
            {
              label: "Torkel",
              href: "/services",
            },
            {
              label: "CPC 100",
              href: "/services",
            },
            {
              label: "CT Analyzer",
              href: "/services",
            },
            {
              label: "Franeo",
              href: "/services",
            },
            {
              label: "VLF",
              href: "/services",
            },
            {
              label: "Vidar",
              href: "/services",
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
      href: "/home#contatc",
      hrefMenu: "/home#contatc",
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

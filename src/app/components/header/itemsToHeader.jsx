const ItemsHeader = () => {
  return [
    {
      label: "Início",
      href: "#",
    },
    {
      label: "Serviços",
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
              label: "Limpesa térmica",
              href: "#",
            },
            {
              label: "Man. de Equipamentos",
              href: "#",
            },
          ],
        },
        {
          label: "Serviços de Campo",
          href: "#",
        },
        {
          label: "Serviços de Oficina",
          href: "#",
        },
        {
          label: "Retrofit",
          children: [
            {
              label: "Manutenção de Ar Condicionadossss",
              href: "#",
            },
            {
              label: "Manutenção de Geladeirassss",
              href: "#",
            },
            {
              label: "Manutenção de Lavadora de Roupasssss",
              href: "#",
            },
          ],
        },
        {
          label: "Montagem de subestações",
          href: "#",
        },
        {
          label: "Transformadores",
          children: [
            {
              label: "Manutenção de Ar Condicionadossss",
              href: "#",
            },
            {
              label: "Manutenção de Geladeirassss",
              href: "#",
            },
            {
              label: "Manutenção de Lavadora de Roupasssss",
              href: "#",
            },
          ],
        },
        {
          label: "Manutenção preventiva",
          children: [
            {
              label: "Manutenção de Ar Condicionadossss",
              href: "#",
            },
            {
              label: "Manutenção de Geladeirassss",
              href: "#",
            },
            {
              label: "Manutenção de Lavadora de Roupasssss",
              href: "#",
            },
          ],
        },
        {
          label: "Laudos e estudos",
          children: [
            {
              label: "Manutenção de Ar Condicionadossss",
              href: "#",
            },
            {
              label: "Manutenção de Geladeirassss",
              href: "#",
            },
            {
              label: "Manutenção de Lavadora de Roupasssss",
              href: "#",
            },
          ],
        },
        {
          label: "Ensaios Especiais",
          href: "#",
        },
        {
          label: "Ver todos",
          href: "#",
        },
      ],
    },
    {
      label: "Filiais",
      href: "#reportManitence",
    },
    {
      label: "Certificações",
      href: "#",
    },
    {
      label: "Contato",
      href: "#",
    },
    {
      label: "Área Cliente",
      href: "#",
      login: true,
    },
  ];
};

export { ItemsHeader };

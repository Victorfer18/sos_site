import moment from "moment";

const posts = [
  {
    id: 1,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Corretiva",
    title: "Manutenção Corretiva",
    description:
      "A manutenção corretiva é o ato de consertar máquinas e equipamentos em caráter emergencial de. Ou seja, a manutenção somente é realizada após uma quebra, parada, pane, ou queda de desempenho. Além disso, a manutenção corretiva é bastante conhecida como interrupção ou execução para manutenção da falha.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 2,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Manutenção",
    title: "Manutenção",
    description:
      "A manutenção elétrica nada mais é que a prática de conservação de um circuito elétrico e seus equipamentos, convergindo, pois, no pleno funcionamento das instalações elétricas de uma indústria.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 3,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Preventiva",
    title: "Manutenção Preventiva",
    description:
      "A manutenção preventiva é uma ação planejada e sistemática de revisão, controle e monitoramento dos equipamentos. Ela é feita periodicamente, com o objetivo de reduzir ou impedir falhas do instrumento.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 4,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Duis mollis,.",
    description:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 5,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Nullam id dolor.",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 6,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Cras justo odio.",
    description:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 7,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Fusce dapibus,.",
    description:
      "Fusce dapibus, tellus ac cursus commodo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 8,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Cum sociis natoque penatibus.",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 9,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Sed posuere consectetur.",
    description:
      "Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 10,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Curabitur blandit tempus.",
    description:
      "Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 11,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Nullam id dolor.",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 12,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Duis mollis,.",
    description:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 13,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Praesent commodo cursus magna.",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 14,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Sed posuere consectetur.",
    description:
      "Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Fusce dapibus, tellus ac cursus commodo.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 15,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Fusce dapibus,.",
    description:
      "Fusce dapibus, tellus ac cursus commodo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 16,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Cum sociis natoque penatibus.",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 17,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Curabitur blandit tempus.",
    description:
      "Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 18,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Cras justo odio.",
    description:
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 19,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Morbi leo risus.",
    description:
      "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 20,
    created_at: moment().format("DD/MM/YYYY HH:MM"),
    tag: "Lorem",
    title: "Nulla vitae elit.",
    description:
      "Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    image: "https://picsum.photos/500/300",
  },
];

export { posts };

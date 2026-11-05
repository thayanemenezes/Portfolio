export const experiences = {
  en: [
    {
      role: 'Frontend Developer',
      company: 'EADSKILL',
      period: 'May/2025 - Sep/2026',
      description:
        'I evolved a multi-tenant SaaS platform for AI-powered courses, transforming a limited MVP into an interactive solution for creating and editing multimedia content.',
      result:
        'I implemented AI workflows, real-time collaborative editing, and SCORM/PDF export for course distribution.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Solution4Fleet',
      period: 'Jan/2023 - Jul/2025',
      description:
        'I worked on the evolution of digital solutions for franchises, leading the migration of a PHP/Laravel application to React and Next.js and developing white-label features, lead management, and APIs.',
      result:
        'I modernized the platform and corporate website with performance and SEO improvements; I also supported technical decisions and mentored a frontend team.',
    },
  ],
  'pt-BR': [
    {
      role: 'Frontend Developer',
      company: 'EADSKILL',
      period: 'Mai/2025 - Set/2026',
      description:
        'Evoluí uma plataforma SaaS multi-tenant de cursos com IA, transformando um MVP limitado em uma solução interativa para criação e edição de conteúdo multimídia.',
      result:
        'Implementei fluxos com IA, edição colaborativa em tempo real e exportação SCORM/PDF para distribuição dos cursos.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Solution4Fleet',
      period: 'Jan/2023 - Jul/2025',
      description:
        'Atuei na evolução de soluções digitais para franquias, liderando a migração de uma aplicação de PHP/Laravel para React e Next.js e desenvolvendo recursos white-label, gestão de leads e APIs.',
      result:
        'Modernizei a plataforma e o site corporativo, com melhorias de desempenho e SEO; também apoiei decisões técnicas e mentorei uma equipe de frontend.',
    },
  ],
}

export const projects = {
  en: [
    {
      id: 'platform',
      category: 'web',
      categoryLabel: 'Web',
      title: 'Asterismo Tecnologia',
      summary: 'Landing page for a technology company focused on presenting services and solutions clearly and attractively.',
      image: `${import.meta.env.BASE_URL}asterismo.png`,
      imageAlt: 'Platform website',
      role: 'Lead Frontend Developer',
      stack: 'React, TailwindCSS, Vite',
      context:
        'The project involved creating a landing page for Asterismo Tecnologia to present its services and solutions clearly and attractively. The page needed to be responsive, fast, and SEO-optimized, ensuring a strong experience for visitors.',
      process:
        'I worked from layout and design planning through front-end implementation using React and TailwindCSS. I also conducted usability and performance tests to ensure accessibility and SEO requirements were met. I integrated contact forms and social links to make communication with potential clients easier.',
      result: 'A functional and visually appealing landing page that presents Asterismo Tecnologia’s services in a clear and professional way. The page is still in testing before production launch.',
      detailImage: `${import.meta.env.BASE_URL}asterismo-2.png`,
      link: 'https://www.magicauthor.ai/',
    },
    {
      id: 'astehub',
      category: 'web',
      categoryLabel: 'Web',
      title: 'AsteHub',
      summary: 'A multi-tenant, white-label SaaS platform to centralize catalog management, units, leads, and company websites for franchise networks.',
      image: `${import.meta.env.BASE_URL}astehub-1.png`,
      imageAlt: 'Platform website',
      role: 'Founder and Full Stack Developer',
      stack: 'Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, TailwindCSS, Docker, Turborepo',
      context:
        'AsteHub was born from experience with management systems for networks and franchises and the recognition of an opportunity: allowing companies with multiple units to manage their digital operations in a single platform. The challenge was to build a multi-tenant SaaS solution with data isolation between organizations, centralizing catalogs, units, users, leads, and custom public sites without requiring a separate implementation for each client.',
      process:
        'I am responsible for the product vision, scope definition, architecture, and full-stack development of the platform. I structured the project as a monorepo with Next.js, NestJS, Prisma, and PostgreSQL, using modular architecture and test-driven development. I implemented authentication with persistent sessions, HttpOnly cookies, and org-level access control. I also defined the roadmap for catalog, unit, lead generation, and white-label site publishing modules, prioritizing component reuse, clear responsibilities, security, and scalability.',
      result:
        'The project already has an authentication foundation and a multi-tenant architecture in progress, along with the initial infrastructure and deployment structure. The platform continues to evolve toward MVP, focusing on delivering a centralized, customizable solution ready for different companies and franchise networks. AsteHub also reflects the practical application of my experience in product development, from conception and modeling to implementation and infrastructure.',
      detailImage: `${import.meta.env.BASE_URL}astehub-2.png`,
      link: '',
    },
    {
      id: 'magic-author',
      category: 'web',
      categoryLabel: 'Web',
      title: 'AI SaaS for Course Creation',
      summary: 'A multi-tenant course SaaS with AI, transforming a limited MVP into an interactive solution for building and editing multimedia content.',
      image: `${import.meta.env.BASE_URL}magic-author.png`,
      imageAlt: 'Platform website',
      role: 'Lead Frontend Developer',
      stack: 'React, Next.js, TailwindCSS',
      context:
        'I joined the project when it was still a limited MVP with basic course editing features. The goal was to evolve the platform into a more interactive and customizable solution by incorporating AI-driven workflows. The challenge was to deliver a scalable platform with advanced features while keeping the user experience smooth.',
      process:
        'I served as the front-end technical reference, leading architecture decisions, defining implementation patterns, and guiding the codebase evolution. I identified gaps in the data model and application structure that made scalability and new feature implementation harder, proposing improvements to make the foundation more flexible and sustainable. I was also responsible for migrating features from React to Next.js and transforming Lovable prototypes into production-ready code. In this process, I refined the architecture, built reusable components, and reviewed the code to ensure greater consistency, maintainability, and alignment with product needs.',
      result: 'An evolution from a limited MVP to a more interactive, flexible, and production-ready AI-powered course authoring platform. The solution now offers more complete authoring experiences, multimedia editing, interactive components, real-time collaboration, and course publishing. The project reinforced the importance of a scalable architecture, well-structured processes, and technical decisions aligned with business rules and user needs.',
      detailImage: `${import.meta.env.BASE_URL}magic-author-2.png`,
      link: 'https://www.magicauthor.ai/',
    },
  ],
  'pt-BR': [
    {
      id: 'platform',
      category: 'web',
      categoryLabel: 'Web',
      title: 'Asterismo Tecnologia',
      summary: 'Landing page para empresa de tecnologia, com foco em apresentar serviços e soluções de forma clara e atrativa.',
      image: `${import.meta.env.BASE_URL}asterismo.png`,
      imageAlt: 'Site Plataforma',
      role: 'Desenvolvedora Frontend Principal',
      stack: 'React, TailwindCSS, Vite',
      context:
        'O projeto consistiu em criar uma landing page para a Asterismo Tecnologia, com o objetivo de apresentar seus serviços e soluções de forma clara e atrativa. A página precisava ser responsiva, rápida e otimizada para SEO, garantindo uma boa experiência para os visitantes.',
      process:
        'Atuei desde o planejamento de layout e design, até a implementação do front-end utilizando React e TailwindCSS. Realizei testes de usabilidade e performance, garantindo que a página atendesse aos requisitos de acessibilidade e SEO. Também integrei formulários de contato e links para redes sociais, facilitando a comunicação com potenciais clientes.',
      result: 'Uma landing page funcional e visualmente atraente, que apresenta os serviços da Asterismo Tecnologia de forma clara e profissional. A página ainda está em fase de testes para entrar em produção.',
      detailImage: `${import.meta.env.BASE_URL}asterismo-2.png`,
      link: 'https://www.magicauthor.ai/',
    },
    {
      id: 'astehub',
      category: 'web',
      categoryLabel: 'Web',
      title: 'AsteHub',
      summary: 'Plataforma SaaS multi-tenant e white-label para centralizar a gestão de catálogos, unidades, leads e sites de empresas e franquias.',
      image: `${import.meta.env.BASE_URL}astehub-1.png`,
      imageAlt: 'Site Plataforma',
      role: 'Idealizadora e Desenvolvedora Full Stack',
      stack: 'Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, TailwindCSS, Docker, Turborepo',
      context:
        'O AsteHub nasceu da experiência com sistemas de gestão para redes e franquias e da identificação de uma oportunidade: permitir que empresas com múltiplas unidades gerenciem suas operações digitais em uma única plataforma. O desafio é desenvolver uma solução SaaS multi-tenant, com isolamento de dados entre organizações, capaz de centralizar catálogos, unidades, usuários, leads e sites públicos personalizados, sem exigir uma implementação independente para cada cliente.',
      process:
        'Sou responsável pela idealização, definição do escopo, arquitetura e desenvolvimento Full Stack da plataforma. Estruturei o projeto em um monorepo com Next.js, NestJS, Prisma e PostgreSQL, adotando uma arquitetura modular e desenvolvimento orientado a testes. Implementei a base de autenticação com sessões persistentes, cookies HttpOnly e controle de acesso por organização. Também defini a estrutura para evolução dos módulos de catálogo, unidades, captação de leads e publicação de sites white-label, priorizando reutilização de componentes, separação de responsabilidades, segurança e escalabilidade.',
      result:
        'O projeto já conta com uma base de autenticação e arquitetura multi-tenant em desenvolvimento, além da estrutura inicial de infraestrutura e deploy. A plataforma segue em evolução para seu MVP, com foco em oferecer uma solução centralizada, personalizável e preparada para atender diferentes empresas e redes de franquias. O AsteHub também representa a aplicação prática da minha experiência em desenvolvimento de produtos, desde a concepção e modelagem até a implementação e infraestrutura.',
      detailImage: `${import.meta.env.BASE_URL}astehub-2.png`,
      link: '',
    },
    {
      id: 'magic-author',
      category: 'web',
      categoryLabel: 'Web',
      title: 'Saas Com IA para Criação de Cursos',
      summary:
        'Saas multi-tenant de cursos com IA, transformando um MVP limitado em uma solução interativa para criação e edição de conteúdo multimídia.',
      image: `${import.meta.env.BASE_URL}magic-author.png`,
      imageAlt: 'Site Plataforma',
      role: 'Desenvolvedora Frontend Principal',
      stack: 'React, Next.js, TailwindCSS',
      context:
        'Iniciei no projeto quando ele ainda era um MVP limitado, com recursos básicos de edição de cursos. O objetivo era evoluir a plataforma para uma solução mais interativa e customizável, incorporando fluxos com IA. O desafio era entregar uma plataforma escalável e com features avançadas, mantendo a experiência do usuário fluida. ',
      process:
        'Atuei como referência técnica do front-end, conduzindo decisões de arquitetura, definindo padrões de implementação e orientando a evolução do código. Identifiquei limitações na modelagem de dados e na estrutura da aplicação que dificultavam a escalabilidade e a implementação de novas funcionalidades, propondo melhorias para tornar a base mais flexível e sustentável. Também fui responsável pela migração de funcionalidades de React para Next.js e pela transformação de interfaces prototipadas no Lovable em código de produção. Nesse processo, refinei a arquitetura, estruturei componentes reutilizáveis e revisei o código para garantir maior consistência, manutenibilidade e aderência às necessidades do produto.',
      result: 'Evolução de um MVP limitado para uma plataforma de criação e edição de cursos com IA, mais interativa, flexível e preparada para produção. A solução passou a oferecer experiências de autoria mais completas, com edição de conteúdo multimídia, componentes interativos, colaboração em tempo real e publicação de cursos. O projeto reforçou a importância de uma arquitetura escalável, de processos bem estruturados e de decisões técnicas alinhadas às regras de negócio e às necessidades dos usuários.',
      detailImage: `${import.meta.env.BASE_URL}magic-author-2.png`,
      link: 'https://www.magicauthor.ai/',
    },
  ],
}

export const contact = {
  en: {
    email: 'thayanemenezes.dev@gmail.com',
    github: 'https://github.com/thayanemenezes',
    linkedin: 'https://www.linkedin.com/in/thayane-nascimento-31a5a9191/',
  },
  'pt-BR': {
    email: 'thayanemenezes.dev@gmail.com',
    github: 'https://github.com/thayanemenezes',
    linkedin: 'https://www.linkedin.com/in/thayane-nascimento-31a5a9191/',
  },
}

export const portfolioText = {
  en: {
    header: {
      ariaLabel: 'Main navigation',
      links: [
        { label: 'Presentation', href: '#apresentacao', id: 'apresentacao' },
        { label: 'Experience', href: '#experiencias', id: 'experiencias' },
        { label: 'Projects', href: '#projetos', id: 'projetos' },
        { label: 'Contact', href: '#contato', id: 'contato' },
      ],
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      backToTop: 'Back to top',
    },
    hero: {
      title: 'I am Thayane Nascimento,',
      subtitle: 'I create experiences in a universe of possibilities.',
      description:
        'Full Stack Developer with 6+ years of experience, connecting engineering, design, and product vision.',
      viewProjects: 'View projects',
      talk: "Let's talk",
      continue: 'Continue',
    },
    about: {
      eyebrow: '01 / About me',
      title: 'Technology to innovate and create',
      paragraphs: [
        'Since childhood, technology has always sparked my curiosity. When I got my first computer, during the dial-up internet era, I was fascinated by how those machines could connect people, ideas, and information.',
        'In 2017, I entered the programming world and rediscovered that same sense of wonder I had when spending nights online. The difference was that this time I could understand how it all worked and, even better, build my own systems.',
        'In 2019, I began my professional journey with an internship as an IT technician. A few months later, I started working as a designer until I secured my first opportunity as a full-stack developer. Since then, I have worked on projects in different areas such as e-commerce, automotive, health, and education, always looking for ways to create, improve, and evolve products.',
        'In many of the projects I took part in, I was responsible for migrating legacy systems to new technologies and architecture, ensuring products evolved in a scalable way. In every project, I sought to understand the business context, product goals, and user needs to create solutions that made sense.',
      ],
      continue: 'Continue',
    },
    experience: {
      eyebrow: '02 / Experience',
      title: 'The paths that brought me here',
      intro:
        'Experiences that taught me to look beyond the code and find new possibilities in every product.',
      download: 'Download full resume',
    },
    technologies: {
      title: 'Technologies',
      ariaLabel: 'Used technologies',
    },
    projects: {
      eyebrow: '03 / Selected projects',
      title: 'Projects and case studies',
      intro: 'Solutions designed for both the business and the user, blending creation and optimization.',
      filters: {
        all: 'All',
        web: 'Web',
        product: 'Product',
        data: 'Data',
      },
      role: 'Role',
      stack: 'Stack',
      viewProject: 'View project',
      continue: 'Continue',
    },
    projectCaseStudy: {
      back: 'Back to projects',
      eyebrow: 'Case study / provisional project',
      process: 'Process and technical decisions',
      role: 'My role',
      result: 'Outcome and learnings',
      link: 'Link',
    },
    contact: {
      eyebrow: '04 / Contact',
      title: 'Let’s build something meaningful?',
      intro:
        'I’m open to conversations about opportunities, digital products, and collaborations. Send a message and I’ll get back to you as soon as possible.',
      formStatus: 'Your email app will open with your message ready to send.',
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      placeholders: {
        name: 'What should I call you?',
        email: 'you@company.com',
        message: 'Tell me a little about the opportunity or idea.',
      },
      submit: 'Send message',
      emailSubject: 'Contact through my portfolio from',
    },
    footer: {
      backToTop: 'Back to top',
    },
  },
  'pt-BR': {
    header: {
      ariaLabel: 'Navegação principal',
      links: [
        { label: 'Apresentação', href: '#apresentacao', id: 'apresentacao' },
        { label: 'Experiências', href: '#experiencias', id: 'experiencias' },
        { label: 'Projetos', href: '#projetos', id: 'projetos' },
        { label: 'Contato', href: '#contato', id: 'contato' },
      ],
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
      backToTop: 'Voltar ao início',
    },
    hero: {
      title: 'Sou Thayane Nascimento,',
      subtitle: 'Crio experiências em um universo de possibilidades.',
      description:
        'Desenvolvedora Full Stack com mais de 6 anos de experiência, conectando engenharia, design e visão de produto.',
      viewProjects: 'Ver projetos',
      talk: 'Vamos conversar',
      continue: 'Continuar',
    },
    about: {
      eyebrow: '01 / Quem sou eu',
      title: 'Tecnologia para inovar e criar',
      paragraphs: [
        'Desde criança, a tecnologia sempre despertou minha curiosidade. Quando ganhei meu primeiro computador, na época da internet discada, fiquei fascinada com a forma como aquelas máquinas conseguiam conectar pessoas, ideias e informações.',
        'Em 2017, entrei no mundo da programação e reencontrei aquela mesma sensação de encantamento que sentia ao passar noites navegando na internet. A diferença é que, dessa vez, eu podia entender como tudo aquilo funcionava e, mais do que isso, criar meus próprios sistemas.',
        'Em 2019, comecei minha trajetória profissional com um estágio como técnica de informática. Alguns meses depois, passei a atuar como designer até conquistar minha primeira oportunidade como desenvolvedora full-stack. Desde então, trabalhei em projetos de diferentes áreas, como e-commerce, setor automobilístico, saúde e educação, sempre buscando formas de criar, aprimorar e evoluir produtos.',
        'Em boa parte dos projetos que participei, fui responsável por migrar sistemas legados para novas tecnologias e arquitetura, garantindo que os produtos evoluíssem de forma escalável. Em cada projeto, busquei entender o contexto do negócio, os objetivos do produto e as necessidades dos usuários para criar soluções que fizessem sentido.',
      ],
      continue: 'Continuar',
    },
    experience: {
      eyebrow: '02 / Experiências',
      title: 'Caminhos que me trouxeram até aqui',
      intro:
        'Experiências que me ensinaram a olhar além do código e a encontrar novas possibilidades para cada produto.',
      download: 'Baixar currículo completo',
    },
    technologies: {
      title: 'Tecnologias',
      ariaLabel: 'Tecnologias utilizadas',
    },
    projects: {
      eyebrow: '03 / Projetos selecionados',
      title: 'Projetos e estudos de caso',
      intro: 'Construção pensada para o negócio e para o usuário, navegando entre criações e otimizações.',
      filters: {
        all: 'Todos',
        web: 'Web',
        product: 'Produto',
        data: 'Dados',
      },
      role: 'Papel',
      stack: 'Stack',
      viewProject: 'Ver projeto',
      continue: 'Continuar',
    },
    projectCaseStudy: {
      back: 'Voltar aos projetos',
      eyebrow: 'Estudo de caso / projeto provisório',
      process: 'Processo e decisões técnicas',
      role: 'Meu papel',
      result: 'Resultado e aprendizados',
      link: 'Link',
    },
    contact: {
      eyebrow: '04 / Contato',
      title: 'Vamos construir algo que faça sentido?',
      intro:
        'Estou aberta a conversar sobre oportunidades, produtos digitais e colaborações. Envie uma mensagem e retornarei assim que possível.',
      formStatus: 'Seu aplicativo de e-mail será aberto com a mensagem pronta para envio.',
      labels: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
      },
      placeholders: {
        name: 'Como posso te chamar?',
        email: 'voce@empresa.com',
        message: 'Conte um pouco sobre a oportunidade ou ideia.',
      },
      submit: 'Enviar mensagem',
      emailSubject: 'Contato pelo portfólio de',
    },
    footer: {
      backToTop: 'Voltar ao início',
    },
  },
}

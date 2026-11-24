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
        { label: 'Projects', href: '#projetos', id: 'projetos' },
        { label: 'About', href: '#apresentacao', id: 'apresentacao' },
        { label: 'Experience', href: '#experiencias', id: 'experiencias' },
        { label: 'Stack', href: '#tecnologias', id: 'tecnologias' },

        { label: 'Contact', href: '#contato', id: 'contato' },
      ],
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      backToTop: 'Back to top',
    },
    hero: {
      systemTag: 'CORE // FULL_STACK_ENGINEER',
      title: 'THAYANE NASCIMENTO',
      subtitle: 'Full Stack Developer & Lead Frontend',
      description:
        '6+ years of experience engineering scalable web applications, multi-tenant SaaS platforms, and high-performance interfaces. Specialized in the modern TypeScript ecosystem and AI-powered workflows.',
      viewProjects: 'Explore Projects',
      talk: 'Get In Touch',
      continue: 'Continue',
      metrics: [
        { value: '06+', label: 'Years Experience' },
        { value: 'SaaS', label: 'Multi-tenant Platforms' },
        { value: 'AI', label: 'Interactive Workflows' },
      ],
    },
    about: {
      eyebrow: '01 // About & Core Profile',
      title: 'Engineering systems with precision, scalabilty and product vision',
      paragraphs: [
        'Since childhood, technology has sparked my curiosity. When I got my first computer during the dial-up internet era, I was fascinated by how machines connect people, ideas, and information.',
        'In 2017, I stepped into software engineering and discovered the ability to build systems from the ground up with architecture, clean code, and product purpose.',
        'Starting in 2019, I worked through IT support and UI/UX design into full-stack development. Over the years, I have built and delivered software across diverse verticals including e-commerce, automotive, healthcare, and EdTech SaaS.',
        'In multiple mission-critical projects, I led the migration of legacy codebases into scalable, modern web architectures (React, Next.js, TypeScript, NestJS). My focus is always on engineering robust solutions aligned with business metrics and seamless user experience.',
      ],
      continue: 'Continue',
    },
    experience: {
      eyebrow: '02 // Professional Experience',
      title: 'Career & Engineering Milestones',
      intro:
        'Hands-on leadership, architectural decisions, and product delivery across high-growth platforms.',
      download: 'Download Full Resume',
    },
    technologies: {
      eyebrow: '03 // Tech Stack',
      title: 'Technologies & Core Stack',
      ariaLabel: 'Used technologies',
    },
    projects: {
      eyebrow: '04 // Selected Projects',
      title: 'Production Projects & Case Studies',
      intro: 'High-impact platforms blending architectural scalability, AI workflows, and resilient engineering.',
      filters: {
        all: 'All',
        web: 'Web',
        product: 'Product',
        data: 'Data',
      },
      role: 'Role',
      stack: 'Stack',
      viewProject: 'View Project',
      continue: 'Continue',
    },
    projectCaseStudy: {
      back: 'Back to projects',
      eyebrow: 'Case study / Technical Breakdown',
      process: 'Architecture & Technical Decisions',
      role: 'Role & Responsibilities',
      result: 'Outcomes & Business Impact',
      link: 'Live Production Link',
    },
    contact: {
      eyebrow: '05 // Contact Terminal',
      title: 'Let’s build something extraordinary?',
      intro:
        'Open to high-impact software engineering roles, technical leadership, and collaborative digital products. Transmit your message below.',
      formStatus: 'Your email client will open with the transmission ready to dispatch.',
      labels: {
        name: 'Identifier / Name',
        email: 'Direct Email',
        message: 'Message Payload',
      },
      placeholders: {
        name: 'How should I address you?',
        email: 'contact@domain.com',
        message: 'Describe your project, team opportunity, or inquiry...',
      },
      submit: 'Transmit Message',
      emailSubject: 'Contact through portfolio from',
    },
    footer: {
      backToTop: 'Return to top',
    },
  },
  'pt-BR': {
    header: {
      ariaLabel: 'Navegação principal',
      links: [
        { label: 'Sobre', href: '#apresentacao', id: 'apresentacao' },
        { label: 'Experiências', href: '#experiencias', id: 'experiencias' },
        { label: 'Stack', href: '#tecnologias', id: 'tecnologias' },
        { label: 'Projetos', href: '#projetos', id: 'projetos' },
        { label: 'Contato', href: '#contato', id: 'contato' },
      ],
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
      backToTop: 'Voltar ao início',
    },
    hero: {
      systemTag: 'CORE // FULL_STACK_ENGINEER',
      title: 'THAYANE NASCIMENTO',
      subtitle: ['Full Stack Developer', 'Lead Frontend', 'Frontend Developer', 'Backend Developer', 'Software Engineer', 'Product Engineer'],
      description:
        'Mais de 6 anos de experiência desenvolvendo aplicações escaláveis, plataformas SaaS multi-tenant e interfaces de alta performance. Especialista no ecossistema TypeScript/JavaScript e fluxos integrados com IA.',
      viewProjects: 'Explorar Projetos',
      talk: 'Iniciar Contato',
      continue: 'Continuar',
      metrics: [
        { value: '06+', label: 'Anos de Experiência' },
        { value: 'SaaS', label: 'Plataformas Multi-tenant' },
        { value: 'IA', label: 'Fluxos Interativos' },
      ],
    },
    about: {
      eyebrow: '01 // Perfil & Trajetória',
      title: 'Engenharia de software com precisão, escalabilidade e visão de produto',
      paragraphs: [
        'Desde a infância, a tecnologia sempre despertou minha curiosidade. Quando ganhei meu primeiro computador na era da internet discada, fiquei fascinada com a forma como máquinas conectavam pessoas, ideias e soluções.',
        'Em 2017, entrei no mundo da programação e me especializei na engenharia de sistemas modernos, unindo arquitetura robusta, código limpo e propósito de negócio.',
        'Em 2019, consolidei minha jornada profissional passando por suporte técnico e design de interface até assumir papéis como desenvolvedora full-stack. Atuei em projetos nos setores de e-commerce, automobilístico, saúde e EdTech SaaS.',
        'Em diversos projetos estratégicos, liderei a migração de sistemas legados para arquiteturas modernas (React, Next.js, TypeScript, NestJS). Meu compromisso constante é entregar soluções escaláveis, alinhadas aos objetivos do produto e com foco na melhor experiência.',
      ],
      continue: 'Continuar',
    },
    experience: {
      eyebrow: '02 // Experiências Profissionais',
      title: 'Marcos de Carreira & Engenharia',
      intro:
        'Liderança técnica, evolução arquitetural e entrega de plataformas de alto impacto.',
      download: 'Baixar Currículo Completo',
    },
    technologies: {
      eyebrow: '03 // Stack Tecnológica',
      title: 'Tecnologias & Ecossistema',
      ariaLabel: 'Tecnologias utilizadas',
    },
    projects: {
      eyebrow: '04 // Projetos Selecionados',
      title: 'Projetos em Produção & Estudos de Caso',
      intro: 'Construção pensada para o negócio e para o usuário, unindo arquitetura escalável e inovação.',
      filters: {
        all: 'Todos',
        web: 'Web',
        product: 'Produto',
        data: 'Dados',
      },
      role: 'Papel',
      stack: 'Stack',
      viewProject: 'Ver Projeto',
      continue: 'Continuar',
    },
    projectCaseStudy: {
      back: 'Voltar aos projetos',
      eyebrow: 'Estudo de Caso / Detalhamento Técnico',
      process: 'Processo & Decisões Técnicas',
      role: 'Meu Papel',
      result: 'Resultados & Aprendizados',
      link: 'Acessar Link do Projeto',
    },
    contact: {
      eyebrow: '05 // Terminal de Contato',
      title: 'Vamos construir algo extraordinário?',
      intro:
        'Estou aberta a oportunidades de engenharia de software, liderança técnica e desenvolvimento de produtos digitais de impacto. Envie sua mensagem.',
      formStatus: 'Seu cliente de e-mail será aberto pronto para o envio.',
      labels: {
        name: 'Identificação / Nome',
        email: 'E-mail Direto',
        message: 'Payload da Mensagem',
      },
      placeholders: {
        name: 'Como devo te chamar?',
        email: 'voce@empresa.com',
        message: 'Compartilhe detalhes sobre a oportunidade, ideia ou projeto...',
      },
      submit: 'Transmitir Mensagem',
      emailSubject: 'Contato pelo portfólio de',
    },
    footer: {
      backToTop: 'Voltar ao topo',
    },
  },
}

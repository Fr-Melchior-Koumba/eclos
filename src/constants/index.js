import { blog, call, img1, img2, img3, facebook, twitter, performance, responsive, maintenance, project1, project2, app, ecommerce, refonte, setting, web, homeBlog, call2, mail, location } from "../assets/images";

export const navLinks = [
    {
        id: "blog",
        name: "Blog",
        img: blog,
        url: "/blog"

    },

    {
        id: "contact",
        name: "Contact",
        img: call,
        url: "/contact"

    }
];

export const navLinksBlog = [
    {
        id: "home",
        name: "Accueil",
        img: homeBlog,
        url: "/blog"

    },

    {
        id: "contact",
        name: "Contact",
        img: call,
        url: "/contact"

    }
];

export const imageScroll = [
    {
        id: "img1",
        img: img1,
        name: "template site web"
    },
    {
        id: "img2",
        img: img2,
        name: "template site web"
    },
    {
        id: "img3",
        img: img3,
        name: "template site web"
    }
];

export const advantages = [
    {
        id: 0,
        img: performance,
        name: "performance",
        text: "Optimisation de votre site web pour un développement et un déploiement plus rapide."
    },

    {
        id: 1,
        img: responsive,
        name: "responsive",
        text: "Vous pourrez consulter votre site web, sur toutes sortes de résolution d’appareils."
    },

    {
        id: 2,
        img: maintenance,
        name: "maintenace",
        text: "Mettre en place des mises à jour ou l’ajout de quelques fonctionnalités."
    },
];

export const projects = [
    {
        id: 0,
        img: project1,
        name: "Cash-Bank",
        text: "Le projet Cash-Bank est une Single Page Application, pour une entreprise, présentant le principal produit de de cette dernière. ",
        techno: "ReactJs, TailwindCss",
        github: "https://github.com/Fr-Melchior-Koumba/cash-bank",
        view: "https://cash-bank.vercel.app/"
    },

    {
        id: 1,
        img: project2,
        name: "PorscheWorld",
        text: "Le projet PorscheWorld est une landing page pour la vente d'une serie de véhicule de la marque Porsche. ",
        techno: "NextJs, TailwindCss",
        github: "https://github.com/Fr-Melchior-Koumba/porsche-world",
        view: "https://porsche-world.vercel.app/"
    }
];

export const prestations = [
    {
        id: 0,
        img: web,
        title: "Développement web",
        text: "Développement des solutions digitales basées sur vos attentes, vos besoins mais également ceux de vos clients."
    },

    {
        id: 1,
        img: ecommerce,
        title: "Création de site e-commerce",
        text: "Création de votre votre boutique en ligne, pour maximiser les performances et le chiffre d’affaire de votre business."
    },

    {
        id: 2,
        img: refonte,
        title: "Refonte de site",
        text: "Amélioration de votre site web pour qu’il corresponde le mieux à vos objectifs, à votre vision."
    },

    {
        id: 3,
        img: app,
        title: "Création de site vitrine",
        text: "Boostez votre notoriété, votre présence en ligne en ayant un beau site vitrine, performant et facilement accessible."
    },

    {
        id: 4,
        img: setting,
        title: "Maintenance de site",
        text: "Une garantie à la bonne santé de votre site web, à l'optimisation de ses performances graphiques et techniques."
    }
];

export const conceptions = [
    {
        id: 0,
        number: "1",
        title: "Évaluation du projet",

        steps: [
           {    
                name: "evaluation",
                step1: "Étude du contexte et des besoins",
                step2: "Analyse des objectifs",
                step3: "Rédaction du cahier des charges"
           }

        ]
    },

    {
        id: 1,
        number: "2",
        title: "Conception et Ergonomie",

        steps: [
           {
                name:"conception",
                step1: "Recommandation UX",
                step2: "Arborescence du site",
                step3: "Agencement du contenu"
           }

        ]
    },

    {
        id: 2,
        number: "3",
        title: "Graphisme",

        steps: [
           {
                name: "graphisme",
                step1: "Propositon de la maquette",
                step2: "Correction et validation",
                step3: "Déclinaison des maquettes validées"
           }

        ]
    },

    
    {
        id: 3,
        number: "4",
        title: "Développemnt et Intégration",

        steps: [
           {
                name: "développement",
                step1: "Intégration de la maquette",
                step2: "Suivi et échange avec le client",
                step3: "Test avant la mise en ligne"
           }

        ]
    },

    {
        id: 4,
        number: "5",
        title: "Mise en ligne et technique",

        steps: [
           {
                name: "online",
                step1: "Planification de la mise en ligne",
                step2: "Mise en ligne du site",
                step3: "Recettage post mise en ligne"
           }

        ]
    },
    
]


export const contactInfos = [
    {
        id: 0,
        title: "+241 66 74 34 53",
        img: call2
    },

    {
        id: 1,
        title: "eclosStartup@gmail.com",
        img: mail
    },

    {
        id: 2,
        title: "Gabon, Libreville",
        img: location
    }
]

export const footerLink = [
    {
        id: 0,
        title: "Qui est Eclos?",
        url: "/"
    },

    {
        id: 1,
        title: "Confidentialité",
        url: "/politique-de-confidentialite"
    },

    {
        id: 2,
        title: "Entrez en contact",
        url: "/contact"
    }
]

export const linkSociaux = [
    {
        id:0,
        name: "facebook",
        img: facebook,
        link: 'https://web.facebook.com/profile.php?id=100089980442199'
    },

    {
        id:1,
        name: "twitter",
        img: twitter,
        link: 'https://twitter.com/eclosstartup'
    }
]
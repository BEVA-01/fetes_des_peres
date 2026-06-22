const TexteExcuse = `
Mon oubli ne représente pas la place que tu as dans ma vie. Je suis désolé de t’avoir blessé.

Et avant de terminer, il y a une dernière chose que je voulais te dire.

Tu es entré dans ma vie lorsque j'avais 4 ans.

Depuis ce jour, tu as occupé une place immense dans mon histoire, dans mon enfance, dans mon adolescence et aujourd'hui encore dans ma vie d'adulte.

Lorsque je regarde en arrière, je réalise que la plupart de mes souvenirs ont été construits avec toi présent à mes côtés.

Tu n'as jamais été simplement le "compagnon de ma mère" ou mon "beau-père".

Tu as été une véritable figure paternelle dans ma vie.

C'est pour cela que savoir que je t'ai fait autant de peine aujourd'hui me blesse à mon tour.

Parce que tu comptes pour moi bien plus que je ne le montre parfois.

Et quoi qu'il arrive, cela ne changera jamais.
`;

const souvenirs = {
    2006: [
        {
            date: "2006-06-12",
            dateTexte: "2006",
            titre: "Le début",
            texte: "Notre première rencontre remonte à l'anniversaire de Fred et Xavier. Accompagné de mon fidèle Buzz l'Éclair, j'étais alors à des années-lumière d'imaginer que tu allais un jour marquer notre quotidien à tout jamais.",
            images: ["Photo1/2006.jpg"]
        }
    ],
    2009: [
        {
            date: "2009-06-01",
            dateTexte: "2009",
            titre: "Chateau de Valençay",
            texte: "Une de nos premières visites après ton arrivée sur Châteauroux!",
            images: ["Photo1/1.jpg"]
        }
    ],
    2010: [
        {
            date: "2010-06-05",
            dateTexte: "Le 5 juin 2010",
            titre: "Happyland",
            texte: "Vroum vroum.",
            images: ["Photo1/1bis.JPG"]
        }
    ],
    2011: [
        {
            date: "2011-06-02",
            dateTexte: "Le 2 juin 2011",
            titre: "Fun Planet",
            texte: "Le fusil était si lourd je m'en souviens!",
            images: ["Photo1/2.JPG"]
        },
        {
            date: "2011-08-14",
            dateTexte: "Le 14 août 2011",
            titre: "Saut en parachute - Gruyères",
            texte: "Je me souviens que nous avions attendu longtemps avant qu'ils viennent te chercher.",
            images: ["Photo1/3.JPG"]
        },
        {
            date: "2011-08-14",
            dateTexte: "Le 14 août 2011",
            titre: "Village de Gruyères",
            texte: "Le même jour, mais déjà une nouvelle aventure.",
            images: ["Photo1/4.JPG"]
        },
        {
            date: "2011-08-14",
            dateTexte: "Le 14 août 2011",
            titre: "Village de Gruyères",
            texte: "Avoue qu'on était choupis.",
            images: ["Photo1/5.JPG"]
        }
    ],
    2012: [
        {
            date: "2012-01-15",
            dateTexte: "Le 15 janvier 2012",
            titre: "Musée océanographique de Monaco",
            texte: "J'étais pas encore trop lourd à cette époque, ça va. 😄",
            images: ["Photo1/6.JPG"]
        },
        {
            date: "2012-04-21",
            dateTexte: "Le 21 avril 2012",
            titre: "Plage de Nice",
            texte: "Je n'avais pas l'air très rassuré. Il faut dire que, dans mon esprit, le moindre risque pouvait signer la fin du monde.",
            images: ["Photo1/7.JPG"]
        },
        {
            date: "2012-04-29",
            dateTexte: "Le 29 avril 2012",
            titre: "Ton anniversaire à Blausasc (32 ans)",
            texte: "Sacrée descente! 🍺",
            images: ["Photo1/8.JPG"]
        },
        {
            date: "2012-06-16",
            dateTexte: "Le 16 juin 2012",
            titre: "A mon tour de fêter mes 9 ans au karting! (Hyères)",
            texte: "Je me voyais déjà pilote. Aujourd'hui, j'essaie surtout d'obtenir le permis.",
            images: ["Photo1/9.JPG"]
        }
    ],
    2013: [
        {
            date: "2013-03-13",
            dateTexte: "Le 13 mai 2013",
            titre: "Mon premier kimono",
            texte: "Un futur combattant qui, grâce à toi, allait devenir moins peureux.",
            images: ["Photo1/10.JPG"]
        },
        {
            date: "2013-06-09",
            dateTexte: "Le 9 juin 2013",
            titre: "Événement médiéval à Villeneuve-Loubet",
            texte: `À cette époque, les gens du peuple me connaissaient sous le nom de "Gaston le Brave".`,
            images: ["Photo1/11.JPG"]
        },
        {
            date: "2013-06-26",
            dateTexte: "Le 26 juin 2013",
            titre: "Obtention de ma ceinture jaune au taekwondo",
            texte: "Malgré le manque de preuves, je reste persuadé d'être plus fort que Ngannou.",
            images: ["Photo1/12.JPG"]
        }
    ],
    2014: [
        {
            date: "2014-12-24",
            dateTexte: "Réveillon 2014",
            titre: "Notre rituel de l'année",
            texte: "J'étais bien habillé maintenant, comparé au précédent Noël.",
            images: ["Photo1/13.JPG"]
        }
    ],
    2015: [
        {
            date: "2015-01-15",
            dateTexte: "Janvier 2015",
            titre: "Les pulls Star Wars",
            texte: "On avait déjà la même garde-robe.😭",
            images: [
                "Photo1/Bonus1.jpg"
            ]
        },
        {
            date: "2015-07-17",
            dateTexte: "Le 17 juillet 2015",
            titre: "Jetski à deux",
            texte: "On avait passé un superbe moment!",
            images: [
                "Photo1/14.JPG",
                "Photo1/15.JPG"
            ]
        },
        {
            date: "2015-07-18",
            dateTexte: "Le 18 juillet 2015",
            titre: "Chez JM",
            texte: "On s'était sûrement encore amusés à se noyer. 💦",
            images: [
                "Photo1/16.JPG"
            ]
        }
    ],
    2016: [
        {
            date: "2016-05-01",
            dateTexte: "Le 1er mai 2016",
            titre: "Pique nique au Castel des deux Rois",
            texte: "Mon prime de la beauté",
            images: ["Photo1/17.JPG"]
        },
        {
            date: "2016-12-10",
            dateTexte: "Le 10 décembre 2016",
            titre: "Luna Park avec Jade",
            texte: "Mon prime de la beauté(toujours)",
            images: ["Photo1/18.JPG"]
        }
    ],
    2017: [
        {
            date: "2017-04-30",
            dateTexte: "Le 30 avril 2017",
            titre: "Ton anniversaire à Montauroux",
            texte: "On était si bien!",
            images: ["Photo1/19.jpg"]
        },
        {
            date: "2017-06-08",
            dateTexte: "Le 8 juin 2017",
            titre: "Un anniversaire sur la plage privée",
            texte: "Les golfes de mon crâne n'allaient pas tarder à se creuser. 😭",
            images: ["Photo1/20.JPG"]
        },
        {
            date: "2017-08-12",
            dateTexte: "Le 12 août 2017",
            titre: "Les Gorges du Verdon",
            texte: "On attend toujours le permis bateau. 👀",
            images: ["Photo1/21.JPG",
                "Photo1/22.JPG"
             ]
        },
        {
            date: "2017-12-9",
            dateTexte: "Le 9 décembre 2017",
            titre: "Séjour à Lyon",
            texte: "Grâce à ça j'avais pu sécher les cours le vendredi j'étais trop heureux!",
            images: ["Photo1/24.jpg",
                "Photo1/25.jpg"
            ]
        },
        {
            date: "2017-12-31",
            dateTexte: "Quelque part en 2017",
            titre: "Spectacle de Selig",
            texte: "Mon premier spectacle humoriste!",
            images: ["Photo1/Selig.jpg"]
        }
    ],
    2018: [
        {
            date: "2018-01-18",
            dateTexte: "Le 18 janvier 2018",
            titre: "Luna Park",
            texte: "J'ai déjà déjà dit que j'étais à mon prime la?",
            images: ["Photo1/23.JPG"]
        },
        {
            date: "2018-02-20",
            dateTexte: "Le 20 fevrier 2018",
            titre: "Anniversaire Maman barbecue",
            texte: "Il faudrait s'en refaire un!",
            images: ["Photo1/36.jpg"]
        },
        {
            date: "2018-06-08",
            dateTexte: "Le 8 juin 2018",
            titre: "Anniversaire moi!",
            texte: "Je crois que cette photo est pour cette periode...🤓",
            images: ["Photo1/35.jpg"]
        },
        {
            date: "2018-10-24",
            dateTexte: "Le 24 octobre 2018",
            titre: "Spectacle Arthus",
            texte: "Un des meilleurs.",
            images: ["Photo1/37.jpg"]
        }, 
        {
            date: "2018-11-12",
            dateTexte: "Novembre 2018",
            titre: "Arts asiatiques",
            texte: "(Je tiens mal le sabre pour info)",
            images: ["Photo1/26.jpg"]
        },
        {
            date: "2018-11-12",
            dateTexte: "Réveillon 2018",
            titre: "Un samourai confirmé",
            texte: "(Y'a du progrès)",
            images: ["Photo1/39.jpg"]
        }
    ],
    2019: [
        {
            date: "2019-03-19",
            dateTexte: "Le 19 mars 2019",
            titre: "Spectacle Franck Dubosc",
            texte: "Lui aussi il était bien!",
            images: ["Photo1/38.jpg"
            ]
        },
        {
            date: "2019-05-19",
            dateTexte: "Le 19 mai 2019",
            titre: "Permis bateau à Sainte-Maxime",
            texte: "On avait eu beaucoup de pluie mais c'était cool!",
            images: ["Photo1/27.jpg",
                "Photo1/28.jpg"]
        },
        {
            date: "2019-06-09",
            dateTexte: "Le 9 juin 2019",
            titre: "Iles Borromées",
            texte: "On avait jamais autant fait de gestes pour se faire comprendre par les natifs. 😭",
            images: ["Photo1/29.jpg",
                "Photo1/30.jpg"
            ]
        },
        {
            date: "2019-08-09",
            dateTexte: "Aout 2019",
            titre: "Plage à Mandelieu avec Juliette",
            texte: "Ma réputation de m'endormir partout n'était toujours pas battue.",
            images: ["Photo1/31.jpg"]
        }
    ],
    2020: [
        {
            date: "2020-08-01",
            dateTexte: "Le 1er août 2020",
            titre: "Tes 40 ans! 🥳 (La croix sur Roudoule)",
            texte: "Mon souvenir le plus marquant était ta réconciliation avec Seb!",
            images: ["Photo1/32.jpg"]
        },
        {
            date: "2020-11-08",
            dateTexte: "Le 8 novembre 2020",
            titre: "2ème confinement COVID",
            texte: "Celle la c'est cadeau",
            images: ["Photo1/33.jpg"]
        }
    ],
    2021: [
        {
            date: "2021-06-28",
            dateTexte: "Le 28 Juin 2021",
            titre: "Mes premiers tafs!",
            texte: "Grâce à toi, j'avais réussi à intégrer Arc Intérim pour travailler pendant l'été !",
            images: ["Photo1/34.jpg"]
        }
    ],
    2022: [
        {
            date: "2022-05-02",
            dateTexte: "Le 2 mai 2022",
            titre: "Intégration à l'Aéroport!",
            texte: "Ils m'ont vu que 4 fois, mais j'étais quand même stylé.",
            images: ["Photo1/40.JPG"]
        }
    ],
    2023: [
        {
            date: "2023-06-08",
            dateTexte: "Le 8 juin 2023",
            titre: "Initiation à l'hypnose pour mon anniversaire à Bordeaux",
            texte: "Même hypnotisé j'ai pensé à toi!",
            images: ["Photo1/41.jpg"]
        }
    ],
    2024: [
        {
            date: "2024-04-30",
            dateTexte: "Le 30 avril 2024",
            titre: "Voyage à Rome pour fêter tes 44ans!",
            texte: "Beaucoup de galères mais vacances mémorables!",
            images: ["Photo1/42.jpeg"]
        }
    ],
    2025: [
        {
            date: "2025-03-05",
            dateTexte: "Mars 2025",
            titre: "Ares 23 à Nice",
            texte: "On avait vu des putains de combats!",
            images: ["Photo1/43.jpg"]
        }
    ],
    2026: [
        {
            date: "2026-05-02",
            dateTexte: "Le 2 Mai 2026",
            titre: "Anniversaire Yann, QUIZ ROOM",
            texte: "On avait gagné haut la main grâce à notre QI supérieur",
            images: ["Photo1/QuizRoom.jpg"]
        },
        {
            date: "2026-06-21",
            dateTexte: "Le 21 Juin 2026",
            titre: "Fête des Pères 2026",
            texte: TexteExcuse,
            images: []
        }
    ],
    2027: [
        {
            date: "2027-01-01",
            dateTexte: "2027 ?",
            titre: "Une page à écrire",
            displayCountdown: false,
            texte: `
Cette année n'existe pas encore.

Elle reste à écrire.

J'espère simplement qu'elle contiendra encore de nombreux souvenirs avec toi.
            `,
            images: ["Photo1/fin.jpg"]
        }
    ]
};

const content = document.getElementById("memory-content");
const buttons = document.querySelectorAll(".year");
const progress = document.getElementById("timeline-progress");
const startButton = document.getElementById("start-button");
const music = document.getElementById("music");
const timelineSection = document.getElementById("timeline-section");
const openLetter = document.getElementById("open-letter");
const letter = document.getElementById("letter");

function calculerTempsDepuis(dateMemories) {
    const debut = new Date(dateMemories);
    const maintenant = new Date();
    const differenceMs = maintenant - debut;
    const jours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const heures = Math.floor(differenceMs / (1000 * 60 * 60));
    return {
        jours,
        heures
    };
}

function formaterTexte(texte) {
    return texte.trim().replace(/\n/g, "<br><br>");
}

function scrollLentVers(element, time = 3.5) {
    const start = window.scrollY;
    const final = element.offsetTop;
    const distance = final -start;

    let lastTime = 0;
    let timeStamp = 0;

    function animation(currentTime) {
        if (!lastTime) {
            lastTime = currentTime;
        }
        const deltaTime = (currentTime -lastTime) / 1000;
        lastTime = currentTime;
        timeStamp += deltaTime;
        const progression = Math.min(timeStamp/time, 1);
        const easing = 1 - Math.pow(1 - progression, 3);

        window.scrollTo(
            0,
            start + distance * easing
        );

        if (progression < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const pourcentage = (index / (buttons.length - 1)) * 100;

        if (progress) {
            progress.style.width = `${pourcentage}%`;
        }

        const year = button.dataset.year;
        const memories = souvenirs[year];

        if (!memories) {
            content.innerHTML = `
                <h3>${year}</h3>
                <p>Souvenirs à compléter.</p>
            `;
            return;
        }

        const memoriesHTML = memories.map(memory => {
            let compteurHTML = "";

            if (memory.displayCountdown !== false) {
                const temps = calculerTempsDepuis(memory.date);

                compteurHTML = `
                    <div class="memory-counter">
                        Depuis ce souvenir : ${temps.jours.toLocaleString("fr-FR")} jours,
                        soit environ ${temps.heures.toLocaleString("fr-FR")} heures.
                    </div>
                `;
            }

            const imagesHTML = memory.images.map(image => `
                <img 
                    src="${image}" 
                    alt="${memory.titre}"
                    onerror="this.style.display='none'"
                >
            `).join("");

            return `
                <div class="memory-item">
                    <p class="memory-date">${memory.dateTexte}</p>
                    <h3>${memory.titre}</h3>
                    ${compteurHTML}
                    <p class="memory-text">${formaterTexte(memory.texte)}</p>
                    <div class="memory-images">
                        ${imagesHTML}
                    </div>
                </div>
            `;
        }).join("");

        content.innerHTML = `
            <h3>${year}</h3>
            ${memoriesHTML}
        `;
    });
});

if (openLetter && letter) {
    openLetter.addEventListener("click", () => {
        letter.classList.toggle("show");

        openLetter.textContent = letter.classList.contains("show")
            ? "Refermer le message"
            : "Ouvrir le message";
    });
}

if (startButton && music && timelineSection) {
    startButton.addEventListener("click", () => {
        music.play().catch(() => {
            console.log("La musique a été bloquée par le navigateur.");
        });

        startButton.textContent = "Bienvenue";

        setTimeout(() => {
            scrollLentVers(timelineSection, 3.5);
        }, 700);
    });
}
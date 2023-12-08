const questions = [
  {
    "text": "Grâce à quelle source d'énergie principale voulez-vous développer votre monde ?",
    "answers": [
      {
        "text": "Energie fossile (charbon, pétrole, gaz)",
        "image": "img/q1r1.png",
        "pollution-score": 1,
        "planet-asset": "img/planet/q1r1.png",
        "onclic-text": "",
        "brief-text": "Les combustibles fossiles sont effectivement la source d'énergie la plus répandue, fournissant une part significative des besoins énergétiques mondiaux. Par exemple, les produits pétroliers représentent environ 35% des besoins énergétiques des États-Unis. Cependant, ils sont aussi associés à des problèmes environnementaux majeurs, notamment la pollution de l'air et de l'eau, la dégradation des terres, et les émissions importantes de gaz à effet de serre contribuant au réchauffement climatique​​. <a href='https://www.nrdc.org/stories/fossil-fuels-dirty-facts'>lien</a>",
        "brief-image": "img/brief/q1r1.png"
      },
      {
        "text": "Énergie nucléaire ( uranium, plutonium)",
        "image": "img/q1r2.png",
        "pollution-score": 2,
        "planet-asset": "img/planet/q1r2.png",
        "onclic-text": "",
        "brief-text": "L'énergie nucléaire est en effet l'une des sources d'énergie les plus performantes en termes de faibles émissions de carbone. Cependant, elle pose des problèmes importants liés aux déchets radioactifs et à la sécurité. La gestion des déchets nucléaires est un défi majeur, nécessitant un stockage de longue durée pour minimiser les risques de contamination radioactive​​​​​​. <a href='https://www.eia.gov/energyexplained/nuclear/nuclear-power-and-the-environment.php'>lien</a>",
        "brief-image": "img/brief/q1r2.png"
      },
      {
        "text": "Energie renouvelable (solaire, éolien, hydraulique)",
        "image": "img/q1r3.png",
        "pollution-score": 3,
        "planet-asset": "img/planet/q1r3.png",
        "onclic-text": "",
        "brief-text": "Les énergies renouvelables, telles que l'énergie solaire et éolienne, sont considérées comme les plus écologiques. Elles dépendent cependant des conditions météorologiques et nécessitent des matériaux pour la fabrication d'équipements. Bien qu'elles aient des impacts environnementaux plus faibles comparées aux combustibles fossiles, elles ne sont pas totalement exemptes de défis, notamment en termes de coût et de disponibilité des matériaux nécessaires​​. https://www.ucsusa.org/resources/environmental-impacts-renewable-energy-technologies",
        "brief-image": "img/brief/q1r3.png"
      },
      {
        "text": "Energie alternative (biomasse, géothermie)",
        "image": "img/q1r4.png",
        "pollution-score": 4,
        "planet-asset": "img/planet/q1r4.png",
        "onclic-text": "",
        "brief-text": "Le terme 'énergie alternative' peut inclure diverses formes d'énergie, y compris les renouvelables. Ces sources sont polyvalentes et peuvent avoir un impact positif sur la diversification énergétique et la réduction des émissions de carbone. Cependant, elles peuvent aussi avoir des effets négatifs sur la biodiversité et l'environnement, en fonction de leur mode d'exploitation et de localisation​​. https://www.energy.gov/eere/solar/solar-energy-wildlife-and-environment",
        "brief-image": "img/brief/q1r4.png"
      }
    ]
  },
  {
    "text": "D'où provient le réchauffement climatique ?",
    "answers": [
      {
        "text": "Le changement climatique est juste une partie du cycle naturel de la Terre.",
        "image": "img/q2r1.png",
        "pollution-score": 0,
        "planet-asset": "img/planet/q2r1.png",
        "brief-text": "",
        "onclic-text": "Bien que le climat de la Terre ait toujours changé au cours de son histoire, les changements observés au cours des 150 dernières années sont exceptionnels et ne peuvent pas être considérés comme naturels. La rapidité et l'ampleur du réchauffement actuel ne correspondent pas aux cycles naturels de réchauffement et de refroidissement connus. Les études de paléoclimatologie montrent que les changements récents sont sans précédent par rapport aux 5 millions d'années précédentes​​​​.\nhttps://www.fs.usda.gov/ccrc/education/climate-primer/natural-climate-cycles",
        "brief-image": "img/brief/q2r1"
      },
      {
        "text": "Les taches solaires ou les rayons cosmiques galactiques sont responsables du changement climatique.",
        "image": "img/q2r2.png",
        "pollution-score": 0,
        "planet-asset": "img/planet/q2r2.png",
        "brief-text": "",
        "onclic-text": "Bien que les taches solaires et les rayons cosmiques puissent affecter le climat sur Terre, les enregistrements satellitaires montrent qu'il n'y a pas eu de tendance à la hausse de l'énergie solaire frappant la Terre depuis 1978. Par conséquent, ils ne peuvent pas être la cause du récent réchauffement global. De plus, les preuves scientifiques montrent que les rayons cosmiques ne sont pas très efficaces pour former des nuages et que leur quantité a en fait augmenté ces dernières années, ce qui devrait théoriquement refroidir la Terre, et non la réchauffer​​.\nhttps://www.ucl.ac.uk/news/2019/sep/analysis-five-climate-change-science-misconceptions-debunked",
        "brief-image": "img/brief/q2r2.png"
      },
      {
        "text": "L'influence humaine a réchauffé l'atmosphère, l'océan et la terre.",
        "image": "img/q2r3.png",
        "pollution-score": 0,
        "planet-asset": "img/planet/q2r3.png",
        "onclic-text": "",
        "brief-text": "L'augmentation rapide des températures mondiales observée aujourd'hui correspond à une augmentation des niveaux de dioxyde de carbone dans l'atmosphère depuis la révolution industrielle, principalement due à la combustion de combustibles fossiles et à la déforestation. Cela a été confirmé par des études et des modèles climatiques indiquant que les activités humaines sont la cause principale du changement climatique actuel​​​​.\nhttps://news.climate.columbia.edu/2017/04/04/how-we-know-climate-change-is-not-natural/",
        "brief-image": "img/brief/q2r3.png"
      },
      {
        "text": "Le CO2 est un petit pourcentage de l'atmosphère, mais il a un effet de réchauffement important.",
        "image": "img/q2r4.png",
        "pollution-score": 0,
        "planet-asset": "img/planet/q2r4.png",
        "onclic-text": "",
        "brief-text": "Malgré sa petite proportion dans l'atmosphère, le CO2 a un effet de serre significatif. Des expériences ont montré que les cylindres contenant du CO2 piègent plus de chaleur et restent plus chauds plus longtemps que ceux contenant de l'air normal. Ces résultats sont répétés dans les expériences en laboratoire et dans l'atmosphère, démontrant l'effet de serre du dioxyde de carbone​​.\nhttps://www.ucl.ac.uk/news/2019/sep/analysis-five-climate-change-science-misconceptions-debunked",
        "brief-image": "img/brief/q2r4.png"
      }]
  },
  {
    "text": "Quel type de transport est privilégié dans votre société ?",
    "answers": [
      {
        "text": "Transports en communs (bus, trains, ferrys)",
        "pollution-score": 1,
        "image": "img/q3r1.png",
        "planet-asset": "img/planet/q3r1.png",
        "onclic-text": "",
        "brief-text": "L’énergie utilisé par un moyen de transport étant calculé en fonction de sa vitesse, et de son poid, il est préférable d’utiliser des transports idéalement peu lourd et à une vitesse raisonnable, cependant, le nombre de passager importe aussi, transporté 100 personnes pour 10 fois plus d’énergie utilisé est évidemment préférable au transport d’une seule personne si l’on divise l’énergie dépensé par 10. Pour en savoir plus, vous pouvez vous renseigner sur la formule de l’énergie cinétique (https://fr.wikipedia.org/wiki/%C3%89nergie_cin%C3%A9tique)\
          Il est a noté que ce calcul ne prend pas en compte le rendement des différents moteurs, mais il s’agit uniquement d’investissement sur un véhicule particulier, cela n’a donc pas d’impacte sur un véhicule que l’on souhaite favorisé dans la société entiére.",
        "brief-image": "img/brief/q3r1.png"
      },
      {
        "text": "Voitures individuelles, covoiturages",
        "pollution-score": 2,
        "image": "img/q3r2.png",
        "planet-asset": "img/planet/q3r2.png",
        "onclic-text": "",
        "brief-text": "La voiture individuelle n’est pas une solution viable,  une voiture pesant environs 1,4 tonnes (https://www.largus.fr/pros/actualite-automobile/le-poids-moyen-des-voitures-est-stable-depuis-2011-en-europe-10493398.html ) contre environs 20 tonnes pour un bus (https://www.groupito.com/blog/la-minute-groupito/quelles-sont-les-principales-caracteristiques-dun-autocar/) , mais ce dernier peut transporter plus de 40 personnes. Aujourd’hui, le co-voiturages est une solution citoyenne, qui ne changera pas le monde mais jouera toujours un minimum.",
        "brief-image": "img/brief/q3r2.png"
      },
      {
        "text": "Transports en communs, avions compris",
        "pollution-score": 3,
        "image": "img/q3r3.png",
        "planet-asset": "img/planet/q3r3.png",
        "onclic-text": "",
        "brief-text": "L’avions est honnétement une catastrophe, utilisé par une faible population à l’échelle mondiale, il représente une part importante des émissions,6% de la contribution au réchauffement climatique (https://www.greenpeace.fr/voyage-ecologique/reduire-ses-voyages-en-avion-une-solution-pour-climat/).",
        "brief-image": "img/brief/q3r3.png"
      },
      {
        "text": "Éviter un maximum de déplacement non essentiel, humains comme marchandise",
        "pollution-score": 4,
        "image": "img/q3r4.png",
        "planet-asset": "img/planet/q3r4.png",
        "onclic-text": "",
        "brief-text": "Afin de préserver au mieux la planéte, la “meilleure” solution serai de limiter ses déplacements longues distances, mais éviter les transports de marchandises aurait aussi un impacte, favorisant les circuit courts.",
        "brief-image": "img/planet/q3r4.png"
      }
    ]
  },
  {
    "text": "Quels types d’énergie serai la plus souhaitable dans les transports ?",
    "answers": [
      {
        "text": "Électrique",
        "pollution-score": 1,
        "image": "img/q4r1.png",
        "planet-asset": "img/planet/q4r1.png",
        "brief-text": "",
        "onclic-text": "L’énergie électrique est une bonne solution pour préserver le climat. En France, où 84% de l'énergie électrique est produite par le nucléaire, elle émet très peu voire pas du tout de gaz à effet de serre. Cependant, la fabrication des batteries doit également être prise en compte. https://www.edf.fr/",
        "brief-image": "img/brief/q4r1.png"
      },
      {
        "text": "Hydrogène",
        "pollution-score": 2,
        "image": "img/q4r2.png",
        "planet-asset": "img/planet/q4r2.png",
        "brief-text": "",
        "onclic-text": "L’hydrogène n’est pas un moyen de produire directement de l’énergie, mais plutôt un moyen de stocker de l’énergie. Les voitures à hydrogène ne remplaceront probablement pas les voitures électriques. https://www.frandroid.com/survoltes/voitures-electriques/1516564_pourquoi-les-voitures-a-hydrogene-ne-remplaceront-jamais-les-voitures-electriques",
        "brief-image": "img/brief/q4r2.png"
      },
      {
        "text": "Pétrochimique",
        "pollution-score": 3,
        "image": "img/q4r3.png",
        "planet-asset": "img/planet/q4r3.png",
        "brief-text": "",
        "onclic-text": "Le pétrochimique représente nos carburants principaux actuels. Cependant, il libère une quantité importante de gaz à effet de serre en plus d'avoir des limites en termes de quantités.",
        "brief-image": "img/brief/q4r3.png"
      },
      {
        "text": "Hydraulique",
        "pollution-score": 4,
        "image": "img/q4r4.png",
        "planet-asset": "img/planet/q4r4.png",
        "brief-text": "",
        "onclic-text": "L’hydraulique est un moyen de produire de l’énergie, par exemple via les barrages. Cependant, il ne sera pas possible de voir naître des voitures hydrauliques.",
        "brief-image": "img/brief/q4r4.png"
      }
    ]
  },
  {
    "text": "Quel régime alimentaire adopter pour réduire l'impact sur le réchauffement climatique de votre monde ?",
    "answers": [
      {
        "text": "Régime riche en viande et produits laitiers",
        "pollution-score": 1,
        "image": "img/q5r1.png",
        "planet-asset": "img/planet/q5r1.png",
        "onclic-text": "",
        "brief-text": "Un régime riche en viande et produits laitiers a un impact environnemental significatif. L'élevage nécessite beaucoup de terres pour la culture des aliments destinés aux animaux et conduit à la déforestation, ce qui aggrave le changement climatique. De plus, l'élevage est une source majeure d'émissions de gaz à effet de serre. https://www.uclahealth.org/news/how-diet-affects-climate-change",
        "brief-image": "img/brief/q5r1.png"
      },
      {
        "text": "Régime végétarien ou végétalien",
        "pollution-score": 2,
        "image": "img/q5r2.png",
        "planet-asset": "img/planet/q5r2.png",
        "onclic-text": "",
        "brief-text": "Adopter un régime végétarien ou végétalien peut réduire considérablement les émissions de gaz à effet de serre. Les aliments d'origine végétale comme les fruits, les légumes et les céréales ont une empreinte carbone plus faible. De plus, un régime à base de plantes peut contribuer à une réduction significative des risques de maladies chroniques et des coûts de santé associés. https://www.universityofcalifornia.edu/news/how-your-diet-affects-climate-change",
        "brief-image": "img/brief/q5r2.png"
      },
      {
        "text": "Consommation modérée de poissons et fruits de mer",
        "pollution-score": 3,
        "image": "img/q5r3.png",
        "planet-asset": "img/planet/q5r3.png",
        "onclic-text": "",
        "brief-text": "Bien que manger du poisson puisse être une alternative plus saine à la viande rouge, la pêche commerciale et l'aquaculture ont également des coûts environnementaux. Les méthodes de pêche peuvent nuire à la biodiversité marine et l'élevage de poissons peut polluer les environnements aquatiques. https://www.dw.com/en/world-food-day-how-changes-in-our-diet-can-help-mitigate-climate-change/a-50796472",
        "brief-image": "img/brief/q5r3.png"
      },
      {
        "text": "Réduction de la consommation d'aliments ultra-transformés",
        "pollution-score": 4,
        "image": "img/q5r4.png",
        "planet-asset": "img/planet/q5r4.png",
        "onclic-text": "",
        "brief-text": "La réduction de la consommation d'aliments ultra-transformés est également importante. Ces aliments nécessitent souvent des ingrédients issus de monocultures intensives, comme l'huile de palme ou le sirop de maïs, qui sont associés à la perte de biodiversité et à une utilisation élevée d'intrants tels que les engrais et les pesticides. https://www.cambridge.org/core/journals/proceedings-of-the-nutrition-society/article/food-system-and-climate-change-are-plantbased-diets-becoming-unhealthy-and-less-environmentally-sustainable/525CDD9FC618E5488A5B931669FA7493",
        "brief-image": "img/brief/q5r4.png"
      }
    ]
  },
  {
    "text": "Quels sont les impacts de l'alimentation locale et importée sur le réchauffement climatique et quelle est la véracité des idées courantes à ce sujet ?",
    "answers": [
      {
        "text": "Les aliments locaux ont toujours une empreinte carbone plus faible que les aliments importés.",
        "pollution-score": 1,
        "image": "img/q6r1.png",
        "planet-asset": "img/planet/q6r1.png",
        "brief-text": "",
        "onclic-text": "Bien que les aliments locaux impliquent souvent des distances de transport plus courtes, ce n'est pas le seul facteur déterminant leur empreinte carbone. Les processus de production, les conditions environnementales et les méthodes de culture peuvent également influencer significativement l'empreinte carbone. Par exemple, des aliments cultivés localement en utilisant des méthodes intensives en énergie peuvent avoir une empreinte plus élevée que des aliments importés produits de manière plus durable. https://www.acsh.org/news/2021/05/27/local-food-sustainable-food-evidence-says-otherwise-15571",
        "brief-image": "img/brief/q6r1.png"
      },
      {
        "text": "Manger local soutient toujours la durabilité et la biodiversité.",
        "pollution-score": 2,
        "image": "img/q6r2.png",
        "planet-asset": "img/planet/q6r2.png",
        "brief-text": "",
        "onclic-text": "Si l'achat d'aliments locaux peut soutenir la communauté et parfois réduire les émissions liées au transport, cela ne garantit pas automatiquement la durabilité ou la protection de la biodiversité. Les pratiques agricoles locales, telles que l'utilisation de pesticides ou une gestion inefficace de l'eau, peuvent avoir des impacts environnementaux négatifs. https://news.climate.columbia.edu/2012/09/04/how-green-is-local-food/",
        "brief-image": "img/brief/q6r2.png"
      },
      {
        "text": "La réduction de la consommation de viande rouge peut avoir un impact positif sur l'environnement.",
        "pollution-score": 3,
        "image": "img/q6r3.png",
        "planet-asset": "img/planet/q6r3.png",
        "brief-text": "",
        "onclic-text": "Choisir des alternatives à la viande rouge et aux produits laitiers, même un jour par semaine, peut réduire significativement l'empreinte carbone alimentaire. La production de viande rouge est l'une des sources majeures d'émissions de gaz à effet de serre dans le secteur alimentaire. https://ourworldindata.org/food-choice-vs-eating-local",
        "brief-image": "img/brief/q6r3.png"
      },
      {
        "text": "Les aliments importés peuvent parfois être plus durables que les aliments locaux.",
        "pollution-score": 4,
        "image": "img/q6r4.png",
        "planet-asset": "img/planet/q6r4.png",
        "brief-text": "",
        "onclic-text": "Dans certains cas, importer des aliments peut être plus durable que de les produire localement, notamment lorsque les aliments ne sont pas de saison dans la région. Par exemple, la production de laitue en Espagne pour l'importation au Royaume-Uni pendant les mois d'hiver peut entraîner des émissions trois à huit fois inférieures à celles de la production locale. https://ourworldindata.org/food-choice-vs-eating-local",
        "brief-image": "img/planet/q6r4.png"
      }
    ]
  },
  {
    "text": "Quel est l’utilisation d’internet dans le monde que vous souhaitez créer ?",
    "answers": [
      {
        "text": "Utilisable par tout le monde, comme aujourd’hui",
        "pollution-score": 1,
        "image": "img/q7r1.png",
        "planet-asset": "img/planet/q7r1.png",
        "onclic-text": "",
        "brief-text": "A l'heure actuelle, Internet représente environ 4% des émissions mondiales de CO2, englobant à la fois la consommation énergétique et la fabrication des équipements informatiques. Cette proportion devrait doubler d'ici 2025 en France. Les échanges de contenus sur la toile, tels que le partage de vidéos, films, ou images, consomment une quantité considérable d'énergie. Une approche consistant à stocker les médias localement pourrait réduire ces émissions, limitant ainsi le trajet des données sur des milliers de kilomètres. https://www.hellocarbo.com/blog/calculer/impact-du-numerique-sur-l-environnement/",
        "brief-image": "img/brief/q7r1.png"
      },
      {
        "text": "Uniquement réservé aux services essentiels ( médical par exemple, ) et aux connaissances",
        "pollution-score": 2,
        "image": "img/q7r2.png",
        "planet-asset": "img/planet/q7r2.png",
        "onclic-text": "",
        "brief-text": "En restreignant l'utilisation d'Internet aux services essentiels, on pourrait significativement réduire les émissions de CO2 tout en maintenant des niveaux de sécurité nécessaires. Bien qu'une élimination totale semble impraticable, cela pourrait contribuer à atténuer l'impact environnemental tout en préservant l'efficacité des services d'urgence.",
        "brief-image": "img/brief/q7r2.png"
      },
      {
        "text": "Utilisations réduites au minimum, travail et formalités administratives, sans divertissement",
        "pollution-score": 3,
        "image": "img/q7r3.png",
        "planet-asset": "img/planet/q7r3.png",
        "onclic-text": "",
        "brief-text": "En limitant l'accès à Internet aux formalités administratives et au travail professionnel, on pourrait drastiquement réduire la consommation énergétique et les émissions de CO2. La suppression des téléchargements de médias entraînerait une économie substantielle, en particulier pour les entreprises qui n'auraient plus besoin de vastes serveurs de stockage.",
        "brief-image": "img/brief/q7r3.PNG"
      },
      {
        "text": "Développement accéléré, utilisation maximale pour toute la population mondiale",
        "pollution-score": 4,
        "image": "img/q7r4.png",
        "planet-asset": "img/planet/q7r4.png",
        "onclic-text": "",
        "brief-text": "L'évolution rapide d'Internet, avec une utilisation maximale pour l'ensemble de la population mondiale, pose des défis majeurs. En 2021, il y avait environ 35 milliards d'appareils connectés, et d'ici 2025, ce nombre devrait atteindre 75 milliards, formant ce que l'on appelle l'\"Internet des objets\". Cette expansion exponentielle pourrait épuiser rapidement les ressources, en particulier les métaux rares nécessaires à la fabrication des composants électroniques. Par exemple, l'étain, avec des réserves estimées pour seulement 20 ans au rythme actuel de consommation. https://www.planetoscope.com/matieres-premieres/169-kilos-d-etain-produits-dans-le-monde.html",
        "brief-image": "img/brief/q7r4.png"
      }
    ]
  },
  {
    "text": "Est-ce vraiment utile de nettoyer sa boîte mail réguliérment ?",
    "answers": [
      {
        "text": "La suppression des e-mails peut réduire l'empreinte carbone.",
        "pollution-score": 1,
        "image": "img/q8r1.png",
        "planet-asset": "img/planet/q8r1.png",
        "brief-text": "",
        "onclic-text": "Stocker des e-mails consomme de l'énergie, principalement en raison de l'utilisation de centres de données pour les conserver. Nettoyer régulièrement votre boîte de réception peut être un petit pas vers la réduction de l'empreinte carbone des e-mails. Par exemple, selon Brightly, cela pourrait économiser 16 433 tonnes de carbone par an au Royaume-Uni. https://fightclimatechange.earth/2022/05/22/the-environmental-cost-of-email/",
        "brief-image": "img/brief/q8r1.png"
      },
      {
        "text": "Opter pour des sources d'énergie renouvelables pour alimenter les centres de données est plus efficace.",
        "pollution-score": 2,
        "image": "img/q8r2.png",
        "planet-asset": "img/planet/q8r2.png",
        "brief-text": "",
        "onlick-text": "Une approche plus efficace pour réduire l'empreinte carbone des e-mails pourrait être d'adresser la manière dont l'énergie est générée pour alimenter la technologie. Les centres de données peuvent être alimentés par des sources d'énergie renouvelables, une initiative déjà adoptée par des entreprises comme Apple et Google. https://ourenvironment.ac.nz/2021/05/21/whats-the-carbon-footprint-of-an-email/",
        "brief-image": "img/brief/q8r2.png"
      },
      {
        "text": "Nettoyer sa boîte mail est le moyen le plus efficace de réduire son empreinte carbone numérique.",
        "pollution-score": 3,
        "image": "img/q8r3.png",
        "planet-asset": "img/planet/q8r3.png",
        "brief-text": "",
        "onclic-text": "Bien que la suppression des e-mails puisse contribuer à réduire l'empreinte carbone, il existe des moyens plus efficaces d'agir sur le plan environnemental. Par exemple, acheter moins de produits électroniques, les conserver plus longtemps et utiliser des appareils moins énergivores sont des approches plus impactantes pour réduire l'empreinte carbone numérique. https://phys.org/news/2022-12-emails-inbox-climate.html",
        "brief-image": "img/brief/q8r3.png"
      },
      {
        "text": "Envoyer moins d'e-mails a un grand impact sur la réduction des émissions de carbone.",
        "pollution-score": 4,
        "image": "img/q8r4.png",
        "planet-asset": "img/planet/q8r4.png",
        "brief-text": "",
        "onclic-text": "Bien que la réduction du nombre d'e-mails envoyés puisse sembler une bonne idée, l'impact global sur les émissions de carbone est relativement faible par rapport à d'autres actions. Le fonctionnement des centres de données et des serveurs est une source plus importante d'émissions, et c'est là que des changements plus significatifs peuvent être réalisés. https://bnn.network/breaking-news/climate-environment/the-hidden-environmental-impact-of-emails-a-deep-dive/",
        "brief-image": "img/brief/q8r4.png"
      }
    ]
  },
  {
    "text": "Quel type d'habitation envisagez-vous de construire dans votre monde, en considérant leur impact sur le réchauffement climatique ?",
    "answers": [
      {
        "text": "Maisons passives et à haute efficacité énergétique",
        "pollution-score": 1,
        "image": "img/q9r1.png",
        "planet-asset": "img/planet/q9r1.png",
        "onclic-text": "",
        "brief-text": "Ces maisons sont conçues pour maximiser l'efficacité énergétique, réduisant les besoins en chauffage et climatisation jusqu'à 90 %. Les matériaux isolants avancés et les systèmes de ventilation récupératrice de chaleur sont essentiels pour atteindre une telle performance énergétique. https://blog.passivehouse-international.org/benefits-passive-house-buildings/",
        "brief-image": "img/brief/q9r1.png"
      },
      {
        "text": "Passoires thermiques",
        "pollution-score": 2,
        "image": "img/q9r2.png",
        "planet-asset": "img/planet/q9r2.png",
        "onclic-text": "",
        "brief-text": "Les passoires thermiques sont mal isolées et nécessitent jusqu'à 50 % d'énergie en plus pour le chauffage et la climatisation par rapport aux bâtiments conformes aux normes modernes d'efficacité énergétique. Leur forte consommation énergétique contribue significativement aux émissions de gaz à effet de serre.",
        "brief-image": "img/planet/q9r2.png"
      },
      {
        "text": "Maisons traditionnelles avec chauffage au charbon ou au fuel",
        "pollution-score": 3,
        "image": "img/q9r3.png",
        "planet-asset": "img/planet/q9r3.png",
        "onclic-text": "",
        "brief-text": "Les systèmes de chauffage au charbon ou au fuel peuvent émettre environ 2,5 fois plus de CO2 que les systèmes de chauffage modernes utilisant des énergies renouvelables. Ces combustibles fossiles libèrent une grande quantité de CO2 et d'autres gaz à effet de serre lors de leur combustion.",
        "brief-image": "img/brief/q9r3.png"
      },
      {
        "text": "Bâtiments utilisant des énergies renouvelables",
        "pollution-score": 4,
        "image": "img/q9r4.png",
        "planet-asset": "img/planet/q9r4.png",
        "onclic-text": "",
        "brief-text": "L'intégration de systèmes d'énergies renouvelables dans les constructions modernes peut réduire les émissions de gaz à effet de serre de jusqu'à 80 % par rapport aux bâtiments traditionnels. Ces bâtiments peuvent produire une partie ou la totalité de leur propre énergie, réduisant ainsi leur empreinte carbone.",
        "brief-image": "img/brief/q9r4.png"
      }
    ]
  },
  {
    "text": "Quels matériaux de construction devriez-vous envisager pour une habitation écologique, et quels sont les idées fausses courantes à ce sujet ?",
    "answers": [
      {
        "text": "Le bois certifié est un matériau de construction écologique.",
        "pollution-score": 1,
        "image": "img/q10r1.png",
        "planet-asset": "img/planet/q10r1.png",
        "brief-text": "",
        "onclic-text": "Le bois provenant de forêts gérées de manière durable peut être un excellent choix écologique. Il stocke le carbone capturé durant la croissance des arbres, réduisant ainsi les émissions globales de CO2. Les bâtiments en bois peuvent avoir une empreinte carbone jusqu'à 25 % plus basse que des constructions similaires en béton ou en acier.",
        "brief-image": "img/brief/q10r1.png"
      },
      {
        "text": "Le béton de chanvre est un matériau de construction écologique.",
        "pollution-score": 2,
        "image": "img/q10r2.png",
        "planet-asset": "img/planet/q10r2.png",
        "brief-text": "",
        "onlick-text": "Le béton de chanvre, composé de chanvre et d'un liant, est un matériau de construction durable qui offre une excellente isolation thermique. Il a une faible empreinte carbone, car le chanvre absorbe le CO2 durant sa croissance et le béton de chanvre continue de séquestrer le carbone au fil du temps.",
        "brief-image": "img/brief/q10r2.png"
      },
      {
        "text": "Le PVC n'est pas un matériau de construction écologique.",
        "pollution-score": 3,
        "image": "img/q10r3.png",
        "planet-asset": "img/planet/q10r3.png",
        "brief-text": "",
        "onclic-text": "Bien que le PVC (polychlorure de vinyle) soit durable et résistant, il n'est pas considéré comme écologique. Sa production et son élimination peuvent libérer des substances chimiques nocives et des dioxines. Le PVC est également difficile à recycler et peut contribuer à la pollution plastique.",
        "brief-image": "img/brief/q10r3.png"
      },
      {
        "text": "Les matériaux de construction recyclés ne sont pas toujours écologiques.",
        "pollution-score": 4,
        "image": "img/q10r4.png",
        "planet-asset": "img/planet/q10r4.png",
        "brief-text": "",
        "onclic-text": "Bien que l'utilisation de matériaux recyclés puisse être bénéfique, elle n'est pas automatiquement écologique. Certains matériaux recyclés peuvent nécessiter des traitements ou des processus énergivores pour leur remise en état. De plus, si le recyclage nécessite un transport longue distance, cela peut augmenter l'empreinte carbone du matériau.",
        "brief-image": "img/brief/q10r4.png"
      }
    ]
  }
]
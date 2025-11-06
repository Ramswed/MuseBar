const MENU_CONFIG = {
  categories: [
    {
      id: "tapas",
      name: "Tapas",
      items: [
        {
          name: "CAMEMBERT AU FOUR",
          price: "8€",
          description: "Miel, noix, thym, pommes de terre.",
        },
        {
          name: "SAUCISSON",
          price: "6.50€",
          description: "Saucisson traditionnel.",
        },
        {
          name: "ÉPINARDS AU CUMIN",
          price: "5€",
          description:
            "Épinards, cumin, pois chiches grillés, pain, tomate, ail, chèvre frais.<br><small>🌱 végétarien</small>",
        },
        {
          name: "POMMES DE TERRE AU FOUR",
          price: "6.50€",
          description:
            "Pommes de terre, paprika, herbes de Provence, sauce menthe.<br><small>🌱 végétarien</small>",
        },
        {
          name: "CAPONATA",
          price: "5€",
          description:
            "Confit aubergines, tomates séchées, oignon, céleri, pignons, pain, ail.<br><small>🌱 végétarien</small>",
        },
        {
          name: "BROCHETTES POULET - CHORIZO (x3)",
          price: "7€",
          description:
            "Poulet, chorizo, courgettes, dattes, tomates séchées, miel.",
        },
        {
          name: "NUGGETS ÉPICÉS",
          price: "6€",
          description: "Sauce yaourt menthe.",
        },
        {
          name: "FOCACCIA AUX OLIVES",
          price: "8€",
          description: "Sauce yaourt menthe.<br><small>🌱 végétarien</small>",
        },
        {
          name: "GROS CROQUE MR.",
          price: "13€",
          description:
            "Pain à focaccia, béchamel échalote, jambon, gruyère, Neufchâtel.",
        },
      ],
    },
    {
      id: "aperitifs",
      name: "Apéritifs",
      items: [
        {
          name: "PASTIS",
          price: "4€",
          description: "Apéritif traditionnel.",
        },
        {
          name: "MUSETTE",
          price: "4.50€",
          description: "Apéritif maison.",
        },
        {
          name: "BELLINI",
          price: "6.50€",
          description: "Cocktail à base de prosecco.",
        },
        {
          name: "MENTHE PASTILLE",
          price: "6.50€",
          description: "Apéritif rafraîchissant.",
        },
      ],
    },
    {
      id: "bieres",
      name: "Bières",
      items: [
        {
          name: "BLONDE DE SOIF",
          price: "4€ / 7€",
          description: "La Cardamine - 4,5% alc (25cl / 50cl).",
        },
        {
          name: "IPA",
          price: "4.50€ / 8€",
          description: "Spore - 6,0% alc (25cl / 50cl).",
        },
        {
          name: "NEIPA",
          price: "4.50€ / 8€",
          description: "Les deux amants - 7,0% alc (25cl / 50cl).",
        },
        {
          name: "BLONDE AU ROMARIN",
          price: "4.50€ / 8€",
          description: "Brewoody - 5,8% alc (25cl / 50cl).",
        },
        {
          name: "AMBRÉE",
          price: "4.50€ / 8€",
          description: "Les deux amants - 6,0% alc (25cl / 50cl).",
        },
        {
          name: "TRIPLE",
          price: "4.50€ / 8€",
          description: "La Cardamine - 8,7% alc (25cl / 50cl).",
        },
        {
          name: "BLANCHE",
          price: "4.50€ / 8€",
          description: "Spore - 5,1% alc (25cl / 50cl).",
        },
        {
          name: "BIÈRE DU MOMENT",
          price: "4.50€ / 8€",
          description: "Picon +1€.",
        },
      ],
    },
    {
      id: "cocktails",
      name: "Cocktails",
      subcategories: [
        {
          name: "Avec Alcool",
          items: [
            {
              name: "COCKTAIL DU MOMENT",
              price: "8€",
              description: "Cocktail spécial du moment.",
            },
            {
              name: "SPRITZ",
              price: "7€ / 8€",
              description: "Apérol / Suze / Campari.",
            },
            {
              name: "AMARETTO STORMY",
              price: "8€",
              description: "Rhum vieux, Amaretto, Ginger Beer, Citron vert.",
            },
            {
              name: "CAIPIRINHA",
              price: "7€",
              description: "Cocktail brésilien traditionnel.",
            },
            {
              name: "ESPRESSO",
              price: "8€",
              description: "Vodka, expresso.",
            },
            {
              name: "BRAMBLE",
              price: "8€",
              description: "Gin, mure, citron, sucre de canne, fruit pressé.",
            },
            {
              name: "MOSCOW-LONDON MULE / GIN TO",
              price: "8€",
              description: "Gin ou Vodka, citron, Ginger Beer.",
            },
          ],
        },
        {
          name: "Sans Alcool",
          items: [
            {
              name: "DRYQUIRI",
              price: "6€",
              description:
                "Martini Floral 0,0%, Litchi sirop, citron, eau gazeuse.",
            },
            {
              name: "CITRONNADE MAISON",
              price: "6€",
              description: "Citron, sirop gingembre, menthe, eau gazeuse.",
            },
          ],
        },
      ],
    },
    {
      id: "vins",
      name: "Vins",
      subcategories: [
        {
          name: "Rouges",
          items: [
            {
              name: "BLAYE - CÔTES DE BORDEAUX",
              price: "25€",
              description: "AOC (12cl / 75cl). 6.50€ le verre.",
            },
            {
              name: "CÔTES DU RHÔNE",
              price: "25€",
              description: "AOC (12cl / 75cl). 6.50€ le verre.",
            },
          ],
        },
        {
          name: "Blancs",
          items: [
            {
              name: "RABBLY",
              price: "25€",
              description: "Vin de France, Sec Fruité (75cl). 6.50€ le verre.",
            },
            {
              name: "UBY n°4 - CÔTES DE GASCOGNE",
              price: "25€",
              description: "IGP (75cl). 6.50€ le verre.",
            },
            {
              name: "CHARDONNAY",
              price: "23€",
              description: "IGP (12cl / 75cl). 5.50€ le verre.",
            },
          ],
        },
      ],
    },
    {
      id: "softs",
      name: "Softs",
      items: [
        {
          name: "GINGER BEER",
          price: "4€",
          description: "Ginger beer.",
        },
        {
          name: "BISSAP MAISON",
          price: "6€",
          description: "Bissap maison.",
        },
        {
          name: "JUS DE POMME PÉTILLANT ARTISANAL",
          price: "6€",
          description: "33cl.",
        },
        {
          name: "BIÈRE IPA 0,4%",
          price: "6€",
          description: "33cl.",
        },
        {
          name: "CAFÉ",
          price: "2€",
          description: "Expresso.",
        },
      ],
    },
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = MENU_CONFIG;
}

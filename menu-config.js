/**
 * Configuration du menu Muse Bar
 * @version 1.0.0
 * @author Muse Bar
 */

const MENU_CONFIG = {
  categories: [
    {
      id: "grignotages",
      name: "Grignotages",
      items: [
        {
          name: "TARTINE",
          price: "10€",
          description:
            "Pain maison, pesto rouge maison, roquette, artichaut, noix, miel.",
        },
        {
          name: "FOCACCIA AUX OLIVES",
          price: "10€",
          description:
            "Avec tartinables : Houmous basilic, Ricotta basilic-citron.",
        },
        {
          name: "POMMES DE TERRE GRENAILLES",
          price: "6.50€",
          description: "Sauce estragon.",
        },
        {
          name: "SAUCISSON",
          price: "5.50€",
          description: "Saucisson traditionnel.",
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
          name: "AMERICANO",
          price: "6.50€",
          description: "Cocktail classique.",
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
        {
          name: "KIR",
          price: "6.50€",
          description: "Cocktail à base de vin blanc.",
        },
      ],
    },
    {
      id: "bieres",
      name: "Bières",
      items: [
        {
          name: "BLONDE DE SOIF",
          price: "3.50€ / 6€",
          description: "La Cardamine - 4,5% alc (25cl / 50cl).",
        },
        {
          name: "IPA",
          price: "4.50€ / 7.50€",
          description: "Spore - 6,0% alc (25cl / 50cl).",
        },
        {
          name: "NEIPA",
          price: "4.50€ / 7.50€",
          description: "Les deux amants - 7,0% alc (25cl / 50cl).",
        },
        {
          name: "BLONDE AU ROMARIN",
          price: "4.50€ / 7.50€",
          description: "Brewsociety - 5,8% alc (25cl / 50cl).",
        },
        {
          name: "SOUR IPA",
          price: "4.50€ / 7.50€",
          description: "Les deux amants - 5,0% alc (25cl / 50cl).",
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
              description: "Apérol / Sureau / Campari.",
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
              name: "ESPRESSO MARTINI",
              price: "8€",
              description: "Vodka, liqueur de café, expresso.",
            },
            {
              name: "BRAMBLE STAR",
              price: "8€",
              description:
                "Gin, sucre citron, liqueur framboise/cerise, shot prosecco.",
            },
          ],
        },
        {
          name: "Sans Alcool",
          items: [
            {
              name: "DRY TONIC",
              price: "5.50€",
              description: "Martini floral 0,0%, Litchi, citron, tonic.",
            },
            {
              name: "DRYQUIRI",
              price: "5.50€",
              description:
                "Martini Vibrante 0,0%, Pamplemousse, citron, eau gazeuse.",
            },
            {
              name: "CITRONNADE MAISON",
              price: "5.50€",
              description: "Citron, sirop gingembre, menthe, eau gazeuse.",
            },
          ],
        },
      ],
    },
    {
      id: "vins",
      name: "Vins",
      items: [
        {
          name: "BLAYE - CÔTES DE BORDEAUX",
          price: "6.50€ / 25€",
          description: "AOC (12cl / 75cl).",
        },
        {
          name: "CÔTES DU RHÔNE",
          price: "6.50€ / 25€",
          description: "AOC (12cl / 75cl).",
        },
        {
          name: "UBY n°3 - CÔTES DE GASCOGNE",
          price: "6.50€ / 25€",
          description: "IGP (12cl / 75cl).",
        },
        {
          name: "UBY n°4 - CÔTES DE GASCOGNE",
          price: "6.50€ / 25€",
          description: "IGP (12cl / 75cl).",
        },
        {
          name: "CHARDONNAY",
          price: "5.50€ / 23€",
          description: "IGP (12cl / 75cl).",
        },
      ],
    },
    {
      id: "shooters",
      name: "Shooters",
      items: [
        {
          name: "SHOOTER DU MOMENT",
          price: "8€",
          description: "Shooter du moment.",
        },
        {
          name: "SHOOTER DU MOMENT",
          price: "9€",
          description: "Shooter du moment.",
        },
        {
          name: "SHOOTER DU MOMENT",
          price: "8€",
          description: "Shooter du moment.",
        },
      ],
    },
    {
      id: "softs",
      name: "Softs",
      items: [
        {
          name: "GINGER BEER",
          price: "5.50€",
          description: "Ginger beer.",
        },
        {
          name: "BISSAP",
          price: "5.50€",
          description: "Bissap.",
        },
        {
          name: "JUS DE POMME PÉTILLANT",
          price: "5.50€",
          description: "33cl.",
        },
        {
          name: "BIÈRE IPA",
          price: "5.50€",
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

// Export pour utilisation dans d'autres fichiers
if (typeof module !== "undefined" && module.exports) {
  module.exports = MENU_CONFIG;
}

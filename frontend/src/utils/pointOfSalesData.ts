import { IPointOfSalesType } from './types';

export const pointOfSalesSearch = [
  {
    id: "1",
    name: 'Santa Lucia',
    shopLocation: 'Bonamoussadi',
    shopOwner: 'M. Adamou',
    contact: '690 000 540',
    firstStat: '55.8 $',
    secondStat: '+4%',
  },
  {
    id: "2",
    name: 'Dovv',
    shopLocation: 'Bonamoussadi',
    shopOwner: 'M. Jean',
    contact: '690 020 570',
    firstStat: '100.8 $',
    secondStat: '+2%',
  },
  {
    id: "3",
    name: 'City Market',
    shopLocation: 'Yaoundé',
    shopOwner: 'M. Cyrille',
    contact: '690 210 570',
    firstStat: '10.8 $',
    secondStat: '+10%',
  },
  ,
  {
    id: "4",
    name: 'Friends Food',
    shopLocation: 'Bonamoussadi',
    shopOwner: 'M. Pierre',
    contact: '651 040 540',
    firstStat: '20 000 XAF',
    secondStat: '+15',
    position: {
      lat: 4.092795154942231,
      lng: 9.740431279428542,
    },
  },
  {
    id: "5",
    name: 'Dovv',
    shopLocation: 'Bonamoussadi',
    shopOwner: 'M. Philippe',
    contact: '661 040 540',
    firstStat: '200 000 XAF',
    secondStat: '+5%',
    position: {
      lat: 4.092247398846078,
      lng: 9.750153660455327,
    },
    channelCluster:  [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 1,
  },
  {
    id: 6,
    name: 'Victory Garden',
    shopLocation: 'Bonamoussadi',
    shopOwner: 'M. Jean',
    contact: '671 040 540',
    firstStat: '15 000 XAF',
    secondStat: 200,
    position: {
      lat: 4.089113839149167,
      lng: 9.746375054397431,
    },
    channelCluster:  [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 1,
  },
  {
    id: 7,
    name: 'Carrefour Yoro Joss',
    shopLocation: 'Bonamoussadi',
    shopOwner: 'M. Patrice',
    contact: '690 040 540',
    firstStat: '35 000 XAF',
    secondStat: '+4',
    position: {
      lat: 4.097632206938936,
      lng: 9.740860432855897,
    },
    channelCluster:  [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 1,
  },
  {
    id: 8,
    name: 'Commissariat 12eme de bonamoussadi',
    shopLocation: 'Bonamoussadi',
    shopOwner: 'M. Bernard',
    contact: '695 040 540',
    firstStat: '100 000 XAF',
    secondStat: '+15%',
    position: {
      lat: 4.099323027950734,
      lng: 9.74163290902514,
    },
    channelCluster:  [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 1,
  },
];

export const pointOfSales: IPointOfSalesType[] = [
  {
    //  _ id: 1,
    id: "1",
    name: 'Santa Lucia',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Adamou',
    contact: '690 000 540',
    firstStat: '50 000 XAF',
    secondStat: '+4%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 1,
    city: 'Douala',
    markerColor: 'red',
    position: {
      lat: 4.092504234375929,
      lng: 9.74694573843821,
    },
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    //  _ id: "2",
    id: "2",
    name: 'Dovv',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Jean',
    contact: '691 040 540',
    firstStat: '150 000 XAF',
    secondStat: '+1%',
    position: {
      lat: 4.092247398846078,
      lng: 9.750153660455327,
    },
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "2",
    category: 1,
    city: 'Douala',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    //  _ id: "3",
    id: "3",
    name: 'Rond Point',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Jean',
    contact: '681 040 540',
    firstStat: '105 000 XAF',
    secondStat: '+20%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 3,
    city: 'Douala',
    markerColor: 'red',
    position: {
      lat: 4.0858605692570675,
      lng: 9.734873742544274,
    },
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    //  _ id: "4",
    id: "4",
    name: 'Friends Food',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Pierre',
    contact: '651 040 540',
    firstStat: '20 000 XAF',
    secondStat: '+15%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "3",
    category: 1,
    position: {
      lat: 4.092795154942231,
      lng: 9.740431279428542,
    },
    city: 'Douala',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    //  _ id: "5",
    id: "5",
    name: 'Dovv',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Philippe',
    contact: '661 040 540',
    firstStat: '200 000 XAF',
    secondStat: '+5%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "2",
    category: 2,
    position: {
      lat: 4.092247398846078,
      lng: 9.750153660455327,
    },
    city: 'Douala',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    //  _ id: "6",
    id: "6",
    name: 'Victory Garden',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Jean',
    contact: '671 040 540',
    firstStat: '15 000 XAF',
    secondStat: '+2%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 1,
    position: {
      lat: 4.089113839149167,
      lng: 9.746375054397431,
    },
    city: 'Douala',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    //  _ id: "7",
    id: "7",
    name: 'Carrefour Yoro Joss',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Patrice',
    contact: '690 040 540',
    firstStat: '35 000 XAF',
    secondStat: '+4%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "2",
    category: 1,
    position: {
      lat: 4.097632206938936,
      lng: 9.740860432855897,
    },
    city: 'Douala',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    //  _ id: "8",
    id: "8",
    name: 'Commissariat 12eme de bonamoussadi',
    shopLocation: 'Bonamoussadi, Douala, Cameroun',
    shopOwner: 'M. Bernard',
    contact: '695 040 540',
    firstStat: '100 000 XAF',
    secondStat: '+15%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 2,
    city: 'Douala',
    markerColor: 'red',
    position: {
      lat: 4.099323027950734,
      lng: 9.74163290902514,
    },
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },

  // Yaoundé boutique
  {
    //  _ id: "9",
    id: "9",
    name: 'Boutique JOSS',
    shopLocation: 'Ecole de police, Yaoundé, Cameroun',
    shopOwner: 'M. Adamou',
    contact: '690 000 540',
    firstStat: '50 000 XAF',
    secondStat: '+4%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 1,
    city: 'Yaoundé',
    markerColor: 'red',
    position: {
      lat: 3.8789440279811314,
      lng: 11.50974300516794,
    },
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    // _id: "10",
    id: "10",
    name: 'Carrefour Market',
    shopLocation: 'Warda, Yaoundé, Cameroun',
    shopOwner: 'M. Jacques',
    contact: '696 040 540',
    firstStat: '150 000 XAF',
    secondStat: '+1%',
    position: {
      lat: 3.8767141069274462,
      lng: 11.512965233515592,
    },
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "2",
    category: 1,
    city: 'Douala',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    // _id: "11",
    id: "11",
    name: 'Alioum Store',
    shopLocation: 'Tsinga, Yaoundé, Cameroun',
    shopOwner: 'M. Hamadou',
    contact: '651 040 540',
    firstStat: '105 000 XAF',
    secondStat: '+20%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "1",
    category: 3,
    city: 'Yaoundé',
    markerColor: 'red',
    position: {
      lat: 3.8851676805034,
      lng: 11.503557405136277,
    },
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    // _id: "12",
    id: "12",
    name: 'Friends Food',
    shopLocation: 'Bastos, Yaoundé, Cameroun',
    shopOwner: 'M. Kamga',
    contact: '651 040 540',
    firstStat: '20 000 XAF',
    secondStat: '+15%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "3",
    category: 1,
    position: {
      lat: 3.887751066126671,
      lng: 11.50373674168409,
    },
    city: 'Yaoundé',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    // _id: "13",
    id: "13",
    name: 'Dovv',
    shopLocation: 'Bastos, Yaoundé, Cameroun',
    shopOwner: 'M. Philippe',
    contact: '661 040 540',
    firstStat: '200 000 XAF',
    secondStat: '+5%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "2",
    category: 2,
    position: {
      lat: 3.8927026231741797,
      lng: 11.510167784894564,
    },
    city: 'Yaoundé',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    // _id: "14",
    id: "14",
    name: 'US Embassy',
    shopLocation: 'Bastos, Yaoundé, Cameroun',
    shopOwner: 'American Government',
    contact: '661 040 540',
    firstStat: '200 000 XAF',
    secondStat: '+9%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "2",
    category: 2,
    position: {
      lat: 3.9001262311006943,
      lng: 11.499535353383855,
    },
    city: 'Yaoundé',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
  {
    // _id: "15",
    id: "15",
    name: 'Dovv',
    shopLocation: 'Nkomkana, Yaoundé, Cameroun',
    shopOwner: 'John Montenala',
    contact: '661 040 540',
    firstStat: '200 000 XAF',
    secondStat: '+9%',
    channelCluster: [
      {
        id: "1",
        name: "whole sale"
      },
      {
        id: "23",
        name: "retail shop"
      },
      {
        id: "60",
        name: "category A"
      }
    ],
    tradeChannel: "2",
    category: 2,
    position: {
      lat: 3.884153084236937,
      lng: 11.496008114447468
    },
    city: 'Yaoundé',
    markerColor: 'red',
    tasks: undefined,
    description: undefined,
    totalActivitiesDuration: undefined
  },
];

export interface IMocksData {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface IMocksDataProps {
  offers: IMocksData[];
}

export const offersData:IMocksData[] = [
  {
    'id': '09c74efc-cacd-47e6-921e-a7a7a832620a',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 458,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '0a600ef6-3768-4ccc-b53f-4f0997643b69',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 335,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '31e06a33-eda0-4629-8e7d-0ebc62dbc04c',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 184,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '36d9ad04-73f5-46f6-9650-288b59a6739e',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 929,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': 'b9b569ed-e2f7-4e57-9bbb-4faac1033396',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 303,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': 'ec36299e-31b1-4f0a-badf-cc03001e4ac0',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 279,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '762eaa17-ef0c-412c-aa65-ddd34c3d6e9a',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 382,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': 'ee893bc0-18ac-43f7-a534-17c9a24a27d8',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 508,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
  {
    'id': '21c45ca8-84c3-467c-b3ce-91780deebbb2',
    'title': 'House in countryside',
    'type': 'apartment',
    'price': 406,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.3
  },
  {
    'id': '546b3c13-9327-42f8-af38-5b39c42233ce',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 365,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': '3a7414b0-61e8-4fd4-99b8-01c71e66e474',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 652,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': 'e92b93d7-f3b8-446f-a9a2-6bd817d01224',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 226,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': 'e2f93383-23a3-44f7-bdce-d73c7c2e746b',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 984,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'a5b1c8d1-1233-43d7-bcea-2d0ab2ebca93',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 999,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': 'ee9b4072-5685-4cbf-9501-843e9178b2e7',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 322,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '07207de1-2f90-4ed9-ac51-5d883455a3de',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 206,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '62454e32-2b6f-4cf0-bc86-410b66feacac',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 239,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8
  },
  {
    'id': 'daa3ac80-84d3-4001-8c46-54f88c4458e6',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 159,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '5c5167d6-cc7d-4f4b-9c78-76fb909ec492',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 228,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': '7d63ecad-a3d1-4a92-ae1e-52fda7f8a389',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 913,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'f74e983a-43f4-4f32-9824-378e19538c5a',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 448,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '90f395de-ac83-43ca-9152-bfa3c2c60d06',
    'title': 'House in countryside',
    'type': 'house',
    'price': 458,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '4c325f2e-4d9e-4a8c-a104-a1dd7ed108bd',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 409,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': '9a9a0e1d-384c-4b14-a24c-b00d8010f3dd',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 471,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': 'fdc3c8fa-de3d-462e-a55c-a09b88ab2a7c',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 184,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '0a87b07b-c27a-4840-a0a7-63c499b6d00a',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 486,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '6bd37eee-2cc3-43d5-9f99-dbe473a91d25',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 196,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': '39f43886-e44e-4be1-9647-62b05a645706',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 124,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '883c53a4-d620-47c8-8f19-795e8d307891',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 285,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '237f14d3-6343-4d22-83f1-682cec338e04',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 172,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '9b1a3be1-f502-4b82-bc13-5fef215f16aa',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 314,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': 'e1198849-65b5-4875-a00d-df3ae7b3ca8a',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 432,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': '0ffd04c0-3f85-4bb0-822d-17cd1ce63196',
    'title': 'House in countryside',
    'type': 'room',
    'price': 295,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '8e2b3ff7-f43e-4dbc-b113-4c3d1b96b0b8',
    'title': 'House in countryside',
    'type': 'room',
    'price': 103,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': '47678291-cdd0-4b5e-a88c-be2ec7829630',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 427,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '0f4d9a13-1f18-49b4-94f9-b221de1f1ec1',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 340,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '8059cdda-5512-4307-82d1-b07d49389f99',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 194,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.954361,
      'longitude': 6.982974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7
  },
  {
    'id': '50789cfe-497c-401e-998a-816dd237a9f3',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 198,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'de446adf-72bb-40da-9abf-1fccabe869c5',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 224,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '5176c054-5dbf-4747-94a3-519c2b98e8c4',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 755,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '9875ed50-a3e4-412d-85f4-e9e6705d8fc2',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 482,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '92d6e3b7-e4c3-4b30-92f6-f1d963ca82c9',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 349,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.7
  },
  {
    'id': '15b8f91a-47a6-4299-b5c1-f3699f8418fd',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 221,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '458f5b92-ad48-4745-ac6d-e4cd4a59e6cc',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 875,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.833557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': '43840f78-8449-4a3e-b0e3-8b46acd0304f',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 172,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.837557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '8003b3ff-768a-44a1-981c-8531bed2a857',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 386,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.849557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': 'cf927aae-a0f9-4450-8c8b-359c98d85d4f',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 199,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.852557,
      'longitude': 4.3376969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7
  },
  {
    'id': '9b9590bf-d4ba-4fab-9a06-457dc83daac3',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 680,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.828556999999996,
      'longitude': 4.362697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '02f5394f-6aaf-4b46-a010-24741b1241f2',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 275,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.835556999999994,
      'longitude': 4.354697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '503536a3-d829-42a9-bc45-c0d6739bc3ae',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 425,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': 'de2130a1-d725-43e8-86be-daae73135378',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 493,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.839557,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': 'c3664b43-afa7-4442-b6e2-219e8ef90a34',
    'title': 'House in countryside',
    'type': 'room',
    'price': 113,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '0cb05ee8-b760-44e3-964a-5f21d352f7f0',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 239,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.865556999999995,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '9410daff-839a-4900-92e4-e521d138dffd',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 118,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.869557,
      'longitude': 4.332697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3
  },
  {
    'id': 'f22bfaea-ea85-473e-93e6-955352515cbf',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 763,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.860557,
      'longitude': 4.376697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '22bbf2e9-1993-459d-a361-5d9809e1280e',
    'title': 'Tile House',
    'type': 'room',
    'price': 211,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'c3bce392-a66e-4839-9f5b-2c61dd517859',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 273,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '8761a918-f1d5-495b-93a8-0ebdcba1b03e',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 202,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.822556999999996,
      'longitude': 4.347697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '62f276d4-87d1-4929-a816-756a15984b3f',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 285,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': 'f53aea06-904e-4b4e-8b9d-28847abe3592',
    'title': 'Tile House',
    'type': 'house',
    'price': 997,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
  {
    'id': '1881b533-f96d-416f-91ba-1d4f67a8b1ac',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 250,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '34e0181e-2a80-4551-ac3f-1f07d1a4f280',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 286,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '3095e90d-c608-4794-bba1-e843377fbf5b',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 172,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9
  },
  {
    'id': '9a6fec64-6ad8-47a8-a633-a26331241bf7',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 258,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '03b4b438-dee1-48ff-a2ba-f685ffad6c93',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 178,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5
  },
  {
    'id': '5ae222a1-7d7a-46ac-b5fb-2a43a7cec7e7',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 271,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '6806557f-cfee-4ef7-848d-a06056c62fa3',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 246,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'a0c67a13-4e7e-4a78-8138-d83c1fc583ac',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 131,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4
  },
  {
    'id': '5995840b-7f79-4fab-b18f-555a3d5adf8f',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 347,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36854,
      'longitude': 4.887976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': '2ef182b3-38d5-47b6-badc-8b21088f9518',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 149,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.370540000000005,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '6b0889c1-8e50-49a7-a4bd-d9e63e49db7d',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 256,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': '24ff7151-fb48-4453-be8d-b880f6ef6bce',
    'title': 'Tile House',
    'type': 'room',
    'price': 123,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '87f8a237-1441-4abb-aafb-26374eba2112',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 494,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': 'c54c5ee9-baaa-454d-a564-e2a1942795a8',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 245,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '8d5445ad-8d17-4ebc-83ef-0a95ca56c62b',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 223,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2
  },
  {
    'id': 'b90babbe-c68b-4536-99de-3dc472771fdf',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 211,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '09912c8c-b7e8-4c31-a68a-1ae059f6de0b',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 372,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': 'f51aa22b-97f4-4bbd-87ef-391b23c5322f',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 233,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36954,
      'longitude': 4.914976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1
  },
  {
    'id': 'c7cac657-15a5-4b93-9420-6144a545361a',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 125,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '79e1dae6-fb1c-458b-bee5-446dcb66be88',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 431,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '7033e215-c919-4de5-99db-749b996b09f8',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 312,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': 'a19f343c-e9f6-4e8a-928a-e576ccc8a35e',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 132,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.538341,
      'longitude': 9.976654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': '5bb8e455-6b0a-42c2-83b7-32dea50411c7',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 308,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 10.019654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': 'aa331c4c-8df6-4707-bb30-6c133ae7745f',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 117,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '04ad36af-22e0-4ee0-8260-e4b286d7cd53',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 156,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': '2e6f758e-1227-425e-b590-168791845911',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 495,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.546341000000005,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '1b903157-4906-4e23-b23d-198e78c01d95',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 285,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341000000004,
      'longitude': 9.978654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.7
  },
  {
    'id': 'f2857511-84c0-4f9f-92a5-35b2ca837d14',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 235,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.570341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '4e53b319-bf4c-4ec8-8ec8-95ff2bc772d6',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 447,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 10.001654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': 'b6dc63ad-7e04-4e70-8631-59c0755d667d',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 451,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.009654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '74e38d23-a043-4172-a49a-7f30bb666a48',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 441,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 9.994654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '1cdcbb6c-628b-474c-8ead-5a2259237c48',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 299,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 9.982654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': 'c8cb7fec-6b72-483b-929e-a92fa03d11bb',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 261,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.540341000000005,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': '7a5c51ae-603b-4d75-9cb2-aa3f5c0d1b06',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 446,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.555341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': '71d5f0ee-5bb1-4138-9bf7-5cf5a698a42b',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 211,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.534341000000005,
      'longitude': 9.998654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': 'dc1cdbfb-2642-49ad-8a33-dc74f919d0eb',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 628,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '330259bd-d7b4-4e75-a6e0-33bc6e09d91d',
    'title': 'Tile House',
    'type': 'house',
    'price': 1000,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.574341000000004,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '680bea21-e593-4fc7-b0aa-f2911880e040',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 144,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4
  },
  {
    'id': 'bf70f5cf-41d6-4d95-8070-44d45df08c3a',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 112,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': '5cab68ed-5ae9-44c0-9d7d-c342c8693968',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 319,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 9.999654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '88c4d41b-3fae-4459-911e-2e8d4bbded52',
    'title': 'House in countryside',
    'type': 'apartment',
    'price': 168,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.236402000000005,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': '97168473-e864-4c7a-b8fd-34e6411ef336',
    'title': 'Tile House',
    'type': 'house',
    'price': 269,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.210402,
      'longitude': 6.798314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'edeed0d1-7d76-48d3-bde3-1661f64abf07',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 398,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.211402,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '42577f3c-071c-4285-bb85-15e573a83fed',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 490,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.228402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.5
  },
  {
    'id': '67b462e1-4f50-47f8-94eb-1a3690cd39fc',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 159,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.204402,
      'longitude': 6.7773140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '7089cf4b-5723-4067-81f1-78398f222e41',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 131,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.5
  },
  {
    'id': '8be13078-9ffc-477e-870b-67ff5b1ded06',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 300,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.241402,
      'longitude': 6.782314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': '51800524-33e0-4d71-890f-be619ac080ac',
    'title': 'Perfectly located Castro',
    'type': 'hotel',
    'price': 242,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.235402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 5
  },
  {
    'id': '202426c7-822d-4dd2-8515-0e0325086b39',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 246,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.779314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.5
  },
  {
    'id': '83635139-4c56-42ee-8d43-57f781cf3e1b',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 164,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.797314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4
  },
  {
    'id': 'efd5b6f5-7bb3-40dd-bc72-ac8ffcc45312',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 292,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': 'b553e79a-2163-4265-a350-af77a428a327',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 466,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.232402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': '6f351c1d-1e2a-4043-9f48-c6a8f752c6ce',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 489,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.216402,
      'longitude': 6.758314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': '4ea7a9de-0b75-4530-9460-688fe1d0a048',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 238,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': 'f114a7fd-6b77-4ec1-ba0b-c3b12adcfe5b',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 181,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.248402000000006,
      'longitude': 6.763314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': 'd0ae58be-c658-4222-b7fd-6f641c0c116e',
    'title': 'Tile House',
    'type': 'room',
    'price': 204,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.250402,
      'longitude': 6.7853140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.9
  },
  {
    'id': '92d7097b-edf5-47c4-8ec5-3e132c06100e',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 316,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': 'c3e8ffd3-18cb-4719-b980-47f07bc193b2',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 172,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2
  },
  {
    'id': '545c63ad-e7cb-414d-a2ad-a077ecc723a7',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 440,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '4ce574c0-ca45-4ef6-80c7-80326d1868e9',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 735,
    'previewImage': 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  }
];

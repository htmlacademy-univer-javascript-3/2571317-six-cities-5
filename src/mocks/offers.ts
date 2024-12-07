import { TOffer } from '../types';
import { PlaceType } from '../enums';

export const offers: TOffer[] = [
  {
    imageUrls: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg'
    ],
    isPremium: true,
    name: 'City Center Loft',
    rating: 4.7,
    features: {
      type: PlaceType.Apartment,
      bedrooms: 2,
      capacity: 4
    },
    price: 180,
    accomodations: ['WiFi', 'Kitchen', 'Air Conditioning'],
    host: {
      name: 'Alice Turner',
      isPro: true
    },
    description: 'Stay in the heart of the city with stunning views and easy access to attractions. Perfect for city explorers!',
    text: 'An ideal base for couples or small families wanting to experience city life.',
    reviews: [
      {
        rating: 5,
        authorName: 'John Doe',
        text: 'Amazing location! Beautiful loft with all the amenities we needed.',
        dateTime: '2023-09-10T15:30:00Z'
      },
      {
        rating: 4,
        authorName: 'Laura Adams',
        text: 'Great stay! Could use a little more kitchenware, but overall very comfortable.',
        dateTime: '2023-09-12T13:15:00Z'
      }
    ]
  },
  {
    imageUrls: [
      'https://example.com/image4.jpg',
      'https://example.com/image5.jpg',
      'https://example.com/image6.jpg'
    ],
    isPremium: false,
    name: 'Beachfront Bungalow',
    rating: 4.5,
    features: {
      type: PlaceType.House,
      bedrooms: 1,
      capacity: 2
    },
    price: 120,
    accomodations: ['WiFi', 'Beach Access'],
    host: {
      name: 'Mark Robinson',
      isPro: false
    },
    description: 'A cozy bungalow located right on the beach. Perfect for relaxing getaways or romantic escapes.',
    text: 'Wake up to the sound of waves and enjoy stunning sunsets from your own patio.',
    reviews: [
      {
        rating: 5,
        authorName: 'Samantha Green',
        text: 'This place was perfect! Steps from the beach and so peaceful. Can\'t wait to return!',
        dateTime: '2023-09-05T18:00:00Z'
      },
      {
        rating: 4,
        authorName: 'Paul White',
        text: 'Really enjoyed our stay. The only downside was the limited parking space.',
        dateTime: '2023-09-09T10:45:00Z'
      }
    ]
  },
  {
    imageUrls: [
      'https://example.com/image7.jpg',
      'https://example.com/image8.jpg',
      'https://example.com/image9.jpg'
    ],
    isPremium: true,
    name: 'Charming Country Cottage',
    rating: 4.9,
    features: {
      type: PlaceType.House,
      bedrooms: 3,
      capacity: 6
    },
    price: 220,
    accomodations: ['WiFi', 'Fireplace', 'BBQ'],
    host: {
      name: 'Sophia Martinez',
      isPro: true
    },
    description: 'Enjoy a peaceful retreat in a charming countryside cottage surrounded by nature. Perfect for family gatherings.',
    text: 'A home away from home featuring a cozy fireplace and outdoor BBQ for family fun.',
    reviews: [
      {
        rating: 5,
        authorName: 'Daniel Kim',
        text: 'This cottage felt like paradise! Beautiful surroundings and very welcoming host.',
        dateTime: '2023-08-25T14:00:00Z'
      },
      {
        rating: 4,
        authorName: 'Megan Lee',
        text: 'Really loved our time here! Could use some more games or activities for kids, though.',
        dateTime: '2023-08-28T09:50:00Z'
      }
    ]
  },
  {
    imageUrls: [
      'https://example.com/image10.jpg',
      'https://example.com/image11.jpg',
      'https://example.com/image12.jpg'
    ],
    isPremium: false,
    name: 'Modern Studio Apartment',
    rating: 4.2,
    features: {
      type: PlaceType.Apartment,
      bedrooms: 0,
      capacity: 2
    },
    price: 100,
    accomodations: ['WiFi', 'Kitchen', 'Pool Access'],
    host: {
      name: 'Vincent Clark',
      isPro: false
    },
    description: 'A stylish studio apartment perfect for solo travelers or couples. Located near shopping and dining options.',
    text: 'Enjoy the community pool and modern amenities while exploring the city!',
    reviews: [
      {
        rating: 4,
        authorName: 'Oliver Harris',
        text: 'Good value for the price. Loved the pool area! Just a bit noisy at night.',
        dateTime: '2023-09-01T16:30:00Z'
      },
      {
        rating: 3,
        authorName: 'Chloe Young',
        text: 'Decent stay, but had some issues with the WiFi connection during our visit.',
        dateTime: '2023-09-03T11:20:00Z'
      }
    ]
  }
];

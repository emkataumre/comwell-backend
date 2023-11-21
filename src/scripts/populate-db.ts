import mongoose from 'mongoose';
import { Hotel, HotelSchema } from '../hotels/schemas/hotel.schema';
import { Amenity } from '../rooms/schemas/room.schema';

// Create the Hotel model
const HotelModel = mongoose.model('HotelModel', HotelSchema, 'hotels');

const mongooseUri = 'mongodb://127.0.0.1:27017/comwell';

mongoose.connect(mongooseUri);
const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB:', mongooseUri);

  // Example data to be inserted
  const data: Hotel[] = [
    {
      country: 'Denmark 1',
      city: 'Copenhagen',
      address: '123 Paper st.',
      phone: 123456789,
      title: 'Hotel 1',
      rooms: [
        {
          name: 'Room 101',
          description: 'Luxury Suite',
          pictures: ['luxury_suite_1.jpg', 'luxury_suite_2.jpg'],
          beds: {
            double: 1,
            single: 2,
          },

          amenities: [Amenity.Hairdryer, Amenity.Iron],
        },
        {
          name: 'Room 102',
          description: 'Executive Suite',
          pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
          beds: {
            double: 2,
            single: 1,
          },

          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
        // Add more rooms as needed
      ],
    },
    {
      country: 'Denmark',
      city: 'Aarhus',
      address: 'Aarhus st. 29',
      phone: 123456789,
      title: 'Hotel 2',
      rooms: [
        {
          name: 'Room 201',
          description: 'Standard Room',
          pictures: ['standard_room_1.jpg', 'standard_room_2.jpg'],
          beds: {
            double: 1,
            single: 1,
          },

          amenities: [Amenity.Hairdryer, Amenity.Iron, Amenity.Roomservice],
        },
        {
          name: 'Room 202',
          description: 'Executive Suite',
          pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
          beds: {
            double: 2,
            single: 1,
          },

          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
        // Add more rooms as needed
      ],
    },
    {
      country: 'Denmark',
      city: 'Aalborg',
      address: 'Main st 265',
      phone: 123456789,
      title: 'Hotel 3',
      rooms: [
        {
          name: 'Room 301',
          description: 'Executive Suite',
          pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
          beds: {
            double: 2,
            single: 1,
          },

          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
        {
          name: 'Room 302',
          description: 'Executive Suite',
          pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
          beds: {
            double: 2,
            single: 1,
          },

          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
        // Add more rooms as needed
      ],
    },
    // Add more hotels as needed
  ];

  try {
    await HotelModel.deleteMany({});
    // Insert data into the collection
    await HotelModel.insertMany(data);

    console.log('Data inserted successfully.');

    // Close the MongoDB connection
    db.close();
  } catch (insertError) {
    console.error('Error inserting data:', insertError);
    // Close the MongoDB connection on error
    db.close();
  }
});

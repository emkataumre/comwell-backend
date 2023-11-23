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

  //Example data to be inserted
  // const data: Hotel[] = [
  //   {
  //     country: 'Denmark',
  //     city: 'Aarhus',
  //     address: 'Aarhus st. 29',
  //     phone: 123456789,
  //     title: 'Hotel1',
  //     rooms: [
  //       {
  //         name: 'Luxury Suite',
  //         number: 101,
  //         description:
  //           'Indulge in luxury in our spacious Luxury Suite. This suite features a comfortable double bed and two single beds, perfect for a family or group of friends. Enjoy modern amenities, including a TV, hairdryer, and free Wi-Fi.',
  //         pictures: ['luxury_suite_1.jpg', 'luxury_suite_2.jpg'],
  //         beds: {
  //           double: 1,
  //           single: 2,
  //         },
  //         amenities: [Amenity.Hairdryer, Amenity.Iron],
  //       },
  //       {
  //         name: 'Standard Twin Room',
  //         number: 102,
  //         description:
  //           "Relax in our cozy Standard Twin Room, equipped with two double beds for a comfortable night's sleep. Enjoy entertainment with a TV and stay connected with our complimentary Wi-Fi. Perfect for a family getaway.",
  //         pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
  //         beds: {
  //           double: 2,
  //           single: 0,
  //         },
  //         amenities: [
  //           Amenity.Tv,
  //           Amenity.Hairdryer,
  //           Amenity.Workspace,
  //           Amenity.Wifi,
  //         ],
  //       },
  //       {
  //         name: 'Standard Single Room',
  //         number: 103,
  //         description:
  //           'Experience comfort in our Standard Single Room. This room features a single bed, a workspace for your convenience, and modern amenities like a TV and Wi-Fi. Ideal for solo travelers on a budget.',
  //         pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
  //         beds: {
  //           double: 0,
  //           single: 1,
  //         },
  //         amenities: [
  //           Amenity.Tv,
  //           Amenity.Hairdryer,
  //           Amenity.Workspace,
  //           Amenity.Wifi,
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     country: 'Denmark',
  //     city: 'Aarhus',
  //     address: 'Aarhus st. 29',
  //     phone: 123456789,
  //     title: 'Hotel2',
  //     rooms: [
  //       {
  //         name: 'Standard Family Room',
  //         number: 101,
  //         description:
  //           'Enjoy a family-friendly stay in our spacious Standard Family Room. This room features a double bed and a single bed, suitable for a family of three. Pamper yourself with amenities like a hairdryer and room service.',
  //         pictures: ['standard_room_1.jpg', 'standard_room_2.jpg'],
  //         beds: {
  //           double: 1,
  //           single: 1,
  //         },
  //         amenities: [Amenity.Hairdryer, Amenity.Iron, Amenity.Roomservice],
  //       },
  //       {
  //         name: 'Double Twin Room',
  //         number: 102,
  //         description:
  //           "Experience luxury in our Double Twin Room, equipped with two double beds for a restful night. Stay entertained with a TV and connect seamlessly with our complimentary Wi-Fi. Ideal for a couple's getaway.",
  //         pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
  //         beds: {
  //           double: 2,
  //           single: 0,
  //         },
  //         amenities: [
  //           Amenity.Tv,
  //           Amenity.Hairdryer,
  //           Amenity.Workspace,
  //           Amenity.Wifi,
  //         ],
  //       },
  //       {
  //         name: 'Twin Room',
  //         number: 103,
  //         description:
  //           'Relax in style in our Twin Room, featuring a comfortable double bed and modern amenities. Enjoy your favorite shows on the TV and stay connected with our complimentary Wi-Fi. Perfect for a solo traveler or a couple.',
  //         pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
  //         beds: {
  //           double: 1,
  //           single: 0,
  //         },
  //         amenities: [
  //           Amenity.Tv,
  //           Amenity.Hairdryer,
  //           Amenity.Workspace,
  //           Amenity.Wifi,
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     country: 'Denmark',
  //     city: 'Aalborg',
  //     address: 'Main st 265',
  //     phone: 123456789,
  //     title: 'Hotel3',
  //     rooms: [
  //       {
  //         name: 'Standard Single Room',
  //         number: 101,
  //         description:
  //           'Experience simplicity in our Standard Single Room. This room features a single bed and essential amenities like a TV and Wi-Fi. Perfect for solo travelers seeking comfort on a budget.',
  //         pictures: ['executive_suite_1.jpg', 'executive_suite_2.jpg'],
  //         beds: {
  //           double: 0,
  //           single: 1,
  //         },
  //         amenities: [Amenity.Tv, Amenity.Hairdryer],
  //       },
  //     ],
  //   },
  // ];

  try {
    await HotelModel.deleteMany({});
    // Insert data into the collection
    // await HotelModel.insertMany(data);

    console.log('Data inserted successfully.');

    // Close the MongoDB connection
    db.close();
  } catch (insertError) {
    console.error('Error inserting data:', insertError);
    // Close the MongoDB connection on error
    db.close();
  }
});

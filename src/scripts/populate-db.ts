import mongoose from 'mongoose';
import { Hotel, HotelSchema } from '../hotels/schemas/hotel.schema';
import { Amenity } from '../rooms/schemas/room.schema';

console.log('Preparing to populate the database...');

// Create the Hotel model
const HotelModel = mongoose.model('HotelModel', HotelSchema, 'hotels');

const mongooseUri = 'mongodb://127.0.0.1:27017/comwell';

mongoose.connect(mongooseUri);
const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB:', mongooseUri);

  // Dummy data to be inserted
  const data: Hotel[] = [
    {
      country: 'Denmark',
      picture:
        'https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      group: 'Zealand',
      city: 'City1',
      address: 'Paper st. 29',
      phone: '123456789',
      title: 'Hotel1',
      rooms: [
        {
          name: 'Luxury Suite',
          number: 101,
          description:
            'Indulge in luxury in our spacious Luxury Suite. This suite features a comfortable double bed and two single beds, perfect for a family or group of friends. Enjoy modern amenities, including a TV, hairdryer, and free Wi-Fi.',
          pictures: [
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-spho-01.jpg/1eb4e4be95e72e096fa8ec0c0eb6c5b9.webp',
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-stho-01.jpg/b4ed0d494498a24839d5f3a834e7786a.webp',
          ],
          beds: {
            double: 1,
            single: 2,
          },
          amenities: [Amenity.Hairdryer, Amenity.Iron],
        },
        {
          name: 'Standard Twin Room',
          number: 102,
          description:
            "Relax in our cozy Standard Twin Room, equipped with two double beds for a comfortable night's sleep. Enjoy entertainment with a TV and stay connected with our complimentary Wi-Fi. Perfect for a family getaway.",
          pictures: [
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckl/vaerelser/comwell-klarskovgaard-fakl.jpg/4cd7e6389314745d7546d68912bf3fdd.webp',
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-stho-01.jpg/b4ed0d494498a24839d5f3a834e7786a.webp',
          ],
          beds: {
            double: 2,
            single: 0,
          },
          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
        {
          name: 'Standard Single Room',
          number: 103,
          description:
            'Experience comfort in our Standard Single Room. This room features a single bed, a workspace for your convenience, and modern amenities like a TV and Wi-Fi. Ideal for solo travelers on a budget.',
          pictures: [
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckl/vaerelser/comwell-klarskovgaard-fakl.jpg/4cd7e6389314745d7546d68912bf3fdd.webp',
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-stho-01.jpg/b4ed0d494498a24839d5f3a834e7786a.webp',
          ],
          beds: {
            double: 0,
            single: 1,
          },
          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
      ],
      meetingRooms: [
        {
          maxCapacity: 30,
          description:
            'A very nice meeting room with a projector and plenty of space',
          bulletPoints: [
            'State-of-the-art projector for impactful presentations.',
            'Spacious layout to accommodate up to 30 attendees comfortably.',
            'Amenities include whiteboard and flip chart for interactive sessions.',
          ],
          picture:
            'https://www.pexels.com/photo/black-padded-leather-office-chairs-2976970/,',
        },
      ],
    },
    {
      country: 'Denmark',
      picture:
        'https://images.pexels.com/photos/1580112/pexels-photo-1580112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      group: 'Funen',
      city: 'City2',
      address: 'Apple st. 29',
      phone: '123456789',
      title: 'Hotel2',
      rooms: [
        {
          name: 'Standard Family Room',
          number: 101,
          description:
            'Enjoy a family-friendly stay in our spacious Standard Family Room. This room features a double bed and a single bed, suitable for a family of three. Pamper yourself with amenities like a hairdryer and room service.',
          pictures: [
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-standard-dobbelt.jpg/6f00e8be9418752efb8ba15b5f6883c1.webp',
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-spho-01.jpg/1eb4e4be95e72e096fa8ec0c0eb6c5b9.webp',
          ],
          beds: {
            double: 1,
            single: 1,
          },
          amenities: [Amenity.Hairdryer, Amenity.Iron, Amenity.Roomservice],
        },
        {
          name: 'Double Twin Room',
          number: 102,
          description:
            "Experience luxury in our Double Twin Room, equipped with two double beds for a restful night. Stay entertained with a TV and connect seamlessly with our complimentary Wi-Fi. Ideal for a couple's getaway.",
          pictures: [
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-stho-02.jpg/e60cd8384a3e9122d53a182fcaea9a73.webp',
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-spho-01.jpg/1eb4e4be95e72e096fa8ec0c0eb6c5b9.webp',
          ],
          beds: {
            double: 2,
            single: 0,
          },
          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
        {
          name: 'Twin Room',
          number: 103,
          description:
            'Relax in style in our Twin Room, featuring a comfortable double bed and modern amenities. Enjoy your favorite shows on the TV and stay connected with our complimentary Wi-Fi. Perfect for a solo traveler or a couple.',
          pictures: [
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckl/vaerelser/comwell-klarskovgaard-sdkl.jpg/b14eab9e87ee313f92eec36cccfde136.webp',
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/cho/vaerelser/comwell-holte-stho-02.jpg/e60cd8384a3e9122d53a182fcaea9a73.webp',
          ],
          beds: {
            double: 1,
            single: 0,
          },
          amenities: [
            Amenity.Tv,
            Amenity.Hairdryer,
            Amenity.Workspace,
            Amenity.Wifi,
          ],
        },
      ],
      meetingRooms: [
        {
          maxCapacity: 10,
          description:
            'A cozy meeting room with a large table and plenty of chairs',
          bulletPoints: [
            'Intimate setting with a large conference table ideal for team collaboration.',
            'Abundant natural light creates a warm and inviting atmosphere.',
            'Versatile seating arrangement to accommodate various meeting formats.',
          ],
          picture:
            'https://www.pexels.com/photo/square-beige-wooden-table-with-chairs-260928/',
        },
      ],
    },
    {
      country: 'Denmark',
      picture:
        'https://images.pexels.com/photos/705773/pexels-photo-705773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      group: 'Jutland',
      city: 'City3',
      address: 'Main st 265',
      phone: '123456789',
      title: 'Hotel3',
      rooms: [
        {
          name: 'Standard Single Room',
          number: 101,
          description:
            'Experience simplicity in our Standard Single Room. This room features a single bed and essential amenities like a TV and Wi-Fi. Perfect for solo travelers seeking comfort on a budget.',
          pictures: [
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckl/vaerelser/comwell-klarskovgaard-fakl.jpg/4cd7e6389314745d7546d68912bf3fdd.webp',
            'https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/ckl/vaerelser/comwell-klarskovgaard-fakl.jpg/4cd7e6389314745d7546d68912bf3fdd.webp',
          ],
          beds: {
            double: 0,
            single: 1,
          },
          amenities: [Amenity.Tv, Amenity.Hairdryer],
        },
      ],
      meetingRooms: [
        {
          maxCapacity: 50,
          description:
            'A professional and corporate meeting room with a great view of the city',
          bulletPoints: [
            'State-of-the-art audio-visual equipment for seamless presentations.',
            'Executive-style furnishings and a polished ambiance for a professional setting.',
            'Flexible seating arrangements to cater to various event types and sizes.',
          ],
          picture:
            'https://www.pexels.com/photo/white-wooden-table-with-chairs-set-416320/',
        },
      ],
    },
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

import mongoose, { Schema, Document } from 'mongoose';

// Define the Bed schema and interface
const BedSchema = new Schema<BedInterface>({
  double: { type: Number },
  single: { type: Number },
});

interface BedInterface {
  double: number;
  single: number;
}

// Create the Bed model
//const BedModel = mongoose.model<BedInterface & Document>('BedModel', BedSchema);

// Define the Amenities enum and schema
enum Amenity {
  Tv = 'TV',
  Hairdryer = 'HAIRDRYER',
  Workspace = 'WORKSPACE',
  Roomservice = 'ROOMSERVICE',
  Iron = 'IRON',
  Wifi = 'WIFI',
}

const AmenitiesSchema = new Schema<AmenitiesInterface>({
  amenities: { type: [String], enum: Object.values(Amenity), required: true },
});

interface AmenitiesInterface {
  amenities: Amenity[];
}

// Create the Amenities model
// const AmenityModel = mongoose.model<AmenitiesInterface & Document>(
//   'AmenityModel',
//   AmenitiesSchema,
// );

// Define the Room schema and interface
const RoomSchema = new Schema<RoomInterface>({
  name: { type: String },
  description: { type: String },
  pictures: { type: [String] },
  beds: { type: BedSchema },
  amenities: { type: AmenitiesSchema },
});

interface RoomInterface {
  name: string;
  description: string;
  pictures: string[];
  beds: BedInterface;
  amenities: AmenitiesInterface;
}

// Create the Room model
// const RoomModel = mongoose.model<RoomInterface & Document>(
//   'RoomModel',
//   RoomSchema,
// );

// Define the Hotel schema and interface
const HotelSchema = new Schema<HotelInterface>({
  country: { type: String },
  city: { type: String },
  address: { type: String },
  phone: { type: Number },
  title: { type: String },
  rooms: { type: [RoomSchema] },
});

interface HotelInterface {
  country: string;
  city: string;
  address: string;
  phone: number;
  title: string;
  rooms: RoomInterface[];
}

// Create the Hotel model
const HotelModel = mongoose.model<HotelInterface & Document>(
  'HotelModel',
  HotelSchema,
);

const mongooseUri = 'mongodb://127.0.0.1:27017/comwell';

mongoose.connect(mongooseUri);
const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB:', mongooseUri);

  // Example data to be inserted
  const exampleData: HotelInterface[] = [
    {
      country: 'Denmark',
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
          amenities: {
            amenities: [Amenity.Tv, Amenity.Hairdryer, Amenity.Workspace],
          },
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
          amenities: {
            amenities: [Amenity.Wifi, Amenity.Roomservice],
          },
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
          amenities: {
            amenities: [
              Amenity.Tv,
              Amenity.Hairdryer,
              Amenity.Workspace,
              Amenity.Wifi,
            ],
          },
        },
        // Add more rooms as needed
      ],
    },
    // Add more hotels as needed
  ];

  try {
    // Insert data into the collection
    await HotelModel.insertMany(exampleData);

    console.log('Data inserted successfully.');

    // Close the MongoDB connection
    db.close();
  } catch (insertError) {
    console.error('Error inserting data:', insertError);
    // Close the MongoDB connection on error
    db.close();
  }
});

import { MongoClient } from "mongodb";

async function main() {
  console.log("🚀  Server ready");

  const url = `mongodb+srv://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

  const dbName = process.env.DATABASE_NAME;

  const client = new MongoClient(url, {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
  });

  try {
    await client.connect();

    console.log("🌱  Database seeder is running");

    const db = client.db(dbName);

    const airPorts = [
      {
        id: "611d27c18e843b00ae369c76",
        name: "Amsterdam Airport Schiphol",
        description:
          "Amsterdam Airport Schiphol, known informally as Schiphol Airport, is the main international airport of the Netherlands. It is located 9 kilometres southwest of Amsterdam, in the municipality of Haarlemmermeer in the province of North Holland.",
        city: "Amsterdam",
        code: "AMS",
      },
      {
        id: "611d1a9b76bfea0042c043d5",
        name: "Frankfurt Airport",
        description:
          "Frankfurt Airport is a major international airport located in Frankfurt, the fifth-largest city of Germany and one of the world's leading financial centres. It is operated by Fraport and serves as the main hub for Lufthansa including Lufthansa CityLine and Lufthansa Cargo as well as Condor and AeroLogic",
        city: "Frankfurt",
        code: "FRA",
      },
      {
        id: "611d1a4576bfea0042c043d4",
        name: "London City Airport",
        description:
          "London City Airport is an international airport in London, England. It is located in the Royal Docks in the London Borough of Newham, approximately 7 miles east of the City of London and a shorter distance east of Canary Wharf.",
        city: "London",
        code: "LCY",
      },
    ];

    airPorts.map(async (item) => {
      await db.collection("airPorts").findOneAndUpdate(
        { id: item.id },
        {
          $setOnInsert: {
            id: item.id,
          },
          $set: {
            name: item.name,
            description: item.description,
            city: item.city,
            code: item.code,
            createdAt: +new Date(),
            updatedAt: +new Date(),
          },
        },
        { upsert: true },
        function(err, res) {}
      );
    });
    const flights = [
      {
        id: "61237f65fa6b310959c74238",
        from: "611d27c18e843b00ae369c76",
        to: "611d1a4576bfea0042c043d4",
        time: "09:55",
        price: 47,
      },
      {
        id: "61237f6d3346dce1d13aea17",
        from: "611d27c18e843b00ae369c76",
        to: "611d1a4576bfea0042c043d4",
        time: "13:15",
        price: 49,
      },
      {
        id: "61237f7405c9db81d715b91b",
        from: "611d27c18e843b00ae369c76",
        to: "611d1a9b76bfea0042c043d5",
        time: "10:45",
        price: 48,
      },
      {
        id: "61237f7405c9db81d715b91b",
        from: "611d1a9b76bfea0042c043d5",
        to: "611d1a4576bfea0042c043d4",
        time: "14:35",
        price: 57,
      },
    ];

    flights.map(async (item) => {
      await db.collection("flights").findOneAndUpdate(
        { id: item.id },
        {
          $setOnInsert: {
            id: item.id,
          },
          $set: {
            from: item.from,
            to: item.to,
            time: item.time,
            price: item.price,
            createdAt: +new Date(),
            updatedAt: +new Date(),
          },
        },
        { upsert: true },
        function(err, res) {}
      );
    });
  } catch (err) {
    console.log("❌  Server error", err.stack);
  } finally {
    console.log("💤  Server off");
    await client.close();
  }
}

main().catch((error) => console.log("❌  Server error", error.stack));

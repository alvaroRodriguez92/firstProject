const userQueries = require("../mysqlQueries/userQueries");

const dataObj = {
  firstname: "Antoñito",
  lastname: "Rodriguez",
  email: "antonio12345@holabuen.com",
  password: "Malaga2020",
  address: "c/eugenia de monterrey",
  city: "huelintown",
  postalcode: 29000,
  birthdate: "1992-12-12",
  userRole: "0",
};

const email = "guillermo@gmail.com";
const emailNoExiste = "jajaaja@gmail.com";

process.env.DB_HOST = "localhost";
process.env.DB_USER = "root";
process.env.DB_PASS = "Malaga!2020";
process.env.DB_NAME = "ecommerce";

test("Creación de usuarios OK", async () => {
  const testCreateUser = await userQueries.addUser(dataObj);
  expect(testCreateUser).toBeTruthy();
});

test("Creación de usuarios no OK", async () => {
  try {
    const testAddUser = await userQueries.addUser(dataObj);
  } catch (e) {
    expect(e).toBeTruthy();
  }
});

test("Traer usuario por email", async () => {
  const testTraerUsuario = await userQueries.getUserByEmail(email);
  expect(testTraerUsuario).toHaveLength(1);
  expect(testTraerUsuario[0]).toMatchObject({ email: email });
});

test("comprobar que email no existe", async () => {
  try {
    const noTraerUsuario = await userQueries.getUserByEmail(null);
  } catch (e) {
    expect(e).toBeTruthy();
  }
});

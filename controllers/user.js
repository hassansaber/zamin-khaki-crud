import { v4 as uuidv4 } from "uuid";
let users = [];

// ----------

export const getUsers = (req, res) => {
  res.send(users);
};

export const addUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  console.log(`user named ${user.firstName} added `);
  res.send(`user named ${user.firstName} added `);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundedUser = users.find((user) => user.id === id);
  res.send(foundedUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`user with id of ${id} has been deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = users.find((user) => user.id === id);
  const { firstName, lastName, age } = req.body;
  if (firstName) updatedUser.firstName = firstName;
  if (lastName) updatedUser.lastName = lastName;
  if (age) updatedUser.age = age;

  res.send(`user with id of ${id} has been Updated`);
};

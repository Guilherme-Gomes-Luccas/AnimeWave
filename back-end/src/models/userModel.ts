import { PrismaClient } from '@prisma/client';
import { User } from './userInterface';

const prisma = new PrismaClient();

export const createUser = async (user: User) => {
  const result = await prisma.users.create({
    data: user,
    select: {
      id: true,
      public_id: true,
      name: true,
      email: true,
    },
  });

  return result;
};

export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      public_id: true,
      name: true,
      email: true,
    },
  });
  return users;
};

export const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      public_id: true,
      name: true,
      email: true,
    },
  });

  return user;
};

export const getByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export const create = async (user) => {
  const result = await prisma.user.create({
    data: user,
    select: {
      id: true,
      public_id: true,
      name: true,
      email: true,
    },
  });

  return result;
};

export const remove = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
    select: {
      id: true,
      public_id: true,
      name: true,
      email: true,
    },
  });

  return user;
};

export const update = async (user) => {
  const result = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: user,
    select: {
      id: true,
      public_id: true,
      name: true,
      email: true,
    },
  });

  return result;
};

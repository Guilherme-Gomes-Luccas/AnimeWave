import { PrismaClient } from '@prisma/client';
import { User } from './userInterface';

const prisma = new PrismaClient();

export const createUser = async (user: User) => {
  const result = await prisma.user.create({
    data: user,
    select: {
      public_id: true,
      name: true,
      email: true,
      password: true,
    },
  });

  return result;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      public_id: true,
      name: true,
      email: true,
      password: true,
      photo: true,
    },
  });

  return user;
};

export const updateUserData = async (user: User) => {
  const result = await prisma.user.update({
    where: {
      public_id: user.public_id,
    },
    data: user,
    select: {
      public_id: true,
      access_token: true,
      refresh_token: true,
    },
  });

  return result;
};

export const verifyRefreshToken = async (
  refreshToken: string,
  public_id: string,
) => {
  const result = prisma.user.findUnique({
    where: {
      public_id,
      refresh_token: refreshToken,
    },

    select: {
      name: true,
      email: true,
      password: true,
      photo: true,
      public_id: true,
      access_token: true,
    },
  });

  return result;
};
export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      public_id: true,
      name: true,
      email: true,
    },
  });
  return users;
};

export const getById = async (public_id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      public_id,
    },
    select: {
      public_id: true,
      name: true,
      email: true,
      photo: true,
    },
  });

  return user;
};

export const create = async (user: User) => {
  const result = await prisma.user.create({
    data: user,
    select: {
      public_id: true,
      name: true,
      email: true,
    },
  });

  return result;
};

export const remove = async (public_id: string) => {
  const user = await prisma.user.delete({
    where: {
      public_id,
    },
    select: {
      public_id: true,
      name: true,
      email: true,
    },
  });

  return user;
};

export const update = async (user: User) => {
  const result = await prisma.user.update({
    where: {
      public_id: user.public_id,
    },
    data: user,
    select: {
      public_id: true,
      name: true,
      email: true,
    },
  });

  return result;
};

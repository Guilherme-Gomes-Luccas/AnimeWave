import { PrismaClient } from '@prisma/client';
import { Post } from './postInterface';

const prisma = new PrismaClient();

export const createPost = async (post: Post) => {
  const result = await prisma.post.create({
    data: post,
    select: {
      public_id: true,
      id_user: true,
      title: true,
      content: true,
      photo: true,
    },
  });

  return result;
};

export const update = async (post: Post) => {
  const result = await prisma.post.update({
    where: {
      public_id: post.public_id,
    },
    data: post,
    select: {
      public_id: true,
      id_user: true,
      title: true,
      content: true,
      photo: true,
    },
  });

  return result;
};

export const getPostByUserId = async (id_user: string) => {
  const posts = await prisma.post.findMany({
    where: {
      id_user,
    },
    select: {
      public_id: true,
      id_user: true,
      title: true,
      content: true,
      photo: true,
    },
  });

  return posts;
};

export const getAll = async () => {
  const posts = await prisma.post.findMany({
    select: {
      public_id: true,
      id_user: true,
      title: true,
      content: true,
      photo: true,
    },
  });
  return posts;
};

export const getById = async (public_id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      public_id,
    },
    select: {
      public_id: true,
      id_user: true,
      title: true,
      content: true,
      photo: true,
    },
  });

  return post;
};

export const remove = async (public_id: string) => {
  const post = await prisma.post.delete({
    where: {
      public_id,
    },
    select: {
      public_id: true,
      id_user: true,
      title: true,
      content: true,
      photo: true,
    },
  });

  return post;
};

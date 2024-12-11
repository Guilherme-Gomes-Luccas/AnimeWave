import { PrismaClient } from '@prisma/client';
import { Posts } from './postInterface';

const prisma = new PrismaClient();

export const createPost = async (post: Posts) => {
  const result = await prisma.post.create({
    data: post,
    select: {
      public_id: true,
      id_user: true,
      hashtags: true,
      content: true,
      photo: true,
    },
  });

  return result;
};

export const update = async (content: string, public_id: string) => {
  const result = await prisma.post.update({
    where: {
      public_id: public_id,
    },
    data: {
      content,
    },
    select: {
      public_id: true,
      id_user: true,
      hashtags: true,
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
      hashtags: true,
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
      hashtags: true,
      content: true,
      photo: true,
      date: true,
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
      hashtags: true,
      content: true,
      photo: true,
      date: true,
    },
  });

  return post;
};

export const getPostsByHashtag = async (hashtag: string) => {
  const posts = await prisma.post.findMany({
    where: {
      hashtags: {
        has: hashtag,
      },
    },
    select: {
      public_id: true,
      id_user: true,
      hashtags: true,
      content: true,
      photo: true,
    },
  });

  return posts;
};

export const remove = async (public_id: string) => {
  const post = await prisma.post.delete({
    where: {
      public_id,
    },
    select: {
      public_id: true,
      id_user: true,
      hashtags: true,
      content: true,
      photo: true,
    },
  });

  return post;
};

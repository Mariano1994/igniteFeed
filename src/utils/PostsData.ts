import { faker } from "@faker-js/faker";

export const Posts = Array.from({ length: 8 }).map(() => {
  return {
    id: crypto.randomUUID(),
    author: {
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
      avatar_url: faker.image.avatar(),
    },
    publisedAt: faker.date.anytime(),
    content: faker.word.words({ count: { min: 10, max: 50 } }),
  };
});

import {PrismaClient} from '@prisma/client';

const client = new PrismaClient();

client.user.create({
  data: {
    name: 'Minji',
  },
});

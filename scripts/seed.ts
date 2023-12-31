import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.UserExampleCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    const posts: Prisma.PostCreateArgs['data'][] = [
      {
        title: 'The Benefits of Yoga for Stress Relief',
        body: 'Yoga has been shown to be an effective way to reduce stress and anxiety. By practicing yoga regularly, you can improve your mental and physical health, and reduce the negative effects of stress on your body.',
        createdAt: new Date(),
      },
      {
        title: 'How to Build a Successful Online Business',
        body: 'Building a successful online business requires a combination of hard work, dedication, and strategic planning. In this post, we’ll share some tips and strategies for building a successful online business from scratch.',
        createdAt: new Date(),
      },
      {
        title: 'The Top 10 Best Places to Visit in Europe',
        body: 'Europe is home to some of the most beautiful and historic cities in the world. In this post, we’ll share our top 10 picks for the best places to visit in Europe, from the stunning beaches of the Amalfi Coast to the charming streets of Paris.',
        createdAt: new Date(),
      },
      {
        title: 'How to Train for a Half Marathon',
        body: 'Training for a half marathon requires a combination of endurance, strength, and mental toughness. In this post, we’ll share some tips and strategies for training for a half marathon, from building your endurance to developing a training plan.',
        createdAt: new Date(),
      },
      {
        title: 'The Benefits of Meditation for Mental Health',
        body: 'Meditation has been shown to be an effective way to reduce stress, anxiety, and depression. In this post, we’ll explore the benefits of meditation for mental health, and share some tips and strategies for incorporating meditation into your daily routine.',
        createdAt: new Date(),
      },
      {
        title: 'How to Build a Successful Social Media Strategy',
        body: 'Building a successful social media strategy requires a combination of creativity, consistency, and strategic planning. In this post, we’ll share some tips and strategies for building a successful social media strategy, from defining your target audience to creating engaging content.',
        createdAt: new Date(),
      },
      {
        title: 'The Top 10 Best Books of All Time',
        body: 'Books have the power to inspire, educate, and entertain. In this post, we’ll share our top 10 picks for the best books of all time, from classic literature to modern bestsellers.',
        createdAt: new Date(),
      },
      {
        title: 'How to Build a Successful Email Marketing Campaign',
        body: 'Building a successful email marketing campaign requires a combination of creativity, strategy, and data analysis. In this post, we’ll share some tips and strategies for building a successful email marketing campaign, from creating engaging content to analyzing your campaign data.',
        createdAt: new Date(),
      },
      {
        title:
          'The Benefits of a Plant-Based Diet for Health and the Environment',
        body: 'A plant-based diet has been shown to be an effective way to improve your health and reduce your impact on the environment. In this post, we’ll explore the benefits of a plant-based diet, and share some tips and strategies for incorporating more plant-based foods into your diet.',
        createdAt: new Date(),
      },
      {
        title: 'How to Build a Successful YouTube Channel',
        body: 'Building a successful YouTube channel requires a combination of creativity, consistency, and strategic planning. In this post, we’ll share some tips and strategies for building a successful YouTube channel, from creating engaging content to promoting your channel.',
        createdAt: new Date(),
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
    )

    Promise.all(
      posts.map(async (data: Prisma.PostCreateArgs['data']) => {
        const record = await db.post.create({ data })
        console.log(record)
      })
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

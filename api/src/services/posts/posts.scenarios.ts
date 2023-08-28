import type { Prisma, Post } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'
const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String', body: 'String' } },
    two: { data: { title: 'String', body: 'String' } },
    three: { data: { title: 'String', body: longString } },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>

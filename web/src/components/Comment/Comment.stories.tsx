// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  component: Comment,
}

export default meta

type Story = StoryObj<typeof Comment>

export const Primary: Story = {
  args: {
    comment: {
      name: 'John Doe',
      createdAt: '2021-07-01T19:04:28.000Z',
      body: 'This is a comment',
    },
  },
}

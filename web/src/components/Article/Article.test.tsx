import type { Post } from 'types/graphql'

import { render } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Article
          article={
            {
              id: 1,
              title: 'Article Title',
              body: 'Article body.',
              createdAt: '2021-10-10T00:00:00Z',
            } as Post
          }
        />
      )
    }).not.toThrow()
  })
})

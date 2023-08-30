import { render, screen } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = {
      name: 'John Doe',
      createdAt: '2021-10-10',
      body: 'Body of comment',
    }
    expect(() => {
      render(<Comment comment={comment} />)
    }).not.toThrow()

    expect(screen.getByText(comment.name)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()
    const dateExpect = screen.getByText('10 October 2021')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.tagName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', '2021-10-10')
  })
})

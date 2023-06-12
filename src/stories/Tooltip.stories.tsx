import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from '..'
import './styles/index.css'

const meta: Meta<typeof Tooltip> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tooltip',
  component: Tooltip
}

export default meta
type Story = StoryObj<typeof Tooltip>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: ({ ...args }) => (
    <div className="page">
      <div className="content">
        <Tooltip {...args}>
          <a href="#">Link</a>
        </Tooltip>

        <Tooltip {...args}>
          <button>Button</button>
        </Tooltip>

        <div>
          The{' '}
          <Tooltip {...args}>
            <abbr>HTML</abbr>
          </Tooltip>{' '}
          <code>
            {'<'}abbr{'/>'}
          </code>{' '}
          element.
        </div>
      </div>
    </div>
  ),
  args: {
    className: 'test',
    position: 'top',
    title: 'Hello, World!',
    disabled: false
  }
}

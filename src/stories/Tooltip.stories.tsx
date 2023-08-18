import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from '..'
import './styles/index.css'

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip
}

export default meta

type Story = StoryObj<typeof Tooltip>

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
          element
        </div>
      </div>
    </div>
  ),
  args: {
    className: '',
    style: {},
    position: 'top',
    delay: 200,
    title: 'Hello, World!',
    disabled: false
  }
}

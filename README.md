<h1 align="center">
  <a href="https://www.npmjs.com/package/@react-sandbox/tooltip">@react-sandbox/tooltip</a>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/react-sandbox/tooltip/node.js.yml" alt="Build status" />
  <img src="https://img.shields.io/bundlephobia/minzip/@react-sandbox/tooltip?color=%234ba0f6" alt="Build size" />
  <img src="https://img.shields.io/npm/dt/@react-sandbox/tooltip?color=%234ba0f6" alt="Package downloads" />
</p>

<p align="center">
  <img src="example.gif" alt="Example" />
</p>

<p align="center">Lightweight tooltip component.</p>

## Usage

### Install

Install the `@react-sandbox/tooltip` package.

With `yarn`:

```bash
yarn add @react-sandbox/tooltip
```

With `npm`:

```
npm install @react-sandbox/tooltip
```

### Import

Import the `Tooltip` component:

```tsx
import React from 'react'
import Tooltip from '@react-sandbox/tooltip'

function App() {
  return (
    <Tooltip title="Download ✅">
      <button>Save</button>
    </Tooltip>
  )
}
```

### Props

| Prop        | Type                                                  | Default      | Description              |
| ----------- | ----------------------------------------------------- | ------------ | ------------------------ |
| `title`     | `string`                                              | **required** | Text content             |
| `position`  | `'top' \| 'bottom' \| 'left' \| 'right'`              | `'top'`      | Position of tooltip      |
| `delay`     | `0 \| 100 \| 200 \| 300 \| 400 \| 500 \| 750 \| 1000` | `200`        | Initial transition delay |
| `disabled`  | `boolean`                                             | `false`      | Visible or not           |
| `className` | `string`                                              | `-`          | CSS classes              |

## Development

### Local

```
yarn
yarn dev
```

### Storybook

```
yarn storybook
```

### Tests

```
yarn test
```

## License

MIT

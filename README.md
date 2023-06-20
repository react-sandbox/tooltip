<h1 align="center">
  <a href="https://www.npmjs.com/package/@react-sandbox/tooltip">@react-sandbox/tooltip</a>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/react-sandbox/tooltip/node.js.yml" alt="GitHub workflow status" />
  <img src="https://img.shields.io/bundlephobia/minzip/@react-sandbox/tooltip" alt="NPM bundle size" />
  <img src="https://img.shields.io/npm/dw/@react-sandbox/tooltip" alt="NPM weekly downloads" />
</p>

<p align="center">
  <img src="example.gif" alt="Tooltip example" />
</p>

<p align="center">Lightweight tooltip component.</p>

## Install

Install the `@react-sandbox/tooltip` package:

```bash
yarn add @react-sandbox/tooltip
# or
npm install @react-sandbox/tooltip
```

## Usage

Import the `Tooltip` component:

```tsx
import React from 'react'
import Tooltip from '@react-sandbox/tooltip'

function App() {
  return (
    <Tooltip title="Download">
      <button>Save ✅</button>
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

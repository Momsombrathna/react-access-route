# react-access-route

A React hook for managing access control in your application.
This package provides a simple way to manage user permissions and access control in React applications using a context provider.

## Installation

To install the package, run the following command:

```bash
npm install react-access-route
```

or

```bash
yarn add react-access-route
```

## Usage

1. **Wrap your application with the `AccessProvider`**:

```jsx
import React from "react";
import { AccessProvider } from "react-access-route";

const App = () => {
  return (
    <AccessProvider roles={["admin"]} permissions={[["edit", "article"]]}>
      <YourComponent />
    </AccessProvider>
  );
};
```

2. **Use the `useAccess` hook in your components**:

```jsx
import React from "react";
import { useAccess } from "react-access-route";

const YourComponent = () => {
  const { hasAccess } = useAccess();

  return (
    <div>
      {hasAccess("edit", "article") ? (
        <button>Edit Article</button>
      ) : (
        <p>You do not have permission to edit this article.</p>
      )}
    </div>
  );
};

export default YourComponent;
```

## API

### `AccessProvider`

- **props**:
  - `roles`: An array of roles assigned to the user.
  - `permissions`: An array of permissions assigned to the user, where each permission is an array containing the action and the resource (e.g., `['edit', 'article']`).

### `useAccess`

- **returns**: An object with the following properties:
  - `hasAccess(action: string, resource: string)`: A function that checks if the user has the specified action on the resource. Returns `true` if access is granted, otherwise `false`.

## Example

```jsx
import React from "react";
import { AccessProvider, useAccess } from "react-access-route";
const App = () => {
  return (
    <AccessProvider
      roles={["admin"]}
      permissions={[
        ["edit", "article"],
        ["view", "dashboard"],
      ]}
    >
      <Dashboard />
    </AccessProvider>
  );
};
const Dashboard = () => {
  const { hasAccess } = useAccess();

  return (
    <div>
      {hasAccess("view", "dashboard") ? (
        <h1>Dashboard</h1>
      ) : (
        <p>You do not have permission to view this dashboard.</p>
      )}
      {hasAccess("edit", "article") && <button>Edit Article</button>}
    </div>
  );
};

export default App;
```

## Testing

To run tests, use the following command:

```bash
npm test
```

## Development

To build the project, run:

```bash
npm run build
```

This will compile the TypeScript files and create a `dist` directory with the built files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature request.

## Changelog

- **v1.0.0**: Initial release with basic access control functionality.

## Authors

- [MOM Sombrathna](https://github.com/Momsombrathna/react-access-route.git) - Initial work and development.

## Acknowledgements

- Thanks to the React community for their support and contributions.

## Troubleshooting

If you encounter any issues, please check the following:

- Ensure that you have the correct version of React installed.
- Make sure to wrap your application with the `AccessProvider` before using the `useAccess` hook.
- If you have any questions or need help, feel free to open an issue on GitHub.

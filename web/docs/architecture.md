# React

Chosen as the UI lib due to previous experience, maturity and community adoption.
Vue.js and Nuxt were considered also, but seemed equivalent where we cared about, but with more learning curve.
React does seem to be moving to a framework ecosystem with fullstack node.js apps, which won't be our use of React since backend services use Go.
Potential concern here is to miss out on react features as the lib moves towards frameworks and node.js apps.
That said, React is more than enough for now.

> Resources

[Thinking in React](https://react.dev/learn/thinking-in-react)

[React best practices](https://react.dev/learn/escape-hatches)

# Frameworks

No frameworks because they focus on fullstack nodejs apps, which doesn't apply here, nor is necessary (SSR) at the moment.
Also we avoid a framework specific learning curve, and gain some speed with a much smaller stack upfront.
Next and Remix were considered.
The catch is that if a framework's features are desired later, it might be easier to bootstrap a new app foundation and move components over, than to migrate.
TBD on that.

# Yarn PnP

Despite NPM being the more wildly adopted package manager for node, we think yarn PnP is the best solution to one of the most meme-worthy nodejs flaw.

[The node_modules problem](https://yarnpkg.com/features/pnp)

[the meme](https://github.com/tcodes0/baristai/assets/15015324/ef2bafed-4a53-4d16-97ac-6507b7f540f9)

When yarn v2 was announced there was major drama because it was a huge breaking change, and the maintainers didn't want to stick around v1 anymore.
Nowadays, several years later, modern yarn is more mature and has broader adoption than ever.

## Dependency versions

We prefer to pin versions to make things more predictable and explicit.

# BaristAI Web

## Running dev

- git clone <repo>
- yarn dev

No install needed

## Yarn

This project uses Yarn PnP zero install, which means all dependencies are committed to the repo.
It is advised to review the [Yarn getting started](https://yarnpkg.com/getting-started) guide, sections `install` and `usage` if you need to install yarn or have not used it before.

- See `Editor SDKs` section to install the editor extension, commands and editor specific instructions and limitations

VSCode should work without setup on this repo, just install the extension.

### Plugins we use

- `@types` packages are added automatically enforced by yarn install
- `yarn pin-deps` to pin all deps to their exact version enforced by pre-commit hook

[Further PnP documentation](https://yarnpkg.com/features/pnp)

## Git Hooks

Some git hooks code under `.git-hooks` need to be called from `.git/hooks/some-hook` to work.
To prepare a git pre-commit hook from scratch

```bash
# at monorepo root
cp .git/hook/pre-commit.sample .git/hook/pre-commit
```

Edit the script.
Delete the sample code in the script, leave the first line starting with `#!`.
Call the .git-hooks script `./client/web/.git-hooks/pre-commit.sh`

### Sharing

Hooks are shared across projects so detect what files are being committed to decide what script to run

An example of an action defined and used within the same repo. 

See `.github/actions/example-action` for the action and `.github/workflows/pr.yml` for its usage.

Also noteworthy is that `.github/actions/*` folders are configured as workspaces in `package.json` so the actions dependencies are installed alongside the root dependencies.

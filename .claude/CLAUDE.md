# Claude Code Permissions for forgeup-landing

## Autonomous Operations

### File Operations
- **Read**: All files — no approval needed
- **Write/Edit**: Source code files, config, and content — no approval needed
- **Delete**: Only with explicit user instruction

### Bash Commands
- **Safe operations**: npm/pnpm commands, git (non-destructive), ls, grep, curl, find — no approval needed
- **Requires approval**: rm/force delete, system-level changes, destructive git operations (--force, --hard)

### Git Operations
- **Automatic**: Regular commits with descriptive messages — no approval needed
- **Automatic**: Push to feature branches — no approval needed
- **Requires approval**: Force push, pushing to main/production branches, destructive rebases

### Build & Development
- **Automatic**: npm run build, npm run dev, npm run test — no approval needed
- **Automatic**: Managing dev server processes — no approval needed

### Deployment
- **Automatic**: Pushing code and deploying to staging/preview — no approval needed
- **Automatic**: Building and testing before deploy — no approval needed
- **Requires approval**: Production deployments to forgeup.app (main domain)

## Preferred Approach
- Make changes, commit, and deploy in one flow unless blocked
- Test features in dev server before reporting completion
- Use agents in parallel for independent work
- Try 3 alternatives before asking user to intervene

## Project Context
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS with CSS variables
- **Hosting**: Vercel with custom domain forgeup.app
- **Primary focus**: Landing page + User Stories section for athletic audience

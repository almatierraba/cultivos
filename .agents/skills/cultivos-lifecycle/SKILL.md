---
name: cultivos-lifecycle
description: Mandatory workflow for ANY request that changes, builds, tests, releases or integrates this repository - features, fixes, refactors, dependency updates, CI/CD, docs, config, releases, hotfixes, reverts. Defines the branch-from-origin/main, review, pull request and merge procedure.
---

# cultivos lifecycle workflow

## Scope
- Read-only requests (questions, analysis, code review) need NO branch and NO commits.
- Every request that modifies tracked files follows the workflow below.

## Definitions
- Change: one unit of work, from the owner's request until the owner approves the result. Feedback on a delivered result ("adjust X", "rename Y") belongs to the SAME change and branch. A different goal is a NEW change and a NEW branch.
- Approval: an explicit message from the owner, after seeing the summary, clearly stating satisfaction and consent to integrate (e.g. "conforme", "aprobado", "mergealo", "listo para PR"). Praise ("se ve bien"), an "ok" to a different question, or silence is NOT approval; if ambiguous, ask a one-line confirmation. Approval covers that branch at that commit only.

## Workflow

### 0. Preflight (every new change)
1. `git status --porcelain`. If there are uncommitted changes you did not make for this change, STOP and ask. Never stash, reset or clean without asking.
2. `git fetch origin --prune`. Confirm `git rev-parse --verify origin/main`. If missing, STOP and ask.
3. `git branch -vv` and list your open PRs. If an earlier change is still pending approval, mention it.

### 1. Branch (always from origin/main)
- Name: `<type>/<short-kebab-description>`, type in feat, fix, refactor, perf, docs, test, build, ci, chore.
- Command: `git switch --create <branch> --no-track origin/main`.
- If you work in a Codex-managed worktree (detached HEAD), run the same command inside it to turn it into a real branch.
- Verify: `git rev-parse --abbrev-ref HEAD` equals the branch name, `git merge-base --is-ancestor origin/main HEAD` succeeds, working tree clean. Otherwise stop.
- New request while another branch is still unmerged: create the new branch from `origin/main` anyway; leave the earlier one open and say so. If the new work depends on the unmerged one, tell the owner and ask whether to wait for its merge or stack on it. Never mix unrelated work in one branch or PR.

### 2. Implement
- Smallest change that solves the request. Follow existing style, structure and the verified commands in AGENTS.md.
- Commit in small, atomic commits. Message: imperative, English, Conventional Commits (`type(scope): subject`) unless `git log` shows another established convention.
- Never commit secrets, build outputs, local config, or generated artifacts. Update `.gitignore` if needed.
- Do not push in this phase unless the owner asks.

### 3. Verify
- Run build, tests and lint relevant to the change. Fix failures that you caused.
- Never disable, skip, weaken or delete tests to get green.
- State explicitly anything you could not run and why.

### 4. Present and WAIT
Reply in Spanish with: branch name, what changed and why, files touched (diff stat), commands run with results, risks or assumptions, how the owner can verify. End by asking whether the owner is satisfied. Do NOT push, open a PR or merge.

### 5. Iterate
Owner feedback -> more commits on the same branch -> repeat steps 3 and 4.

### 6. Integrate (ONLY after approval)
1. `git fetch origin`. If `origin/main` moved, `git rebase origin/main`. Trivial conflicts: resolve and re-run step 3. Non-trivial conflicts or behavior-affecting resolutions: stop, show the owner, and ask again. If anything beyond mechanical changes is added after approval, re-present and get approval again.
2. Push: `git push -u origin <branch>` (after a rebase of an already-pushed own branch: `git push --force-with-lease origin <branch>`; never force-push anything else).
3. Create the PR with the GitHub plugin (fallback: `gh pr create`), base `main`, head = your branch. Title in Conventional Commits style. Body sections: Summary, Motivation, Changes, Testing (commands and results), Risk and rollback, Related issues.
4. Wait for required checks and reviews. If checks fail: fix on the same branch, push, wait again. Never merge with failing required checks; never bypass protection or use admin override. If merge needs a human review or is otherwise blocked, report it and stop.
5. Merge using the method the repo allows. Default: squash merge, commit title = PR title, unless repo settings or history establish another method. Delete the remote branch after merge (if not automatic).

### 7. Post-merge
1. `git fetch origin --prune`. Confirm the PR is merged and `origin/main` contains the merge commit.
2. Delete the local work branch (use `-D` only after confirming the PR is merged; squash merges look unmerged to git). Remove any worktree you created; leave no stale worktrees.
3. Report in Spanish: PR URL, merge commit SHA, final CI status. Update `references/project-map.md` in a later change if the merge altered architecture or commands.

## Special cases
- Hotfix: same workflow, minimal diff, still requires approval.
- Revert: new branch from `origin/main`, `git revert` the merge or squash commit, same workflow.
- Dependency updates: one concern per PR, note breaking changes, run the full test suite.
- CI/CD changes: never alter permissions, secrets or protection rules without asking.
- Releases, tags, version bumps: only when asked, through this same PR workflow, following the repo's existing release process.
- Docs-only changes: still branch + PR.
- Repo-level instructions (AGENTS.md, this skill, project map) change only through this workflow.

## Prohibited
Committing on or pushing to `main`; branching from anything other than a freshly fetched `origin/main`; merging without approval; force-pushing shared branches; `--no-verify`; deleting branches you did not create; destructive git commands (`reset --hard`, `clean -fd`, history rewriting) on work that is not yours without asking; editing `.git` by hand; changing repo settings or permissions; entering or printing credentials.

## Failures
- Report the exact error. Do not retry with a different way to get around it.
- If sandbox rules deny writes to `.git` or block network operations, ask the owner to approve or escalate that specific command. Do not clone elsewhere, edit `.git` manually, or switch to full-access mode.

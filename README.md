# Github Actions Jira CLI

---------
⚠️ The repo doesn't have any active maintainers at this moment, please follow https://github.com/atlassian/gajira-cli/issues/26#issuecomment-1734803955 for more details.
---------

Download and set up go-jira CLI. Check out [go-jira documentation](https://github.com/Netflix-Skunkworks/go-jira) for more arguments and usage details

> ##### Only supports Jira Cloud. Does not support Jira Server (hosted)

## Usage

#### Set up 
```
- name: Setup
  uses: atlassian/gajira-cli@v3
  with:
    version: 1.0.27
```

#### Usage in later workflow steps
```
- name: Make comment on Jira issue
  run: jira --issue=GA-1 --comment="Actions in action"
```

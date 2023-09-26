# Github Actions Jira CLI

---------
⚠️ This repository isn’t maintained anymore.
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

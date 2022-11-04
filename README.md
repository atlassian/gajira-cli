# setup-jira
Download and set up go-jira CLI. Check out [go-jira documentation](https://github.com/Netflix-Skunkworks/go-jira) for more arguments and usage details

For examples on how to use this, check out the [gajira-demo](https://github.com/atlassian/gajira-demo) repository

> ##### Only supports Jira Cloud. Does not support Jira Server (hosted)

## Usage

#### Set up 
```
- name: Setup
  uses: atlassian/gajira-cli@master
  with:
    version: 1.0.27
```

#### Usage in later workflow steps
```
- name: Make comment on Jira issue
  run: jira --issue=GA-1 --comment=\"Actions in action\""
```

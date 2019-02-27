# Jira CLI
Wrapped go-jira CLI action. Check out [go-jira documentation](https://github.com/Netflix-Skunkworks/go-jira) for more arguments and usage details

Requires [Jira Login](https://github.com/marketplace/actions/jira-login) to operate

## Usage
Example workflow to add a comment to an issue:
```
workflow "Comment issue" {
  on = "push"
  resolves = ["Jira Login"]
}

action "Jira Login" {
  uses = "atlassian/gajira-login@v1.0.0"
  secrets = ["JIRA_BASE_URL", "JIRA_USER_EMAIL", "JIRA_API_TOKEN"]
}

action "Jira CLI" {
  needs = "Jira Login"
  uses = "atlassian/gajira-cli@v1.0.0"
  args = "--issue=GA-1 --comment=\"Actions in action\""
}
```

----
## Action Spec
### Reads fields from config file at $HOME/.jira.d/config.yml
- `endpoint` - base URL of Jira instance
- `email` - Jira user email

### Reads from $HOME/.jira.d/credentials
- `JIRA_API_TOKEN` - Authentication token saved by [Jira Login Action](https://github.com/marketplace/actions/jira-login)
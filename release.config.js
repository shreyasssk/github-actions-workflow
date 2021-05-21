module.exports = {
    branches: 'master',
    repositoryUrl: "https://github.com/shreyasssk/github-actions-workflow",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}
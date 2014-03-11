var mockUser = {
  login: 'fake_user',
  id: 123456789,
  url: 'https://api.github.com/users/fake_user',
  html_url: 'https://github.com/fake_user',
  followers_url: 'https://api.github.com/users/fake_user/followers',
  following_url: 'https://api.github.com/users/fake_user/following{/other_user}',
  gists_url: 'https://api.github.com/users/fake_user/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/fake_user/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/fake_user/subscriptions',
  organizations_url: 'https://api.github.com/users/fake_user/orgs',
  repos_url: 'https://api.github.com/users/fake_user/repos',
  events_url: 'https://api.github.com/users/fake_user/events{/privacy}',
  received_events_url: 'https://api.github.com/users/fake_user/received_events',
  type: 'User',
  site_admin: false,
  name: 'Fake User',
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: '2013-07-01T17:50:50Z',
  updated_at: '2014-03-11T17:35:09Z',
  private_gists: 0,
  total_private_repos: 0,
  owned_private_repos: 0,
  disk_usage: 720,
  collaborators: 0
};

// Two repositories starred
var mockStarred = [
  {
    "id":460078,
    "name":"angular.js",
    "full_name":"angular/angular.js",
    "owner":{
      "login":"angular",
      "id":139426,
      "avatar_url":"https://gravatar.com/avatar/f0d91e5cf8ad1ce7972cc486baa20c42?d=https%3A%2F%2Fidenticons.github.com%2Ff3377e1ac5fdd9183c13129960faedd7.png&r=x",
      "gravatar_id":"f0d91e5cf8ad1ce7972cc486baa20c42",
      "url":"https://api.github.com/users/angular",
      "html_url":"https://github.com/angular",
      "followers_url":"https://api.github.com/users/angular/followers",
      "following_url":"https://api.github.com/users/angular/following{/other_user}",
      "gists_url":"https://api.github.com/users/angular/gists{/gist_id}",
      "starred_url":"https://api.github.com/users/angular/starred{/owner}{/repo}",
      "subscriptions_url":"https://api.github.com/users/angular/subscriptions",
      "organizations_url":"https://api.github.com/users/angular/orgs",
      "repos_url":"https://api.github.com/users/angular/repos",
      "events_url":"https://api.github.com/users/angular/events{/privacy}",
      "received_events_url":"https://api.github.com/users/angular/received_events",
      "type":"Organization",
      "site_admin":false
    },
    "private":false,
    "html_url":"https://github.com/angular/angular.js",
    "description":"",
    "fork":false,
    "url":"https://api.github.com/repos/angular/angular.js",
    "forks_url":"https://api.github.com/repos/angular/angular.js/forks",
    "keys_url":"https://api.github.com/repos/angular/angular.js/keys{/key_id}",
    "collaborators_url":"https://api.github.com/repos/angular/angular.js/collaborators{/collaborator}",
    "teams_url":"https://api.github.com/repos/angular/angular.js/teams",
    "hooks_url":"https://api.github.com/repos/angular/angular.js/hooks",
    "issue_events_url":"https://api.github.com/repos/angular/angular.js/issues/events{/number}",
    "events_url":"https://api.github.com/repos/angular/angular.js/events",
    "assignees_url":"https://api.github.com/repos/angular/angular.js/assignees{/user}",
    "branches_url":"https://api.github.com/repos/angular/angular.js/branches{/branch}",
    "tags_url":"https://api.github.com/repos/angular/angular.js/tags",
    "blobs_url":"https://api.github.com/repos/angular/angular.js/git/blobs{/sha}",
    "git_tags_url":"https://api.github.com/repos/angular/angular.js/git/tags{/sha}",
    "git_refs_url":"https://api.github.com/repos/angular/angular.js/git/refs{/sha}",
    "trees_url":"https://api.github.com/repos/angular/angular.js/git/trees{/sha}",
    "statuses_url":"https://api.github.com/repos/angular/angular.js/statuses/{sha}",
    "languages_url":"https://api.github.com/repos/angular/angular.js/languages",
    "stargazers_url":"https://api.github.com/repos/angular/angular.js/stargazers",
    "contributors_url":"https://api.github.com/repos/angular/angular.js/contributors",
    "subscribers_url":"https://api.github.com/repos/angular/angular.js/subscribers",
    "subscription_url":"https://api.github.com/repos/angular/angular.js/subscription",
    "commits_url":"https://api.github.com/repos/angular/angular.js/commits{/sha}",
    "git_commits_url":"https://api.github.com/repos/angular/angular.js/git/commits{/sha}",
    "comments_url":"https://api.github.com/repos/angular/angular.js/comments{/number}",
    "issue_comment_url":"https://api.github.com/repos/angular/angular.js/issues/comments/{number}",
    "contents_url":"https://api.github.com/repos/angular/angular.js/contents/{+path}",
    "compare_url":"https://api.github.com/repos/angular/angular.js/compare/{base}...{head}",
    "merges_url":"https://api.github.com/repos/angular/angular.js/merges",
    "archive_url":"https://api.github.com/repos/angular/angular.js/{archive_format}{/ref}",
    "downloads_url":"https://api.github.com/repos/angular/angular.js/downloads",
    "issues_url":"https://api.github.com/repos/angular/angular.js/issues{/number}",
    "pulls_url":"https://api.github.com/repos/angular/angular.js/pulls{/number}",
    "milestones_url":"https://api.github.com/repos/angular/angular.js/milestones{/number}",
    "notifications_url":"https://api.github.com/repos/angular/angular.js/notifications{?since,all,participating}",
    "labels_url":"https://api.github.com/repos/angular/angular.js/labels{/name}",
    "releases_url":"https://api.github.com/repos/angular/angular.js/releases{/id}",
    "created_at":"2010-01-06T00:34:37Z",
    "updated_at":"2014-03-11T17:43:54Z",
    "pushed_at":"2014-03-11T17:43:54Z",
    "git_url":"git://github.com/angular/angular.js.git",
    "ssh_url":"git@github.com:angular/angular.js.git",
    "clone_url":"https://github.com/angular/angular.js.git",
    "svn_url":"https://github.com/angular/angular.js",
    "homepage":"http://angularjs.org",
    "size":135883,
    "stargazers_count":21408,
    "watchers_count":21408,
    "language":"JavaScript",
    "has_issues":true,
    "has_downloads":true,
    "has_wiki":true,
    "forks_count":6670,
    "mirror_url":null,
    "open_issues_count":1011,
    "forks":6670,
    "open_issues":1011,
    "watchers":21408,
    "default_branch":"master",
    "master_branch":"master",
    "permissions":{
      "admin":false,
      "push":false,
      "pull":true
    }
  },
  {
    "id":14286864,
    "name":"rode",
    "full_name":"codexar/rode",
    "owner":{
      "login":"codexar",
      "id":5846671,
      "avatar_url":"https://gravatar.com/avatar/9fb13fd34c851ad25d448e2581dadc27?d=https%3A%2F%2Fidenticons.github.com%2F4fd65a10a3f7c3a71a18e5d644a3c32f.png&r=x",
      "gravatar_id":"9fb13fd34c851ad25d448e2581dadc27",
      "url":"https://api.github.com/users/codexar",
      "html_url":"https://github.com/codexar",
      "followers_url":"https://api.github.com/users/codexar/followers",
      "following_url":"https://api.github.com/users/codexar/following{/other_user}",
      "gists_url":"https://api.github.com/users/codexar/gists{/gist_id}",
      "starred_url":"https://api.github.com/users/codexar/starred{/owner}{/repo}",
      "subscriptions_url":"https://api.github.com/users/codexar/subscriptions",
      "organizations_url":"https://api.github.com/users/codexar/orgs",
      "repos_url":"https://api.github.com/users/codexar/repos",
      "events_url":"https://api.github.com/users/codexar/events{/privacy}",
      "received_events_url":"https://api.github.com/users/codexar/received_events",
      "type":"User",
      "site_admin":false
    },
    "private":false,
    "html_url":"https://github.com/codexar/rode",
    "description":"Smart Packet-Oriented Framework for Express and Mongoose.",
    "fork":false,
    "url":"https://api.github.com/repos/codexar/rode",
    "forks_url":"https://api.github.com/repos/codexar/rode/forks",
    "keys_url":"https://api.github.com/repos/codexar/rode/keys{/key_id}",
    "collaborators_url":"https://api.github.com/repos/codexar/rode/collaborators{/collaborator}",
    "teams_url":"https://api.github.com/repos/codexar/rode/teams",
    "hooks_url":"https://api.github.com/repos/codexar/rode/hooks",
    "issue_events_url":"https://api.github.com/repos/codexar/rode/issues/events{/number}",
    "events_url":"https://api.github.com/repos/codexar/rode/events",
    "assignees_url":"https://api.github.com/repos/codexar/rode/assignees{/user}",
    "branches_url":"https://api.github.com/repos/codexar/rode/branches{/branch}",
    "tags_url":"https://api.github.com/repos/codexar/rode/tags",
    "blobs_url":"https://api.github.com/repos/codexar/rode/git/blobs{/sha}",
    "git_tags_url":"https://api.github.com/repos/codexar/rode/git/tags{/sha}",
    "git_refs_url":"https://api.github.com/repos/codexar/rode/git/refs{/sha}",
    "trees_url":"https://api.github.com/repos/codexar/rode/git/trees{/sha}",
    "statuses_url":"https://api.github.com/repos/codexar/rode/statuses/{sha}",
    "languages_url":"https://api.github.com/repos/codexar/rode/languages",
    "stargazers_url":"https://api.github.com/repos/codexar/rode/stargazers",
    "contributors_url":"https://api.github.com/repos/codexar/rode/contributors",
    "subscribers_url":"https://api.github.com/repos/codexar/rode/subscribers",
    "subscription_url":"https://api.github.com/repos/codexar/rode/subscription",
    "commits_url":"https://api.github.com/repos/codexar/rode/commits{/sha}",
    "git_commits_url":"https://api.github.com/repos/codexar/rode/git/commits{/sha}",
    "comments_url":"https://api.github.com/repos/codexar/rode/comments{/number}",
    "issue_comment_url":"https://api.github.com/repos/codexar/rode/issues/comments/{number}",
    "contents_url":"https://api.github.com/repos/codexar/rode/contents/{+path}",
    "compare_url":"https://api.github.com/repos/codexar/rode/compare/{base}...{head}",
    "merges_url":"https://api.github.com/repos/codexar/rode/merges",
    "archive_url":"https://api.github.com/repos/codexar/rode/{archive_format}{/ref}",
    "downloads_url":"https://api.github.com/repos/codexar/rode/downloads",
    "issues_url":"https://api.github.com/repos/codexar/rode/issues{/number}",
    "pulls_url":"https://api.github.com/repos/codexar/rode/pulls{/number}",
    "milestones_url":"https://api.github.com/repos/codexar/rode/milestones{/number}",
    "notifications_url":"https://api.github.com/repos/codexar/rode/notifications{?since,all,participating}",
    "labels_url":"https://api.github.com/repos/codexar/rode/labels{/name}",
    "releases_url":"https://api.github.com/repos/codexar/rode/releases{/id}",
    "created_at":"2013-11-10T23:33:47Z",
    "updated_at":"2014-03-09T20:45:56Z",
    "pushed_at":"2014-03-09T20:45:56Z",
    "git_url":"git://github.com/codexar/rode.git",
    "ssh_url":"git@github.com:codexar/rode.git",
    "clone_url":"https://github.com/codexar/rode.git",
    "svn_url":"https://github.com/codexar/rode",
    "homepage":"",
    "size":978,
    "stargazers_count":13,
    "watchers_count":13,
    "language":"JavaScript",
    "has_issues":true,
    "has_downloads":true,
    "has_wiki":true,
    "forks_count":4,
    "mirror_url":null,
    "open_issues_count":0,
    "forks":4,
    "open_issues":0,
    "watchers":13,
    "default_branch":"master",
    "master_branch":"master",
    "permissions":{
      "admin":false,
      "push":true,
      "pull":true
    }
  }
];
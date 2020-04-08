#### PORT4YOU is a static personal website framework made by GatsbyJS.

Port4you comes from the word portfolio. With PORT4YOU, you can create your own static personal portfolio site by editing Markdown files.

##### Features

- Get your information and recent public repos from your GitHub account.
- Edit your resume with Markdown syntax and HTML supported.
- Static website.


##### Deployment

1. You must have Node installed.
2. Download the code from GitHub.
3. Unzip it and run `npm install` to install all dependencies.
4. Generate a GitHub Personal Access Token with the minimum permission.
5. Create a file in the root of the project folder and name it `.env.production`
6. Put your information in to the specific fields as follows:
	```
	GITHUB_TOKEN    =Your token
   JOB_TITLE       =Your job title
   GITHUB_URL      =https:// your GitHub url
   GITLAB_URL      =https:// your GitLab url
   LINKEDIN_URL    =https:// your Linkedin url
   EMAIL           =your email
	```
7. Then edit `about-me.md` `education.md` `experience.md` `skill.md` in the folder /PORT4YOU/src/markdown.
8. Run `gatsby build` command. You may need add a path prefix, here is how: https://www.gatsbyjs.org/docs/path-prefix/
9. Upload the files inside of /PORT4YOU/public to your web container.
##### Development

As a developer, you should know how to develop it :)
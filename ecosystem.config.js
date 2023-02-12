module.exports = {
  apps: {
    name: 'dy-url:3612',
    script: './dist/app.js',
  },
  deploy: {
    production: {
      'user': 'root',
      'host': '158.247.218.144',
      'ref': 'origin/main',
      'repo': 'git@github.com:xsrole/dy-url.git',
      'path': '/root/www/dy-url',
      'pre-deploy-local': '',
      'post-deploy': 'pnpm i && pnpm run build && PORT=3612 pm2 start',
      'pre-setup': '',
    },
  },
}

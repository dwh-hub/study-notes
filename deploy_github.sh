
#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e

# 获取 commit 信息，如果没有传入则使用默认值 'deploy'
COMMIT_MSG=${1:-deploy}
 
# 生成静态文件
yarn build
 
# 进入生成的文件夹
cd docs/.vuepress/dist
 
git init
git add -A
git commit -m "$COMMIT_MSG"
 
# 发布到GitHub上 (使用 SSH)
git push -f git@github.com:dwh-hub/study-notes.git main:gh-pages
 
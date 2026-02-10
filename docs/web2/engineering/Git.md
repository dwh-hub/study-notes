# Git 工作流规范

## Commit 规范

### 格式要求

```bash
<type>: <subject>

# 示例
feat: 新增用户登录功能
fix: 修复列表页分页bug
docs: 更新README文档
```

### Type 类型

| 类型 | 说明 |
|------|------|
| feat | 新功能 |
| fix | 修复 bug |
| docs | 文档变更 |
| style | 代码格式（不影响代码运行） |
| refactor | 重构（既不是新增功能，也不是修复bug） |
| perf | 性能优化 |
| test | 增加测试 |
| chore | 构建过程或辅助工具的变动 |

### 为什么要规范 Commit

1. **自动生成 ChangeLog** - 通过工具自动生成版本更新日志
2. **快速定位问题** - 通过 `git log --grep="fix"` 快速找到所有 bug 修复
3. **代码审查更清晰** - 一眼看出每次提交的目的
4. **团队协作统一** - 避免各种奇怪的提交信息

## 版本管理

### 使用 Tag 管理版本

```bash
# 创建带注释的 tag
git tag -a v1.0.0 -m "发布 1.0.0 正式版"

# 推送 tag 到远程
git push origin v1.0.0

# 查看所有 tag
git tag

# 删除 tag
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

### 版本号规则（语义化版本）

```
v主版本号.次版本号.修订号

v1.0.0 → v1.0.1 → v1.1.0 → v2.0.0
```

- **主版本号（Major）**：不兼容的 API 修改
- **次版本号（Minor）**：向下兼容的功能性新增
- **修订号（Patch）**：向下兼容的 bug 修复

### 版本管理流程

1. 开发完成，测试通过，准备上线
2. 合并到 `master` 分支
3. 回归测试通过后，打 tag 封盘
4. 后续有 bug，修复后打修订版本（如 v1.0.1）

### 为什么用 Tag 而不是分支

- **分支会越来越多** - 时间长了难以维护
- **Tag 是快照** - 不可变，更适合标记版本
- **方便回滚** - `git checkout v1.0.0` 快速切换到指定版本

## 协同开发的分支管理

### 常驻分支

```
master      → 线上版本（生产环境）
  ↓
release     → 预发布/测试分支（待上线内容）
  ↓
dev         → 开发分支（集成分支）
  ↓
feature/*   → 功能分支（个人开发）
```

### 开发流程

```bash
# 1. 从 master 切出新版本的 dev 分支
git checkout master
git pull
git checkout -b dev/v1.1.0

# 2. 开发人员从 dev 切出自己的功能分支
git checkout -b feature/user-login

# 3. 开发完成，自测通过，合并到 dev
git checkout dev/v1.1.0
git merge feature/user-login

# 4. dev 提交测试，测试通过后合并到 release
git checkout release
git merge dev/v1.1.0

# 5. release 预发布验证通过，合并到 master 上线
git checkout master
git merge release
git tag -a v1.1.0 -m "发布 1.1.0 版本"
```

### 分支命名规范

```bash
# 功能分支
feature/user-login
feature/order-list

# 修复分支
fix/login-bug
hotfix/urgent-fix

# 开发分支
dev/v1.1.0
```

### 分支保护

- **master** - 只能通过 PR/MR 合并，禁止直接 push
- **release** - 只能从 dev 合并，禁止直接修改
- **dev** - 从 feature 分支合并，代码审查后才能合并

### 冲突处理

```bash
# 合并前先拉取最新代码
git checkout dev
git pull

# 在自己的分支上 rebase
git checkout feature/my-feature
git rebase dev

# 解决冲突后继续
git add .
git rebase --continue

# 最后合并到 dev
git checkout dev
git merge feature/my-feature
```

## Tips

1. **提交要小而频繁** - 一个功能点一次提交，方便回滚
2. **提交前先 pull** - 避免不必要的冲突
3. **不要提交无关文件** - 配置好 `.gitignore`
4. **代码审查** - 重要分支合并前必须 Code Review
5. **定期清理分支** - 已合并的功能分支及时删除

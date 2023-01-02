# gitconfig的配置和git alias

Windows下`C:/Users/your-name/.gitconfig`中的效果会影响到整个电脑用户。

gitconfig中可以设置alias方面快速地调用命令。

设置core.editor可以让vs code接管为默认编辑器

设置proxy可以设置走代理（对国内github体验很重要，梯子自行解决）

```
[user]
	name = your name
	email = your email
[http]
	proxy = http://127.0.0.1:7890
[https]
	proxy = https://127.0.0.1:7890
[core]
	editor = code --wait
[diff]
    tool = default-difftool
[difftool "default-difftool"]
    cmd = code --wait --diff $LOCAL $REMOTE
[alias]
	ck = checkout
	b = branch
	g = log --graph --abbrev-commit --decorate --date=relative 
	p = push
	m = merge
	s = status
	a = add .
	cb = checkout -b 
```

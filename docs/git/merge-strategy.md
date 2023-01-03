# merge的时候全部保留某一侧

使用--strategy-option选项，如下

```
# keep remote files
git merge --strategy-option theirs
# keep local files
git merge --strategy-option ours
```

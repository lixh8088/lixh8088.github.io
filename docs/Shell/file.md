# 文件操作
1. 创建文件夹:mkdir
```sh bash
  # 创建一个文件夹
  mkdir [文件夹名称]
  # 如果创建一个多级目录，比如a和b文件夹不存在直接使用上述命令会报错，应该使用下述命令
  mkdir a/b/[文件夹名称]
```
2. 目录操作:cd
```sh bash
  # 进入文件夹
  cd [文件路径]
  # 返回上级目录
  cd ..
  # 返回上两级目录
  cd ../..
  # 返回进入此目录之前所在的目录
  cd -
  # 进入用户主目录
  cd 或 cd ～
```
3. 查看文件
```sh bash
  # 列出当前目录下的资源
  ls
  # 打开当前目录
  open .
  # 显示文件内容
  cat filename
```

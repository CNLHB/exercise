# 数据结构之栈
## 栈的应用
+ undo操作 编辑器
+ 系统栈调用  操作系统
+ 括号匹配 - 编辑器



### 括号匹配

```js
function BracketMatch(str){
    let tmp = str.split("")
    let arr = []
    let patten = {
        "}":"{",
        "]":"[",
        ")":"("
    }
    for(let i = 0; i< tmp.length; i++){
        if(tmp[i]=="("||tmp[i]=="["||tmp[i]=="{"){
            arr.push(tmp[i])
        }else{
            if(arr.pop()==patten[tmp[i]]){
            }else{
                return false
            }
        }
    }
    return true
}
```




### less-study
--------

#### 变量 (Variables)

> less 中变量的声明通过@来实现， @变量名：值；

```
@width: 300px;
@bg-color: #5B83AD;
@font-color: #fff;

.box{
  width: @width;
  background: @bg-color;
  color: @font-color;
}

```

#### 混合 (Mixins)

> mixin是一种将一组属性从一个规则集包含到另一个规则集的方法(“混合”)。

1. 不带参数的混合

```

.border-radius{
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}

.box{
  width: 300px;
  height: 300px;
  background: red;
  .border-radius;
}

```

2. 带参数的混合

```

.border-radius-mixin(@num){
  border-radius: @num;
  -webkit-border-radius: @num;
  -moz-border-radius: @num;
}

.box{
  width: 300px;
  height: 300px;
  background: red;
  .border-radius-mixin(10px);
}

```

3. 带默认参数的混合

```

.padding-default(@num: 10px){
  padding: @num;
}

.box{
  width: 300px;
  height: 300px;
  background: red;
  .padding-default();  //此时默认的padding值为10px，也可以通过.padding-default(20px)来引入，此时padding值为20px；
}

```


less deep learning and summary


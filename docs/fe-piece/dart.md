# Dart

## 数据类型

- String
- Number：int、double、num
- Boolean：bool
- Symbol
- List
- Set
- Map
- 等等

:::tip
Dart 中所有东西都是对象。它们都继承自 Object，默认是都是 null。
:::

## 类型转换

```
// int to double
int a = 100
a.toDouble()

// double to int
double a = 100.0
a.toInt()
```

```
// num to String
int a = 100
double b = 100.0
a.toString()
b.toString()

// String to num
String str1 = '100'
String str2 = '100.0'
int.parse(str1)
double.parse(str2)
```

```
// JSON to Map

// Map to Object

待完善
```

## const & final

const 和 final 定义的都是常量，一经赋值，无法更改，只能初始化一次。且在声明时就必须初始化。

final 并不要求赋的值一定是编译时常量，可以是也可以不是。  
const 则要求赋值必需为编译时常量。

```
final time = new DateTime.now(); // OK
const time = new DateTime.now(); // Error，new DateTime.now() 不是 const 常量
```

:::tip

- 编译时常量：编译时已经确定常量的值。
- 运行时常量：运行时才能确定常量的值。
:::

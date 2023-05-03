# Dart

## 体感不好的地方

### 缺少字面量对象

无法直接使用字面量创建对象，必须创建对应的实体类，然后通过类创建对应的对象。  

最接近对象的是 Map，可勉强用其代替，只不过使用时只能用中括号引用属性值，不能像对象那样用点号，不太方便。

### 枚举无法指定初始值

定义枚举，无法赋初值。这样实用性大大降低了，基本也就纯前端用用了。

后端返回某几个具体值的时候，前端对接的时候为了增强代码可读性，以及后续的维护，通常是定义一个枚举赋值的，这点 Dart 中无法直接做到。

要实现类似的效果，可参考：<https://www.technicalfeeder.com/2021/08/dart-how-to-assign-values-to-enum/>

### 接口请求返回的 JSON 数据要转成对象很麻烦

Dart 中只能先将 JSON 转为 Map，而后要自己创建对应的实体类，在其中定义 fromJson 方法，然后将 Map 转为对象。中间多了一层中转还要建模，很麻烦。

## 操作符

待完善

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

## 函数参数

### 可选参数

```
void fun(int a, [String? b]) {
  ...
}

fun(1) // OK
fun(1, '11') // OK
```

```
void fun(int a, [String b = '11']) {
  ...
}

fun(1) // OK
fun(1, '11') // OK
```

### 命名参数

```
void fun(int a, {String? b}) {
  ...
}

fun(1) // OK
fun(1, b: '11') // OK
```

```
void fun(int a, {String b = '11'}) {
  ...
}

fun(1) // OK
fun(1, b: '11') // OK
```

```
void fun(int a, {required String b}) {
  ...
}

fun(1) // Error
fun(1, b: '11') // OK
```

## 构造函数

### 普通构造函数

```
class People{
  int? age;
  String? name;

  People(int age, String name) {
    this.age = age;
    this.name = name;
  }
}
```

class People{
  int? age;
  String? name;

  // 简写形式
  People(this.age, this.name);
}

### 命名构造函数

```
class People{
  int? age;
  String? name;
 
  People.fromMap(Map map) {
    this.age = map["age"];
    this.name = map["name"];
  }
}
```

### 常量构造函数

### 工厂构造函数

## const & final

const 和 final 定义的都是常量，一经赋值，无法更改，只能初始化一次。且在声明时就必须初始化。

二者主要区别如下：

- final 并不要求赋值一定是编译时常量，而 const 则要求必须是编译时常量。
- final 修饰的对象引用本身不可更改，但其中的属性值可以更改，而 const 则属性值都不可更改。

```
final time = new DateTime.now(); // OK
const time = new DateTime.now(); // Error，new DateTime.now() 不是 const 常量
```

:::tip

- 编译时常量：编译时已经确定常量的值。
- 运行时常量：运行时才能确定常量的值。
:::

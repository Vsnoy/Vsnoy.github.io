# React Native

## View 缺失点击事件

<https://stackoverflow.com/questions/41948900/react-native-detect-tap-on-view>

两种方案：

- 使用 onTouchEnd 事件代替
- 外包一层 TouchableOpacity

## transform-origin 属性缺失

<https://stackoverflow.com/questions/52561376/react-native-transform-origin>

<https://stackoverflow.com/questions/73345282/react-native-animated-rotation-anchor-point>

<http://172.81.245.67/blogs/program/jie-jue-react-nativewu-fa-she-zhi-transform-originde-wen-ti.html>

三种方案：

- Matrix 矩阵
- 元素平移 trick
- react-native-anchor-point 三方库

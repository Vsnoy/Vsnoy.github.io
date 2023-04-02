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

## react-native-view-shot 插件，安卓截屏不能截 Image/ImageBackground

安卓截屏，不能截 Image 或 ImageBackground，必须是 View，View 还要设置 collapsable 设置为 false，防止 View 因为优化而从原生布局树中被移除。

## react-native-simple-shadow-view 插件，安卓必须先设置背景色才能设置阴影

- 安卓上必须要给 ShadowView 设置背景颜色，阴影才能奏效
- 设置背景颜色时，有时呈现的会是黑色，与设置的颜色不符，可尝试换用其他颜色格式

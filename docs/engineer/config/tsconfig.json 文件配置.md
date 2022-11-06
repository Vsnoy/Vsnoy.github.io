# tsconfig.json 文件配置

`tsconfig.json` 文件是 `ts` 对应的编译配置文件。

```
{
  "compilerOptions": {
    // 基本配置选项
    "target": "es5", // 指定编译成哪个版本的 es
    "module": "esnext", // 指定生成哪个模块系统代码
    "lib": ["dom", "dom.iterable", "esnext"], // 指定编译过程中需要引入的库文件列表
    "jsx": "react-jsx", // 在 tsx 文件中支持 jsx，react 17 以下版本使用 'react'，react 17 及以上版本使用 'react-jsx'
    "strict": true, // 是否启用所有严格类型检查选项
    "allowJs": false, // 是否允许编译 js 文件
    "isolatedModules": true, // 是否将每个文件作为单独的模块

    // 模块解析选项
    "moduleResolution": "node", // 指定模块解析策略
    "esModuleInterop": false, // 是否支持 es 和 cjs 模块之间的互操作性
    "resolveJsonModule": true, // 是否支持导入 json 模块
    "baseUrl": ".", // 基础路径
    "paths": {
      // 别名配置
      "@/*": ["src/*"]
    },

    // 实验性选项
    "experimentalDecorators": true, // 启用实验性的 es 装饰器

    // 其他选项
    "forceConsistentCasingInFileNames": true, // 是否禁止对同一个文件不一致的引用
    "skipLibCheck": false, // 是否跳过对声明文件（*.d.ts）类型检查
    "allowSyntheticDefaultImports": true, // 是否允许从没有设置默认导出的模块中默认导入
    "noEmit": true // 是否不生成输出文件
  },
  "exclude": ["node_modules"]
}
```

├─.gitignore------------ # Git忽略文件，列出了在版本控制中应忽略的文件和目录
├─index.html------------ # 入口HTML文件，应用启动时将加载该文件
├─package-lock.json----- # 记录确切的依赖版本，以确保环境一致性
├─package.json---------- # 项目的基本信息和依赖管理文件
├─shims-uni.d.ts-------- # TypeScript的声明文件，用于处理uni-app特有的模块
├─src------------------- # 源代码目录
│ ├─App.vue------------- # 应用的主Vue组件
│ ├─common-------------- # 通用资源目录
│ │ ├─js---------------- # JavaScript文件夹
│ │ │ └─mock-data.js---- # 模拟数据，用于开发和测试
│ │ └─scss-------------- # SCSS样式文件夹
│ │   ├─index.scss------ # 通用的样式文件
│ │   └─self.scss------- # 自定义样式文件
│ ├─components---------- # Vue组件文件夹
│ ├─main.js------------- # 应用的入口JavaScript文件
│ ├─manifest.json------- # 应用的配置文件，主要用于uni-app
│ ├─pages--------------- # 页面组件文件夹
│ ├─pages.json---------- # 页面路由配置文件，定义了应用中的路由
│ ├─shime-uni.d.ts------ # 为 TypeScript 提供声明
│ ├─static-------------- # 静态资源文件夹（图片、字体等）
│ └─uni.scss------------ # 应用的全局SCSS样式文件
└─vite.config.js-------- # Vite的配置文件，定义构建和开发服务器设置
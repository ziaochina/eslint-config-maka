分类 | 规则名 |  规范值 | 描述  | eslint官方帮助
-|-|- |- |-
best practices | accessor-pairs | 'off'| 不强制getter/setter成对 | http://eslint.org/docs/rules/accessor-pairs
best practices | array-callback-return | 'error'|  数组方法的回调中强制返回语句 |  http://eslint.org/docs/rules/array-callback-return
best practices | block-scoped-var | 'error'|  禁止块语句之外使用变量 |  http://eslint.org/docs/rules/block-scoped-var
best practices | complexity | 'off'|  允许圈复杂度 |  http://eslint.org/docs/rules/complexity
best practices | consistent-return | 'off'|  允许return后面省略 |  http://eslint.org/docs/rules/consistent-return
best practices | curly | ['error', 'multi-line'] | 没有花括号时，禁止多行书写 | http://eslint.org/docs/rules/curly
best practices | default-case |  ['error', { commentPattern: '^no default$' }]| switch case 默认需要default,如果没有请加 `// no default`注释 | http://eslint.org/docs/rules/default-case
best practices | dot-notation |  ['error', { allowKeywords: true }]| 强制使用点表示法，例如obj.property1 | http://eslint.org/docs/rules/dot-notation
best practices | dot-location |  'off' | 允许换行之前和之后的点 | http://eslint.org/docs/rules/dot-location
best practices | eqeqeq |  ['error', 'allow-null'] | 强制使用 `===`, null除外 | http://eslint.org/docs/rules/eqeqeq
best practices | guard-for-in | 'off' | 允许在for in 循环中不过滤结果 | http://eslint.org/docs/rules/guard-for-in
best practices | no-alert | 'error' | 禁止使用alert | http://eslint.org/docs/rules/no-alert
best practices | no-caller | 'error' | 禁止使用caller/callee | http://eslint.org/docs/rules/no-caller
best practices | no-case-declarations | 'error' | 禁止case/default子句中进行声明词法 | http://eslint.org/docs/rules/no-case-declarations
best practices | no-div-regex | 'off' | 禁止看起来像除法的正则表达式/=foo/ | http://eslint.org/docs/rules/no-div-regex
best practices | no-else-return | 'error' | 如果if语句里面有return,后面不能跟else语句 | http://eslint.org/docs/rules/no-else-return
best practices | no-empty-function | ['error', {allow: ['arrowFunctions','functions','methods']}] | 禁止空函数 | http://eslint.org/docs/rules/no-empty-function
best practices | no-empty-pattern | 'error' | 禁止空解构赋值 | http://eslint.org/docs/rules/no-empty-pattern
best practices | no-eq-null | 'off' | 允许foo == null | http://eslint.org/docs/rules/no-eq-null
best practices | no-eval | 'error' | 禁止使用eval | http://eslint.org/docs/rules/no-eval
best practices | no-extend-native | 'error' | 禁止直接修改内建对象的prototype | http://eslint.org/docs/rules/no-extend-native
best practices | no-extra-bind | 'error' | 禁止不必要的函数绑定 | http://eslint.org/docs/rules/no-extra-bind
best practices | no-extra-label | 'error' |  禁止使用不必要的标签 | http://eslint.org/docs/rules/no-extra-label
best practices | no-fallthrough | 'error' |  禁止case穿透 | http://eslint.org/docs/rules/no-fallthrough
best practices | no-floating-decimal | 'error' |  禁止省略浮点数中的0 .5 3. | http://eslint.org/docs/rules/no-floating-decimal
best practices | no-implicit-coercion | 'off' |  允许隐式转换 | http://eslint.org/docs/rules/no-implicit-coercion
best practices | no-implicit-globals | 'off' |  允许在global域写var或者命名函数 | http://eslint.org/docs/rules/no-implicit-globals
best practices | no-implied-eval | 'error' |  禁止隐含的eval() | http://eslint.org/docs/rules/no-implied-eval
best practices | no-invalid-this | 'off' |  允许无效的this | http://eslint.org/docs/rules/no-invalid-this
best practices | no-iterator | 'off' |  允许使用__iterator__ 属性 | http://eslint.org/docs/rules/no-iterator
best practices | no-labels | ['error', { allowLoop: false, allowSwitch: false }] |  只允许switch和loop使用标签 | http://eslint.org/docs/rules/no-labels
best practices | no-lone-blocks | 'error' |  禁止不必要的嵌套块 | http://eslint.org/docs/rules/no-lone-blocks
best practices | no-loop-func | 'error' |  禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以） | http://eslint.org/docs/rules/no-loop-func
best practices | no-magic-numbers | 'off' | 允许出现没有声明的数字 | http://eslint.org/docs/rules/no-magic-numbers
best practices | no-multi-spaces | 'error' | 禁止使用多余的空格 | http://eslint.org/docs/rules/no-multi-spaces
best practices | no-multi-str | 'error' | 字符串不能用\换行 | http://eslint.org/docs/rules/no-multi-str
best practices | no-native-reassign | 'error' | 不能重写native对象 | http://eslint.org/docs/rules/no-native-reassign
best practices | no-new | 'off' | 允许不使用new创建对象 | http://eslint.org/docs/rules/no-new
best practices | no-new-func | 'error' | 禁止函数构造器 | http://eslint.org/docs/rules/no-new-func
best practices | no-new-wrappers | 'error' | 禁止使用new创建包装实例 | http://eslint.org/docs/rules/no-new-wrappers
best practices | no-octal | 'error' | 禁止使用八进制数字 | http://eslint.org/docs/rules/no-octal
best practices | no-octal-escape | 'error' | 禁止使用八进制转义序列 | http://eslint.org/docs/rules/no-octal-escape
best practices | no-param-reassign | 'off' | 允许给参数重新赋值 | http://eslint.org/docs/rules/no-param-reassign
best practices | no-proto | 'error' | 禁止使用__proto__ | http://eslint.org/docs/rules/no-proto
best practices | no-redeclare | 'error' | 禁止重复声明变量 | http://eslint.org/docs/rules/no-redeclare
best practices | no-return-assign | 'error' | return 语句中不能有赋值表达式 | http://eslint.org/docs/rules/no-return-assign
best practices | no-script-url | 'error' | 禁止使用javascript:void(0) | http://eslint.org/docs/rules/no-script-url
best practices | no-self-assign | 'error' | 禁止自我分配 | http://eslint.org/docs/rules/no-self-assign
best practices | no-self-compare | 'error' | 不能比较自身 | http://eslint.org/docs/rules/no-self-compare
best practices | no-sequences | 'error' |  禁止使用逗号运算符 | http://eslint.org/docs/rules/no-sequences
best practices | no-throw-literal | 'off' |  允许抛出字面量错误 throw "error" | http://eslint.org/docs/rules/no-throw-literal
best practices | no-unmodified-loop-condition | 'off' |  禁止未经修改的循环条件 | http://eslint.org/docs/rules/no-unmodified-loop-condition
best practices | no-unused-expressions | 'off' |  允许无用的表达式 | http://eslint.org/docs/rules/no-unused-expressions
best practices | no-unused-labels | 'error' |  禁止无用的标签 | http://eslint.org/docs/rules/no-unused-labels
best practices | no-useless-call | 'off' |  允许不必要的call和apply | http://eslint.org/docs/rules/no-useless-call
best practices | no-useless-concat | 'error' | 禁止不必要的字符串连接 | http://eslint.org/docs/rules/no-useless-concat
best practices | no-useless-escape | 'error' |  禁止不必要的escape | http://eslint.org/docs/rules/no-useless-escape
best practices | no-void | 'off' | 允许void操作符 | http://eslint.org/docs/rules/no-void
best practices | no-warning-comments | 'off' | 允许警告备注 | http://eslint.org/docs/rules/no-warning-comments
best practices | no-with | 'error' | 禁用with | http://eslint.org/docs/rules/no-with
best practices | radix | 'off' |  允许parseInt不指定第二个参数 | http://eslint.org/docs/rules/radix
best practices | vars-on-top | 'off' |  允许var不放在作用域顶部 | http://eslint.org/docs/rules/vars-on-top
best practices | wrap-iife | 'off' |  允许立即执行函数表达式的小括号风格 | http://eslint.org/docs/rules/wrap-iife
best practices | yoda | 'error' |  禁止尤达条件 | http://eslint.org/docs/rules/yoda
strict | strict | [ 'error', 'global' ] |  在全局域使用严格模式 | http://eslint.org/docs/rules/strict
variables | init-declarations |'off' |  允许声明时不赋初值 | http://eslint.org/docs/rules/init-declarations
variables | no-catch-shadow |'off' |  允许catch子句参数与外部作用域变量同名 | http://eslint.org/docs/rules/no-catch-shadow
variables | no-delete-var |'error' |  禁止对var声明的变量使用delete操作符 | http://eslint.org/docs/rules/no-delete-var
variables | no-label-var |'error' |  禁止label名与var声明的变量名相同 | http://eslint.org/docs/rules/no-label-var
variables | no-restricted-globals |'off' |  允许使用特定的全局变量 | http://eslint.org/docs/rules/no-restricted-globals
variables | no-shadow |'off' |  允许外部作用域中的变量与它所包含的作用域中的变量或参数同名 | http://eslint.org/docs/rules/no-shadow
variables | no-shadow-restricted-names |'error' |  严格模式中规定的限制标识符不能作为声明时的变量名使用 | http://eslint.org/docs/rules/no-shadow-restricted-names
variables | no-undef |'error' |  禁止存在未定义的变量 | http://eslint.org/docs/rules/no-undef
variables | no-undef-init |'error' |  禁止变量初始化时直接给它赋值为undefined | http://eslint.org/docs/rules/no-undef-init
variables | no-undefined |'off' |  允许使用undefined | http://eslint.org/docs/rules/no-undefined
variables | no-unused-vars |  [ 'error', { vars: 'local', args: 'after-used' }] |  禁止声明后未被使用的变量或参数 | http://eslint.org/docs/rules/no-unused-vars
variables | no-use-before-define |  [ 'error', 'nofunc' ] |  禁止未定义前就使用 | http://eslint.org/docs/rules/no-use-before-define
variables | no-var |  'off' |  允许使用var,以及let和const | http://eslint.org/docs/rules/no-var
style | array-bracket-spacing | [ 'error', 'always', { objectsInArrays: false, arraysInArrays: false,}] | 禁止方括号内加空格，当数组中放的是对象或者数组时 | http://eslint.org/docs/rules/array-bracket-spacing
style | block-spacing | [ 'error', 'always' ] | 强制在打开块之后和关闭块之前使用空格 | http://eslint.org/docs/rules/block-spacing
style | brace-style | [ 'error', '1tbs', { allowSingleLine: true }] | 1tbs大括号风格并允许单行 | http://eslint.org/docs/rules/brace-style
style | camelcase | 'off' | 不强制驼峰法命名 | http://eslint.org/docs/rules/camelcase
style | comma-spacing | [ 'error', { before: false, after: true }] | 强制逗号前面没空格，后面有空格 | http://eslint.org/docs/rules/comma-spacing
style | comma-style | [ 'error', 'last' ] | 强制换行时逗号在行尾 | http://eslint.org/docs/rules/comma-style
style | computed-property-spacing | 'off' | 允许在计算属性内添加空格 | http://eslint.org/docs/rules/computed-property-spacing
style | consistent-this | 'off' | 允许this别名 | http://eslint.org/docs/rules/consistent-this
style | eol-last | 'error' | 文件以单一的换行符结束 | http://eslint.org/docs/rules/eol-last
style | func-names | 'off' | 允许函数表达式没有名字 | http://eslint.org/docs/rules/func-names
style | func-style | 'off' | 不限制函数书写风格 | http://eslint.org/docs/rules/func-style
style | id-blacklist | 'off' | 不启用id黑名单 | http://eslint.org/docs/rules/id-blacklist
style | id-length | 'off' | 不限制变量名长度 | http://eslint.org/docs/rules/id-length
style | id-match | 'off' | 不检测变量名 | http://eslint.org/docs/rules/id-match
style | indent | [ 'error', 2, { SwitchCase: 1, VariableDeclarator: 1 }] | 缩进风格，默认2,switch 1, 变量定义 1 | http://eslint.org/docs/rules/indent
style | key-spacing | [ 'error', { beforeColon: false, afterColon: true }] | 对象字面量中冒号的前后空格，前面没有，后面有 | http://eslint.org/docs/rules/key-spacing
style | keyword-spacing | [ 'error', {before: true,after: true,overrides: {return: { after: true },throw: { after: true },case: { after: true },},}] | 在关键字前后强制保持一致的间距 | http://eslint.org/docs/rules/keyword-spacing
style | linebreak-style | [ (os.platform() === 'win32' ? 'off' : 'error'), 'unix' ] | 换行风格，win32不限制,其余unix风格 | http://eslint.org/docs/rules/linebreak-style
style | lines-around-comment | 'off' | 不限制行前后备注 | http://eslint.org/docs/rules/lines-around-comment      
style | max-depth | 'off' | 不限制嵌套深度 | http://eslint.org/docs/rules/max-depth 
style | max-len | 'off' | 不限制字符串最大长度 | http://eslint.org/docs/rules/max-len
style | max-nested-callbacks | 'off' | 不显示回调嵌套深度 | http://eslint.org/docs/rules/max-nested-callbacks
style | max-params | 'off' | 不限制函数参数个数 | http://eslint.org/docs/rules/max-params 
style | max-statements | 'off' |  不限制函数内有几个声明 | http://eslint.org/docs/rules/max-statements
style | max-statements-per-line | 'off' | 不限制每行允许的最大语句数 | http://eslint.org/docs/rules/max-statements
style | new-cap | 'off' | 不限制new后面函数风格 | http://eslint.org/docs/rules/new-cap 
style | new-parens | 'error' | new时必须加小括号 | http://eslint.org/docs/rules/new-parens
style | newline-after-var | 'off' | 变量声明后行后面可以不空一行  | http://eslint.org/docs/rules/newline-after-var
style | newline-before-return | 'off' | 不限制在return语句之前需要一个空行 | http://eslint.org/docs/rules/newline-before-return
style | newline-per-chained-call | [ 'error', { ignoreChainWithDepth: 3 }] | 在方法链中的调用，如果超过3个，必须换行 | http://eslint.org/docs/rules/newline-per-chained-call
style | no-array-constructor | 'error' | 禁止使用数组构造器 | http://eslint.org/docs/rules/no-array-constructor
style | no-bitwise | 'error' | 禁止使用按位运算符 | http://eslint.org/docs/rules/no-bitwise
style | no-continue | 'off' | 不限制continue使用 | http://eslint.org/docs/rules/no-continue
style | no-inline-comments | 'off' | 允许行内备注 | http://eslint.org/docs/rules/no-inline-comments
style | no-lonely-if | 'off' | 允许else语句内只有if语句 | http://eslint.org/docs/rules/no-lonely-if
style | no-mixed-spaces-and-tabs | [ 'error', false ] | 禁止混用tab和空格 | http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
style | no-multiple-empty-lines | [ 'error', { max: 2, maxEOF: 1 }] | 连续空行最多2行， 文件结尾空行最多一行 | http://eslint.org/docs/rules/no-multiple-empty-lines
style | no-negated-condition | 'off' | 不限制否定条件 | http://eslint.org/docs/rules/no-negated-condition
style | no-negated-in-lhs | 'error' | in 操作符的左边不能有! | http://eslint.org/docs/rules/no-negated-in-lhs
style | no-nested-ternary | 'off' | 允许使用嵌套的三目运算 | http://eslint.org/docs/rules/no-nested-ternary
style | no-new-object | 'error' | 禁止使用new Object() | http://eslint.org/docs/rules/no-new-object 
style | no-plusplus | 'off' | 允许使用++，-- | http://eslint.org/docs/rules/no-plusplus 
style | no-restricted-syntax | [2,'WithStatement',] | 禁止with语法| http://eslint.org/docs/rules/no-restricted-syntax
style | no-spaced-func | 'error' | 函数调用时 函数名与()之间不能有空格 | http://eslint.org/docs/rules/no-spaced-func
style | no-ternary | 'off' | 允许使用三目运算符 | http://eslint.org/docs/rules/no-ternary
style | no-trailing-spaces | 'error' | 一行结束后面不要有空格 | http://eslint.org/docs/rules/no-trailing-spaces
style | no-underscore-dangle | 'off' | 允许标识符以_开头或结尾 | http://eslint.org/docs/rules/no-underscore-dangle
style | no-unneeded-ternary | 'error' | 禁止不必要的嵌套 var isYes = answer === 1 ? true : false; | http://eslint.org/docs/rules/no-unneeded-ternary
style | no-whitespace-before-property | 'error' | 禁止在属性前使用空格 | http://eslint.org/docs/rules/no-whitespace-before-property
style | object-curly-spacing | [ 'error', 'always' ] | 强制花括号内有空格 | http://eslint.org/docs/rules/object-curly-spacing
style | object-property-newline | 'off' | 不限制将对象属性放在单独的行上 | http://eslint.org/docs/rules/object-property-newline
style | one-var | 'off' |  允许连续声明 | http://eslint.org/docs/rules/one-var
style | one-var-declaration-per-line | [ 'error', 'always' ] | 要求在变量声明周围使用换行符 | http://eslint.org/docs/rules/one-var-declaration-per-line
style | operator-assignment | 'off' | 允许赋值运算符 += -= 等 | http://eslint.org/docs/rules/operator-assignment
style | operator-linebreak | 'off' | 不限制换行时运算符在行尾还是行首 | http://eslint.org/docs/rules/operator-linebreak
style | padded-blocks | 'off' | 不限制块语句内行首行尾是否要空行 | http://eslint.org/docs/rules/padded-blocks
style | quote-props | [ 'error', 'as-needed', { keywords: false }] | 对象字面量中的属性名在需要的时候加双引号 | http://eslint.org/docs/rules/quote-props
style | quotes | [ 'error', 'single', { avoidEscape: true }] | 引号类型规范 "aaa'b'cc" | http://eslint.org/docs/rules/quotes
style | require-jsdoc | 'off' | 不限制JSDoc注释 | http://eslint.org/docs/rules/require-jsdoc
style | semi | 'off' | 不限制分号结尾 | http://eslint.org/docs/rules/semi
style | semi-spacing | [ 'error', { before: false, after: true }] | 分号前后空格，前无后有 | http://eslint.org/docs/rules/semi-spacing
style | sort-vars | 'off' | 不限制变量声明时排序 | http://eslint.org/docs/rules/sort-vars
style | space-before-blocks | 'error' | 强制不以新行开始的块{前面有空格 | http://eslint.org/docs/rules/space-before-blocks
style | space-before-function-paren | [ 'error', {anonymous: 'never',named: 'never',}] | 函数定义时括号前面不要有空格 | http://eslint.org/docs/rules/space-before-function-paren
style | space-in-parens | [ 'error', 'never' ] | 小括号里面不要有空格 | http://eslint.org/docs/rules/space-in-parens
style | space-infix-ops | 'error' | 中缀操作符周围要有空格 | http://eslint.org/docs/rules/space-infix-ops
style | space-unary-ops | [ 'error', {words: true,nonwords: false,}] | 一元运算符的前/后要不要加空格 | http://eslint.org/docs/rules/space-unary-ops
style | spaced-comment | [ 'error', 'always', {exceptions: [ '-', '+' ],markers: [ '*!' ],}] | 注释风格要不要有空格什么的 | http://eslint.org/docs/rules/spaced-comment
style | wrap-regex |  'off' | 不限制正则表达式字面量用小括号包起来 | http://eslint.org/docs/rules/wrap-regex
style | no-useless-escape | 'off' | 允许不必要的转义使用| http://eslint.org/docs/rules/no-useless-escape
node | callback-return | 'off' | node中不限制多次调用回调 | http://eslint.org/docs/rules/callback-return
node | global-require | 'off' | node中可以全局require | http://eslint.org/docs/rules/global-require
node | handle-callback-err | 'off' | node中不限制是否存在处理错误回调函数 | http://eslint.org/docs/rules/handle-callback-err
node | no-mixed-requires | 'off' |  node中可以混用声明类型 | http://eslint.org/docs/rules/no-mixed-requires
node | no-new-require | 'off' | node中可以使用new require | http://eslint.org/docs/rules/no-new-require
node | no-path-concat | 'off' | node中可以使用__dirname或__filename做路径拼接 | http://eslint.org/docs/rules/no-path-concat
node | no-process-env | 'off' | node中可以使用process.env | http://eslint.org/docs/rules/no-process-env
node | no-process-exit | 'off' | node中可以使用process.exit() | http://eslint.org/docs/rules/no-process-exit
node | no-restricted-modules | 'off' |  node中可以使用指定模块 | http://eslint.org/docs/rules/no-restricted-modules
node | no-sync | 'off' | node中可以使用同步方法 | http://eslint.org/docs/rules/no-sync
errors | comma-dangle | [ 'error', { arrays: 'always-multiline', objects: 'always-multiline',imports: 'always-multiline', exports: 'always-multiline',functions: 'never',  }] | 对象字面量项尾不能有逗号 | http://eslint.org/docs/rules/comma-dangle 
errors | no-cond-assign | [ 'error', 'except-parens' ] | 允许在条件表达式中使用赋值语句，except-parens除外 | http://eslint.org/docs/rules/no-cond-assign
errors | no-console | 'off' | 允许使用console | http://eslint.org/docs/rules/no-console
errors | no-constant-condition | 'error' |  禁止在条件中使用常量表达式 if(true) if(1) | http://eslint.org/docs/rules/no-constant-condition
errors | no-control-regex | 'error' |  禁止在正则表达式中使用控制字符 | http://eslint.org/docs/rules/no-control-regex
errors | no-debugger | 'error' |  禁止使用debugger | http://eslint.org/docs/rules/no-debugger
errors | no-dupe-args | 'error' |  函数参数不能重复 | http://eslint.org/docs/rules/no-dupe-args
errors | no-dupe-keys | 'error' |  在创建对象字面量时不允许键重复 {a:1,a:1} | http://eslint.org/docs/rules/no-dupe-keys
errors | no-duplicate-case | 'error' |  switch中的case标签不能重复 | http://eslint.org/docs/rules/no-duplicate-case
errors | no-empty | 'error' |  块语句中的内容不能为空 | http://eslint.org/docs/rules/no-empty
errors | no-empty-character-class | 'error' |  正则表达式中的[]内容不能为空 | http://eslint.org/docs/rules/no-empty-character-class
errors | no-ex-assign | 'error' |  禁止给catch语句中的异常参数赋值 | http://eslint.org/docs/rules/no-ex-assign
errors | no-extra-boolean-cast | 'error' |  禁止不必要的bool转换 | http://eslint.org/docs/rules/no-extra-boolean-cast
errors | no-extra-parens | [ 'error', 'functions' ] |  禁止非必要的括号 | http://eslint.org/docs/rules/no-extra-parens
errors | no-extra-semi | 'error' |  禁止多余的冒号 | http://eslint.org/docs/rules/no-extra-semi 
errors | no-func-assign | 'error' |  禁止重复的函数声明 | http://eslint.org/docs/rules/no-func-assign
errors | no-inner-declarations | [ 'error', 'functions' ] |  禁止在块语句中使用声明（变量或函数） | http://eslint.org/docs/rules/no-inner-declarations
errors | no-invalid-regexp | 'error' |  禁止无效的正则表达式 | http://eslint.org/docs/rules/no-invalid-regexp
errors | no-irregular-whitespace | 'error' |  不能有不规则的空格 | http://eslint.org/docs/rules/no-irregular-whitespace
errors | no-negated-in-lhs | 'error' |  in 操作符的左边不能有! | http://eslint.org/docs/rules/no-negated-in-lhs
errors | no-obj-calls | 'error' |  不能调用内置的全局对象，比如Math() JSON() | http://eslint.org/docs/rules/no-obj-calls
errors | no-regex-spaces | 'error' |  禁止在正则表达式字面量中使用多个空格 /foo bar/ | http://eslint.org/docs/rules/no-regex-spaces
errors | no-sparse-arrays | 'error' |  禁止稀疏数组， [1,,2] | http://eslint.org/docs/rules/no-sparse-arrays
errors | no-unexpected-multiline | 'off' |  避免多行表达式 | http://eslint.org/docs/rules/no-unexpected-multiline
errors | no-unreachable | 'error' |  不能有无法执行的代码 | http://eslint.org/docs/rules/no-unreachable
errors | no-unsafe-finally | 'error' |  禁止在 finally 语句块中出现控制流语句 | http://eslint.org/docs/rules/no-unsafe-finally
errors | use-isnan | 'error' |  禁止比较时使用NaN，只能用isNaN() | http://eslint.org/docs/rules/use-isnan
errors | valid-jsdoc | 'off' |  忽略jsdoc规则 | http://eslint.org/docs/rules/valid-jsdoc
errors | valid-typeof | 'off' |  不限制使用的typeof的值合法性 | http://eslint.org/docs/rules/valid-typeof
jsdoc | jsdoc/check-examples | 'off' | 忽略JSDoc中的（JavaScript）示例符合ESLint规则 | https://github.com/gajus/eslint-plugin-jsdoc#check-examples
jsdoc | sdoc/check-param-names | 1 | 确保JSDoc中的参数名称与函数声明中的参数名称匹配。 | https://github.com/gajus/eslint-plugin-jsdoc#check-param-names
jsdoc | jsdoc/check-tag-names | 1 | 报告无效的块标签名称。| https://github.com/gajus/eslint-plugin-jsdoc#check-tag-names
jsdoc | jsdoc/check-types | 'off' | 忽略类型检查 | https://github.com/gajus/eslint-plugin-jsdoc#check-types
jsdoc | jsdoc/newline-after-description | 'off' | 忽略描述后换新行 | https://github.com/gajus/eslint-plugin-jsdoc#newline-after-description
jsdoc | jsdoc/no-undefined-types | 'off' |  不要求检查undefined类型 | https://github.com/gajus/eslint-plugin-jsdoc#no-undefined-types
jsdoc | jsdoc/require-description | 'off' |  不要求所有函数都有一个描述 | https://github.com/gajus/eslint-plugin-jsdoc#require-description
jsdoc | jsdoc/require-description-complete-sentence | 'off' | 不要求描述完整的句子 | https://github.com/gajus/eslint-plugin-jsdoc#require-description-complete-sentence
jsdoc | jsdoc/require-example | 'off' | 不要求示例 | https://github.com/gajus/eslint-plugin-jsdoc#require-example
jsdoc | jsdoc/require-hyphen-before-param-description | 'off' |  不要求在@param描述之前需要一个连字符 | https://github.com/gajus/eslint-plugin-jsdoc#require-hyphen-before-param-description
jsdoc | jsdoc/require-param | 1 | 要求参数 | https://github.com/gajus/eslint-plugin-jsdoc#require-param
jsdoc | jsdoc/require-param-description | 1 | 要求参数描述 | https://github.com/gajus/eslint-plugin-jsdoc#require-param-description
jsdoc | jsdoc/require-param-name | 1 | 要求参数名 | https://github.com/gajus/eslint-plugin-jsdoc#require-param-name
jsdoc | jsdoc/require-param-type | 1 | 要求参数类型 | https://github.com/gajus/eslint-plugin-jsdoc#require-param-type
jsdoc | jsdoc/require-returns | 'off' | 不要求retnurn | https://github.com/gajus/eslint-plugin-jsdoc#require-returns
jsdoc | jsdoc/require-returns-check | 1 | 要求return检查  | https://github.com/gajus/eslint-plugin-jsdoc#require-returns-check
jsdoc | jsdoc/require-returns-description | 1 | 要求return描述 | https://github.com/gajus/eslint-plugin-jsdoc#require-returns-description
jsdoc | jsdoc/require-returns-type | 1 | 要求return类型 | https://github.com/gajus/eslint-plugin-jsdoc#require-returns-type
jsdoc | jsdoc/valid-types | 'off' |  不要求类型检查 | https://github.com/gajus/eslint-plugin-jsdoc#valid-types
es6 | arrow-body-style | 'off' | 不要求在箭头功能主体中需要括号 | http://eslint.org/docs/rules/arrow-body-style
es6 | arrow-parens | [ 'error', 'as-needed' ] | 必须时在箭头函数参数中需要括号 | http://eslint.org/docs/rules/arrow-parens
es6 | arrow-spacing | [ 'error', { before: true, after: true }] | 箭头前后需要空格 | http://eslint.org/docs/rules/arrow-spacing
es6 | constructor-super | 'off' | 不要求构造函数super | http://eslint.org/docs/rules/constructor-super
es6 | generator-star-spacing | [ 'error', { before: false, after: true }] | 函数生成器*，前面无空格，后面有空格 | http://eslint.org/docs/rules/generator-star-spacing
es6 | no-class-assign | 'error' | 禁止修改类声明的变量 | http://eslint.org/docs/rules/no-class-assign
es6 | no-confusing-arrow | [ 'error', { allowParens: true,}] | 禁止将箭头功能与比较混淆的地方 | http://eslint.org/docs/rules/no-confusing-arrow
es6 | no-const-assign | 'error' | 禁止修改使用const声明的变量 | http://eslint.org/docs/rules/no-const-assign
es6 | no-dupe-class-members | 'error' | 禁止class中使用重复名称 | http://eslint.org/docs/rules/no-dupe-class-members
es6 | no-new-symbol | 'off' | 允许符号构造器 | http://eslint.org/docs/rules/no-new-symbol
es6 | no-this-before-super | 'error' | 调用super之前禁止使用this | http://eslint.org/docs/rules/no-this-before-super
es6 | no-useless-computed-key | 'error' | 禁止在对象和类中使用不必要的计算属性键 | http://eslint.org/docs/rules/no-useless-computed-key
es6 | no-useless-constructor | 'error' | 禁止不必要的构造函数 | http://eslint.org/docs/rules/no-useless-constructor
es6 | no-var | 'error' | 需要let或const代替var | http://eslint.org/docs/rules/no-var
es6 | object-shorthand | [ 'error', 'always', {avoidQuotes: true,ignoreConstructors: false,}] | 强制使用简写语法 | http://eslint.org/docs/rules/object-shorthand
es6 | prefer-const | [ 'error', {destructuring: 'all',ignoreReadBeforeAssign: true,}] | 要求对象文字速记语法 | http://eslint.org/docs/rules/
es6 | prefer-reflect | 'off' | 不要求在适用时使用Reflect方法 | http://eslint.org/docs/rules/prefer-reflect
es6 | prefer-rest-params | 'off' | 不要求使用rest参数代替arguments | http://eslint.org/docs/rules/prefer-rest-params
es6 | prefer-spread | 'off' | 不限制使用apply | http://eslint.org/docs/rules/prefer-spread
es6 | prefer-template | 'off' | 不要求强制使用模板文字 | http://eslint.org/docs/rules/prefer-template
es6 | require-yield | 'off' | 不要函数生成器是否存在yield | http://eslint.org/docs/rules/require-yield
es6 | template-curly-spacing | 'error' | 确保模板文字内{}空格一致性 | http://eslint.org/docs/rules/template-curly-spacing
es6 | yield-star-spacing | [ 'error', { before: false, after: true }] | 强制执行*周围 yield*表达式的间距，前没有，后有 | http://eslint.org/docs/rules/yield-star-spacing
es6 | prefer-promise-reject-errors | 'error' |  确保promise只被Error对象拒绝 | http://eslint.org/docs/rules/prefer-promise-reject-errors






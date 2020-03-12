'use strict';
/**
 * 最佳实践规则
 */
module.exports = {
  rules: {
    /**
     * Doesn't enforces getter/setter pairs in objects
     * 不强制getter/setter成对
     * @see http://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'off',

    /**
     * Enforces return statements in callbacks of following array’s methods
     * 在以下数组方法的回调中强制返回语句
     *
     * ```js
     * Array.from
     * Array.prototype.every
     * Array.prototype.filter
     * Array.prototype.find
     * Array.prototype.findIndex
     * Array.prototype.map
     * Array.prototype.reduce
     * Array.prototype.reduceRight
     * Array.prototype.some
     * Array.prototype.sort
     * ```
     * @see http://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': 'error',

    /**
     * Disallows the usage of variables outside of their binding context and
     * emulate traditional block scope from other languages.
     * 不允许在绑定上下文之外使用变量
     * @see http://eslint.org/docs/rules/block-scoped-var
     * @since 3.0.0
     */
    'block-scoped-var': 'error',

    /**
     * Doesn't limit cyclomatic complexity
     * 不限制圈复杂度
     * @see http://eslint.org/docs/rules/complexity
     */
    complexity: 'off',

    /**
     * Doesn't require `return` statements to either always or never specify values
     * 不强制函数返回指定类型的值
     * @see http://eslint.org/docs/rules/consistent-return
     * @example
     *
     * ```js
     * // correct
     * function doSomething(condition) {
     *   if (condition) {
     *     return true;
     *   }
     * }
     * ```
     */
    'consistent-return': 'off',

    /**
     * Requires following curly brace conventions
     *
     * 1. You can relax the rule to allow brace-less single-line `if`,
     * `else if`, `else`, `for`, `while`, or `do`, while still enforcing the use
     * of curly braces for other instances.
     *
     * 没有花括号时，不允许许多行书写
     *
     * @see http://eslint.org/docs/rules/curly
     * @example
     *
     * ```js
     * // incorrect
     * if (foo)
     *   doSomething();
     * else
     *   doSomethingElse();
     *
     * // correct
     * if (foo) doSomething();
     *
     * if (foo) doSomething();
     * else doSomethingElse();
     *
     * do something();
     * while (foo);
     * ```
     */
    curly: [ 'error', 'multi-line' ],

    /**
     * Requires default case in switch statements.
     * You may optionally include a `// no default` after the last case
     * if there is no default case
     *
     * switch case 默认需要default,如果没有请加  `// no default`注释
     * @see http://eslint.org/docs/rules/default-case
     * @since 3.0.0
     * @example
     *
     * ```js
     * // correct
     * switch (foo) {
     *   case 1:
     *     doSomething();
     *     break;
     *
     *   case 2:
     *     doSomething();
     *     break;
     *
     *   // no default
     * }
     * ```
     */
    'default-case': [ 'error', { commentPattern: '^no default$' }],

    /**
     * Encouraging use of the dot notation style whenever possible
     * @see http://eslint.org/docs/rules/dot-notation
     * @since 3.0.0
     * @example
     *
     * ```js
     * // incorrect
     * const x = foo['bar'];
     *
     * // correct
     * const obj = foo.bar;
     * const y = foo[arg];
     *
     * // Specially, to avoid dot notation for reserved word properties,
     * // following pattern is accepted
     * const foo = bar['class'];
     * ```
     */
    'dot-notation': [ 'error', { allowKeywords: true }],

    /**
     * Doesn't enforce newline before and after dot
     *
     * 不强制换行之前和之后的点
     *
     * @see http://eslint.org/docs/rules/dot-location
     * @example
     *
     * ```js
     * // correct
     * const a = foo.
     *         bar;
     *
     * const b = foo
     *         .bar;
     * ```
     */
    'dot-location': 'off',

    /**
     * Enforces using the type-safe equality operators `===` and
     * `!==` instead of their regular counterparts `==` and `!=`.
     * Tt permits comparing to null to check for `null` or `undefined`
     * in a single expression
     *
     * 强制使用 `===`, null除外
     *
     * @see http://eslint.org/docs/rules/eqeqeq
     * @example
     *
     * ```js
     * // correct
     * a === b
     * foo === true
     * bananas !== 1
     * value === undefined
     * typeof foo === 'undefined'
     * 'hello' !== 'world'
     * 0 === 0
     * true === true
     * foo === null
     * foo == null
     *
     * // incorrect
     * a == b
     * foo == true
     * bananas != 1
     * value == undefined
     * typeof foo == 'undefined'
     * 'hello' != 'world'
     * 0 == 0
     * true == true
     * ```
     */
    eqeqeq: [ 'error', 'allow-null' ],

    /**
     * Doesn't require filtering the results in the loop for
     * preventing unexpected behavior
     *
     * 不强制在for in 循环中过滤结果
     *
     * @see http://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'off',

    /**
     * Disallow use of alert
     * 禁止使用alert
     * @see http://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',

    /**
     * Disallow use of caller/callee
     * 禁止使用caller/callee
     * @see http://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',

    /**
     * Disallow lexical declarations in case/default clauses
     *
     * 禁止 case/default 子句中进行声明词法
     *
     * @see http://eslint.org/docs/rules/no-case-declarations
     * @example
     *
     * ```js
     * // incorrect
     * switch (foo) {
     *   case 1:
     *     let x = 1;
     *     break;
     *   case 2:
     *     const y = 2;
     *     break;
     *   // no default
     *
     * // correct
     * switch (foo) {
     *   case 1: {
     *     let x = 1;
     *     break;
     *   }
     *   case 2: {
     *     const y = 2;
     *     break;
     *   }
     *   // no default
     * ```
     */
    'no-case-declarations': 'error',

    /**
     * Disallow regexs that look like division
     *
     * 禁止看起来像除法的正则表达式
     *
     * @see http://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'off',

    /**
     * Disallow return before else
     * 如果if语句里面有return,后面不能跟else语句
     * @see http://eslint.org/docs/rules/no-else-return
     * @since 3.0.0
     */
    'no-else-return': 'error',

    /**
     * Disallow empty functions
     * 禁止空函数
     * @see http://eslint.org/docs/rules/no-empty-function
     * @example
     *
     * Specially, these following patterns are permitted
     *
     * #### `arrowFunctions`
     *
     * ```js
     * const foo = () => {};
     * ```
     *
     * #### `functions`
     *
     * ```js
     * function foo() {}
     *
     * const foo = function() {};
     *
     * const obj = {
     *   foo: function() {}
     * };
     * ```
     *
     * #### `methods`
     *
     * ```js
     * const obj = {
     *   foo() {}
     * };
     *
     * class A {
     *   foo() {}
     *   static foo() {}
     * }
     * ```
     *
     * Codes bellow are not permitted
     *
     * ```js
     * // generatorFunctions
     * function* foo() {}
     * const foo = function*() {};
     *
     * // generatorMethods
     * const obj = {
     *   foo: function*() {},
     *   *foo() {},
     * };
     *
     * // getters or setters
     * const obj = {
     *   get foo() {},
     *   set foo(value) {},
     * };
     *
     * // constructors
     * class A {
     *   constructor() {}
     * }
     *
     * // mixed
     * const obj = {
     *   bar: 123,
     *   foo: () => this.bar,
     *   *foo() {},
     * }
     * ```
     */
    'no-empty-function': [ 'error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    }],

    /**
     * Disallow empty destructuring patterns
     * 禁止空解构赋值
     * @see http://eslint.org/docs/rules/no-empty-pattern
     * @example
     *
     * ```js
     * // incorrect
     * const {} = foo;
     * const [] = foo;
     * const {a: {}} = foo;
     * const {a: []} = foo;
     * function foo({}) {}
     * function foo([]) {}
     * function foo({a: {}}) {}
     * function foo({a: []}) {}
     * ```
     */
    'no-empty-pattern': 'error',

    /**
     * Allow `foo == null`
     * 允许foo == null
     * @see http://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'off',

    /**
     * Disallow usage of `eval`
     * 禁止使用eval
     * @see http://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',

    /**
     * Disallows directly modifying the prototype of builtin objects
     * 禁止直接修改内建对象的prototype
     * @see http://eslint.org/docs/rules/no-extend-native
     * @example
     *
     * ```js
     * // incorrect
     * Object.prototype.a = "a";
     * Object.defineProperty(Array.prototype, "times", { value: 999 });
     * ```
     */
    'no-extend-native': 'error',

    /**
     * Disallow unnecessary function binding
     * 禁止不必要的函数绑定
     * @see http://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'error',

    /**
     * If a loop contains no nested loops or switches,
     * labeling the loop is unnecessary
     * 禁止使用不必要的标签
     * @see http://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'error',

    /**
     * Disallow case statements fallthrough
     * 禁止case穿透
     * @see http://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * Disallow floating decimals
     * 禁止省略浮点数中的0 .5 3.
     * @see http://eslint.org/docs/rules/no-floating-decimal
     * @since 3.0.0
     */
    'no-floating-decimal': 'error',

    /**
     * Allow the type conversion with shorter notations
     * 允许隐式转换
     * @see http://eslint.org/docs/rules/no-implicit-coercion
     * @example
     *
     * ```js
     * // correct
     * const b = !!foo;
     * const b = ~foo.indexOf(".");
     * const n = +foo;
     * const n = 1 * foo;
     * const s = "" + foo;
     * foo += "";
     * ```
     */
    'no-implicit-coercion': 'off',

    /**
     * Allow `var` and named functions in global scope
     * 允许在global域写var或者命名函数
     * @see http://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'off',

    /**
     * Disallow implied `eval()`
     * 禁止隐含的eval()
     * @see http://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',

    /**
     * Allow this keywords outside of classes or class-like objects
     * 允许无效的this
     * @see http://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'off',

    /**
     * Allow iterator
     * 允许使用__iterator__ 属性
     * @see http://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'off',

    /**
     * Disallow labeled statements
     * 只允许switch和loop使用标签
     * @see http://eslint.org/docs/rules/no-labels
     */
    'no-labels': [ 'error', { allowLoop: false, allowSwitch: false }],

    /**
     * Disallow unnecessary nested blocks
     * 禁止不必要的嵌套块
     * @see http://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',

    /**
     * Disallow functions in loops
     * 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
     * @see http://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'error',

    /**
     * 允许出现没有声明的数字
     * @see http://eslint.org/docs/rules/no-magic-numbers
     * @since 3.0.0
     */
    'no-magic-numbers': 'off',

    /**
     * Disallow multiple spaces
     * 禁止使用多余的空格
     * @see http://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': 'error',

    /**
     * Disallow multi-line strings
     * 字符串不能用\换行
     * @see http://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'error',

    /**
     * Disallow reassignment of native objects
     * 不能重写native对象
     * @see http://eslint.org/docs/rules/no-native-reassign
     */
    'no-native-reassign': 'error',

    /**
     * Doesn't require storing the object created by `new` with
     * a constructor in a variable
     * 允许不使用new创建对象
     * @see http://eslint.org/docs/rules/no-new
     * @example
     *
     * ```js
     * // correct
     * new Thing();
     *
     * const thing = new Thing();
     *
     * Thing();
     * ```
     */
    'no-new': 'off',

    /**
     * Disallow function constructor
     * 禁止函数构造器
     * @see http://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'error',

    /**
     * Disallow primitive wrapper instances
     * 禁止使用new创建包装实例
     * @see http://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * 禁止使用八进制数字
     * @see http://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',

    /**
     * Disallow octal escape sequences in string literals
     * 禁止使用八进制转义序列
     * @see http://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'error',

    /**
     * Allow reassignment of function parameters
     * 允许给参数重新赋值
     * @see http://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'off',

    /**
     * Disallow use of `__proto__`
     * 禁止使用__proto__
     * @see http://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',

    /**
     * Disallow redeclaring variables
     * 禁止重复声明变量
     * @see http://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'error',

    /**
     * Disallow assignment in return statement
     * return 语句中不能有赋值表达式
     * @see http://eslint.org/docs/rules/no-return-assign
     * @since 3.0.0
     */
    'no-return-assign': 'error',

    /**
     * Disallow script URLs
     * 禁止使用javascript:void(0)
     * @see http://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',

    /**
     * Disallow self assignment
     * @see http://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': 'error',

    /**
     * Disallow self comparison
     * 不能比较自身
     * @see http://eslint.org/docs/rules/no-self-compare
     * @since 3.0.0
     */
    'no-self-compare': 'error',

    /**
     * Disallow use of the comma operator
     * @see http://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /**
     * Doesn't restrict what can be thrown as an exception
     * @see http://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'off',

    /**
     * disallow unmodified conditions of loops
     * @see http://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'off',

    /**
     * Disallow unused expressions
     * @see http://eslint.org/docs/rules/no-unused-expressions
     * @since 3.0.0
     */
    'no-unused-expressions': 'off',

    /**
     * disallow unused labels
     * @see http://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /**
     * Allow unnecessary `.call()` and `.apply()`
     * @see http://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'off',

    /**
     * Disallow unnecessary concatenation of strings
     * @see http://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /**
     * Disallow unnecessary string escaping
     * @see http://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',

    /**
     * Allow use of the void operator
     * @see http://eslint.org/docs/rules/no-void
     */
    'no-void': 'off',

    /**
     * Allow warning comments
     * @see http://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': 'off',

    /**
     * disallow use of the `with` statement
     * @see http://eslint.org/docs/rules/no-with
     */
    'no-with': 'error',

    /**
     * Doesn't require Radix Parameter
     * @see http://eslint.org/docs/rules/radix
     */
    radix: 'off',

    /**
     * Doesn't require variable declarations to be at the top of their scope
     * @see http://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'off',

    /**
     * Require IIFEs to be wrapped
     * @see http://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': 'off',

    /**
     * Disallow Yoda conditions
     * @see http://eslint.org/docs/rules/yoda
     */
    yoda: 'error',
  },
};

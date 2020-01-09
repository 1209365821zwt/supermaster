module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-prop-types':'error',
    'vue/require-default-prop':'off',
    'vue/no-reserved-keys':'off',
    'vue/valid-template-root':'off',
    'vue/html-self-closing':'off',
    'vue/max-attributes-per-line':['error',{'singleline':5,'multiline':{'max':1}}],
    'no-var':'off',
    'space-infix-ops':'off',
    'semi':'off',
    'space-before-blocks':'off',
    'no-ternary':'off',
    'no-restricted-modules':'off'

  },
  parserOptions: {
    parser: 'babel-eslint',
   
  },

 
 
}

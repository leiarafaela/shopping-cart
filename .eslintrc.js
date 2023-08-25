module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended' 
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'indent':[
      'error', 
      2
    ],
    'linebreak-style':[
      'error',
      'windows'
    ],
    'quotes':[
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'jsx-quotes':[
      2,
      'prefer-double'
    ],
  },
  settings: {
    'react': {
      'version': 'detect'
    }
  }
  
};
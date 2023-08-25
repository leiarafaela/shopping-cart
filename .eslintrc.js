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
    'linebreak-style': 0, 
  },
  settings: {
    'react': {
      'version': 'detect'
    }
  }
  
};
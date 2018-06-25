module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "plugins": [
        "react",
    ],
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "import/no-unresolved": 0,
        "no-use-before-define": 1,
        "import/no-named-as-default-member": 1,
        "react/prefer-stateless-function": 1,
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
    }
};
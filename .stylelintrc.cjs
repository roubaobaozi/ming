module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
    rules: {
        "alpha-value-notation": "number",
        "selector-class-pattern": "^[a-z]+([A-Z][a-z0-9]*)*$",
    },
};

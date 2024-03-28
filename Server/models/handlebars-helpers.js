module.exports = {

    /**
     * @example
     * {{#equal value1 value2}}
     *   <p>value1 equal value2</p>
     * {{else}}
     *   <p>value1 not equal value2</p>
     * {{/equal}}
     */
    equal: (a, b, options) => {
        if (a === b) {
            return options.fn(this);
        }

        return options.inverse(this);
    },

    /**
     * @example
     * {{#neq value1 value2}}
     *   <p>value1 not equal value2</p>
     * {{else}}
     *   <p>value1 equal value2</p>
     * {{/neq}}
     */
    neq: (a, b, options) => {
        if (a !== b) {
            return options.fn(this);
        }

        return options.inverse(this);
    },
};

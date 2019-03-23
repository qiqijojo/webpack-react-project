module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'header-max-length': [0],
        'type-enum': [
            2,
            'always',
            [
                'build',
			    'chore',
			    'ci',
			    'docs',
			    'feat',
			    'fix',
			    'perf',
			    'refactor',
			    'revert',
			    'style',
			    'test'
            ]
        ],
    }
};

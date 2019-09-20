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
                'build', // 构建
			    'chore', // 构建过程或辅助工具的变动
			    'ci', // 增加持续集成
			    'docs', // 文档（documentation）
			    'feat', // 新功能（feature）
			    'fix', // 修补bug
			    'perf', // 性能, 体验优化
			    'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
			    'revert', // 回滚
			    'style', // 格式（不影响代码运行的变动）
                'test', // 增加测试
                'upgrade' // 第三方库升级
            ]
        ],
    }
};

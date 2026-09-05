module.exports = {
  displayName: 'jobber-auth',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  transformIgnorePatterns: ['node_modules/(?!(@nestjs/jwt)/)'],
  coverageDirectory: '../../coverage/apps/jobber-auth'
};

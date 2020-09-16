const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl : 'https://sonarcloud.io',
        token : process.env.SONAR_TOKEN,
        options: {
            'sonar.organization': 'navit',
            'sonar.projectKey': 'navikt_helse-arbeidsgiver-felles-frontend',
            'sonar.sources': 'src',
            'sonar.exlusions': 'src/index.ts,src/app.tsx',
            'sonar.javascript.lcov.reportPaths': './coverage/lcov.info',
            'sonar.test.inclusions': 'src/**/*.test.ts,src/**/*.test.tsx',
        }
    },
    () => process.exit()
)
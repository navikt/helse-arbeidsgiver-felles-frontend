const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl : 'https://sonarcloud.io',
        token : process.env.SONAR_TOKEN,
        options: {
            'sonar.organization': 'navit',
            'sonar.projectKey': 'navikt_helse-arbeidsgiver-felles-frontend',
            'sonar.sources': 'src',
            'sonar.exlusions': 'src/index.tsx,src/app.tsx',
            'sonar.javascript.lcov.reportPaths': './coverage/lcov.info',
            'sonar.test.inclusions': 'src/**/*.test.ts,src/**/*.test.tsx',
            'sonar.coverage.exclusions': 'src/**/*.test.tsx,src/index.tsx,src/app.tsx'
        }
    },
    () => process.exit()
)
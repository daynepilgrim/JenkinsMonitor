
module.exports = {

    protocol: 'http',
    username: 'NAME',
    token: 'TOKEN',
    host: 'HOST',

    request: {
        defaults: {
            rejectUnauthorized: false
        }
    },

    jobs: [
        {
            id: 'lastBuild',
            displayName: 'FanClub Staging',
            eventName: 'build',
            cronInterval: '*/5 * * * * *',
            apiMethod: 'last_build_info',

            displayArguments: {
                title_isEnabled: true,
                buildNumber_isEnabled: true,
                timeAgo_isEnabled: true,
                branch_isEnabled: true,
                displayDuration_isEnabled: true
            },

            parameterizedAttributes: [
                {
                    attributeName: 'branch',
                    jenkinsParameterName: 'BRANCH_TO_BUILD'
                }
            ]
        },
        // {
        //     id: 'lastBuild',
        //     displayName: 'Static Code Analysis',
        //     eventName: 'static_code_analysis',
        //     cronInterval: '*/5 * * * * *',
        //     apiMethod: 'last_build_info',

        //     displayArguments: {
        //         title_isEnabled: true,
        //         buildNumber_isEnabled: false,
        //         timeAgo_isEnabled: true,
        //         branch_isEnabled: false,
        //         displayDuration_isEnabled: true
        //     }
        // },
        // {
        //     id: 'lastBuild',
        //     displayName: 'Install Latest',
        //     eventName: 'install_latest',
        //     cronInterval: '*/5 * * * * *',
        //     apiMethod: 'last_build_info',

        //     externalBuildNumber: {
        //         url: 'http://latest.your_application_url.host/build.txt'
        //     },

        //     displayArguments: {
        //         title_isEnabled: true,
        //         buildNumber_isEnabled: true,
        //         timeAgo_isEnabled: true,
        //         branch_isEnabled: false,
        //         displayDuration_isEnabled: true
        //     }
        // }
    ]
}
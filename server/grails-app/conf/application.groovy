

// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'asti.recruitment.AdminAccount'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'asti.recruitment.AdminAccountRole'
grails.plugin.springsecurity.authority.className = 'asti.recruitment.Role'

grails.plugin.springsecurity.securityConfigType = "Annotation"
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
    [pattern: '/',               access: ['permitAll']],
    [pattern: '/error',          access: ['permitAll']],
    [pattern: '/index',          access: ['permitAll']],
    [pattern: '/index.gsp',      access: ['permitAll']],
    [pattern: '/shutdown',       access: ['permitAll']],
    [pattern: '/assets/**',      access: ['permitAll']],
    [pattern: '/**/js/**',       access: ['permitAll']],
    [pattern: '/**/css/**',      access: ['permitAll']],
    [pattern: '/**/images/**',   access: ['permitAll']],
    [pattern: '/**/favicon.ico', access: ['permitAll']],
    [pattern: '/login/auth',     access: ['permitAll']],
    [pattern: '/api/logout',     access: ['isFullyAuthenticated()']],
    [pattern: '/**',             access: ['isFullyAuthenticated()']],

    [pattern: '/api/applicant/**', access: ['ROLE_ADMIN']]
]

grails.plugin.springsecurity.filterChain.chainMap = [
    [
        pattern: '/api/**',
        filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter'
    ],
    [pattern: '/**', filters:'JOINED_FILTERS,-restTokenValidationFilter,-restExceptionTranslationFilter']
]

grails.plugin.springsecurity.logout.postOnly = false
grails.plugin.springsecurity.rest.login.endpointUrl = '/login/auth'
grails.plugin.springsecurity.rest.logout.endpointUrl = '/api/logout'
grails.plugin.springsecurity.rest.login.useJsonCredentials = true
grails.plugin.springsecurity.rest.token.validation.useBearerToken = false
grails.plugin.springsecurity.rest.token.storage.useGorm = true
grails.plugin.springsecurity.rest.token.storage.gorm.tokenDomainClassName = 'asti.recruitment.AuthenticationToken'
// grails.plugin.springsecurity.rest.token.validation.headerName = 'X-Auth-Token'
/*grails.plugin.springsecurity.rest.token.storage.memcached.hosts = 'localhost:11211'
grails.plugin.springsecurity.rest.token.storage.memcached.username = ''
grails.plugin.springsecurity.rest.token.storage.memcached.password = ''
grails.plugin.springsecurity.rest.token.storage.memcached.expiration = 86400*/
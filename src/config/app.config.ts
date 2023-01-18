export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodbDocker: process.env.MONGODB_DOCKER,
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaulLimit: +process.env.DEFAULT_LIMIT || 7,
})
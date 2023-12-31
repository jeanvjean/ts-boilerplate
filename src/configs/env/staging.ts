import 'dotenv/config';

const {
    BOILER_STAGING_PORT,
    BOILER_NODE_ENV,
    DATABASE_STAGING_STRING,
    BOILER_STAGING_PAPERTRAIL_HOST,
    BOILER_STAGING_PAPERTRAIL_PORT
} = process.env;

export default {
    PORT: BOILER_STAGING_PORT,
    NODE_ENV: BOILER_NODE_ENV,
    DATABASE_STRING: DATABASE_STAGING_STRING,
    PAPERTRAIL_HOST: BOILER_STAGING_PAPERTRAIL_HOST,
    PAPERTRAIL_PORT: BOILER_STAGING_PAPERTRAIL_PORT
}
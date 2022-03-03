switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod')({env: 'production'});
        break;
    case 'analyze':
        module.exports = require('./config/webpack.analyze')({env: 'development'});
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.dev')({env: 'development'});
}

import morgan from 'morgan';
import colors from 'colors';

export const loggerMiddleware = morgan(function (tokens, req, res) {
  return [
    '🌍',
    colors.bgBlack.bold(` REQUEST `),
    tokens.method(req, res) || '',
    colors.green.bold(tokens.status(req, res) || ''),
    colors.bgGreen.bold(tokens.url(req, res) || ''),
    colors.green.bold((tokens['response-time'](req, res) || '') + ' ms'),
    colors.magenta.bold('@ ' + (tokens.date(req, res) || '')),
    // "\n",
    // colors.green("from " + tokens["remote-addr"](req, res) || ""),
    // colors.yellow.bold("from " + (tokens.referrer(req, res) || "")),
    // colors.blue(tokens["user-agent"](req, res) || ""),
  ].join(' ');
});

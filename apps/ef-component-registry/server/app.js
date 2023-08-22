const express = require('@financial-times/n-express');
const registerCrashHandler = require('@dotcom-reliability-kit/crash-handler');

registerCrashHandler();

const isProduction = process.env.NODE_ENV === 'production';

const app = (module.exports = express({
	appName: 'ef-component-registry',
	systemCode: 'ef-component-registry',
	graphiteName: 'ef-component-registry',
	name: 'ef-component-registry',
	withFlags: true,
	withConsent: true
}));

app.use((req, res, next) => {
	res.set('Cache-Control', res.FT_NO_CACHE);
	next();
});

app.use((req, res, next) => {
  res.json({"hello": "world"})
});

app.listen(process.env.PORT || 5555);

module.exports = app;

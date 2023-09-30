'use strict';

exports.useTranslation = () => ({
  t: (key, data = {}) => `Translated[${key}](${JSON.stringify(data)})`,
});



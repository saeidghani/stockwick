import React, { useState } from 'react';

import tfcHtml from 'chartiq/plugins/tfc/tfcHtml';
// eslint-disable-next-line import/no-named-default
import { default as ActiveTraderWorkstation } from './ActiveTraderWorkstation';

import { getCustomConfig } from './resources'; // ChartIQ library resources
import './ActiveTraderWorkstation.css';

// eslint-disable-next-line react/prop-types
export default function ({ chartInitialized, config, symbol, chartId }) {
  const [configObj] = useState(config || getCustomConfig({ symbol, chartId }));

  return (
    <ActiveTraderWorkstation
      config={configObj}
      chartInitialized={chartInitialized}
      tfcTemplate={tfcHtml}
    />
  );
}

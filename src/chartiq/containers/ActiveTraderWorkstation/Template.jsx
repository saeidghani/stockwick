import React from 'react';

export default function () {
  return (
    <>
      <div className="ciq-nav full-screen-hide">
        <div className="sidenav-toggle ciq-toggles">
          <cq-toggle
            class="ciq-sidenav"
            cq-member="sidenav"
            cq-toggles="sidenavOn,sidenavOff"
            cq-toggle-classes="active,"
            keyboard-navigation="false"
          >
            <span />
            <cq-tooltip>More</cq-tooltip>
          </cq-toggle>
        </div>

        <cq-menu class="ciq-search">
          <cq-lookup cq-keystroke-claim cq-keystroke-default cq-uppercase />
        </cq-menu>

        <cq-side-nav cq-on="sidenavOn">
          <div className="icon-toggles ciq-toggles">
            <cq-toggle class="ciq-draw" cq-member="drawing">
              <span />
              <cq-tooltip>Draw</cq-tooltip>
            </cq-toggle>
            <cq-info-toggle-dropdown>
              <cq-toggle class="ciq-CH" cq-member="crosshair">
                <span />
                <cq-tooltip>Crosshair (Alt + \)</cq-tooltip>
              </cq-toggle>

              <cq-menu class="ciq-menu toggle-options collapse">
                <span />
                <cq-menu-dropdown>
                  <cq-item cq-member="crosshair">
                    Hide Heads-Up Display
                    <span className="ciq-radio">
                      <span />
                    </span>
                  </cq-item>
                  <cq-item cq-member="headsUp-static">
                    Show Heads-Up Display
                    <span className="ciq-radio">
                      <span />
                    </span>
                  </cq-item>
                </cq-menu-dropdown>
              </cq-menu>
            </cq-info-toggle-dropdown>

            <cq-info-toggle-dropdown>
              <cq-toggle class="ciq-HU" cq-member="headsUp">
                <span />
                <cq-tooltip>Info</cq-tooltip>
              </cq-toggle>

              <cq-menu class="ciq-menu toggle-options collapse tooltip-ui">
                <span />
                <cq-menu-dropdown>
                  <cq-item cq-member="headsUp-dynamic">
                    Show Dynamic Callout
                    <span className="ciq-radio">
                      <span />
                    </span>
                  </cq-item>
                  <cq-item cq-member="headsUp-floating">
                    Show Tooltip
                    <span className="ciq-radio">
                      <span />
                    </span>
                  </cq-item>
                </cq-menu-dropdown>
              </cq-menu>
            </cq-info-toggle-dropdown>

            <cq-toggle class="ciq-DT tableview-ui" cq-member="tableView">
              <span />
              <cq-tooltip>Table View</cq-tooltip>
            </cq-toggle>
          </div>
        </cq-side-nav>

        <div className="ciq-menu-section">
          <div className="ciq-dropdowns">
            <cq-menu class="ciq-menu ciq-period">
              <span>
                <cq-clickable stxbind="Layout.periodicity">1D</cq-clickable>
              </span>
              <cq-menu-dropdown>
                <cq-menu-container cq-name="menuPeriodicity" />
              </cq-menu-dropdown>
            </cq-menu>

            <cq-menu class="ciq-menu ciq-views collapse">
              <span>Views</span>
              <cq-menu-dropdown>
                <cq-views />
              </cq-menu-dropdown>
            </cq-menu>

            <cq-menu class="ciq-menu ciq-display collapse">
              <span>Display</span>
              <cq-menu-dropdown>
                <cq-menu-dropdown-section class="chart-types">
                  <cq-heading>Chart Style</cq-heading>
                  <cq-menu-container cq-name="menuChartStyle" />
                </cq-menu-dropdown-section>
                <cq-menu-dropdown-section class="chart-aggregations">
                  <cq-menu-container cq-name="menuChartAggregates" />
                </cq-menu-dropdown-section>
              </cq-menu-dropdown>
            </cq-menu>

            <cq-menu class="ciq-menu ciq-studies collapse" cq-focus="input">
              <span>Studies</span>
              <cq-menu-dropdown>
                <cq-study-legend cq-no-close>
                  <cq-section-dynamic>
                    <cq-heading>Current Studies</cq-heading>
                    <cq-study-legend-content>
                      <template cq-study-legend="true">
                        <cq-item>
                          <cq-label class="click-to-edit" />
                          <div className="ciq-icon ciq-close" />
                        </cq-item>
                      </template>
                    </cq-study-legend-content>
                    <cq-placeholder>
                      <div stxtap="Layout.clearStudies()" className="ciq-btn sm">
                        Clear All
                      </div>
                    </cq-placeholder>
                  </cq-section-dynamic>
                </cq-study-legend>
                <div className="scriptiq-ui">
                  <cq-heading>ScriptIQ</cq-heading>
                  <cq-item>
                    <cq-clickable cq-selector="cq-scriptiq-editor" cq-method="open">
                      New Script
                    </cq-clickable>
                  </cq-item>
                  <cq-scriptiq-menu />
                  <cq-separator />
                </div>
                <cq-heading cq-filter="" cq-filter-min="-1">
                  Studies
                </cq-heading>
                <cq-studies />
              </cq-menu-dropdown>
            </cq-menu>

            <cq-menu class="ciq-menu stx-markers collapse">
              <span>Events</span>
              <cq-menu-dropdown>
                <cq-heading>Chart Events</cq-heading>
                <cq-item stxtap="Markers.showMarkers('square')">
                  Simple Square
                  <span className="ciq-radio">
                    <span />
                  </span>
                </cq-item>
                <cq-item stxtap="Markers.showMarkers('circle')">
                  Simple Circle
                  <span className="ciq-radio">
                    <span />
                  </span>
                </cq-item>
                <cq-item stxtap="Markers.showMarkers('callout')">
                  Callouts
                  <span className="ciq-radio">
                    <span />
                  </span>
                </cq-item>
                <cq-item class="ta_markers-ui" stxtap="Markers.showMarkers('trade')">
                  Trade
                  <span className="ciq-radio">
                    <span />
                  </span>
                </cq-item>
                <cq-item class="video_markers-ui" stxtap="Markers.showMarkers('video')">
                  Video
                  <span className="ciq-radio">
                    <span />
                  </span>
                </cq-item>
                <cq-separator />
                <cq-item stxtap="Markers.showMarkers()" class="ciq-active">
                  None
                  <span className="ciq-radio">
                    <span />
                  </span>
                </cq-item>
                <div className="timespanevent-ui">
                  <cq-separator />
                  <cq-heading>Panel Events</cq-heading>
                  <cq-item
                    class="span-event"
                    stxtap="TimeSpanEvent.showMarkers('Order')"
                    cq-no-close
                  >
                    Order
                    <span className="ciq-checkbox ciq-active">
                      <span />
                    </span>
                  </cq-item>
                  <cq-item class="span-event" stxtap="TimeSpanEvent.showMarkers('CEO')" cq-no-close>
                    CEO
                    <span className="ciq-checkbox ciq-active">
                      <span />
                    </span>
                  </cq-item>
                  <cq-item
                    class="span-event"
                    stxtap="TimeSpanEvent.showMarkers('News')"
                    cq-no-close
                  >
                    News
                    <span className="ciq-checkbox ciq-active">
                      <span />
                    </span>
                  </cq-item>
                </div>
              </cq-menu-dropdown>
            </cq-menu>

            <cq-menu class="ciq-menu ciq-preferences collapse">
              <span />
              <cq-menu-dropdown>
                <cq-menu-dropdown-section class="chart-preferences">
                  <cq-heading>Chart Preferences</cq-heading>
                  <cq-menu-container cq-name="menuChartPreferences" />
                  <cq-separator />
                </cq-menu-dropdown-section>
                <cq-menu-dropdown-section class="y-axis-preferences">
                  <cq-heading>Y-Axis Preferences</cq-heading>
                  <cq-menu-container cq-name="menuYAxisPreferences" />
                  <cq-separator />
                </cq-menu-dropdown-section>
                <cq-menu-dropdown-section class="chart-theme">
                  <cq-heading>Themes</cq-heading>
                  <cq-themes />
                  <cq-separator />
                </cq-menu-dropdown-section>
                <cq-menu-dropdown-section class="chart-locale">
                  <cq-heading>Locale</cq-heading>
                  <cq-item>
                    <cq-clickable cq-selector="cq-timezone-dialog" cq-method="open">
                      Change Timezone
                    </cq-clickable>
                  </cq-item>
                  <cq-item stxsetget="Layout.Language()">
                    <cq-flag />
                    <cq-language-name>Change Language</cq-language-name>
                  </cq-item>
                </cq-menu-dropdown-section>
                <cq-menu-dropdown-section className="shortcuts-ui">
                  <cq-separator />
                  <cq-heading>Shortcuts</cq-heading>
                  <cq-item stxtap="Layout.showShortcuts(true)">Shortcuts / Hotkeys</cq-item>
                </cq-menu-dropdown-section>
              </cq-menu-dropdown>
            </cq-menu>
          </div>

          <div className="trade-toggles ciq-toggles">
            <cq-toggle class="tfc-ui sidebar stx-trade" cq-member="tfc">
              <span />
              <cq-tooltip>Trade</cq-tooltip>
            </cq-toggle>
            <cq-toggle
              class="analystviews-ui stx-analystviews tc-ui stx-tradingcentral"
              cq-member="analystviews"
            >
              <span />
              <cq-tooltip>Analyst Views</cq-tooltip>
            </cq-toggle>
            <cq-toggle
              class="technicalinsights-ui stx-technicalinsights recognia-ui stx-recognia"
              cq-member="technicalinsights"
            >
              <span />
              <cq-tooltip>Technical Insights</cq-tooltip>
            </cq-toggle>
          </div>
        </div>
      </div>

      <cq-scriptiq class="scriptiq-ui" />

      <cq-analystviews
        class="analystviews-ui"
        token="eZOrIVNU3KR1f0cf6PTUYg=="
        partner="1000"
        disabled
      />

      <cq-technicalinsights uid="" lang="en" disabled />

      <div className="ciq-chart-area">
        <div chartarea="true">
          <div id="flexContainer">
            <div id="cryptoGroup1">
              <div id="tradeHistoryContainer">
                <cq-tradehistory cq-active>
                  <cq-tradehistory-table>
                    <cq-scroll cq-no-claim>
                      <cq-tradehistory-body maxrows="500" />
                    </cq-scroll>
                    <div pie-chart="true">
                      <span>Money Flow</span>
                      <div />
                    </div>
                  </cq-tradehistory-table>
                  <template>
                    <cq-item>
                      <div col="time">Time</div>
                      <div col="qty">Qty</div>
                      <div col="price">Price</div>
                      <div col="amount">Amount</div>
                    </cq-item>
                  </template>
                </cq-tradehistory>
              </div>
            </div>
            <div id="cryptoGroup2">
              <div id="marketDepthBookmark" />
              <div id="orderBookContainer">
                <cq-orderbook cq-active>
                  <cq-orderbook-table reverse>
                    <cq-scroll cq-no-claim>
                      <cq-orderbook-bids />
                    </cq-scroll>
                  </cq-orderbook-table>
                  <cq-orderbook-table>
                    <cq-scroll cq-no-claim>
                      <cq-orderbook-asks />
                    </cq-scroll>
                  </cq-orderbook-table>
                  <template>
                    <cq-item cq-size-shading>
                      <div col="price">Price</div>
                      <div col="size">Size</div>
                      <div col="amount">Amount</div>
                    </cq-item>
                  </template>
                </cq-orderbook>
              </div>
            </div>

            <div id="mainChartGroup" packager-append-child="div.ciq-chart-area div.ciq-chart">
              <div className="ciq-chart">
                <cq-message-toaster
                  defaultDisplayTime="10"
                  defaultTransition="slide"
                  defaultPosition="top"
                />
                <cq-palette-dock>
                  <div className="palette-dock-container">
                    <cq-drawing-palette
                      class="palette-drawing grid palette-hide"
                      docked="true"
                      orientation="vertical"
                      min-height="300"
                      cq-drawing-edit="none"
                    />
                    <cq-drawing-settings
                      class="palette-settings"
                      docked="true"
                      hide="true"
                      orientation="horizontal"
                      min-height="40"
                      cq-drawing-edit="none"
                    />
                  </div>
                </cq-palette-dock>

                <div className="chartContainer">
                  <cq-chart-title cq-marker cq-browser-tab />

                  <cq-comparison-lookup />
                  <cq-chart-legend />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <cq-attribution />

      <div className="ciq-footer full-screen-hide">
        <cq-share-button />
        <div
          className="shortcuts-ui ciq-shortcut-button"
          stxtap="Layout.showShortcuts()"
          title="Toggle shortcut legend"
        />
        <cq-show-range />
      </div>

      <div className="cq-context-dialog">
        <cq-dialog>
          <cq-drawing-context />
        </cq-dialog>

        <cq-dialog>
          <cq-study-context />
        </cq-dialog>
      </div>

      <cq-side-panel />
    </>
  );
}
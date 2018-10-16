import React, { Component } from "react";
import styled from "styled-components";

import { Aa } from "../components/Aa";

const Wrapper = styled.div`
  padding: 0 16px;
  color: black;
  background: white;
  top: 0;
  bottom: 0;
  padding: 1em;
`;

class MetricsPage extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Metrics</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>AKA</th>
            <th>Units</th>
            <th>Use case</th>
            <th>Environment</th>
            <th>Description</th>
            <th>References</th>
          </tr>
          <tr>
            <td>Page weight</td>
            <td>Bundle size</td>
            <td>(kb)</td>
            <td>Debugging</td>
            <td>Audited</td>
            <td />
            <td>
              <ul>
                <li>
                  <Aa>https://github.com/siddharthkp/bundlesize</Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>DOMContentLoaded event</td>
            <td>DOMContentLoad, Content loaded, DOM load</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>Includes downloading and parsing html</li>
                <li>Includes synchronous scripts</li>
                <li>Does not include stylesheets, images, subframes</li>
              </ul>
            </td>
            <td />
          </tr>
          <tr>
            <td>Load event</td>
            <td>window.onload</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>Fired after DOMContentLoaded</li>
                <li>Waits for everything</li>
              </ul>
            </td>
            <td />
          </tr>
          <tr>
            <td>Above-the-fold render time</td>
            <td>ATF</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Audited</td>
            <td>
              <ul>
                <li>
                  Measures the time taken for everything in the main window to
                  be loaded.
                </li>
                <li>
                  Only really measurable with a recording of the page load.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>https://www.webpagetest.org/</Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Time to interactive</td>
            <td>TTI, Consistently interactive</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>
                  Measures the time taken for the page to reach an "interactive"
                  state, where the user can perform actions.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>https://github.com/GoogleChromeLabs/tti-polyfill</Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>First CPU idle</td>
            <td>First interactive</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>The first CPU idle</li>
                <li>
                  When most (not necessarily all) items on the page are
                  minimally interactive.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>
                    https://developers.google.com/web/tools/lighthouse/audits/first-cpu-idle
                  </Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>First input delay</td>
            <td>FID</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>
                  The delay in response for the first interaction a user does on
                  a given page (if the user interacts at all).
                </li>
                <li>
                  Focus on the 99th percentile – lots of variation expected
                  depending on when a user actually interacts, but the 99th
                  percentile is representative of the worst experiences users
                  are having
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>
                    https://developers.google.com/web/updates/2018/05/first-input-delay
                  </Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>First paint</td>
            <td>FP</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>
                  The time taken for the browser to render anything different
                  from what the loading page would look like.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>
                    https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint
                  </Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>First contentful paint</td>
            <td>FCP</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>
                  The time taken for the browser to render any element to the
                  page. This may include text or other elements.
                </li>
                <li>
                  Can be misleading if you immediately render a loading
                  indicator
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>
                    https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint
                  </Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>First meaningful paint</td>
            <td>FMP</td>
            <td>(s)</td>
            <td>Reporting</td>
            <td>Tracked</td>
            <td>
              <ul>
                <li>
                  The time taken for the browser to render meaningful data to
                  the screen
                </li>
                <li>
                  More accurate but cannot be tracked in an automated way – it
                  depends on the application.
                </li>
                <li>
                  A{" "}
                  <a href="https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view#">
                    layout based approach
                  </a>{" "}
                  to measuring this is being implemented.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>
                    https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint
                  </Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Apdex</td>
            <td />
            <td>(%)</td>
            <td>Reporting</td>
            <td>Aggregated</td>
            <td>
              <ul>
                <li>
                  A "meta metric" – it is a way of describing whether what % of
                  page load times are "satisfactory"
                </li>
                <li>Plug in your own concept of "page load time"</li>
                <li>
                  Plug in your own concept of "satisfactory" page load time
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>
                    https://docs.newrelic.com/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction
                  </Aa>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Speed index</td>
            <td />
            <td>(points)</td>
            <td>Reporting</td>
            <td>Audited</td>
            <td>
              <ul>
                <li>
                  Measures the percentage of the page that has loaded over time.
                </li>
                <li>Captures the concept of a page loading progressively.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <Aa>
                    https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index
                  </Aa>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </Wrapper>
    );
  }
}

export default MetricsPage;

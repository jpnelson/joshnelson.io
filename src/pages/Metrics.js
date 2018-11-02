import React, { Component } from "react";
import styled from "styled-components";

import { Aa } from "../components/Aa";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
        <Table style={{ borderSpacing: "20px" }}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>AKA</Th>
              <Th>Units</Th>
              <Th>Use case</Th>
              <Th>Environment</Th>
              <Th>Description</Th>
              <Th>References</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Page weight</Td>
              <Td>Bundle size</Td>
              <Td>(kb)</Td>
              <Td>Debugging</Td>
              <Td>Audited</Td>
              <td />
              <Td>
                <ul>
                  <li>
                    <Aa>https://github.com/siddharthkp/bundlesize</Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>DOMContentLoaded event</Td>
              <Td>DOMContentLoad, Content loaded, DOM load</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
                <ul>
                  <li>Includes downloading and parsing html</li>
                  <li>Includes synchronous scripts</li>
                  <li>Does not include stylesheets, images, subframes</li>
                </ul>
              </Td>
              <td />
            </Tr>
            <Tr>
              <Td>First byte</Td>
              <Td>Time to first byte, TTFB</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
                <ul>
                  <li>
                    The time that it takes for the first byte to be received by
                    the browser.
                  </li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>Load event</Td>
              <Td>window.onload, onLoad</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
                <ul>
                  <li>Fired after DOMContentLoaded</li>
                  <li>Waits for everything, including deferred assets</li>
                </ul>
              </Td>
              <td />
            </Tr>
            <Tr>
              <Td>Above-the-fold render time</Td>
              <Td>ATF</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Audited</Td>
              <Td>
                <ul>
                  <li>
                    Measures the time taken for everything in the main window to
                    be loaded.
                  </li>
                  <li>
                    Only really measurable with a recording of the page load.
                  </li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>https://www.webpagetest.org/</Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>Time to interactive</Td>
              <Td>TTI, Consistently interactive</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
                <ul>
                  <li>
                    Measures the time taken for the page to reach an
                    "interactive" state, where the user can perform actions.
                  </li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>https://github.com/GoogleChromeLabs/tti-polyfill</Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>First CPU idle</Td>
              <Td>First interactive</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
                <ul>
                  <li>The first CPU idle</li>
                  <li>
                    When most (not necessarily all) items on the page are
                    minimally interactive.
                  </li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://developers.google.com/web/tools/lighthouse/audits/first-cpu-idle
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>First input delay</Td>
              <Td>FID</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
                <ul>
                  <li>
                    The delay in response for the first interaction a user does
                    on a given page (if the user interacts at all).
                  </li>
                  <li>
                    Focus on the 99th percentile – lots of variation expected
                    depending on when a user actually interacts, but the 99th
                    percentile is representative of the worst experiences users
                    are having
                  </li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://developers.google.com/web/updates/2018/05/first-input-delay
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>First paint</Td>
              <Td>FP</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
                <ul>
                  <li>
                    The time taken for the browser to render anything different
                    from what the loading page would look like.
                  </li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>First contentful paint</Td>
              <Td>FCP</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
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
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>First meaningful paint</Td>
              <Td>FMP</Td>
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Tracked</Td>
              <Td>
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
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>Apdex</Td>
              <td />
              <Td>(%)</Td>
              <Td>Reporting</Td>
              <Td>Aggregated</Td>
              <Td>
                <ul>
                  <li>
                    A "meta metric" – it is a way of describing whether what %
                    of page load times are "satisfactory"
                  </li>
                  <li>Plug in your own concept of "page load time"</li>
                  <li>
                    Plug in your own concept of "satisfactory" page load time
                  </li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://docs.newrelic.com/docs/apm/new-relic-apm/apdex/apdex-measure-user-satisfaction
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>Speed index</Td>
              <td />
              <Td>(points)</Td>
              <Td>Reporting</Td>
              <Td>Audited</Td>
              <Td>
                <ul>
                  <li>
                    Measures the percentage of the page that has loaded over
                    time.
                  </li>
                  <li>Captures the concept of a page loading progressively.</li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Td>Estimated input latency</Td>
              <td />
              <Td>(s)</Td>
              <Td>Reporting</Td>
              <Td>Audited</Td>
              <Td>
                <ul>
                  <li>
                    Measures the percentage of the page that has loaded over
                    time.
                  </li>
                  <li>Captures the concept of a page loading progressively.</li>
                </ul>
              </Td>
              <Td>
                <ul>
                  <li>
                    <Aa>
                      https://developers.google.com/web/tools/lighthouse/audits/estimated-input-latency
                    </Aa>
                  </li>
                </ul>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Wrapper>
    );
  }
}

export default MetricsPage;

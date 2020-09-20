import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div id="wrapper">
                    {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                        let GetSectionComponent = components[_.get(section, 'component')];
                        return (
                            <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} page={this.props.pageContext} />
                        )
                    })}

<script type="text/javascript" src="//cdn.wishpond.net/connect.js?merchantId=1503531&writeKey=6d4d2766e318" async></script><div class="wishpond-campaign" data-wishpond-id="2511669" data-wishpond-href="https://embedded.wishpondpages.com/lp/2511669/"></div>
                </div>
            </Layout>
        );
    }
}

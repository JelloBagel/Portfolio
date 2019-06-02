import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class PageHelmet extends React.PureComponent {
    processedMetas() {
        const { metas } = this.props;

        return (
            metas &&
            metas.map(meta => {
                return (
                    <meta
                        key={meta.name}
                        name={meta.name}
                        content={meta.content}
                    />
                );
            })
        );
    }

    processedLinks() {
        const { links } = this.props;

        return (
            links &&
            links.map(link => {
                return (
                    <link
                        key={link.name}
                        name={link.name}
                        content={link.content}
                    />
                );
            })
        );
    }

    render() {
        const { title } = this.props;
        return (
            <Helmet>
                <title>{title}</title>
                {this.processedMetas()}
                {this.processedLinks()}
            </Helmet>
        );
    }
}

PageHelmet.propTypes = {
    metas: PropTypes.array,
    links: PropTypes.array,
    title: PropTypes.string,
};

export default PageHelmet;

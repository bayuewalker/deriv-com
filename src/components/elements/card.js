import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text, Header } from './typography.js'
import device from 'themes/device'

export const CardStyle = css`
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
`

const CardContent = styled(Text)`
    margin-top: 0.8rem;

    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
        margin-top: 2.65rem;
    }
`
const CardWrapper = styled.article`
    ${CardStyle}
    min-height: ${props => (props.min_height ? props.min_height : '35.6rem')};
    width: ${props => (props.width ? props.width : '32.8rem')};
    padding: 4rem;

    div {
        margin-top: 4rem;
        
        @media ${device.tabletL} {
            margin-top: 2.7rem;

            ${Header} {
                font-size:3rem;
            }
        }
    }

    @media ${device.tabletL} {
        padding: 3rem;
        padding-right: 2rem;
        margin-top: 1.77rem;
        margin-right: 0;
    }

`

const CardChildrenWrapper = styled.article`
    ${CardStyle}
    width: ${props => (props.width ? props.width : '50.2rem')};
    height: 100%;
    min-height: 26.8rem;
    padding: 2.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Header} {
        text-align: center;

    }
    p {
        font-size: var(--text-size-s);

        a {
            color: var(--color-red);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    svg {
        margin: 0.2rem 0 0.8rem 0;
    }
`

export const Card = ({ children, Icon, title, content, width, min_height }) => {
    return (
        <CardWrapper width={width} min_height={min_height}>
            {!children && (
                <>
                    <Icon />
                    <div>
                        <Header as="h4" weight="500">
                            {title}
                        </Header>
                        {Array.isArray(content) ? (
                            content.map((text, index) => (
                                <CardContent key={index}>{text}</CardContent>
                            ))
                        ) : (
                            <CardContent>{content}</CardContent>
                        )}
                    </div>
                </>
            )}
            {children && children}
        </CardWrapper>
    )
}

export const CardChildren = ({
    Icon,
    title,
    width,
    children,
    icon_width,
    icon_height,
}) => (
    <CardChildrenWrapper width={width}>
        <Header as="h4" weight="500">{title}</Header>
        <Icon width={icon_width} height={icon_height} />
        {children}
    </CardChildrenWrapper>
)

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    Icon: PropTypes.func,
    min_height: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
}

CardChildren.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    Icon: PropTypes.func,
    icon_height: PropTypes.string,
    icon_width: PropTypes.string,
    title: PropTypes.string,
    width: PropTypes.string,
}

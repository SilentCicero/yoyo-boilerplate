import yo from 'fro-yo';
import styled, { presets } from 'styled-elements';

const presetMap = { xs: 'mobile', sm: 'phablet', md: 'tablet', lg: 'desktop', xl: 'hd' };

export const flex = size => styled.css`
  @media only screen and ${styled.presets[presetMap[size]]} {
    ${props => (props[`${size}-justify`] ? `justify-content: ${props[`${size}-justify`]}` : '')};
    ${props => (props[`${size}-wrap`] ? `flex-wrap: ${props[`${size}-wrap`]}` : '')};
    ${props => (props[`${size}-align`] ? `align-items: ${props[`${size}-align`]}` : '')};
    ${props => (props[`${size}-direction`] ? `flex-direction: ${props[`${size}-direction`]}` : '')};
  }
`;

export const css = styled.css`
  display: flex;

  ${flex('xs')}
  ${flex('sm')}
  ${flex('md')}
  ${flex('lg')}
  ${flex('xl')}
`;

export const Wrapper = styled.div`
  ${css}
`;

export default function Grid(props) {
  return yo`
    <Wrapper props=${props}>
      ${props.children}
    </Wrapper>
  `;
}

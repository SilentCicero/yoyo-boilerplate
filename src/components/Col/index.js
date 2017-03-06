import yo from 'fro-yo';
import styled, { presets } from 'styled-elements';

const presetMap = { xs: 'mobile', sm: 'phablet', md: 'tablet', lg: 'desktop', xl: 'hd' };

export const flex = size => styled.css`
  @media only screen and ${styled.presets[presetMap[size]]} {
    ${props => (props[`${size}-flex`] ? `flex: ${props[`${size}-flex`]}` : '')};
    ${props => (props[`${size}-basis`] ? `flex-basis: ${props[`${size}-basis`]};` : '')}
    ${props => (props[`${size}-align`] ? `align-self: ${props[`${size}-align`]};` : '')}
  }
`;

export const css = styled.css`
  ${flex('xs')}
  ${flex('sm')}
  ${flex('md')}
  ${flex('lg')}
  ${flex('xl')}
`;

export const Wrapper = styled.div`
  ${css}
`;

export default function Col(props) {
  return yo`
    <Wrapper props=${props}>
      ${props.children}
    </Wrapper>
  `;
}

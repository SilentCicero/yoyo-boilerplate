import yo from 'fro-yo';
import styled, { presets } from 'styled-elements';

const presetMap = { xs: 'mobile', sm: 'phablet', md: 'tablet', lg: 'desktop', xl: 'hd' };

const flex = size => styled.css`
  @media only screen and ${styled.presets[presetMap[size]]} {
    ${props => (props[`${size}-top`] ? `margin-top: ${props[`${size}-top`]};` : '')}
    ${props => (props[`${size}-bottom`] ? `margin-bottom: ${props[`${size}-bottom`]};` : '')}
    ${props => (props[`${size}-left`] ? `margin-left: ${props[`${size}-left`]};` : '')}
    ${props => (props[`${size}-right`] ? `margin-right: ${props[`${size}-right`]};` : '')}
    ${props => (props[`${size}`] ? `margin: ${props[`${size}`]};` : '')}
  }
`;

export const css = styled.css`
  ${flex('xs')}
  ${flex('sm')}
  ${flex('md')}
  ${flex('lg')}
  ${flex('xl')}
`;

document.innerHTML =  // eslint-disable-line
`
  <div>

  </div>
`;

const Wrapper = styled.div`
  ${css}
`;

export default function Margin(props) {
  return yo`
    <Wrapper props=${props}>
      ${props.children}
    </Wrapper>
  `;
}

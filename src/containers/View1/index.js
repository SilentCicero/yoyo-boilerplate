import yo from 'fro-yo';
import styled, { css } from 'styled-elements';

import Toggle from 'containers/Toggle';
import { openToggle, closeToggle, toggleToggle } from 'containers/Toggle/actions';

import { connect } from 'store';
import { selectCurrentLocation } from './selectors';
import { changeLocation } from './actions';

const Wrapper = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: ${props => (props.location === '/' ? 'white' : 'yellow')};
  border-radius: 2px;
  border: 2px solid ${props => props.theme.primary};
  padding: 17px;
  pointer: cursor;
`;

const Small = css`
  font-size: ${props => props.size || 12}px;
`;

const NiceHeader = styled.h2`
  ${Small}
  color: #516da2;
`;

function View1(props) {
  return yo`
    <Wrapper>
      <NiceHeader><i>View 1</i></NiceHeader>

      <Toggle name="nickysToggle"><span>Nick</span><span>Cool!</span></Toggle>
      <Toggle name="nickysToggle2">Nick!</Toggle>

      <button onclick=${props.closeToggle('nickysToggle')}>Close!</button>
      <button onclick=${props.openToggle('nickysToggle')}>Open!</button>
      <button onclick=${props.toggleToggle('nickysToggle')}>Toggle!</button>

      <button onclick=${props.closeToggle('nickysToggle2')}>Close!</button>
      <button onclick=${props.openToggle('nickysToggle2')}>Open!</button>
      <button onclick=${props.toggleToggle('nickysToggle2')}>Toggle!</button>

      Username:
      ${(props.params || {}).username}

      Location:
      ${props.location}

      <a href="/orgs">orgs</a>

      <hr />

      <Button location=${props.location} onclick=${props.changeLocation}>
        Base Location
      </Button>
    </Wrapper>
  `;
}

export function mapStateToProps(state) {
  return {
    location: selectCurrentLocation(state),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    changeLocation: () => dispatch(changeLocation('/')),
    openToggle: name => () => dispatch(openToggle(name)),
    closeToggle: name => () => dispatch(closeToggle(name)),
    toggleToggle: name => () => dispatch(toggleToggle(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(View1);

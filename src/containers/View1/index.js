import yo from 'fro-yo';
import styled, { css } from 'styled-elements';

import { connect } from 'store';
import { selectCurrentLocation } from './selectors';
import { changeLocation } from './actions';

const Wrapper = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: #${props => (props.location === '/' ? 'red' : 'yellow')};
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

      Username:
      ${(props.params || {}).username}

      Location:
      ${props.location}

      <a href="/orgs">orgs</a>

      <hr />

      <Button onclick=${props.changeLocation}>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(View1);

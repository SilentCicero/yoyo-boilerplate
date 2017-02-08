import yo from 'yo-yo';
import styled, { css } from 'styled-elements';

import { connect } from 'store';
import { selectCurrentLocation } from './selectors';
import { changeLocation } from './actions';

const button = styled.button`
  background: ${props => props.theme.primary};
  color: #${props => props.theme.something};
  border-radius: 2px;
  border: 2px solid ${props => props.theme.primary};
  padding: 17px;
  pointer: cursor;
`;

const small = css`
  font-size: ${props => props.size}px;
`;

const NiceHeader = styled.h2`
  ${small}
  color: #516da2;
`;

export function View1(params) {
  return yo`
    <div>
      ${NiceHeader('View 1')}

      Username:
      ${params.username}

      Location:
      ${this.props.location}

      <a href="/orgs">orgs</a>

      <hr />

      ${button({ onclick: this.props.changeLocation }, this.props)('Base Location')}
    </div>
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

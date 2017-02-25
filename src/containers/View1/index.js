import yo from 'fro-yo';
import styled, { css } from 'styled-elements';

import Meta from 'components/Meta';
import Grid from 'components/Grid';
import Col from 'components/Col';
import Toggle from 'containers/Toggle';
import { openToggle, closeToggle, toggleToggle } from 'containers/Toggle/actions';

import { selectInputValue, selectForm } from 'containers/Forms/selectors';
import { Input, Textarea, Select, Checkbox } from 'containers/Forms';

import { connect } from 'store';
import { selectCurrentLocation, selectUsername } from './selectors';
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

  @media (min-width: 400px) {
    color: lightblue;
  }
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
      <Meta title=${`View 1 | ${props.form.email}`}></Meta>

      <NiceHeader><i>View 1</i></NiceHeader>

      <Input id='email' type='text' value=${props.form.email}></Input>

      <Textarea id='description' value=${props.form.description}></Textarea>

      <Select id='favoriteDrink' autoselect=1>
        <option value='organe' selected>Orange Juice</option>
        <option value='lemon'>Lemon Aid</option>
        <option value='pineapple'>Pineapple Juice</option>
      </Select>

      <Input type='checkbox' id='somethingGood' ${props.form.somethingGood ? 'checked' : ''}></Checkbox>

      <h4>Selected Email</h4>
      ${props.form.email === 'nick@dodson.com' ? 'Bad email' : props.form.email}

      <Grid justify='center' align='center'>
        <Col sm-width='50%'>
          <Toggle name="nickysToggle"><span>Nick</span><span>Cool!</span></Toggle>
          <button onclick=${props.closeToggle('nickysToggle')}>Close!</button>
          <button onclick=${props.openToggle('nickysToggle')}>Open!</button>
          <button onclick=${props.toggleToggle('nickysToggle')}>Toggle!</button>
        </Col>

        <Col>
          <Toggle name="nickysToggle2">Nick!</Toggle>
          <button onclick=${props.closeToggle('nickysToggle2')}>Close!</button>
          <button onclick=${props.openToggle('nickysToggle2')}>Open!</button>
          <button onclick=${props.toggleToggle('nickysToggle2')}>Toggle!</button>
        </Col>

        <Col>
          Username:
          <br />
          ${selectUsername(props)}
        </Col>

        <Col>
          Location: <br />
          ${props.location}
        </Col>
      </Grid>

      <hr />

      <a href="/orgs">orgs</a>

      <Button location=${props.location} onclick=${props.changeLocation}>
        Base Location
      </Button>
    </Wrapper>
  `;
}

export function mapStateToProps(state) {
  return {
    location: selectCurrentLocation(state),
    form: selectForm(state, ['email', 'description', 'favoriteDrink', 'somethingGood']),
    email: selectInputValue(state, 'email'),
    description: selectInputValue(state, 'description'),
    favoriteDrink: selectInputValue(state, 'favoriteDrink'),
    somethingGood: selectInputValue(state, 'somethingGood'),
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

import yo from 'fro-yo';
import styled, { css } from 'styled-elements';

import Meta from 'components/Meta';
import Grid from 'components/Grid';
import Col from 'components/Col';
import Button from 'components/Button';
import Alert from 'components/Alert';
import Toggle from 'containers/Toggle';
import Padding from 'components/Padding';

import { openToggle, closeToggle, toggleToggle } from 'containers/Toggle/actions';
import Time from 'containers/Time';

import { selectInputValue, selectInputError } from 'containers/Forms/selectors';
import { Input, Textarea, Select, Checkbox } from 'containers/Forms';
import { maxLength, minLength, required } from 'containers/Forms/validators';

import { connect } from 'store';
import { selectCurrentLocation, selectUsername } from './selectors';
import { changeLocation } from './actions';

const Wrapper = styled.div`
  padding: 10px;
`;

const Small = css`
  font-size: ${props => props.size || 12}px;
`;

const NiceHeader = styled.h2`
  ${Small}
  color: #516da2;
`;

const toggles = [];

for (let i = 0; i < 10000; i += 1) {
  toggles.push(i);
}

function View1(props) {
  return yo`
    <Wrapper>
      <Meta title=${`View 1 | ${props.email}`}></Meta>

      <Padding xs-bottom='50px'>
        <NiceHeader><i>View 1</i></NiceHeader>
      </Padding>

      <Input id='email' form='f1' type='text' value=${props.email} validators=${[minLength(4), maxLength(12)]}></Input>

      <Textarea id='description' form='f1' value=${props.description} validators=${required}></Textarea>

      <Select id='favoriteDrink' form='f1' autoselect=1 validators=${required}>
        <option value='organe' selected>Orange Juice</option>
        <option value='lemon'>Lemon Aid</option>
        <option value='pineapple'>Pineapple Juice</option>
      </Select>

      <Alert>
        <h4>Nicks error</h4>
        <p>Cool, this is great.</p>
      </Alert>

      <Time></Time>

      <Input type='checkbox' form='f1' id='somethingGood' ${props.somethingGood ? 'checked' : ''}></Input>

      ${props.emailError ? yo`<span> Error: ${props.emailError} </span>` : ''}

      <h4>Selected Email</h4>
      ${props.email === 'nick@dodson.com' ? 'Bad email' : props.email}

      ${[0].map(t => yo`
        <div>
          <div>
            <Toggle name="nickysToggle-${t}"><span>Nick</span><span>Cool!</span></Toggle>
            <button onclick=${props.closeToggle(`nickysToggle-${t}`)}>Close!</button>
            <button onclick=${props.openToggle(`nickysToggle-${t}`)}>Open!</button>
            <button onclick=${props.toggleToggle(`nickysToggle-${t}`)}>Toggle!</button>
          </div>
        </div>
      `)}

      <Grid xs-justify='center' xs-align='center'>
        <Col xs-flex=2 sm-flex=3 md-flex=3>
          <Toggle name="nickysToggle"><span>Nick</span><span>Cool!</span></Toggle>
          <button onclick=${props.closeToggle('nickysToggle')}>Close!</button>
          <button onclick=${props.openToggle('nickysToggle')}>Open!</button>
          <button onclick=${props.toggleToggle('nickysToggle')}>Toggle!</button>
        </Col>

        <Col xs-flex=1>
          <Toggle name="nickysToggle2">Nick!</Toggle>
          <button onclick=${props.closeToggle('nickysToggle2')}>Close!</button>
          <button onclick=${props.openToggle('nickysToggle2')}>Open!</button>
          <button onclick=${props.toggleToggle('nickysToggle2')}>Toggle!</button>
        </Col>

        <Col xs-flex=1 xs-basis='25%'>
          Username:
          <br />
          ${selectUsername(props)}
        </Col>

        <Col xs-flex=1>
          Location: <br />
          ${props.location}
        </Col>
      </Grid>

      <hr />

      <Time></Time>
      <Time></Time>
      <Time></Time>
      <Time></Time>

      <a href="/orgs">orgs</a>

      <Button location=${props.location} onclick=${props.changeLocation}>
        Primary
      </Button>
    </Wrapper>
  `;
}

const formIds = ['email', 'description', 'favoriteDrink', 'somethingGood'];

export function mapStateToProps(state) {
  return {
    location: selectCurrentLocation(state),
    email: selectInputValue(state, 'f1', 'email'),
    emailError: selectInputError(state, 'f1', 'email'),
    description: selectInputValue(state, 'f1', 'description'),
    somethingGood: selectInputValue(state, 'f1', 'somethingGood'),
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

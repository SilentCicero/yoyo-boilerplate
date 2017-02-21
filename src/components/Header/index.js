import yo from 'fro-yo';
import styled from 'styled-elements';

import { t } from 'i18n';

const Wrapper = styled.h2`
  color: darkgray;
  font-family: Arial;
`;

export default function Header() {
  return yo`
    <Wrapper>
      ${t('Header.title')}
    </Wrapper>
  `;
}

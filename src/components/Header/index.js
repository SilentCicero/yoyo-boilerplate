import yo from 'fro-yo';
import styled from 'styled-elements';

import { t } from 'i18n';

const Inner = styled.h2`
  color: darkgray;
  font-family: Arial;
`;

export default function Header() {
  return yo`
    <div>
      <Inner>
        ${t('Header.title')}
      </Inner>
    </div>
  `;
}

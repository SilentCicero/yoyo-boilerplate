import yo from 'fro-yo';

import Meta from 'components/Meta';

export default function View2() {
  return yo`
    <div>
      <Meta title='View 2'></Meta>

      View 2 Orgs

      <br />

      <a href="/nicky">nicky</a>

      <hr />

      yes!

      <span> Cool! </span>
    </div>
  `;
}

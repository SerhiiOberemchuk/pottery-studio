import React from 'react';
import getDataSeets from './operation';

type Props = {};

async function GoogleSheets({}: Props) {
  const data = await getDataSeets();
  console.log(data);

  return <div>GoogleSheets</div>;
}

export default GoogleSheets;

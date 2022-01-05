import { writeFile } from 'fs/promises';

const writeDemoContent = async (filename: string, demoFilename: string) => {
  const content = `import React from 'react';
// @ts-ignore
import Com from '${demoFilename}';
// @ts-ignore
import { CssBaseline } from 'rmc-vant';

export default (props: any) => <CssBaseline><Com {...props} /></CssBaseline>
`;

  await writeFile(filename, content);
};

export default writeDemoContent;

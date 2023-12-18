import { writeFile } from 'fs/promises';

const writeDemoContent = async (filename: string, demoFilename: string) => {
  const content = `import React from 'react';
// @ts-ignore
import Com from '${demoFilename}';

export default (props: any) => <Com {...props} />
`;

  await writeFile(filename, content);
};

export default writeDemoContent;

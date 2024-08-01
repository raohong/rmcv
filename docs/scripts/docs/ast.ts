import { parseSync } from '@babel/core';
import generate from '@babel/generator';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import { getLibraryEntries } from './getLibraryEntries';
import type { IContext } from './type';

const getPresets = () => [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const createImportNode = (
  source: string,
  defaultSpecifier?: string,
  importSpecifier: string[] = [],
) => {
  const specifiers: (t.ImportSpecifier | t.ImportDefaultSpecifier)[]
    = importSpecifier.map(name =>
      t.importSpecifier(t.identifier(name), t.identifier(name)),
    );

  if (defaultSpecifier) {
    specifiers.unshift(t.importDefaultSpecifier(t.identifier(defaultSpecifier)));
  }

  return t.importDeclaration(specifiers, t.stringLiteral(source));
};

const ReactHooks = new Map(
  ['useState', 'useRef', 'useCallback', 'useMemo'].map(name => [name, true]),
);

export const parseSimpleCode = async (context: IContext, code: string) => {
  const source = `export default () => {
   ${code};
  }`;

  const ast = await parseSync(source, {
    presets: getPresets(),
    filename: 'file.tsx',
  });

  if (ast === null) {
    return null;
  }

  const reactHooksNames = new Set<string>();

  const libraryComponentNames = new Set<string>();

  traverse(ast, {
    enter(path) {
      if (path.isCallExpression() && t.isIdentifier(path.node.callee)) {
        const name = path.node.callee.name;

        if (ReactHooks.has(name)) {
          reactHooksNames.add(name);
        }
      }
    },

    JSXOpeningElement(path) {
      if (t.isJSXIdentifier(path.node.name)) {
        const elementName = path.node.name.name;

        if (/^[A-Z][a-z]+/.test(elementName)) {
          libraryComponentNames.add(elementName);
        }
      }
    },
  });

  if (libraryComponentNames.size || reactHooksNames.size) {
    const { icons, components } = await getLibraryEntries(context, [
      ...libraryComponentNames.values(),
    ]);

    traverse(ast, {
      enter(path) {
        if (!path.isExportDefaultDeclaration()) {
          return;
        }

        path.insertBefore(
          createImportNode('react', 'React', Array.from(reactHooksNames.values())),
        );

        if (components.length) {
          path.insertBefore(createImportNode('rmc-vant', undefined, components));
        }

        if (icons.length) {
          path.insertBefore(createImportNode('@rmc-vant/icons', 'Icon', icons));
        }
      },
    });
  }

  return generate(ast).code;
};

export const getPreviewCode = async (ctx: IContext, code: string) => {
  const ast = await parseSync(code, {
    presets: getPresets(),
    filename: 'file.tsx',
  });

  if (ast === null) {
    return null;
  }

  let statement: t.Expression | undefined | null;

  traverse(ast, {
    ExportDefaultDeclaration(path) {
      if (t.isArrowFunctionExpression(path.node.declaration)) {
        const decl = path.node.declaration;
        if (t.isJSXElement(decl.body)) {
          statement = decl.body;
          path.stop();
        }
        else if (t.isBlockStatement(decl.body)) {
          traverse(
            decl.body,
            {
              ReturnStatement(p) {
                statement = p.node.argument;
                path.stop();
                p.stop();
              },
            },
            path.scope,
          );
        }
      }
    },
  });

  if (statement) {
    const codeBlock = generate(statement).code;

    const result = await ctx.formatCode(codeBlock);

    return result;
  }

  return null;
};

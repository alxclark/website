import React from 'react';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import {usePost} from '../../pages/_app';

export interface Props {
  children: string;
  className: string;
  metastring?: string;
}

export const CodeBlock = (props: Props) => {
  const {children, className} = props;
  const post = usePost();
  const lineNumber = props.metastring
    ? parseInt(props.metastring, 10)
    : undefined;
  const language = className.replace(/language-/, '');

  defaultProps.theme.plain.backgroundColor = 'var(--subdued)';

  defaultProps.theme.styles = [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
      style: {color: '#6c6783'},
    },
    {types: ['namespace'], style: {opacity: 0.7}},
    {types: ['tag', 'number'], style: {color: '#e09142'}},
    {types: ['operator'], style: {color: 'white'}},
    {
      types: ['property', 'function'],
      style: {color: 'pink', fontStyle: 'italic'},
    },
    {types: ['tag-id', 'selector', 'atrule-id'], style: {color: '#eeebff'}},
    {types: ['attr-name'], style: {color: '#c4b9fe'}},
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'placeholder',
        'variable',
      ],
      style: {color: '#ffcc99'},
    },
    {types: ['keyword'], style: {color: `#${post.color}`, fontStyle: 'italic'}},
    {types: ['deleted'], style: {textDecorationLine: 'line-through'}},
    {types: ['inserted'], style: {textDecorationLine: 'underline'}},
    {types: ['italic'], style: {fontStyle: 'italic'}},
    {types: ['important', 'bold'], style: {fontWeight: 'bold'}},
    {types: ['important'], style: {color: '#c4b9fe'}},
  ];

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language as Language}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: 'var(--base) 0'}}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({line, key: i});

            if (lineNumber && lineNumber === i + 1) {
              lineProps.className += ' selected';
            }

            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

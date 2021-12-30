import React, { useContext } from 'react';
import { context } from 'dumi/theme';
import { useHistory } from 'umi';
import type { IRouteComponentProps } from '@umijs/types';
import { styled } from '../styles';

const StyledNav = styled('nav', {
  $flex: '',
  position: 'relative',
  justifyContent: 'center',
  backgroundColor: '#fff',
  height: '$demoNav',
});

const Container = styled('div', {
  minHeight: 'calc(100vh - $demoNav)',
});

const Back = styled('button', {
  position: 'absolute',
  left: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  outline: 0,
  border: 0,
  backgroundColor: 'transparent',
  color: '#969799',
  lineHeight: 1,
  fontSize: 24,
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
});

const StyledTitle = styled('h1', {
  textTransform: 'capitalize',
  fontSize: 16,
  fontWeight: 600,
});

const ArrowLeft = () => (
  <svg viewBox="0 0 1000 1000" width="1em" height="1em">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"
    ></path>
  </svg>
);

const Demo: React.FC<IRouteComponentProps> = (props) => {
  const {
    demos,
    meta: { __pathname },
  } = useContext(context);
  const history = useHistory();
  const config = demos[__pathname.replace('/~demos/', '')];

  return (
    <>
      {config && (
        <StyledNav>
          <Back onClick={() => history.goBack()}>
            <ArrowLeft />
          </Back>
          <StyledTitle>{config.previewerProps.componentName}</StyledTitle>
        </StyledNav>
      )}
      <Container>{props.children}</Container>
    </>
  );
};

export default Demo;

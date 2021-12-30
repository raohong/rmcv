import React from 'react';
import {
  MobilePreviewContainer,
  StyledIframe,
  StyledPreviewContainer,
} from './PreviewContainer';

const DemoNavContainer: React.FC<{ url: string; mobile: boolean }> = ({
  url,
  mobile,
}) => {
  return mobile ? (
    <MobilePreviewContainer>
      <StyledIframe src={url} />
    </MobilePreviewContainer>
  ) : (
    <StyledPreviewContainer>
      <StyledIframe src={url} />
    </StyledPreviewContainer>
  );
};

export default DemoNavContainer;

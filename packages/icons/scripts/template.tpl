import React from 'react';
import createIcon from '../utils/createIcon';
import type { IconComponentProps } from '../interface';

const <%= name %>SvgComponent: React.FC<IconComponentProps> = (props) => (
  <%= body %>
);

const <%= name %> = createIcon(<%= name %>SvgComponent, '<%= name %>');

export default <%= name %>;

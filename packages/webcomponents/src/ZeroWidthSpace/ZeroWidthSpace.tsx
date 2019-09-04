import Typography, {TypographyProps} from '@material-ui/core/Typography';
import { CSSProperties } from '@material-ui/styles';
import classnames from 'classnames';
import React, { FC } from 'react';
import { customCss, dataQa } from '../constants';

export type ZeroWidthSpaceProps = TypographyProps & {
  /** Data-qa tag to apply to the tooltip */
  'data-qa'?: dataQa;
  /** Custom CSS classes to pass to the tooltip */
  customclasses?: customCss;
  /** Any additional CSSProperties to pass to the component */
  style?: CSSProperties;
};

const ZeroWidthSpace: FC<ZeroWidthSpaceProps> = props => (
  <Typography
    variant={props.variant || 'caption'}
    style={props.style}
    className={classnames(props.customclasses)}
    data-qa={props['data-qa']}
  >
    &#8203;
  </Typography>
);

export default ZeroWidthSpace;
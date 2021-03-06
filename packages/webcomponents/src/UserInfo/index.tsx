import { Box, Button, ButtonProps, Typography, TypographyProps } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import { When } from 'react-if';
import css from './UserInfo.scss';

export interface UserInfoProps {
  /** The email to display as current user */
  email: string;
  /** The text to display for the relogin button */
  reloginText: ReactNode;
  /** Additional props to pass to the Typography component that renders the email */
  EmailProps?: TypographyProps;
  /** Additional props to pass to the Button component that renders the re-login button */
  ButtonProps?: ButtonProps;

  /** The action to perform when clicking the relogin button */
  onReloginClick(): void;
}

/**
 * Constructs a UserInfo section using pre-defined Rijkswaterstaat styling
 * @param param Props to pass to the UserInfo tooltip
 * @example
 * ```jsx
 * <UserInfo email='a.cool.email' reloginText='relogin' onReloginClick={() => console.log('void')} />
 * ```
 */
export const UserInfo = memo(({ email, onReloginClick, reloginText, EmailProps, ButtonProps }: UserInfoProps) => (
  <Box component='div' className={css.authInfo}>
    <Box component='div' data-qa='logged-in-email'>
      <When condition={email !== undefined}>
        <Typography {...EmailProps} color='textPrimary' variant='subtitle2' align='center'>
          {email}
        </Typography>
      </When>
    </Box>

    <Button {...ButtonProps} data-qa='re-login-link' size='small' className={css.relogin} onClick={onReloginClick}>
      <Typography color='textPrimary' variant='subtitle2' align='center'>
        {reloginText}
      </Typography>
    </Button>
  </Box>
));

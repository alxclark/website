import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  EmailIcon,
} from '../../icons';

import {Link} from '..';
import {InlineStack} from '../InlineStack';
import {BlockStack} from '../BlockStack';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <ul>
        <BlockStack spacing="loose">
          <li>
            <Link href="https://twitter.com/alxclrk" external>
              <InlineStack spacing="loose">
                <TwitterIcon />
                alxclrk
              </InlineStack>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/alxclark" external>
              <InlineStack spacing="loose">
                <GithubIcon />
                alxclark
              </InlineStack>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/alexclrk" external>
              <InlineStack spacing="loose">
                <InstagramIcon />
                alexclrk
              </InlineStack>
            </Link>
          </li>
          <li className={styles.full}>
            <InlineStack spacing="loose" alignment="apart">
              <Link href="https://linkedon.com" external>
                <LinkedInIcon />
              </Link>
              <EmailIcon />
              <EmailIcon />
            </InlineStack>
          </li>
        </BlockStack>
      </ul>
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </footer>
  );
}

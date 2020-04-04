import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
  EmailIcon,
} from '../../icons';

import {InlineStack} from '../InlineStack';
import styles from './Footer.module.css';
import {BlockStack} from '../BlockStack';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <BlockStack>
        <ul>
          <InlineStack spacing="tight" alignment="leading">
            <li>
              <a href="https://twitter.com/alxclrk">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/alxclark">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/alexclrk">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://linkedon.com">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://linkedon.com">
                <EmailIcon />
              </a>
            </li>
          </InlineStack>
        </ul>
        <InlineStack alignment="center">
          <div className={styles.copyrightIcon}>©</div>
          <p className={styles.copyright}>alex clark 2020</p>
        </InlineStack>
      </BlockStack>
    </footer>
  );
}

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
        <InlineStack spacing="tight" alignment="leading" as="ul">
          <li>
            <a href="https://twitter.com/alxclrk" aria-label="Twitter">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/alxclark" aria-label="Github">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/alexclrk" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://email.com" aria-label="Email">
              <EmailIcon />
            </a>
          </li>
        </InlineStack>

        <InlineStack alignment="leading">
          <div className={styles.copyrightIcon}>©</div>
          <div aria-hidden="true" className={styles.copyright}>
            alex clark 2020
          </div>
        </InlineStack>
      </BlockStack>
    </footer>
  );
}

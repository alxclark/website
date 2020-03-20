import {GithubIcon, TwitterIcon, InstagramIcon} from '../../icons';

import {Link} from '..';

export function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <TwitterIcon />
          <Link href="https://twitter.com/alxclrk" external>
            alxclrk
          </Link>
        </li>
        <li>
          <GithubIcon />
          <Link href="https://github.com/alxclark" external>
            alxclark
          </Link>
        </li>
        <li>
          <InstagramIcon />
          <Link href="https://instagram.com/alexclrk" external>
            alexclrk
          </Link>
        </li>
      </ul>
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </footer>
  );
}

import { clientConstant } from "./../../../config/github";

import styles from "./index.module.scss";

const Layout = ({ children,  }) => {

  return (
    <div classnames={styles.layout}>
      <span>{clientConstant}</span>
      {children}
    </div>
  )
}

export default Layout;
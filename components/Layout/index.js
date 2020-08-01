import React from "react";
import classnames from "classnames";
import Header from "./../Header"

import stylus from "./index.module.scss";

const Layout = ({ children, className }) => {

  return (
    <div className={classnames(stylus.layout, className)}>
      <Header />
      <div className={stylus.main}>{children}</div>
    </div>
  )
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from '../../images/gatsby-icon.png';
import './header.less';

const Header = ({ siteTitle }) => {
  return (
    <header className='header' >
      <div className='header-container'>
        <h3>
          <span className='logo'><img src={logo} alt="logo" /></span>
          <Link to="/" >
            {siteTitle}
          </Link>
        </h3>
        <div className='blog-links'>
          <Link to="/" >
              首页
          </Link>
          <Link to="/blog" >
              博客
          </Link>
          <Link to="/series">
              系列
          </Link>
          <Link to="/about">
              关于
          </Link>
        </div>
        </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

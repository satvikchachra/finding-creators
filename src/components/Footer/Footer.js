import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={classes.LearnMore}>To learn more about this bootcamp, visit <span>
                <a className={classes.HighlightedLink} rel='noreferrer' target="_blank" href="https://neog.camp">neog.camp</a>.</span>
            </div>

            <div className={classes.MadeWith}>
                Made with ❤️ by <span>
                    <a className={classes.HighlightedLink} rel='noreferrer' target="_blank" href="https://github.com/satvikchachra">Satvik Chachra</a>
                </span>
            </div>

            <div className={classes.ConnectWith}>
                Connect with me:
            </div>

            <div className={classes.SocialIcons}>
                <a rel='noreferrer' target="_blank" href="https://www.github.com/satvikchachra">
                    <i className="fa fa-github fa-1.5x" aria-hidden="true"></i>
                </a>
                <a rel='noreferrer' target="_blank" href="https://www.twitter.com/satvikchachra19">
                    <i className="fa fa-twitter fa-1.5x" aria-hidden="true"></i>
                </a>
                <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/satvikchachra">
                    <i className="fa fa-linkedin fa-1x" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
            </Link>
            <header>
                <h2>Denver Jensen</h2>
                <p>
                    <a href="mailto:jensendenver@gmail.com">
                        JensenDenver@gmail.com
                    </a>
                </p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>
                Hi, I&apos;m Denver. I like building things. I am a{' '}
                <a href="https://weber.edu/">Weber State University</a>{' '}
                graduate, and a software engineer for
                <a href="https://discover.com"> Discover Financial Services</a>.
            </p>
            <ul className="actions">
                <li>
                    {!window.location.pathname.includes('/resume') ? (
                        <Link to="/resume" className="button">
                            Learn More
                        </Link>
                    ) : (
                        <Link to="/about" className="button">
                            About Me
                        </Link>
                    )}
                </li>
            </ul>
        </section>

        <section id="footer">
            <ContactIcons />
            <p className="copyright">
                &copy; Denver Jensen <Link to="/">jensendenver.com</Link>.
            </p>
        </section>
    </section>
);

export default SideBar;

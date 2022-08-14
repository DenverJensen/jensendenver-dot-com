import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
    <div className="cell-container">
        <article className="mini-post">
            <header>
                <h3>
                    <a href={data.link}>{data.title}</a>
                </h3>
                <time className="published">
                    {dayjs(data.date).format('MMMM, YYYY')}
                </time>
            </header>
            <a href={data.link} className="image">
                <img
                  src={`${process.env.PUBLIC_URL}${data.image}`}
                  alt={data.title}
                />
            </a>
            <div className="description">
                <p>
                    {data.desc}
                    <br /> <br /> You can find more documentation <a href="https://github.com/DenverJensen/hangman"> here </a>
                </p>
            </div>
        </article>
    </div>
);

Cell.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        link2: PropTypes.string,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
};

export default Cell;

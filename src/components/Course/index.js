import React from 'react';
import currency from 'currency.js';
import StarRatings from 'react-star-ratings';
import classes from './Course.module.scss';

const Course = ({ title, lecturer, rating, total_student, price, img_source, isBestseller, discount}) => (
    <article className={classes.card}>
      <img src={img_source} alt={`Course ${title}`} /> 
      {/* {isBestseller && <span className="new badge red" data-badge-caption="Bestseller"></span>} */}
      <div className={classes.btnPosition}>Lập trình web</div>
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.lecturer}>{lecturer}</p>
        <div className={classes.description}>
          <div className={classes.rating}>
            <StarRatings rating={+rating}
                    starRatedColor="#FCD302"
                    name='rating' starDimension="15px" starSpacing="0"/>
          </div>
          <div className={classes.fence}></div>
          <div className={classes.students}>
            <p>{total_student}+ lượt đăng ký</p>
          </div>
        </div>
        {+discount !== 0 && <span className={classes.realPrice}>{currency(+price - (+price*(+discount)/100), { separator: ',', symbol: '', precision: 0 }).format()} VND</span> }
        <span className={+discount !== 0 && classes.salePrice}>{currency(price, { separator: ',', symbol: '', precision: 0 }).format()} VND</span>
      </div>
    </article>
);

export default Course;

import React, { Fragment } from 'react'
import classes from './styles.module.scss';


const RegisteredCourse = ({title}) => {
    return (
        <Fragment>
            <h3 className={classes.title}>{title}</h3>
            {/* <section className={classes.catList}>
                {categories.map(category => (
                    <div 
                        className={`card ${classes.categoriCard}`} 
                        onClick={() => getcourseByCategory(category.id, category.category_name)}
                        key={category.id}
                    >
                        <div className="card-content">
                            <h6 className={classes.content}>{category.category_name}</h6>
                        </div>
                    </div>
                ))}
            </section> */}
            <section className={classes.courseList}>
                <div>
                    <div className={classes.courseCard}>
                    <img src='assets/images/course/course3.jpg' alt='Course' /> 
                    <div className={classes.content}>
                        <h6 className={classes.name}>100 Days Of Code - Web Development Bootcamp [2022] Super Sale</h6>
                        <p className={classes.lettor}>Quang Hải</p>
                    </div>
                        
                    </div>
                </div>
                <div>
                    <div className={classes.courseCard}>
                    <img src='assets/images/course/course3.jpg' alt='Course' /> 
                        <h6 className={classes.content}>fdsjfkdsfkdsjf</h6>
                    </div>
                </div>
                <div>
                    <div className={classes.courseCard}>
                    <img src='assets/images/course/course3.jpg' alt='Course' /> 
                        <h6 className={classes.content}>fdsjfkdsfkdsjf</h6>
                    </div>
                </div>
                <div>
                    <div className={classes.courseCard}>
                    <img src='assets/images/course/course3.jpg' alt='Course' /> 
                        <h6 className={classes.content}>fdsjfkdsfkdsjf</h6>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default RegisteredCourse;

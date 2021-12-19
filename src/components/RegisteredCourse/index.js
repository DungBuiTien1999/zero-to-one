import React, { Fragment } from 'react'
import classes from './styles.module.scss';


const RegisteredCourse = ({courses, title}) => {
    return (
        <Fragment>
            <h3 className={classes.title}>{title}</h3>
            <section className={classes.courseList}>
                {courses.map(course => (
                    <div 
                        // onClick={() => getcourseByCategory(category.id, category.category_name)}
                        key={course.id}
                    >
                        <div className={classes.courseCard}>
                            <img src={course.img_source} alt='Course' /> 
                            <div className={classes.content}>
                                <h6 className={classes.name}>{course.title}</h6>
                                <p className={classes.lettor}>{course.lecturer}</p>
                                <Progress_bar progress={course.progress} height={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            {/* <section className={classes.courseList}>
                <div>
                    <div className={classes.courseCard}>
                        <img src='assets/images/course/course3.jpg' alt='Course' /> 
                        <div className={classes.content}>
                            <h6 className={classes.name}>100 Days Of Code - Web Development Bootcamp [2022] Super Sale</h6>
                            <p className={classes.lettor}>Quang Hải</p>
                            <Progress_bar progress='85'  height={20} />
                        </div>
                    </div>
                </div>
            </section> */}
        </Fragment>
    );
}

const Progress_bar = ({progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '90%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 5,
        border: '1px solid #000000',
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'black',
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}

export default RegisteredCourse;

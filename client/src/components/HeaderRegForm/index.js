import React from 'react';
import styles from './HeaderRegForm.module.sass'

const ArticlesRegForm= (props) => {
  
    const {headerFormContainer} = styles;
  
    return (
         <div className={headerFormContainer}>
          <h2>
            CREATE AN ACCOUNT
          </h2>
          <h4>
            We always keep your name and email address private.
          </h4>
        </div>
    )
}


export default ArticlesRegForm;

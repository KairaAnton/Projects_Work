import React from 'react';
import Logo from '../../components/Logo';
import RegistrationForm
  from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import faq from './faq.json';
import HeaderRegForm from './../../components/HeaderRegForm';

const RegistrationPage = (props) => {
  props.clearError();

  const changeRoute = () => {
    props.history.replace('/');
  };

  const faqArticles = (articles) => 
    articles.map((a, index) => 
      <div key={index}>
        <div className={styles.headerArticle}>
          {a.header}
        </div>
        <div className={styles.article}>
          {a.body}
        </div>
      </div>
    )

  return (
    <div className={ styles.signUpPage }>
      <div className={ styles.signUpContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` }/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/login'
                  style={ {textDecoration: 'none'} }><span>Login</span></Link>
          </div>
        </div>       
        <HeaderRegForm/>
        <RegistrationForm changeRoute={ changeRoute }/>
      </div>
      <div className={ styles.footer }>
        <div className={ styles.articlesMainContainer }>
          <div className={ styles.ColumnContainer }>
            {faqArticles(faq[0])}
          </div>
          <div className={ styles.ColumnContainer }>
            {faqArticles(faq[1])}
            <div className={styles.headerArticle}>
              I have other questions! How can I get in touch with Squadhelp?
            </div>
            <div className={ styles.article }>
              Check out our <span className={ styles.orangeSpan }>FAQs</span> or
              send us a <span
              className={ styles.orangeSpan }>message</span>. For assistance
              with launching a contest,
              you can also call us at {CONSTANTS.CONTACT_US.PHONE} or schedule a <span
              className={ styles.orangeSpan }>Branding Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearErrorSignUpAndLogin()),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
import buttonStyles from 'components/button/Button.module.scss';

const Buttona = () => {
   return (
      <button className={buttonStyles.glowingbtn}>
         <span className={buttonStyles.glowingtxt}>MastaDEV</span>
      </button>
   );
};

export default Buttona;

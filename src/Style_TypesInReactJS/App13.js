import './Style.css';
import style from './custom.module.css';

function App13(props) {

    return(

        <div className="m-5">
         <h2 className="primary">Style Type1 In reactJS</h2>
         <h2 style={{backgroundColor: 'dodgerblue', textAlign: 'center'}}>Style Type2 In reactJS </h2>
         <h2 className={style.success}>Style Type3 In reactJS </h2>
        </div>
    )
}

export default App13; 
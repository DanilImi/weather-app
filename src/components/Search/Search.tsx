import {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import IconsPopup from '../../ui/IconsPopup/IconsPopup';
import { debounce } from '../../utils/debounceFunc';
import styles from './Search.module.scss';

interface ISearch {
  setUnit: Dispatch<SetStateAction<string>>
  setCity: Dispatch<SetStateAction<string>>
  setBool: boolean
}

const Search: FC<ISearch> = ({ setUnit, setCity, setBool }) => {
  const navigate = useNavigate();
  const [celsius, setCelsius] = useState('℉')
  const [celsiusName, setCelsiusName] = useState('imperial')
  const handleOnChange = (searchData: ChangeEvent<HTMLInputElement>): void => {
    searchData.target.value !== '' ? setCity(searchData.target.value) : console.log('error');
  };

  const handleNavigateClick = (e: MouseEvent<HTMLButtonElement>): void => {
    setBool ? navigate('/forecast') : navigate(-1);
  };

  const handleUnitsClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const button = e.currentTarget;
    const isCelsius = button.innerText.includes('℃');
    if(isCelsius){ 
      setCelsius('℉')
      setCelsiusName('imperial')
    }else {
      setCelsius('℃')
      setCelsiusName('metric')
    };
    setUnit(isCelsius ? 'metric' : 'imperial');
  };

  const debouncedChangeHandler = useCallback(debounce(handleOnChange), []);

  return (
    <div className={styles.sectionInput}>
      <input
        type="text"
        name="city"
        placeholder="Enter City..."
        onChange={debouncedChangeHandler}
      />
      <button onClick={handleNavigateClick}>
        <IconsPopup str='cloud' name='forecast'/>
      </button>
      <button onClick={handleUnitsClick}>
        <IconsPopup str={celsius} name={celsiusName}/>
      </button>
    </div>
  );
};

export default Search;

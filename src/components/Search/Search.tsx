import {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from '../../utils/debounceFunc';
import styles from './Search.module.scss';

interface ISearch {
  setUnit: Dispatch<SetStateAction<string>>
  setCity: Dispatch<SetStateAction<string>>
  setBool: boolean
}

const Search: FC<ISearch> = ({ setUnit, setCity, setBool }) => {
  const navigate = useNavigate();
  const handleOnChange = (searchData: ChangeEvent<HTMLInputElement>): void => {
    searchData.target.value !== '' ? setCity(searchData.target.value) : console.log('error');
  };

  const handleNavigateClick = (e: MouseEvent<HTMLButtonElement>): void => {
    setBool ? navigate('/forecast') : navigate(-1);
  };

  const handleUnitsClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const button = e.currentTarget;
    const isCelsius = button.innerText === '℃';
    button.innerText = isCelsius ? '℉' : '℃';
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
      <button onClick={handleUnitsClick}>℉</button>
      <button onClick={handleNavigateClick} className="material-icons-outlined">cloud</button>
    </div>
  );
};

export default Search;

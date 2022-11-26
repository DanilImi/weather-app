import {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import IconsPopup from '../../ui/IconsPopup/IconsPopup';
import { debounce } from '../../utils/debounceFunc';
import styles from './Search.module.scss';

interface ISearch {
  setUnit: Dispatch<SetStateAction<string>>
  setCity: Dispatch<SetStateAction<string>>
  setBool: boolean
  color: boolean
}

const Search: FC<ISearch> = ({ setUnit, setCity, setBool, color }) => {

  const {t, i18n} = useTranslation()
  const navigate = useNavigate();
  const [celsius, setCelsius] = useState('℉')
  const [celsiusName, setCelsiusName] = useState(`${t('fahrenheit')}`)
  const [count, setCount] = useState(true)

  const handleLanguage = (language: string, count: boolean): void => {
    i18n.changeLanguage(language)
    count ? setCelsiusName(`${t('fahrenheit')}`) : setCelsiusName(`${t('celsius')}`)
  }

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
      setCelsiusName(`${t('fahrenheit')}`)
      setCount(true)
    }else {
      setCelsius('℃')
      setCelsiusName(`${t('celsius')}`)
      setCount(false)
    };
    setUnit(isCelsius ? 'metric' : 'imperial');
  };

  const debouncedChangeHandler = useCallback(debounce(handleOnChange), []);
  return (
    <div className={styles.sectionInput}>
      <input
        type="text"
        name="city"
        placeholder={`${t('input')}`}
        onChange={debouncedChangeHandler}
      />
      <button onClick={handleNavigateClick}>
        <IconsPopup str='cloud' name={t('forecast')} color={color}/>
      </button>
      <button onClick={handleUnitsClick}>
        <IconsPopup str={celsius} name={celsiusName} color={color}/>
      </button>
      <button onClick={() => handleLanguage('ru', count)}>RU</button>
      <button onClick={() => handleLanguage('en', count)}>EN</button>
    </div>
  );
};

export default Search;

import { ChangeEvent, Dispatch, FC, MouseEvent, SetStateAction, useMemo, useState } from "react"
import { debounce } from "../../utils/debounceFunc"
import styles from './Search.module.scss'

interface ISearch {
  setUnit: Dispatch<SetStateAction<string>>
  setCity: Dispatch<SetStateAction<string>>
}

const Search:FC<ISearch> = ({setUnit, setCity}) => {
  //const [search, setSearch] = useState('')

  const handleOnChange = (searchData: ChangeEvent<HTMLInputElement>) => {
    setCity(searchData?.target?.value)
    console.log(searchData.target.value)
  }

  const handleUnitsClick = (e: MouseEvent<HTMLButtonElement>) => {
    let button = e.currentTarget
    const isCelsius = button.innerText === '℃'
    button.innerText = isCelsius ? "℉" : "℃"
    setUnit(isCelsius ? "metric" : "imperial")
  }

	const debouncedChangeHandler = useMemo(() => debounce(handleOnChange), [])


  return (
    <div className={styles.sectionInput}>
      <input 
        type='text' 
        name='city' 
        placeholder='Enter City...'
        onChange={debouncedChangeHandler}
      />
      <button onClick={(e) => handleUnitsClick(e)}>℉</button>
    </div>
  )
}

export default Search
import Image from '../Image/Image';
import Button from '../Button/Button';

const Search = () => {
  const html = `
    <div class="search-bar">
      <div class="search-bar__input-block">
        <input type="text" class="search-bar__input" placeholder="Поиск..."/>
        <div class="search-bar__icons">
        ${Image("icon-clear", "search-bar__icon-clear")}
        ${Image("icon-search","search-bar__icon-search")}
        </div>
      </div>
      <div class="search-bar__filter">
      <div class="search-bar__left">
      <div class="search-bar__filter-name">По названию</div>
      ${Image("icon-drop_down_1","search-bar__filter-arrow")}
      </div>
      <div class="search-bar__right">
      ${Image("icon-sort-up","img")}
      </div>
      </div>
      ${Button('Добавить', 'btn_white')}
    </div>
    `
  
  return html
}

export default Search
import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRating = () => changeRating(rating.ratingId)
      const isActive = activeRatingId === rating.ratingId
      const ratingClassName = isActive ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRating}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatings = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="rating-list">{renderRatingsList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategory = () => changeCategory(category.categoryId)
      const isCatActive = activeCategoryId === category.categoryId
      const categoryClassName = isCatActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          key={category.categoryId}
          className="category-item"
          onClick={onClickCategory}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategories = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </div>
  )

  const onEnterSearchInput = event => {
    const {enterSearch} = props
    if (event.key === 'Enter') {
      enterSearch()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategories()}
      {renderRatings()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

// import {BsSearch} from 'react-icons/bs'

// import './index.css'

// const FiltersGroup = props => {
//   const renderRatingsFiltersList = () => {
//     const {ratingsList} = props

//     return ratingsList.map(rating => {
//       const {changeRating, activeRatingId} = props
//       const onClickRatingItem = () => changeRating(rating.ratingId)

//       const ratingClassName =
//         activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`

//       return (
//         <li
//           className="rating-item"
//           key={rating.ratingId}
//           onClick={onClickRatingItem}
//         >
//           <img
//             src={rating.imageUrl}
//             alt={`rating ${rating.ratingId}`}
//             className="rating-img"
//           />
//           <p className={ratingClassName}>& up</p>
//         </li>
//       )
//     })
//   }

//   const renderRatingsFilters = () => (
//     <div>
//       <h1 className="rating-heading">Rating</h1>
//       <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
//     </div>
//   )

//   const renderCategoriesList = () => {
//     const {categoryOptions} = props

//     return categoryOptions.map(category => {
//       const {changeCategory, activeCategoryId} = props
//       const onClickCategoryItem = () => changeCategory(category.categoryId)
//       const isActive = category.categoryId === activeCategoryId
//       const categoryClassName = isActive
//         ? `category-name active-category-name`
//         : `category-name`

//       return (
//         <li
//           className="category-item"
//           key={category.categoryId}
//           onClick={onClickCategoryItem}
//         >
//           <p className={categoryClassName}>{category.name}</p>
//         </li>
//       )
//     })
//   }

//   const renderProductCategories = () => (
//     <>
//       <h1 className="category-heading">Category</h1>
//       <ul className="categories-list">{renderCategoriesList()}</ul>
//     </>
//   )

//   const onEnterSearchInput = event => {
//     const {enterSearchInput} = props
//     if (event.key === 'Enter') {
//       enterSearchInput()
//     }
//   }

//   const onChangeSearchInput = event => {
//     const {changeSearchInput} = props
//     changeSearchInput(event.target.value)
//   }

//   const renderSearchInput = () => {
//     const {searchInput} = props

//     return (
//       <div className="search-input-container">
//         <input
//           value={searchInput}
//           type="search"
//           className="search-input"
//           placeholder="Search"
//           onChange={onChangeSearchInput}
//           onKeyDown={onEnterSearchInput}
//         />
//         <BsSearch className="search-icon" />
//       </div>
//     )
//   }

//   const {clearFilters} = props

//   return (
//     <div className="filters-group-container">
//       {renderSearchInput()}
//       {renderProductCategories()}
//       {renderRatingsFilters()}
//       <button
//         type="button"
//         className="clear-filters-btn"
//         onClick={clearFilters}
//       >
//         Clear Filters
//       </button>
//     </div>
//   )
// }

// export default FiltersGroup

// import {BsSearch} from 'react-icons/bs'
// import './index.css'

// const FiltersGroup = props => {
//   const renderRatingsFiltersList = () => {
//     const {ratingsList} = props

//     return ratingsList.map(each => {
//       const {changeRating, activeRatingId} = props
//       const onClickRatingItem = () => changeRating(each.ratingId)

//       const ratingClassName =
//         activeRatingId === each.ratingId ? 'and-up active-rating' : 'and-up'

//       return (
//         <li
//           className="rating-item"
//           key={each.ratingId}
//           onClick={onClickRatingItem}
//         >
//           <img
//             src={each.imageUrl}
//             alt={`rating ${each.ratingId}`}
//             className="rating-img"
//           />
//           <p className={ratingClassName}>& up</p>
//         </li>
//       )
//     })
//   }

//   const renderRatingsFilters = () => (
//     <div>
//       <h1 className="rating-heading">Rating</h1>
//       <ul className="ratings-list">{renderRatingsFiltersList}</ul>
//     </div>
//   )

//   const renderCategoriesList = () => {
//     const {categoryOptions} = props
//     return categoryOptions.map(category => {
//       const {changeCategory, activeCategoryId} = props
//       const onClickCategoryItem = () => changeCategory(category.categoryId)
//       const isActive = category.categoryId === activeCategoryId
//       const categoryClassName = isActive
//         ? 'category-name active-category-name'
//         : 'category-name'
//       return (
//         <li
//           key={category.categoryId}
//           className="category-item"
//           onClick={onClickCategoryItem}
//         >
//           <p className={categoryClassName}>{category.name}</p>
//         </li>
//       )
//     })
//   }

//   const renderProductCategories = () => (
//     <>
//       <h1 className="category-heading">Category</h1>
//       <ul className="categories-list">{renderCategoriesList()}</ul>
//     </>
//   )

//   const onEnterSearchInput = event => {
//     const {enterSearchInput} = props
//     if (event.key === 'Enter') {
//       enterSearchInput()
//     }
//   }

//   const onChangeSearchInput = event => {
//     const {changeSearchInput} = props
//     changeSearchInput(event.target.value)
//   }

//   const renderSearchInput = () => {
//     const {searchInput} = props
//     return (
//       <div className="search-input-container">
//         <input
//           value={searchInput}
//           type="search"
//           className="search-input"
//           onChange={onChangeSearchInput}
//           onKeyDown={onEnterSearchInput}
//           placeholder="Search"
//         />
//         <BsSearch className="search-icon" />
//       </div>
//     )
//   }

//   const {clearFilters} = props

//   return (
//     <div className="filters-group-container">
//       <h1>Filters Group</h1>
//       {renderSearchInput()}
//       {renderProductCategories()}
//       {renderRatingsFilters()}
//       <button
//         type="button"
//         className="clear-filters-button"
//         onClick={clearFilters}
//       >
//         Clear Filters
//       </button>
//     </div>
//   )
// }

// export default FiltersGroup

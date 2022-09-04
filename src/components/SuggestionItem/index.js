import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails} = props
  const {suggestion} = suggestionItemDetails

  return (
    <li className="suggestion-item">
      <p className="name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-img"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem

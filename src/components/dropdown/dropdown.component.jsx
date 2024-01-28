

import './dropdown.styles.scss'

const Dropdown = () => {
    return (
        <div className="dropdown-container">
            <select className='dropdown'>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    )
}

export default Dropdown;
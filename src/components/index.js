import './index.css'

const Search = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="card">
      <div className="detailsCard">
        <p>{timeAccessed}</p>
        <p>{logoUrl}</p>
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
    </li>
  )
}

export default Search

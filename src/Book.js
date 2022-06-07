export const Book = (props) => {
  const { image, title, author } = props.book
  return (
    <article className='book'>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

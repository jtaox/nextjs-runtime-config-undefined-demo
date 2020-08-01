const Post = ({ detail }) => {

  return (
    <div className={styles.post}>
      <p>{detail}</p>
    </div>
  )
}

Post.defaultProps = {
  detail: {}
}

export const getStaticProps = async ({}) => {

  return {
    props: {
      detail: "detail"
    }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}


export default Post;
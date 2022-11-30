interface postPors {
  title: string;
  author: string;
  content: string;
}

export function Post(props: postPors) {
  return (
    <>
      <h1>{props.title}</h1>
      <strong>author: {props.author} </strong>
      <p>{props.content}</p>
    </>
  );
}

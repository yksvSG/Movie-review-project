import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  // 2. handleDeleteClick 실행되면서, onDelete 함수를 해당 item(영화)의 id값으로 실행
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        {/* 1.사용자가 삭제 버튼을 클릭할 경우, handleDeleteClick 함수 실행 */}
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

// 3. onDelete함수는 ReviewList 컴포넌트의 onDelete Prop이다.
function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;

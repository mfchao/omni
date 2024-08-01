import { format } from "date-fns";

function StickyNote({ date, from, content, timeAgo, isDrawing }) {
  const formatDate = (date) => {
    const today = new Date();
    const noteDate = new Date(date);

    if (
      today.getDate() === noteDate.getDate() &&
      today.getMonth() === noteDate.getMonth() &&
      today.getFullYear() === noteDate.getFullYear()
    ) {
      return "Today";
    }
    return format(noteDate, "eee, MMMM d");
  };

  return (
    <div className="sticky-note">
      <h2>{formatDate(date)}</h2>
      <p className="memo-info">
        From <strong>{from}</strong> | {timeAgo ? timeAgo : '1 hour ago'}
      </p>
      {isDrawing ? (
        <img
          src={content}
          alt="drawing"
          style={{ width: "200%", height: "100%" }}
        />
      ) : (
        <p className="memo-text">{content}</p>
      )}
    </div>
  );
}

export default StickyNote;

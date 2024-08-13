import style from "./Avatar.module.css";

export function Avatar(props) {
  const hasBorder = props.hasBorder !== false;
  return (
    <div>
      <img
        className={hasBorder ? style.avatar : style.avatarNotBorder}
        src={props.src}
        alt=""
      />
    </div>
  );
}

import classes from "./image-picker.module.css";

export default ImagePicker = ({ label, name }) => {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
        />
      </div>
    </div>
  );
};
